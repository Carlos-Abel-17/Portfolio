import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-fade, .scroll-slide-left, .scroll-slide-right, .scroll-scale'
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])
}
