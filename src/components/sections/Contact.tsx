import { ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react'
import { Reveal } from '../ui/Reveal.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'
import { company } from '../../data/company.ts'

const details = [
  { label: 'Teléfono', value: company.phone, href: company.phoneLink },
  { label: 'Correo', value: company.email, href: company.emailLink },
  { label: 'Ubicación', lines: [company.street, company.city] },
  { label: 'Horario', lines: [company.schedule, company.support] },
]

export function Contact() {
  return (
    <section id="contacto" className="bg-brand-blue text-white">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-18 lg:py-28">
        <div>
          <Eyebrow dark>Contacto y cotización</Eyebrow>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2rem] leading-[1.12] font-bold tracking-[-0.01em] sm:text-5xl">
              Cotiza y contáctanos en un solo lugar
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-steel-300">
              Cuéntanos tu proyecto por la vía que prefieras y te regresamos
              disponibilidad y precio el mismo día hábil. Respuesta en menos de
              24 horas, sin compromiso.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.phoneLink}
              className="btn-fill group inline-flex h-14 items-center justify-center gap-3 rounded-[2px] bg-brand-orange px-7 font-semibold text-brand-navy [--btn-fill:#ffffff]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llamar ahora
            </a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex h-14 items-center justify-center gap-3 rounded-[2px] border border-white px-7 font-semibold text-white transition-colors duration-300 [--btn-fill:#ffffff] hover:text-brand-blue"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal direction="right" delay={120} className="bg-white text-ink">
          <dl className="grid gap-px bg-steel-200 sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label} className="bg-white p-6 sm:p-7">
                <dt className="text-[13px] text-steel-500">{item.label}</dt>
                <dd className="mt-1.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-lg font-semibold break-all text-brand-blue transition-colors hover:text-brand-orange-dark"
                    >
                      {item.value}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    item.lines.map((line) => (
                      <span key={line} className="block text-[15px] leading-relaxed">
                        {line}
                      </span>
                    ))
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <iframe
            title="Mapa de la ubicación de FLOA"
            src={company.mapEmbed}
            className="block h-56 w-full border-0 grayscale-[35%] sm:h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-t border-steel-200 px-6 py-4 text-sm font-semibold text-brand-blue transition-colors hover:bg-steel-50 sm:px-7"
          >
            <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            Abrir en Google Maps
          </a>
        </Reveal>
      </div>
    </section>
  )
}
