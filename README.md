# FLOA

### Renta de Maquinaria Pesada y de Construcción

Sitio web corporativo de **FLOA Maquinaria y Construcción S.A. de C.V.**, empresa
radicada en Monterrey, Nuevo León, dedicada a la renta de maquinaria pesada,
movimiento de tierras, transporte de equipo y proyectos llave en mano.

- **Demo:** https://edgarleonarchuleta19.github.io/floa-web/
- **Repositorio:** https://github.com/EdgarLeonArchuleta19/floa-web

---

## Sobre el proyecto

Landing page de una sola página (one-page) diseñada para convertir visitas en
cotizaciones: comunicación directa por teléfono, WhatsApp y correo, sin
formularios intermedios. La enfoca el noroeste de México, con énfasis en
confiabilidad, flotilla certificada y soporte en obra.

## Stack

| Tecnología        | Versión | Uso                                        |
| ----------------- | ------- | ------------------------------------------ |
| React             | 19      | Biblioteca de UI                            |
| Vite              | 8       | Bundler y servidor de desarrollo            |
| Tailwind CSS      | 4       | Sistema de estilos utility-first            |
| Lucide React      | 1       | Iconografía vectorial                       |
| Oxlint            | 1       | Linter de código                            |

## Características

- Diseño **corporativo industrial**: blanco y gris acero, azul FLOA dominante y
  naranja solo en acciones. Sin degradados, blur ni brillos. Tipografía
  IBM Plex Sans / IBM Plex Mono.
- Diseño **responsive mobile-first**, probado desde 320 px hasta escritorio; la
  tabla de flotilla se convierte en tarjetas en celular.
- **9 bloques** de contenido: portada, cifras, clientes, nosotros, servicios,
  flotilla, ¿por qué FLOA?, testimonios y contacto.
- Animaciones: entrada escalonada de la portada, fotos que se descubren con
  barrido de cortina, *reveal on scroll*, contadores animados, barras de
  unidades que crecen, menú con la sección activa resaltada y botones con
  relleno al pasar el cursor.
- Header fijo que se compacta al hacer scroll y menú móvil desplegable
  (cierra con Esc).
- Mapa de ubicación embebido, datos de contacto enlazables (tel:, mailto:, wa.me).
- Accesibilidad: navegación por teclado, foco visible, etiquetas ARIA y
  `aria-hidden` en elementos decorativos.

## Estructura

El proyecto organiza sus componentes por rol dentro de `src`:

```
src/
├── components/
│   ├── layout/          Estructura fija del sitio
│   │   ├── Navbar.tsx       Barra de datos + header fijo + menú móvil
│   │   ├── Footer.tsx       Pie de página
│   │   └── BackToTop.tsx    Botón de volver arriba
│   ├── sections/        Secciones de la página principal
│   │   ├── Hero.tsx         Portada
│   │   ├── Stats.tsx        Cifras con contadores
│   │   ├── Clients.tsx      Clientes (marquesina)
│   │   ├── About.tsx        Nosotros
│   │   ├── Services.tsx     Servicios
│   │   ├── Fleet.tsx        Flotilla (tabla de especificaciones)
│   │   ├── WhyUs.tsx        Diferenciadores
│   │   ├── Testimonials.tsx Testimonios
│   │   └── Contact.tsx      Contacto + mapa
│   └── ui/              Primitivas reutilizables
│       ├── Reveal.tsx       Animación al entrar al viewport (incluye "wipe")
│       ├── Eyebrow.tsx      Etiqueta de sección con barra animada
│       └── CountUp.tsx      Contador animado
├── data/
│   └── company.ts       Teléfono, correo, dirección, redes y menú
├── hooks/
│   └── useInView.ts     Observador de intersección
├── pages/
│   └── Home.tsx         Armado de la página principal
├── styles/
│   └── index.css        Paleta, keyframes y utilidades de animación
└── assets/              Logotipos (color y blanco)
```

El contenido de cada sección vive junto a su componente; los datos de contacto
compartidos están en `src/data/company.ts`.

## Instalación

Requiere Node.js 20 o superior.

```bash
git clone https://github.com/EdgarLeonArchuleta19/floa-web.git
cd floa-web
npm install
npm run dev
```

El servidor de desarrollo arranca en `http://localhost:5173`.

## Scripts

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR               |
| `npm run build`   | Build de producción a `dist/`                |
| `npm run preview` | Previsualiza el build de producción          |
| `npm run lint`    | Corre Oxlint sobre el código                 |

## Contacto

| Medio    | Dato                                              |
| -------- | ------------------------------------------------- |
| Teléfono | +52 81 1234 5678                                  |
| Correo   | contacto@floa.mx                                   |
| WhatsApp | https://wa.me/528112345678                        |
| Oficina  | Av. Pablo Livas 4200, Col. Fomerrey 9, Monterrey |
| Horario  | Lunes a sábado, 8:00 a 18:00                     |

---

## Autor

**Edgar Leon Archuleta** — [@EdgarLeonArchuleta19](https://github.com/EdgarLeonArchuleta19)

Proyecto privado. © 2026 FLOA Maquinaria y Construcción S.A. de C.V. Todos los derechos reservados.
