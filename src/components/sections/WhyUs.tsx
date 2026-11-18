import { Reveal } from '../ui/Reveal.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'

const whyImage =
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'

const features = [
  {
    title: 'Seguridad ante todo',
    description:
      'Protocolos de seguridad, equipamiento de protección y capacitación continua bajo estándares OSHA.',
  },
  {
    title: 'Entrega puntual',
    description:
      'Coordinación logística para que tu equipo llegue a obra en el momento comprometido.',
  },
  {
    title: 'Mantenimiento certificado',
    description:
      'Cada máquina pasa por inspecciones técnicas periódicas antes de salir a tu proyecto.',
  },
  {
    title: 'Acompañamiento total',
    description:
      'Asesoría técnica y soporte en sitio durante toda la duración del contrato.',
  },
]

export function WhyUs() {
  return (
    <section id="porque-nosotros" className="bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-18 lg:py-32">
        <div>
          <Eyebrow dark>¿Por qué FLOA?</Eyebrow>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[2rem] leading-[1.15] font-bold tracking-[-0.01em] sm:text-[2.75rem]">
              No solo rentamos equipo, construimos confianza
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[17px] leading-[1.7] text-steel-300">
              Cada contrato es un proyecto en el que ponemos atención, control y
              respaldo. Así garantizamos que tu obra no se detenga.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal as="li" key={feature.title} delay={200 + index * 100} className="group">
                <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 bg-brand-orange transition-transform duration-300 group-hover:rotate-45"
                  />
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel-300">{feature.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Reveal direction="wipe" className="h-[26rem] sm:h-[32rem] lg:h-[35rem]">
            <img
              src={whyImage}
              alt="Obra de construcción con maquinaria pesada"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={700}
            className="absolute right-0 bottom-0 left-0 border-t-[3px] border-brand-orange bg-white p-6 text-ink sm:right-[15%] sm:p-7"
          >
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-steel-500">
              Compromiso con tu obra
            </p>
            <p className="mt-2.5 text-lg leading-normal font-medium text-brand-blue">
              “Cada equipo que sale de nuestras instalaciones está listo para dar
              lo mejor de sí con seguridad total.”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
