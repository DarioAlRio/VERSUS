# VERSUS CrossFit VSG — sitio web

Rediseño multipágina de [versuscrossfit.com](https://www.versuscrossfit.com) manteniendo la
identidad del box (negro + verde `#00c700`, acento amarillo `#dad800`) y usando textos e
imágenes del propio dominio.

HTML estático, sin frameworks ni dependencias externas: se puede publicar en cualquier
hosting, GitHub Pages, Netlify o Vercel subiendo la carpeta tal cual.

---

## Estructura

```
.
├── index.html                 Portada
├── el-box.html                Resumen de la sección El Box
├── que-es-crossfit.html       Qué es CrossFit
├── box.html                   Nuestro box (instalaciones, equipamiento, mapa)
├── horarios.html              Horarios y reservas
├── clases.html                Índice de entrenamientos
├── clase-*.html               7 fichas de clase
├── entrenadores.html          Equipo
├── entrenador-*.html          7 fichas de entrenador
├── tarifas.html               Tarifas + FAQ
├── blog.html                  Noticias
├── post-*.html                10 entradas
├── clase-gratis.html          Clase de prueba gratuita (formulario)
├── contacto.html              Contacto + mapa
├── politica-de-cookies.html
├── sitemap.xml · robots.txt
├── assets/
│   ├── css/site.css           Sistema de diseño completo
│   ├── css/fonts.css          Fuentes autoalojadas (Inter + Barlow Condensed)
│   ├── js/site.js             Menú mega, drawer, acordeones, reveal, lightbox, cookies
│   ├── fonts/                 woff2 locales (sin llamadas a Google Fonts)
│   └── img/                   Imágenes del dominio, optimizadas + variantes responsive
├── _build/                    Generador estático (contenido + plantillas)
│   ├── data.js                Todo el contenido del sitio en un único fichero
│   ├── templates.js           Shell, cabecera, pie y componentes
│   └── build.js               Composición de páginas + sitemap
└── server.js                  Servidor de desarrollo local
```

## Uso

Regenerar las páginas tras editar `_build/data.js` o las plantillas:

```bash
node _build/build.js
```

Levantar el sitio en local (http://localhost:4173):

```bash
node server.js
```

## Menú

El menú original tenía ~20 entradas planas. Aquí se reduce a **6 entradas de primer nivel**
con desplegables agrupados:

| Entrada | Enlaza a | Desplegable |
|---|---|---|
| Inicio | `index.html` | — |
| El Box ▾ | `el-box.html` | *Conócenos*: qué es CrossFit · nuestro box · el equipo — *Práctico*: horarios · tarifas · contacto |
| Entrenamientos ▾ | `clases.html` | *Programas base*: CrossFit · Halterofilia · Gymnastic — *Especialidades*: HYROX · Hybrid Strongman · Yoga + Core · Open Box |
| Equipo ▾ | `entrenadores.html` | Los 7 entrenadores |
| Tarifas | `tarifas.html` | — |
| Blog | `blog.html` | — |

Las tres entradas con desplegable **también son enlaces**: al pincharlas se llega a una
página resumen con todas sus opciones. Con ratón el panel se abre al pasar por encima y
el clic navega; sin *hover* (táctil) el primer toque despliega y el segundo entra.

En escritorio los desplegables son paneles mega con descripciones, miniaturas y una
tarjeta promocional. En móvil, un cajón a pantalla completa donde cada grupo es una fila
con dos zonas: el nombre lleva a la página resumen y el chevron despliega los enlaces.

## Notas técnicas

- **Responsive** desde 320 px: verificado sin desbordamiento horizontal en las 35 páginas.
- **Compatibilidad**: JS ES5-compatible sin dependencias; CSS con *fallbacks* para
  `aspect-ratio`, prefijos `-webkit-` en `backdrop-filter`, `clip-path` y `mask-image`.
- **Rendimiento**: fuentes locales con `font-display:swap` y `preload`, imágenes con
  `loading="lazy"`, `decoding="async"` y `srcset` en tarjetas.
- **Accesibilidad**: enlace de salto, `aria-expanded` en desplegables, foco visible,
  navegación por teclado en el menú y las pestañas, y respeto a `prefers-reduced-motion`.
- **SEO**: metadatos y Open Graph por página, JSON-LD `SportsActivityLocation`,
  `sitemap.xml` con `lastmod`/`changefreq`/`priority` y `robots.txt`.
- Los formularios abren el gestor de correo del usuario (`mailto:`). Para recibirlos por
  web hay que conectar un servicio de formularios (Formspree, Netlify Forms, etc.).

## Contenido

Textos, precios, horarios, biografías e imágenes proceden de versuscrossfit.com.
Los rótulos verdes quemados en las fotos originales se recortan por CSS
(`.crop-top` / `.crop-bottom`) para poder reutilizarlas con la tipografía nueva.
