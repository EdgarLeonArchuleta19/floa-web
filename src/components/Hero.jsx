import { ArrowRight, Phone, MapPin, ShieldCheck, Clock, Wrench } from 'lucide-react'
import { HexNut } from './HexNut'
import { company, images } from '../data/content'

const highlights = [
  { icon: ShieldCheck, text: 'Flotilla certificada' },
  { icon: Clock, text: 'Entrega puntual' },
  { icon: Wrench, text: 'Mantenimiento garantizado' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-brand-blue-dark">
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-ken-burns bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${images.hero}')` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,20,36,0.96) 0%, rgba(1,52,87,0.85) 50%, rgba(0,36,63,0.98) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-70"
        style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 95%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-12%] -z-10 h-[380px] w-[380px] animate-pulse-soft rounded-full bg-brand-orange/25 blur-[120px] sm:h-[520px] sm:w-[520px]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 animate-pulse-soft rounded-full bg-brand-blue-light/40 blur-[100px] [animation-delay:-1.5s]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-[6%] top-[22%] hidden h-80 w-80 animate-spin-slow rounded-full border border-dashed border-white/15 sm:block" />
        <div className="absolute right-[6%] top-[22%] hidden h-80 w-80 animate-orbit sm:block">
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange shadow-[0_0_20px_5px_rgba(244,118,13,0.6)]" />
        </div>
        <div className="absolute right-[6%] top-[22%] hidden h-80 w-80 animate-spin-slow [animation-direction:reverse] rounded-full border border-orange-400/20 sm:block" />
        <div className="absolute bottom-[16%] right-[3%] hidden animate-float-slow lg:block">
          <HexNut className="h-16 w-16 animate-spin-slow text-brand-orange/40 drop-shadow-[0_0_18px_rgba(244,118,13,0.45)]" style={{ animationDelay: '-3s' }} />
        </div>
        <div className="absolute left-[5%] top-[26%] hidden animate-float-slow xl:block">
          <HexNut className="h-10 w-10 animate-spin-slow text-white/25 [animation-direction:reverse]" style={{ animationDelay: '-1s' }} />
        </div>
      </div>

      <div className="mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-orange-light sm:h-4 sm:w-4" aria-hidden="true" />
            <span className="truncate">Monterrey, Nuevo León · México</span>
          </div>

          <h1 className="animate-fade-up mb-5 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl" style={{ animationDelay: '100ms' }}>
            Potencia tu obra con{' '}
            <span className="text-shimmer">maquinaria de primer nivel</span>
          </h1>

          <p className="animate-fade-up mb-8 max-w-2xl text-base leading-relaxed text-blue-100/85 sm:text-xl" style={{ animationDelay: '200ms' }}>
            {company.tagline}. Rentamos equipos pesados listos para trabajar,
            con mantenimiento certificado y soporte 24/7 en el noreste de México.
          </p>

          <div className="animate-fade-up flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: '300ms' }}>
            <a
              href="#contacto"
              className="group btn-shine inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-orange to-brand-orange-light px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-orange/40 sm:px-8"
            >
              Cotiza sin costo
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={company.phoneLink}
              className="group btn-shine inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/10 sm:px-8"
            >
              <Phone className="h-5 w-5 shrink-0 text-brand-orange-light" aria-hidden="true" />
              {company.phone}
            </a>
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7 sm:mt-16 sm:gap-x-10 sm:pt-8">
          {highlights.map((item, index) => (
            <li
              key={item.text}
              className="animate-fade-up flex items-center gap-3 text-sm font-medium text-blue-100/85"
              style={{ animationDelay: `${400 + index * 80}ms` }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-orange-light">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}