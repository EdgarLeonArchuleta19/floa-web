import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/content'
import { Reveal } from './Reveal'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const total = testimonials.length
  const current = testimonials[active]

  const prev = () => setActive((index) => (index - 1 + total) % total)
  const next = () => setActive((index) => (index + 1) % total)

  return (
    <section id="testimonios" className="relative isolate overflow-hidden bg-slate-50 py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-[540px] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[100px]" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600 shadow-sm">
            Testimonios
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Lo que dicen quienes confían en nosotros
          </h2>
        </Reveal>

        <Reveal className="relative mx-auto max-w-3xl">
          <Quote
            className="absolute -top-6 left-0 h-14 w-14 text-brand-orange/25"
            aria-hidden="true"
          />
          <div
            key={active}
            className="animate-fade-in rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition-shadow duration-300 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/10 sm:p-12"
          >
            <blockquote className="mb-8 text-center text-base leading-relaxed text-slate-700 sm:text-xl">
              “{current.quote}”
            </blockquote>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-orange text-lg font-bold text-white shadow-lg shadow-brand-blue/20">
                {current.name
                  .replace('Ing.', '')
                  .replace('Arq.', '')
                  .trim()
                  .charAt(0)}
              </div>
              <p className="font-bold text-slate-900">{current.name}</p>
              <p className="text-sm text-slate-500">{current.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-md"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar testimonio">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? 'w-8 bg-brand-orange'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ver testimonio de ${item.name}`}
                  aria-selected={index === active}
                  role="tab"
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-md"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}