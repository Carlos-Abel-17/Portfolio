import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          entry.target.classList.remove('animate-out')
        }
      })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-fade, .scroll-slide-left, .scroll-slide-right, .scroll-scale, .scroll-rotate-in, .scroll-blur-in, .scroll-zoom-in, .scroll-bounce, .scroll-slide-up, .scroll-slide-down'
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    // Observar dinámicamente nuevos elementos
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        '.scroll-animate:not(.animate-in), .scroll-fade:not(.animate-in), .scroll-slide-left:not(.animate-in), .scroll-slide-right:not(.animate-in), .scroll-scale:not(.animate-in), .scroll-rotate-in:not(.animate-in), .scroll-blur-in:not(.animate-in), .scroll-zoom-in:not(.animate-in), .scroll-bounce:not(.animate-in), .scroll-slide-up:not(.animate-in), .scroll-slide-down:not(.animate-in)'
      )
      newElements.forEach((element) => {
        observer.observe(element)
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}
