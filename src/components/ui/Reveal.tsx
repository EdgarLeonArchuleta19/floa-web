import { useInView } from '../../hooks/useInView.ts'

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
  const classes = [base, isVisible && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} style={style} {...props}>
      {children}
    </Tag>
  )
}
