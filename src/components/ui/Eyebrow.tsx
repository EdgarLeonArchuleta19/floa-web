import { useInView } from '../../hooks/useInView.ts'

/** Etiqueta de sección: barra naranja que crece + texto en mayúsculas. */
export function Eyebrow({ children, dark = false, className = '' }) {
  const { ref, isVisible } = useInView(0.6)

  return (
    <p
      ref={ref}
      className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] ${
        dark ? 'text-steel-300' : 'text-steel-500'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`eyebrow-bar h-[3px] w-8 shrink-0 bg-brand-orange ${isVisible ? 'is-visible' : ''}`}
      />
      {children}
    </p>
  )
}
