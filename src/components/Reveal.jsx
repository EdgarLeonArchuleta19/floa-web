import { useInView } from '../hooks/useInView'

const directionClasses = {
  up: 'reveal',
  left: 'reveal reveal-left',
  right: 'reveal reveal-right',
  zoom: 'reveal reveal-zoom',
}

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  direction = 'up',
  ...props
}) {
  const { ref, isVisible } = useInView()
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined
  const base = directionClasses[direction] ?? directionClasses.up

  return (
    <Tag
      ref={ref}
      className={`${base} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}