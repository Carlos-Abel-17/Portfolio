import { useEffect, useRef } from 'react'

interface Particle {
  ox: number
  oy: number
  x: number
  y: number
  vx: number
  vy: number
}

const MOUSE_RADIUS = 220
const REPEL_STRENGTH = 1.1
const SPRING = 0.04
const FRICTION = 0.76
const PARTICLE_SIZE = 3
const SAMPLE_STEP = 4

interface CAFragmentBannerProps {
  className?: string
}

export function CAFragmentBanner({ className = '' }: CAFragmentBannerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles(rect.width, rect.height)
    }

    function initParticles(w: number, h: number) {
      const off = document.createElement('canvas')
      const scale = Math.min(w / 900, h / 220, 1.8)
      off.width = 900 * scale
      off.height = 220 * scale
      const octx = off.getContext('2d')
      if (!octx) return

      octx.fillStyle = 'black'
      octx.font = `bold ${72 * scale}px "SF Mono", "Fira Code", "Consolas", monospace`
      octx.textAlign = 'center'
      octx.textBaseline = 'middle'
      octx.fillText('<Abel Aguado/>', off.width / 2, off.height / 2)

      const id = octx.getImageData(0, 0, off.width, off.height)
      const particles: Particle[] = []
      const cx = w / 2
      const cy = h / 2
      const offsetX = cx - off.width / 2
      const offsetY = cy - off.height / 2

      for (let py = 0; py < off.height; py += SAMPLE_STEP) {
        for (let px = 0; px < off.width; px += SAMPLE_STEP) {
          const i = (py * off.width + px) * 4
          if (id.data[i + 3] > 128) {
            const ox = offsetX + px
            const oy = offsetY + py
            particles.push({
              ox,
              oy,
              x: ox,
              y: oy,
              vx: 0,
              vy: 0,
            })
          }
        }
      }
      particlesRef.current = particles
    }

    const handleMouseMove = (e: MouseEvent) => {
      const cont = containerRef.current
      if (!cont) return
      const rect = cont.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const animate = () => {
      const cont = containerRef.current
      if (!cont) return
      const w = cont.getBoundingClientRect().width
      const h = cont.getBoundingClientRect().height
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach((p) => {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          const ax = (dx / dist) * force * REPEL_STRENGTH
          const ay = (dy / dist) * force * REPEL_STRENGTH
          p.vx += ax
          p.vy += ay
        }

        p.vx += (p.ox - p.x) * SPRING
        p.vy += (p.oy - p.y) * SPRING
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.x += p.vx
        p.y += p.vy

        ctx.fillStyle = '#0a0a0a'
        ctx.fillRect(p.x - PARTICLE_SIZE / 2, p.y - PARTICLE_SIZE / 2, PARTICLE_SIZE, PARTICLE_SIZE)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className={`section-hidden-bg relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden ${className ?? ''}`.trim()}
      aria-label="Abel Aguado"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-auto"
        style={{ cursor: 'default' }}
      />
    </section>
  )
}
