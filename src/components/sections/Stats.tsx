import { CountUp } from '../ui/CountUp.tsx'
import { Reveal } from '../ui/Reveal.tsx'

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '120+', label: 'Equipos en flotilla' },
  { value: '300+', label: 'Proyectos completados' },
  { value: '98%', label: 'Disponibilidad de equipo' },
]

export function Stats() {
  return (
    <section aria-label="FLOA en cifras" className="border-b border-steel-200 bg-white">
      <div className="mx-auto max-w-7xl sm:px-8">
        {/* gap-px sobre fondo gris = líneas divisorias de 1px en cualquier tamaño */}
        <Reveal className="grid grid-cols-2 gap-px bg-steel-200 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:first:pl-0">
              <CountUp
                value={stat.value}
                className="block text-4xl leading-none font-bold text-brand-blue tabular-nums sm:text-[2.75rem]"
              />
              <span
                aria-hidden="true"
                className="grow-bar mt-4 block h-[3px] w-10 bg-brand-orange"
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              />
              <p className="mt-3 text-[15px] text-steel-500">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
