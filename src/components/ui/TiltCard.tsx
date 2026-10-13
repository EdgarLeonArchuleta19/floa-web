import { useRef } from 'react'

export function TiltCard({
  children,
  className = '',
  maxTilt = 7,
  glowColor = 'rgba(244, 118, 13, 0.16)',
  ...props
}) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  const handleMove = (event) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    const rx = (0.5 - py) * maxTilt
    const ry = (px - 0.5) * maxTilt

    card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`

    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(560px circle at ${x}px ${y}px, ${glowColor}, transparent 42%)`
      glowRef.current.style.opacity = '1'
    }
  }

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
