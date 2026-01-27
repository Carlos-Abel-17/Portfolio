import { useEffect, useState } from 'react'

export function useScrollEffects() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let ticking = false
    let scrollTimeout: ReturnType<typeof setTimeout> | undefined

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const scrollableHeight = documentHeight - windowHeight
          
          setScrollY(currentScrollY)
          setScrollProgress(scrollableHeight > 0 ? currentScrollY / scrollableHeight : 0)
          setIsScrolling(true)

          // Aplicar efectos parallax
          applyParallaxEffects(currentScrollY)
          
          // Aplicar efectos de transformación basados en scroll
          applyScrollTransforms(currentScrollY)

          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false)
          }, 150)

          ticking = false
        })
        ticking = true
      }
    }

    const applyParallaxEffects = (scrollY: number) => {
      // Parallax para elementos con clase parallax-slow
      const slowElements = document.querySelectorAll('.parallax-slow')
      slowElements.forEach((el) => {
        const element = el as HTMLElement
        const speed = 0.3
        const yPos = -(scrollY * speed)
        element.style.transform = `translateY(${yPos}px)`
      })

      // Parallax para elementos con clase parallax-fast
      const fastElements = document.querySelectorAll('.parallax-fast')
      fastElements.forEach((el) => {
        const element = el as HTMLElement
        const speed = 0.6
        const yPos = -(scrollY * speed)
        element.style.transform = `translateY(${yPos}px)`
      })

      // Parallax para elementos con clase parallax-reverse
      const reverseElements = document.querySelectorAll('.parallax-reverse')
      reverseElements.forEach((el) => {
        const element = el as HTMLElement
        const speed = 0.4
        const yPos = scrollY * speed
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    const applyScrollTransforms = (scrollY: number) => {
      // Efecto de rotación basado en scroll
      const rotateElements = document.querySelectorAll('.scroll-rotate')
      rotateElements.forEach((el) => {
        const element = el as HTMLElement
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrollY
        const windowHeight = window.innerHeight
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - elementTop + windowHeight) / windowHeight))
        const rotation = scrollProgress * 360
        element.style.transform = `rotate(${rotation}deg)`
      })

      // Efecto de escala basado en scroll
      const scaleElements = document.querySelectorAll('.scroll-scale-dynamic')
      scaleElements.forEach((el) => {
        const element = el as HTMLElement
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrollY
        const windowHeight = window.innerHeight
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - elementTop + windowHeight) / windowHeight))
        const scale = 0.8 + (scrollProgress * 0.2)
        element.style.transform = `scale(${scale})`
        element.style.opacity = String(scrollProgress)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Llamar una vez para inicializar

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return { scrollY, scrollProgress, isScrolling }
}
