import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Volver arriba"
      className={`group fixed right-5 bottom-5 z-40 flex h-12 w-12 items-center justify-center rounded-[2px] bg-brand-blue text-white shadow-[0_10px_24px_-10px_rgba(10,34,54,0.6)] transition-all duration-300 hover:bg-brand-orange hover:text-brand-navy sm:right-8 sm:bottom-8 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  )
}
