import { Reveal } from '../ui/Reveal.tsx'

const clientBrands = [
  'Grupo Acosta',
  'Constructora RCM',
  'Inmobiliaria Trev',
  'CEMEX',
  'Vidusa',
  'Terza',
  'OPC Norte',
  'Desarrollos Maya',
]

export function Clients() {
  const duplicated = [...clientBrands, ...clientBrands]

  return (
    <section className="relative isolate overflow-hidden border-y border-slate-200 bg-white py-12 sm:py-14">
      <Reveal>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
          Empresas que confían en FLOA
        </p>
      </Reveal>
      <div className="marquee-pause mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {duplicated.map((name, index) => (
            <span
              key={`${name}-${index}`}
              aria-hidden={index >= clientBrands.length}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap text-lg font-bold tracking-tight text-slate-300 transition-colors duration-300 hover:text-brand-orange sm:text-xl"
            >
              <span className="h-2 w-2 rounded-full bg-brand-orange/70" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
