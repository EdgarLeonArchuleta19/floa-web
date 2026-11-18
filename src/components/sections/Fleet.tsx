import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'
import { CountUp } from '../ui/CountUp.tsx'

const fleet = [
  { name: 'Excavadoras', detail: '20 a 49 ton', units: 18 },
  { name: 'Retroexcavadoras', detail: '410 C / BHL65', units: 25 },
  { name: 'Cargadores frontales', detail: '928 GZ a 980M', units: 20 },
  { name: 'Dozers', detail: 'D6 – D11', units: 12 },
  { name: 'Montacargas', detail: '3 a 16 ton', units: 35 },
  { name: 'Compactadores', detail: 'CS78B / CP54', units: 15 },
  { name: 'Grúas', detail: '25 a 250 ton', units: 8 },
  { name: 'Rodillos', detail: 'CS533E / CB24', units: 10 },
]

const maxUnits = Math.max(...fleet.map((item) => item.units))

const columns = 'md:grid-cols-[1.3fr_1fr_1.5fr_auto]'

export function Fleet() {
  return (
    <section id="flotilla" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Flotilla</Eyebrow>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[2rem] leading-[1.15] font-bold tracking-[-0.01em] text-brand-blue sm:text-[2.75rem]">
                Maquinaria lista para trabajar
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="max-w-md">
            <p className="text-[17px] leading-relaxed text-steel-700">
              Más de 120 equipos de las mejores marcas, inspeccionados y listos
              para mover tu proyecto.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-12 border border-steel-200">
          <div
            aria-hidden="true"
            className={`hidden gap-x-6 bg-brand-blue px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-white md:grid ${columns}`}
          >
            <span>Equipo</span>
            <span>Capacidad / Modelo</span>
            <span>Unidades</span>
            <span className="text-right">Cotizar</span>
          </div>

          <ul>
            {fleet.map((item, index) => (
              <li
                key={item.name}
                className={`grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-steel-200 px-5 py-5 transition-colors duration-200 hover:bg-steel-50 md:gap-x-6 md:px-6 ${columns} ${index ? 'border-t' : ''}`}
              >
                <h3 className="text-[17px] font-semibold text-brand-blue md:order-1">{item.name}</h3>
                <p className="col-span-2 font-mono text-sm text-steel-700 md:order-2 md:col-span-1">
                  <span className="sr-only">Capacidad o modelo: </span>
                  {item.detail}
                </p>
                <div className="col-span-2 flex items-center gap-4 md:order-3 md:col-span-1">
                  <CountUp value={String(item.units)} duration={1200} className="w-7 font-semibold tabular-nums" />
                  <span className="sr-only"> unidades</span>
                  <span aria-hidden="true" className="h-1.5 flex-1 bg-steel-50">
                    <span
                      className="grow-bar block h-full bg-brand-orange"
                      style={{
                        width: `${(item.units / maxUnits) * 100}%`,
                        transitionDelay: `${200 + index * 80}ms`,
                      }}
                    />
                  </span>
                </div>
                <a
                  href="#contacto"
                  aria-label={`Cotizar ${item.name.toLowerCase()}`}
                  className="group row-start-1 col-start-2 inline-flex items-center gap-1.5 justify-self-end text-sm font-semibold text-brand-blue transition-colors hover:text-brand-orange-dark md:order-4 md:row-auto md:col-auto"
                >
                  Cotizar
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-5 text-[15px] text-steel-500">
          Cada unidad pasa inspección técnica antes de salir a obra.{' '}
          <a href="#contacto" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
            Pregunta por nuestro inventario completo
          </a>
        </p>
      </div>
    </section>
  )
}
