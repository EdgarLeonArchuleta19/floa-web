import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'

const services = [
  {
    title: 'Renta de maquinaria',
    description:
      'Flotilla de excavadoras, retroexcavadoras, montacargas y compactadores listos para tu obra, con contratos flexibles por día, semana o mes.',
  },
  {
    title: 'Movimiento de tierras',
    description:
      'Nivelaciones, excavaciones y despalmes ejecutados con precisión y maquinaria de última generación para avanzar tu proyecto sin contratiempos.',
  },
  {
    title: 'Transporte de equipo',
    description:
      'Traslado seguro de maquinaria pesada con plataformas y operadores certificados, en cualquier punto del noreste del país.',
  },
  {
    title: 'Mantenimiento preventivo',
    description:
      'Programas de mantenimiento preventivo y correctivo que garantizan la máxima disponibilidad y vida útil de tus equipos.',
  },
  {
    title: 'Operadores certificados',
    description:
      'Personal altamente capacitado y certificado en seguridad, que opera cada máquina con responsabilidad y eficiencia.',
  },
  {
    title: 'Proyectos llave en mano',
    description:
      'Soluciones integrales que incluyen diseño, suelo, maquinaria y ejecución para proyectos de construcción industrial y urbana.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="border-y border-steel-200 bg-steel-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Servicios</Eyebrow>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[2rem] leading-[1.15] font-bold tracking-[-0.01em] text-brand-blue sm:text-[2.75rem]">
                Soluciones completas para tu proyecto
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="max-w-md">
            <p className="text-[17px] leading-relaxed text-steel-700">
              Desde la renta de un equipo hasta proyectos ejecutados llave en
              mano. Todo lo que tu obra necesita, bajo un mismo techo.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.title} delay={(index % 3) * 110} className="h-full">
              <article className="group relative flex h-full flex-col gap-3.5 border border-steel-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_18px_40px_-24px_rgba(1,52,87,0.45)] sm:p-8">
                {/* línea superior: azul, se rellena de naranja al pasar el cursor */}
                <span aria-hidden="true" className="absolute inset-x-[-1px] top-[-1px] h-[3px] bg-brand-blue" />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-1px] top-[-1px] h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-500 group-hover:scale-x-100"
                />
                <span className="font-mono text-[13px] text-steel-500">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-[21px] font-semibold text-brand-blue">{service.title}</h3>
                <p className="flex-1 text-[15px] leading-[1.65] text-steel-700">{service.description}</p>
                <a
                  href="#contacto"
                  aria-label={`Cotizar: ${service.title}`}
                  className="mt-2 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-blue transition-colors hover:text-brand-orange-dark"
                >
                  Cotizar servicio
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
