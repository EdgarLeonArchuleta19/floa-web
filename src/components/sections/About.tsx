import { Reveal } from '../ui/Reveal.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'

const aboutImage =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'

const facts = [
  { label: 'Contratos', value: 'Por día, semana o mes' },
  { label: 'Cobertura', value: 'Noreste de México' },
]

export function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-18">
        <Reveal direction="wipe" className="h-72 sm:h-[26rem] lg:h-[29rem]">
          <img
            src={aboutImage}
            alt="Equipo de construcción pesada trabajando en obra"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>

        <div>
          <Eyebrow>Nosotros</Eyebrow>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2rem] leading-[1.15] font-bold tracking-[-0.01em] text-brand-blue sm:text-[2.75rem]">
              Impulsamos la construcción del norte de México
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[17px] leading-[1.7] text-steel-700">
              Contamos con una flotilla de más de 120 equipos, operadores
              certificados y un protocolo de mantenimiento que respalda cada
              máquina. De la mano de nuestra experiencia, somos el aliado que
              convierte proyectos en realidades.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <dl className="mt-8 grid grid-cols-2 border-t border-steel-200">
              {facts.map((fact, index) => (
                <div key={fact.label} className={`pt-5 ${index ? 'border-l border-steel-200 pl-4 sm:pl-6' : 'pr-4'}`}>
                  <dt className="text-[13px] text-steel-500">{fact.label}</dt>
                  <dd className="mt-1 text-[17px] font-semibold text-brand-blue">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
