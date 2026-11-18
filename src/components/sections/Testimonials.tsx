import { Reveal } from '../ui/Reveal.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'

const testimonials = [
  {
    name: 'Ing. Roberto Cantú',
    role: 'Director de Obra · Constructora RCM',
    quote:
      'FLOA ha sido un socio confiable en tres proyectos consecutivos. La disponibilidad de su flotilla y su soporte en terreno nos permitieron entregar cada obra a tiempo.',
  },
  {
    name: 'Arq. Laura Garza',
    role: 'Gte. de Proyectos · Grupo Acosta',
    quote:
      'Las máquinas siempre llegan en excelente estado y su equipo de operadores es de primer nivel. Se siente el compromiso por hacer bien el trabajo.',
  },
  {
    name: 'Ing. José Treviño',
    role: 'Superintendente · Inmobiliaria Trev',
    quote:
      'La renta de equipos con FLOA nos ahorró tiempo y dolores de cabeza. La cotización, logística y facturación fueron rápidas y transparentes.',
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
      <Eyebrow>Testimonios</Eyebrow>
      <Reveal delay={80}>
        <h2 className="mt-5 max-w-2xl text-[2rem] leading-[1.15] font-bold tracking-[-0.01em] text-brand-blue sm:text-[2.75rem]">
          Lo que dicen quienes confían en nosotros
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 120} className="h-full">
            <figure className="group relative flex h-full flex-col gap-6 overflow-hidden bg-steel-50 p-7 sm:p-8">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-500 group-hover:scale-x-100"
              />
              <blockquote className="flex-1 text-base leading-[1.7] text-ink">“{item.quote}”</blockquote>
              <figcaption className="border-t border-steel-200 pt-4">
                <p className="font-semibold text-brand-blue">{item.name}</p>
                <p className="mt-0.5 text-sm text-steel-500">{item.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
