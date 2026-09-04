import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { company, navLinks } from '../data/content'

function Logo({ scrolled = false }) {
  const title = `${company.name} - Inicio`
  const base = import.meta.env.BASE_URL
  return (
    <span className="relative inline-block h-8 w-auto sm:h-10">
      <img
        src={`${base}logo-floa.png`}
        alt={title}
        aria-hidden={!scrolled}
        className={`h-8 w-auto object-contain transition-opacity duration-300 sm:h-10 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <img
        src={`${base}logo-floa-black.png`}
        alt={title}
        aria-hidden={scrolled}
        className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-300 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </span>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onSolid = scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onSolid
          ? 'bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur'
          : 'bg-gradient-to-b from-black/50 via-black/25 to-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={`${company.name} - Inicio`}>
          <Logo scrolled={onSolid} />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-sm font-medium transition-colors ${
                  onSolid ? 'text-slate-700 hover:text-brand-blue' : 'text-white hover:text-white/80'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    onSolid ? 'bg-brand-orange' : 'bg-brand-orange-light'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={company.phoneLink}
            className="group btn-shine inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-brand-blue to-brand-blue-light px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/30"
          >
            <Phone className="h-4 w-4 text-orange-300 transition-colors group-hover:text-brand-orange" aria-hidden="true" />
            {company.phone}
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-md backdrop-blur transition-colors md:hidden ${
            onSolid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/15'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-white/97 backdrop-blur sm:top-20 md:hidden"
        >
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue"
            aria-hidden="true"
          />
          <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6 sm:py-6">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="animate-fade-left"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-4 text-base font-medium text-slate-800 transition-colors hover:bg-slate-50 hover:text-brand-blue sm:text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 animate-fade-left px-4" style={{ animationDelay: '360ms' }}>
              <a
                href={company.phoneLink}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-4 text-base font-semibold text-white shadow-lg shadow-brand-orange/30"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Logo