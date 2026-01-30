import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  // Ocultar cursor nativo solo cuando nuestro cursor </> está visible
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('custom-cursor-active')
    } else {
      document.body.classList.remove('custom-cursor-active')
    }
    return () => document.body.classList.remove('custom-cursor-active')
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="custom-cursor-pointer"
      style={{
        left: position.x,
        top: position.y,
      }}
      aria-hidden
    >
      <span className="text-primary font-mono font-bold text-lg select-none">
        &lt;/&gt;
      </span>
    </div>
  )
}
