import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import logoFloaBlack from '../../assets/logo-floa-black.png'

const companyName = 'FLOA'
const legalName = 'FLOA Maquinaria y Construcción S.A. de C.V.'
const phone = '+52 81 1234 5678'
const phoneLink = 'tel:+528112345678'
const email = 'contacto@floa.mx'
const emailLink = 'mailto:contacto@floa.mx'
const street = 'Av. Pablo Livas 4200, Col. Fomerrey 9'
const city = 'Monterrey, N.L., México'
const schedule = 'Lunes a Sábado · 8:00 a.m. – 6:00 p.m.'
const social = {
  facebook: 'https://facebook.com/floamaquinaria',
  instagram: 'https://instagram.com/floamaquinaria',
  linkedin: 'https://linkedin.com/company/floamaquinaria',
}

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Flotilla', href: '#flotilla' },
  { label: 'Contacto', href: '#contacto' },
]

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  )
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  )
}

const socialLinks = [
  { Icon: FacebookIcon, href: social.facebook, label: 'Facebook de FLOA' },
  { Icon: InstagramIcon, href: social.instagram, label: 'Instagram de FLOA' },
  { Icon: LinkedinIcon, href: social.linkedin, label: 'LinkedIn de FLOA' },
]

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-brand-blue-dark text-blue-100/80" aria-label="Pie de página">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 right-10 -z-10 h-72 w-72 rounded-full bg-brand-orange/10 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-96 w-96 animate-spin-slow rounded-full border border-white/5" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logoFloaBlack}
              alt={`Logo de ${companyName}`}
              className="mb-4 h-10 w-auto object-contain"
            />
            <p className="mb-4 text-sm leading-relaxed">
              Renta de maquinaria pesada y de construcción con más de 15 años
              impulsando obras en el noreste de México.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-orange-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={phoneLink}
                  className="flex items-start gap-2.5 transition-colors hover:text-brand-orange-light"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-300/80" aria-hidden="true" />
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={emailLink}
                  className="flex items-start gap-2.5 transition-colors hover:text-brand-orange-light"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-300/80" aria-hidden="true" />
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300/80" aria-hidden="true" />
                <span>
                  {street}
                  <br />
                  {city}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-300/80" aria-hidden="true" />
                <span>{schedule}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Nuestros servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>Renta de maquinaria pesada</li>
              <li>Movimiento de tierras</li>
              <li>Transporte de equipo</li>
              <li>Operadores certificados</li>
              <li>Proyectos llave en mano</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-blue-100/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {legalName}. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Hecho con orgullo en Monterrey, N.L., México
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
