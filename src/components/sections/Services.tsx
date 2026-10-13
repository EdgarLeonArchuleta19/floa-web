import { Reveal } from '../ui/Reveal.tsx'
import { TiltCard } from '../ui/TiltCard.tsx'
import { Icon } from '../ui/Icon.tsx'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'renta',
    icon: 'hard-hat',
    title: 'Renta de Maquinaria',
    description:
      'Flotilla de excavadoras, retroexcavadoras, montacargas y compactadores listos para tu obra, con contratos flexibles por día, semana o mes.',
  },
  {
    id: 'movimiento',
    icon: 'truck',
    title: 'Movimiento de Tierras',
    description:
      'Nivelaciones, excavaciones y despalmes ejecutados con precisión y maquinaria de última generación para avanzar tu proyecto sin contratiempos.',
  },
  {
    id: 'transporte',
    icon: 'trailer',
    title: 'Transporte de Equipo',
    description:
      'Traslado seguro de maquinaria pesada con plataformas y operadores certificados, en cualquier punto del noreste del país.',
  },
  {
    id: 'mantenimiento',
    icon: 'wrench',
    title: 'Mantenimiento Preventivo',
    description:
      'Programas de mantenimiento preventivo y correctivo que garantizan la máxima disponibilidad y vida útil de tus equipos.',
  },
  {
    id: 'operadores',
    icon: 'user-check',
    title: 'Operadores Certificados',
    description:
      'Personal altamente capacitado y certificado en seguridad, que opera cada máquina con responsabilidad y eficiencia.',
  },
  {
    id: 'proyectos',
    icon: 'building',
    title: 'Proyectos Llave en Mano',
    description:
      'Soluciones integrales que incluyen diseño, suelo, maquinaria y ejecución para proyectos de construcción industrial y urbana.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative isolate overflow-hidden bg-slate-50 py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600 shadow-sm">
              Servicios
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Soluciones completas para tu proyecto
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-slate-600">
              Desde la renta de un equipo hasta proyectos ejecutados llave en
              mano. Todo lo que tu obra necesita, bajo un mismo techo.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              as="li"
              delay={(index % 3) * 90}
              direction="zoom"
              className="h-full [perspective:1000px]"
            >
              <TiltCard className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-orange/15 sm:p-8">
                <div
                  className="relative mb-5 inline-flex h-12 w-12 shrink-0 animate-float-slow items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-orange/30"
                  style={{ animationDelay: `${index * -1.5}s` }}
                >
                  <Icon name={service.icon} className="h-6 w-6" />
                  <span
                    className="absolute inset-0 rounded-xl border-2 border-brand-orange/0 transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-orange/40"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mb-5 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors group-hover:text-brand-orange"
                  aria-label={`Cotizar: ${service.title}`}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Cotizar servicio
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
