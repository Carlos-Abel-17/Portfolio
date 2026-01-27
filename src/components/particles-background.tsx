import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  opacity: number
}

interface ParticlesBackgroundProps {
  particleCount?: number
  className?: string
}

export function ParticlesBackground({ 
  particleCount = 50,
  className = ''
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const canvasRectRef = useRef<DOMRect | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      canvasRectRef.current = rect
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Detectar posición del mouse sobre el contenedor
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRectRef.current) {
        mouseRef.current = {
          x: e.clientX - canvasRectRef.current.left,
          y: e.clientY - canvasRectRef.current.top
        }
      }
    }

    // Cuando el mouse sale del contenedor, resetear posición
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    // Usar el canvas para detectar el mouse, pero también el contenedor para mayor área
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Dibujar conexiones entre partículas cercanas
    const drawConnections = (particles: Particle[]) => {
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animar partículas
    const animate = () => {
      // Limpiar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const mouseRadius = 100 // Radio de influencia del mouse

      // Verificar que hay partículas
      if (particles.length === 0) {
        console.warn('No hay partículas para animar')
        return
      }

      particles.forEach((particle) => {
        // Calcular distancia al mouse
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Si el mouse está cerca, repeler la partícula
        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius
          const angle = Math.atan2(dy, dx)
          
          // Aplicar fuerza de repulsión
          particle.vx -= Math.cos(angle) * force * 0.1
          particle.vy -= Math.sin(angle) * force * 0.1
          
          // Aumentar opacidad cuando está cerca del mouse
          particle.opacity = Math.min(1, particle.opacity + force * 0.1)
        } else {
          // Reducir opacidad gradualmente
          particle.opacity = Math.max(0.4, particle.opacity * 0.98)
        }

        // Limitar velocidad máxima
        const maxSpeed = 2
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed
          particle.vy = (particle.vy / speed) * maxSpeed
        }

        // Aplicar fricción suave
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Actualizar posición
        particle.x += particle.vx
        particle.y += particle.vy

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
        }

        // Mantener dentro del canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Dibujar partícula con opacidad dinámica
        ctx.save()
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        
        // Usar opacidad más alta para mejor visibilidad
        const finalOpacity = Math.min(1, particle.opacity)
        
        // Extraer el color base y aplicar opacidad
        const colorMatch = particle.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
        if (colorMatch) {
          const r = colorMatch[1]
          const g = colorMatch[2]
          const b = colorMatch[3]
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`
        } else {
          ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${finalOpacity})`)
        }
        
        ctx.fill()

        // Efecto de resplandor más intenso cuando está cerca del mouse
        ctx.shadowBlur = 8 * finalOpacity
        ctx.shadowColor = `rgba(255, 255, 255, ${finalOpacity * 0.5})`
        ctx.fill()
        ctx.restore()
      })

      // Dibujar conexiones
      drawConnections(particles)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Crear partículas
    const createParticles = () => {
      const particles: Particle[] = []
      const colors = [
        'rgba(255, 255, 255, 1)', // blanco sólido
        'rgba(220, 220, 220, 0.9)', // gris claro
        'rgba(180, 180, 180, 0.8)', // gris medio
        'rgba(255, 255, 255, 1)', // blanco sólido
      ]

      // Asegurar que el canvas tenga dimensiones válidas
      resizeCanvas()
      
      if (canvas.width > 0 && canvas.height > 0) {
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 2, // Tamaño más grande
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.3 + 0.7 // Opacidad más alta
          })
        }
        particlesRef.current = particles
        console.log(`Partículas creadas: ${particles.length}, Canvas: ${canvas.width}x${canvas.height}`)
      } else {
        console.warn('Canvas no tiene dimensiones válidas:', canvas.width, canvas.height)
      }
    }

    // Crear partículas y iniciar animación
    const initialize = () => {
      resizeCanvas()
      createParticles()
      
      // Iniciar animación solo si hay partículas creadas
      if (particlesRef.current.length > 0 && !animationFrameRef.current) {
        console.log('Iniciando animación de partículas')
        animate()
      } else {
        console.warn('No se pudo iniciar animación. Partículas:', particlesRef.current.length)
      }
    }

    // Inicializar después de un pequeño delay para asegurar que el canvas tenga tamaño
    let initTimeout: ReturnType<typeof setTimeout> | undefined
    
    // Usar requestAnimationFrame para asegurar que el DOM esté listo
    requestAnimationFrame(() => {
      if (container.offsetWidth > 0 && container.offsetHeight > 0) {
        initialize()
      } else {
        // Intentar varias veces si no tiene tamaño aún
        let attempts = 0
        const tryInit = () => {
          attempts++
          resizeCanvas()
          if (container.offsetWidth > 0 && container.offsetHeight > 0) {
            initialize()
          } else if (attempts < 10) {
            initTimeout = setTimeout(tryInit, 100)
          } else {
            console.error('No se pudo inicializar partículas después de múltiples intentos')
          }
        }
        initTimeout = setTimeout(tryInit, 100)
      }
    })

    return () => {
      if (initTimeout) {
        clearTimeout(initTimeout)
      }
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [particleCount])

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ 
        zIndex: 1,
        pointerEvents: 'none',
        minHeight: '100%'
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          display: 'block',
          pointerEvents: 'auto',
          cursor: 'default',
          width: '100%',
          height: '100%'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.cursor = 'none'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.cursor = 'default'
        }}
      />
    </div>
  )
}
