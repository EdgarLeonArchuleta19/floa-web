const clients = [
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
  const duplicated = [...clients, ...clients]

  return (
    <section aria-label="Clientes" className="border-b border-steel-200 bg-steel-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 px-5 text-[13px] font-medium uppercase tracking-[0.1em] text-steel-500 sm:px-0">
          Empresas que confían en FLOA
        </p>
        <div className="marquee-pause min-w-0 flex-1 overflow-hidden">
          <ul className="animate-marquee flex w-max items-center">
            {duplicated.map((name, index) => (
              <li
                key={`${name}-${index}`}
                aria-hidden={index >= clients.length}
                className="flex items-center gap-10 pr-10 text-[15px] font-semibold whitespace-nowrap text-steel-700"
              >
                {name}
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-steel-200" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
