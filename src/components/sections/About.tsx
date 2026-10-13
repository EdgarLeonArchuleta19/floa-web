import { Reveal } from '../ui/Reveal.tsx'
import { TiltCard } from '../ui/TiltCard.tsx'
import { CountUp } from '../ui/CountUp.tsx'

const legalName = 'FLOA Maquinaria y Construcción S.A. de C.V.'
const imageMain = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
const imageOverlay = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '120+', label: 'Equipos en flotilla' },
  { value: '300+', label: 'Proyectos completados' },
  { value: '98%', label: 'Disponibilidad de equipo' },
]

export function About() {
  return (
    <section id="nosotros" className="relative isolate overflow-hidden bg-white py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 top-16 -z-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-[110px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <TiltCard maxTilt={4} glowColor="rgba(1, 52, 87, 0.08)" className="group overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10">
              <img
                src={imageMain}
                alt="Equipo de construcción pesada trabajando en obra"
                className="h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[420px]"
                loading="lazy"
              />
            </TiltCard>
            <div className="absolute -bottom-8 -right-4 hidden h-40 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-transform duration-500 ease-out hover:scale-105 sm:block lg:h-52 lg:w-52">
              <img
                src={imageOverlay}
                alt="Retroexcavadora en operación"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
              <p className="text-3xl font-extrabold leading-none text-slate-900">
                15<span className="text-base text-brand-orange">+</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                Años en el mercado
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal direction="right">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-200/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600">
                Nosotros
              </p>
            </Reveal>
            <Reveal direction="right" delay={80}>
              <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Impulsamos la construcción del norte de México
              </h2>
            </Reveal>
            <Reveal direction="right" delay={160}>
              <p className="mb-4 text-lg leading-relaxed text-slate-600">
                {legalName} nace en Monterrey con una misión clara:
                entregar maquinaria pesada en las mejores condiciones y en el
                tiempo exacto que tu obra lo necesita.
              </p>
            </Reveal>
            <Reveal direction="right" delay={240}>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Contamos con una flotilla de más de 120 equipos, operadores
                certificados y un protocolo de mantenimiento que respalda cada
                máquina. De la mano de nuestra experiencia, somos el aliado que
                convierte proyectos en realidades.
              </p>
            </Reveal>

            <Reveal direction="right" delay={320} className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-4 sm:gap-6 sm:pt-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-sm"
                >
                  <p className="text-2xl font-extrabold transition-transform duration-300 group-hover:scale-105 sm:text-3xl">
                    <CountUp value={stat.value} className="text-brand-orange" />
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
