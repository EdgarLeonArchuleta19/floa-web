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

- Diseño **responsive mobile-first**, probado desde 320 px hasta escritorio.
- Hero a pantalla completa con Ken Burns de fondo, grid tecnológico y degradados.
- **8 secciones** de contenido: hero, nosotros, servicios, flotilla, ¿por qué
  FLOA?, testimonios, clientes y contacto.
- Menú móvil a pantalla completa con animación escalonada y bloqueo de scroll.
- Animaciones *reveal on scroll* (IntersectionObserver) y contadores animados.
- Cards con efecto **3D tilt** y glow que sigue al cursor.
- Mapa de ubicación embebido, datos de contacto enlazables (tel:, mailto:, wa.me).
- Accesibilidad: navegación por teclado, etiquetas ARIA, `aria-hidden` en
  elementos decorativos y `prefers-reduced-motion` respetado en los contadores.

## Estructura

El proyecto organiza sus componentes por rol dentro de `src`:

```
src/
├── components/
│   ├── layout/          Estructura fija del sitio
│   │   ├── Navbar.tsx       Header fijo + menú móvil
│   │   ├── Footer.tsx       Pie de página
│   │   └── BackToTop.tsx    Botón de volver arriba
│   ├── sections/        Secciones de la página principal
│   │   ├── Hero.tsx         Portada
│   │   ├── About.tsx        Nosotros + estadísticas
│   │   ├── Services.tsx     Servicios
│   │   ├── Fleet.tsx        Flotilla de maquinaria
│   │   ├── WhyUs.tsx        Diferenciadores
│   │   ├── Testimonials.tsx Testimonios (carrusel)
│   │   ├── Clients.tsx      Clientes (marquesina)
│   │   └── Contact.tsx      Contacto + mapa
│   └── ui/              Primitivas reutilizables
│       ├── Reveal.tsx       Animación al entrar al viewport
│       ├── TiltCard.tsx     Card 3D con glow
│       ├── CountUp.tsx      Contador animado
│       ├── Icon.tsx         Mapa de iconos
│       └── HexNut.tsx       Tuerca hexagonal (SVG)
├── hooks/
│   └── useInView.ts     Observador de intersección (Reveal y CountUp)
├── pages/
│   └── Home.tsx         Armado de la página principal
├── styles/
│   └── index.css        Tema, keyframes y utilidades globales
└── assets/              Logotipos
```

El contenido de cada sección vive junto a su componente, de modo que editar un
texto no requiere brincar entre archivos.

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
