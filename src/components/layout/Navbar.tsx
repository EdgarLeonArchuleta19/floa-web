import { useEffect, useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import logoFloa from '../../assets/logo-floa.png'
import { company, navLinks } from '../../data/company.ts'

function UtilityBar() {
  return (
    <div className="bg-brand-navy text-[13px] text-steel-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <span className="flex min-w-0 items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-orange" aria-hidden="true" />
          <span className="truncate">Av. Pablo Livas 4200, Monterrey, N.L.</span>
        </span>
        <span className="hidden items-center gap-7 sm:flex">
          <span className="hidden lg:inline">{company.schedule}</span>
          <a
            href={company.emailLink}
            className="flex items-center gap-2 text-white transition-colors hover:text-brand-orange"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {company.email}
          </a>
        </span>
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta en el menú la sección que está en pantalla
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <UtilityBar />
      <header
        className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
          scrolled ? 'border-transparent shadow-[0_6px_24px_-12px_rgba(10,34,54,0.35)]' : 'border-steel-200'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-[height] duration-300 sm:px-8 ${
            scrolled ? 'h-16 lg:h-[72px]' : 'h-[72px] lg:h-[84px]'
          }`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" className="flex shrink-0 items-center" aria-label={`${company.name} - Inicio`}>
            <img
              src={logoFloa}
              alt={`${company.name} Machinery & Equipment Rental`}
              className={`w-auto transition-[height] duration-300 ${scrolled ? 'h-9' : 'h-10 lg:h-11'}`}
            />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={`nav-link text-[15px] font-medium transition-colors hover:text-brand-blue ${
                    active === link.href ? 'text-brand-blue' : 'text-steel-700'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-6">
            <a href={company.phoneLink} className="hidden flex-col leading-tight md:flex">
              <span className="text-xs text-steel-500">Llámanos</span>
              <span className="font-semibold text-brand-blue transition-colors hover:text-brand-orange-dark">
                {company.phone}
              </span>
            </a>
            <a
              href="#contacto"
              className="btn-fill hidden h-12 items-center rounded-[2px] bg-brand-orange px-5 text-[15px] font-semibold text-brand-navy [--btn-fill:var(--color-brand-navy)] transition-colors duration-300 hover:text-white sm:inline-flex"
            >
              Solicitar cotización
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-[2px] text-brand-blue transition-colors hover:bg-steel-50 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full overflow-hidden bg-white transition-[max-height,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            open ? 'max-h-[calc(100svh-4rem)] shadow-xl' : 'max-h-0'
          }`}
          aria-hidden={!open}
          inert={!open}
        >
          <ul className="border-t border-steel-200 px-5 py-4 sm:px-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: open ? `${80 + index * 60}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={close}
                  className="flex items-center justify-between border-b border-steel-200 py-4 text-lg font-semibold text-brand-blue"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-brand-orange">→</span>
                </a>
              </li>
            ))}
            <li
              className={`grid gap-3 pt-5 transition-all duration-500 sm:grid-cols-2 ${open ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: open ? '340ms' : '0ms' }}
            >
              <a
                href="#contacto"
                onClick={close}
                className="flex h-12 items-center justify-center rounded-[2px] bg-brand-orange font-semibold text-brand-navy"
              >
                Solicitar cotización
              </a>
              <a
                href={company.phoneLink}
                className="flex h-12 items-center justify-center gap-2 rounded-[2px] border border-brand-blue font-semibold text-brand-blue"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
