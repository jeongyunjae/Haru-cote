import { useEffect, useRef } from 'react'

export function useCard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const overlay = overlayRef.current

    const handleMouseMove = (e: MouseEvent) => {
      if (container && overlay) {
        const x = e.offsetX
        const y = e.offsetY
        const rotateY = (-1 / 5) * x + 20
        const rotateX = (4 / 30) * y - 20

        overlay.style.backgroundPosition = `${x / 5 + y / 5}%`
        overlay.style.filter = `opacity(${x / 200}) brightness(1.2)`

        container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }

    const handleMouseOut = () => {
      if (overlay && container) {
        overlay.style.filter = 'opacity(0)'
        container.style.transform =
          'perspective(350px) rotateY(0deg) rotateX(0deg)'
      }
    }

    if (container && overlay) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseout', handleMouseOut)
    }

    return () => {
      if (container && overlay) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return {
    containerRef,
    overlayRef,
  }
}
