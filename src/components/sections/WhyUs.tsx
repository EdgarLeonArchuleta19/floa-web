import { Reveal } from '../ui/Reveal.tsx'
import { TiltCard } from '../ui/TiltCard.tsx'
import { Icon } from '../ui/Icon.tsx'

const ctaImage = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80'

const features = [
  {
    icon: 'shield',
    title: 'Seguridad ante todo',
    description:
      'Protocolos de seguridad, equipamiento de protección y capacitación continua bajo estándares OSHA.',
  },
  {
    icon: 'clock',
    title: 'Entrega puntual',
    description:
      'Coordinación logística para que tu equipo llegue a obra en el momento comprometido, en todo momento.',
  },
  {
    icon: 'wrench',
    title: 'Mantenimiento certificado',
    description:
      'Cada máquina pasa por inspecciones técnicas periódicas antes de salir a tu proyecto.',
  },
  {
    icon: 'handshake',
    title: 'Acompañamiento total',
    description:
      'Asesoría técnica y soporte en sitio durante toda la duración del contrato.',
  },
]

export function WhyUs() {
  return (
    <section id="porque-nosotros" className="relative isolate overflow-hidden bg-white py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-24 -z-10 h-96 w-96 rounded-full bg-brand-orange/10 blur-[120px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal direction="left">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-200/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600">
                ¿Por qué FLOA?
              </p>
            </Reveal>
            <Reveal direction="left" delay={80}>
              <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                No solo rentamos equipo, construimos confianza
              </h2>
            </Reveal>
            <Reveal direction="left" delay={160}>
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                Cada contrato es un proyecto en el que ponemos atención, control
                y respaldo. Así garantizamos que tu obra no se detenga.
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal
                  key={feature.title}
                  as="li"
                  direction="left"
                  delay={(index % 2) * 90}
                  className="group flex gap-3.5 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-slate-50 hover:shadow-md hover:shadow-brand-orange/10 sm:gap-4 sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    <Icon name={feature.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal direction="right" delay={120} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-orange/10 blur-2xl" aria-hidden="true" />
            <TiltCard maxTilt={5} glowColor="rgba(244, 118, 13, 0.10)" className="group overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10">
              <img
                src={ctaImage}
                alt="Obra de construcción con maquinaria pesada"
                className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[500px]"
                loading="lazy"
              />
            </TiltCard>
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  'linear-gradient(10deg, rgba(1,52,87,0.85) 0%, transparent 45%)',
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-6 left-6 right-6 animate-float">
              <div className="rounded-xl border border-brand-orange/25 bg-white/95 p-6 shadow-xl shadow-brand-orange/10 backdrop-blur">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-orange">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange" />
                  </span>
                  Compromiso con tu obra
                </p>
                <p className="font-bold leading-snug text-slate-900 sm:text-lg">
                  “Cada equipo que sale de nuestras instalaciones está listo para
                  dar lo mejor de sí con seguridad total.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
