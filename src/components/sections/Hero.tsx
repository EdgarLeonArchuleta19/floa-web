import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '../ui/Reveal.tsx'

const heroImage =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80'

const highlights = ['Flotilla certificada', 'Entrega puntual', 'Mantenimiento garantizado']

const rise = (delay) => ({ animationDelay: `${delay}ms` })

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-brand-blue text-white">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-14 sm:px-8 sm:py-20 lg:py-28 lg:pr-16 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p
            className="animate-rise flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-steel-300"
            style={rise(0)}
          >
            <span aria-hidden="true" className="animate-bar-in h-[3px] w-8 origin-left bg-brand-orange" style={rise(300)} />
            Renta de maquinaria pesada
          </p>

          <h1
            className="animate-rise mt-6 text-[2.5rem] leading-[1.08] font-bold tracking-[-0.015em] sm:text-5xl xl:text-[3.75rem]"
            style={rise(120)}
          >
            Potencia tu obra con maquinaria de primer nivel
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-steel-300" style={rise(240)}>
            Impulsamos la construcción del norte de México. Rentamos equipos
            pesados listos para trabajar, con mantenimiento certificado y
            soporte 24/7.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row" style={rise(360)}>
            <a
              href="#contacto"
              className="btn-fill group inline-flex h-14 items-center justify-center gap-3 rounded-[2px] bg-brand-orange px-7 font-semibold text-brand-navy transition-colors duration-300 [--btn-fill:#ffffff]"
            >
              Cotiza sin costo
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#flotilla"
              className="btn-fill inline-flex h-14 items-center justify-center rounded-[2px] border border-white px-7 font-semibold text-white transition-colors duration-300 [--btn-fill:#ffffff] hover:text-brand-blue"
            >
              Ver flotilla
            </a>
          </div>

          <ul className="mt-12 flex flex-col gap-3 border-t border-[#2a5577] pt-7 text-[15px] sm:flex-row sm:flex-wrap sm:gap-x-8">
            {highlights.map((item, index) => (
              <li key={item} className="animate-rise flex items-center gap-2.5" style={rise(520 + index * 110)}>
                <Check className="h-[18px] w-[18px] text-brand-orange" strokeWidth={3} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Reveal direction="wipe" className="h-72 sm:h-[26rem] lg:h-auto lg:min-h-[640px]">
          <img
            src={heroImage}
            alt="Equipo de supervisión en una obra activa"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </Reveal>
      </div>
    </section>
  )
}
