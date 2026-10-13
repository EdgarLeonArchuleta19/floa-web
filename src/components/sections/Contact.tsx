import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { HexNut } from '../ui/HexNut.tsx'
import { Reveal } from '../ui/Reveal.tsx'

const phone = '+52 81 1234 5678'
const phoneLink = 'tel:+528112345678'
const whatsapp = 'https://wa.me/528112345678'
const email = 'contacto@floa.mx'
const emailLink = 'mailto:contacto@floa.mx'
const street = 'Av. Pablo Livas 4200, Col. Fomerrey 9'
const city = 'Monterrey, N.L., México'
const schedule = 'Lunes a Sábado · 8:00 a.m. – 6:00 p.m.'
const hours = 'Soporte 24/7 para proyectos activos'
const mapsEmbed =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8937354674186!2d-100.28778152462538!3d25.671373377406982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfc2d8f1c3bb%3A0x1b3b0f4e5a2c1d2b!2sAv.%20Pablo%20Livas%204200%2C%20Monterrey%2C%20N.L.!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx'
const mapsLink = 'https://maps.google.com/?q=Av.+Pablo+Livas+4200,+Monterrey,+N.L.'

const contactCards = [
  {
    icon: Phone,
    title: 'Teléfono',
    lines: [phone],
    href: phoneLink,
    hint: 'Llamar ahora',
  },
  {
    icon: Mail,
    title: 'Correo',
    lines: [email],
    href: emailLink,
    hint: 'Escribir correo',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    lines: [street, city],
    href: mapsLink,
    hint: 'Abrir en Google Maps',
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: [schedule, hours],
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative isolate overflow-hidden bg-white py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark mask-fade-x" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full bg-brand-orange/10 blur-[110px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600 shadow-sm">
              Contacto y cotización
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cotiza y contáctanos en un solo lugar
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-slate-600">
              Respuesta en menos de 24 horas, sin compromiso y sin formularios.
              Elige la vía que prefieras.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1 xl:grid-cols-2">
            {contactCards.map((card, index) => (
              <Reveal
                key={card.title}
                direction="left"
                delay={index * 70}
                className="h-full"
              >
                <div
                  className={`group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 ${
                    card.href
                      ? 'hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg hover:shadow-brand-orange/10'
                      : ''
                  }`}
                >
                  <span className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-blue-light text-orange-300 shadow-md shadow-brand-blue/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <card.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-1 font-bold text-slate-900">{card.title}</h3>
                  {card.lines.map((line) =>
                    card.href ? (
                      <a
                        key={line}
                        href={card.href}
                        target={card.href.startsWith('http') ? '_blank' : undefined}
                        rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-slate-600 transition-colors hover:text-brand-orange"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-slate-600">
                        {line}
                      </p>
                    ),
                  )}
                  {card.hint && (
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold uppercase tracking-wide text-brand-orange/80 transition-all duration-300 group-hover:gap-2.5 group-hover:text-brand-orange">
                      {card.hint}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand-blue/20 bg-brand-blue-dark p-6 shadow-xl shadow-brand-blue/15 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-80" aria-hidden="true" />
              <HexNut
                className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 animate-spin-slow text-brand-orange/10 [animation-delay:-6s] sm:h-52 sm:w-52"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-pulse-soft rounded-full bg-brand-orange/15 blur-[90px]"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 animate-pulse-soft rounded-full bg-brand-blue-light/25 blur-[90px] [animation-delay:-1.75s]" aria-hidden="true" />

              <div className="relative">
                <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-orange-light">
                  <HexNut className="h-3.5 w-3.5 animate-spin-slow" aria-hidden="true" />
                  Cotiza directo
                </p>
                <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Respuesta en menos de 24 h
                </h3>
                <p className="mb-8 max-w-xl text-blue-100/75">
                  Cuéntanos tu proyecto por la vía que prefieras y te regresamos
                  disponibilidad y precio el mismo día hábil.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={phoneLink}
                    className="group btn-shine inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-light px-5 py-4 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:shadow-brand-orange/40"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Llamar ahora
                  </a>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group btn-shine inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-500"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href={emailLink}
                    className="group btn-shine inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/10 sm:col-span-2"
                  >
                    <Mail className="h-5 w-5 text-brand-orange-light" aria-hidden="true" />
                    {email}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-blue-100/60">
                  <Clock className="h-4 w-4 shrink-0 text-brand-orange-light" aria-hidden="true" />
                  {schedule} · {hours}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 sm:mt-16">
          <div className="flex flex-col gap-2 border-b border-slate-100 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="flex items-center gap-2 font-bold text-slate-900">
              <MapPin className="h-5 w-5 text-brand-orange" aria-hidden="true" />
              Visítanos
            </p>
            <p className="text-sm text-slate-600">
              {street}, {city}
            </p>
          </div>
          <iframe
            title="Mapa de la ubicación de FLOA"
            src={mapsEmbed}
            className="h-[300px] w-full border-0 sm:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}
