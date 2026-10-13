import { Reveal } from '../ui/Reveal.tsx'
import { TiltCard } from '../ui/TiltCard.tsx'
import { Icon } from '../ui/Icon.tsx'

const fleet = [
  { icon: 'excavator', name: 'Excavadoras', units: '18', detail: '20 a 49 ton' },
  { icon: 'backhoe', name: 'Retroexcavadoras', units: '25', detail: '410 C / BHL65' },
  { icon: 'loader', name: 'Cargadores Frontales', units: '20', detail: '928 GZ a 980M' },
  { icon: 'bulldozer', name: 'Dozers', units: '12', detail: 'D6 – D11' },
  { icon: 'forklift', name: 'Montacargas', units: '35', detail: '3 a 16 ton' },
  { icon: 'compactor', name: 'Compactadores', units: '15', detail: 'CS78B / CP54' },
  { icon: 'crane', name: 'Grúas', units: '8', detail: '25 a 250 ton' },
  { icon: 'roller', name: 'Rodillos', units: '10', detail: 'CS533E / CB24' },
]

export function Fleet() {
  return (
    <section id="flotilla" className="relative isolate overflow-hidden bg-brand-blue-dark py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-80 w-80 animate-spin-slow rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 -z-10 h-96 w-96 animate-spin-slow rounded-full border border-brand-orange/10 [animation-delay:-7s]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-100">
              Flotilla
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Maquinaria lista para trabajar
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-blue-100/75">
              Más de 120 equipos de las mejores marcas, inspeccionados y listos
              para mover tu proyecto.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {fleet.map((item, index) => (
            <Reveal
              key={item.name}
              as="li"
              delay={(index % 4) * 70}
              direction="zoom"
              className="h-full [perspective:900px]"
            >
              <TiltCard
                maxTilt={8}
                glowColor="rgba(244, 118, 13, 0.14)"
                className="group flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur transition-shadow duration-300 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-orange/10 sm:rounded-2xl sm:p-7"
              >
                <span
                  className="mb-3 inline-flex h-11 w-11 shrink-0 animate-float-slow items-center justify-center rounded-lg bg-white/10 text-orange-300/90 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-orange-light sm:mb-4 sm:h-14 sm:w-14 sm:rounded-xl"
                  style={{ animationDelay: `${index * -1.2}s` }}
                >
                  <Icon name={item.icon} className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
                <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">{item.name}</h3>
                <p className="mb-3 line-clamp-2 text-xs text-blue-100/55 sm:text-sm">
                  {item.detail}
                </p>
                <p className="mt-auto rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 text-xs font-semibold text-brand-orange-light transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white sm:text-sm">
                  {item.units} unidades
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-blue-100/75 sm:text-base">
            ¿No encuentras el equipo que necesitas?{' '}
            <a
              href="#contacto"
              className="font-semibold text-brand-orange-light underline-offset-4 transition-colors hover:text-brand-orange"
            >
              Pregunta por nuestro inventario completo →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
