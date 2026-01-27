import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollableHeight = documentHeight - windowHeight
      const scrolled = window.scrollY
      
      if (scrollableHeight > 0) {
        setProgress((scrolled / scrollableHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Inicializar

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transition-all duration-150 ease-out shadow-lg"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)'
        }}
      />
    </div>
  )
}
