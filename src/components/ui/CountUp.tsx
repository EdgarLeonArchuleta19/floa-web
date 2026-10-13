import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView.ts'

function parseValue(value) {
  const match = value.match(/^([0-9.]+)(.*)$/)
  if (!match) return { target: 0, suffix: value }
  return { target: Number(match[1]), suffix: match[2] }
}

export function CountUp({ value, duration = 1600, className = '' }) {
  const { ref, isVisible } = useInView(0.4)
  const { target, suffix } = parseValue(value)
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion ? target : 0,
  )

  useEffect(() => {
    if (!isVisible) return undefined

    if (prefersReducedMotion) return undefined

    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, target, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
