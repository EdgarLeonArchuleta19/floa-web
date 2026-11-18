import logoFloaWhite from '../../assets/logo-floa-black.png'
import { company, navLinks } from '../../data/company.ts'

const services = [
  'Renta de maquinaria pesada',
  'Movimiento de tierras',
  'Transporte de equipo',
  'Operadores certificados',
  'Proyectos llave en mano',
]

const socialLinks = [
  { label: 'LinkedIn', href: company.social.linkedin },
  { label: 'Facebook', href: company.social.facebook },
  { label: 'Instagram', href: company.social.instagram },
]

const heading = 'mb-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white'
const link = 'transition-colors hover:text-brand-orange'

export function Footer() {
  return (
    <footer className="bg-brand-navy text-steel-300" aria-label="Pie de página">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="grid gap-10 text-[15px] leading-[1.9] sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* logo-floa-black.png es la versión en blanco para fondos oscuros */}
            <img src={logoFloaWhite} alt={`Logo de ${company.name}`} className="h-11 w-auto" loading="lazy" />
            <p className="mt-4 max-w-xs leading-relaxed">
              Renta de maquinaria pesada y de construcción con más de 15 años
              impulsando obras en el noreste de México.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h3 className={heading}>Navegación</h3>
            <ul>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={heading}>Servicios</h3>
            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Contacto</h3>
            <ul>
              <li>
                <a href={company.phoneLink} className={link}>
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailLink} className={link}>
                  {company.email}
                </a>
              </li>
              <li>{company.city}</li>
            </ul>
            <ul className="mt-3 flex flex-wrap gap-x-5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white transition-colors hover:text-brand-orange"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-line py-6 text-[13px] text-[#9fb0bf] sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p>Hecho con orgullo en Monterrey, N.L., México</p>
        </div>
      </div>
    </footer>
  )
}
