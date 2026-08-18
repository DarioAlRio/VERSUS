/* Shell, cabecera, pie y componentes reutilizables */
const { site, classes, coaches } = require('./data');

/* Marca de agua del logo al fondo de la página. Ponlo a false y reconstruye
   para quitarla: no hay ninguna otra dependencia. */
const BG_LOGO = true;

/* ---------------- Iconos SVG (inline, sin dependencias) ---------------- */
const icon = {
  chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.1 11.1 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.5 2.5 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2.5"/><path d="m3 6.5 9 6 9-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.2 6.1L20.5 11l-6.3 1.9L12 19l-2.2-6.1L3.5 11l6.3-1.9z"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6M7 6v12M17 6v12M20 9v6M7 12h10"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 20v-1.5A3.5 3.5 0 0 0 12.5 15h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="8" r="3.2"/><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.6-3.4M15.4 5.2a3.2 3.2 0 0 1 0 5.6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M12 11v5M12 7.6h.01"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.6l.4-3H13v-2a1 1 0 0 1 1-1z"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12zM10 15V9l5.2 3z"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-2.9-.8c-1.5 0-2.9.9-3.6 2.2-1.6 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7 2-1.1 2.7-2.1a9 9 0 0 0 1.2-2.5c-.1 0-2.4-.9-2.4-3.6zM14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.7-1.3z"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.3 2.6 15 12 4.3 21.4A1.6 1.6 0 0 1 3.5 20V4a1.6 1.6 0 0 1 .8-1.4zm12.2 10.6 2.6 2.4-3.1 1.8-2.6-2.4zm0-2.4L13.4 8l3.1-1.8 3.1 1.8a1.6 1.6 0 0 1 0 2.8z"/></svg>'
};

/* ---------------- Estructura del menú ---------------- */
const classLinks = classes.map(c => ({
  href: c.file,
  label: c.shortName || c.name,
  desc: c.menuDesc,
  img: c.img,
  crop: c.crop
}));

const nav = [
  { label: 'Inicio', href: 'index.html' },
  {
    label: 'El Box',
    href: 'el-box.html',
    panel: {
      cols: 2,
      groups: [
        {
          title: 'Conócenos',
          links: [
            { href: 'que-es-crossfit.html', label: '¿Qué es CrossFit?', desc: 'El método, la comunidad y por qué funciona', ic: icon.spark },
            { href: 'box.html', label: 'Nuestro box', desc: 'Más de 1000 m² con parking propio', ic: icon.pin },
            { href: 'entrenadores.html', label: 'El equipo', desc: '7 entrenadores certificados', ic: icon.users }
          ]
        },
        {
          title: 'Práctico',
          links: [
            { href: 'horarios.html', label: 'Horarios y reservas', desc: 'De 7:00 a 22:00 · app CrossHero', ic: icon.clock },
            { href: 'tarifas.html', label: 'Tarifas', desc: 'Mensual, trimestral y drop-in', ic: icon.cal },
            { href: 'contacto.html', label: 'Contacto y cómo llegar', desc: 'Pol. Ind. Los Olivos, Getafe', ic: icon.mail }
          ]
        }
      ],
      promo: {
        img: 'assets/img/news-battle.jpg',
        title: '1000 m²',
        text: 'Tarimas de halterofilia, zona Open Box, community zone, fisioterapia y parking propio.',
        href: 'box.html',
        cta: 'Ver instalaciones'
      }
    }
  },
  {
    label: 'Entrenamientos',
    href: 'clases.html',
    panel: {
      cols: 2,
      groups: [
        {
          title: 'Programas base',
          links: classLinks.filter(l => ['CrossFit', 'Halterofilia', 'Gymnastic'].indexOf(l.label) > -1)
        },
        {
          title: 'Especialidades',
          links: classLinks.filter(l => ['CrossFit', 'Halterofilia', 'Gymnastic'].indexOf(l.label) === -1)
        }
      ],
      promo: {
        img: 'assets/img/news-hardrunning.jpg',
        title: 'HYROX',
        text: 'Somos gimnasio oficial HYROX en Getafe. Entrena el formato de competición en el box.',
        href: 'clase-hyrox.html',
        cta: 'Descubrir HYROX'
      }
    }
  },
  {
    label: 'Equipo',
    href: 'entrenadores.html',
    panel: {
      cols: 2,
      right: true,
      groups: [
        { title: 'Entrenadores', links: coaches.slice(0, 4).map(c => ({ href: c.file, label: c.shortName || c.name, desc: c.role, img: c.img, crop: 'top' })) },
        { title: ' ', links: coaches.slice(4).map(c => ({ href: c.file, label: c.shortName || c.name, desc: c.role, img: c.img, crop: 'top' })) }
      ]
    }
  },
  { label: 'Tarifas', href: 'tarifas.html' },
  { label: 'Blog', href: 'blog.html' }
];

/* ---------------- Helpers ---------------- */
/* Variantes responsive generadas para las fotos grandes del dominio */
const SMALL = { news: '-640', coach: '-500' };
function variant(src){
  if(!src) return null;
  const base = src.replace(/.jpg$/,'');
  if(/news-/.test(src)) return base + SMALL.news + '.jpg';
  if(/coach-/.test(src)) return base + SMALL.coach + '.jpg';
  return null;
}
function responsiveImg(src, alt, opts){
  opts = opts || {};
  const small = variant(src);
  const cls = opts.cls ? ` class="${opts.cls}"` : '';
  const style = opts.style ? ` style="${opts.style}"` : '';
  const load = opts.eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"';
  if(!small) return `<img${cls} src="${src}" alt="${alt}" width="${opts.w||800}" height="${opts.h||600}"${load}${style}>`;
  const w1 = /news-/.test(src) ? 640 : 500;
  const w2 = /news-/.test(src) ? 1200 : 1000;
  return `<img${cls} src="${small}" srcset="${small} ${w1}w, ${src} ${w2}w" sizes="${opts.sizes||'(max-width:660px) 92vw, (max-width:1000px) 46vw, 30vw'}" alt="${alt}" width="${opts.w||800}" height="${opts.h||600}"${load}${style}>`;
}

/* La dirección enlaza siempre a Google Maps, desde donde sea que aparezca */
function mapLink(texto, cls) {
  return `<a class="map-link${cls ? ' ' + cls : ''}" href="${site.mapLink}" target="_blank" rel="noopener" aria-label="Ver la dirección en Google Maps">${texto}</a>`;
}

function cropClass(c){ return c === 'top' ? ' crop-top' : c === 'bottom' ? ' crop-bottom' : ''; }
function brandTile(){ return '<span class="tile-brand"><img src="assets/img/logo-mark.png" alt="" width="96" height="99" loading="lazy"></span>'; }

function megaLink(l) {
  const media = l.img
    ? `<span class="ic"><img src="${l.img}" alt="" loading="lazy" width="72" height="72" style="object-position:center ${l.crop === 'bottom' ? '80%' : l.crop === 'top' ? '25%' : 'center'}"></span>`
    : `<span class="ic">${l.ic || icon.dumbbell}</span>`;
  return `<li><a class="mega-link" href="${l.href}">${media}<span><b>${l.label}</b>${l.desc ? `<span>${l.desc}</span>` : ''}</span></a></li>`;
}

function megaPanel(panel) {
  const groups = panel.groups.map(g => `
            <div>
              <p class="mega-group-title">${g.title}</p>
              <ul class="mega-list">${g.links.map(megaLink).join('')}</ul>
            </div>`).join('');
  const promo = panel.promo ? `
          <div class="mega-promo">
            ${responsiveImg(panel.promo.img, '', { w: 500, h: 500, sizes: '250px' })}
            <div class="mega-promo-body">
              <b>${panel.promo.title}</b>
              <p>${panel.promo.text}</p>
              <a class="btn btn--sm" href="${panel.promo.href}">${panel.promo.cta}</a>
            </div>
          </div>` : '';
  return `
        <div class="mega${panel.right ? ' mega--right' : ''}">
          <div class="mega-inner">
            <div class="mega-cols cols-${panel.cols}">${groups}
            </div>${promo}
          </div>
        </div>`;
}

function header(current) {
  const items = nav.map(item => {
    const isCurrent = item.href === current ||
      (item.panel && item.panel.groups.some(g => g.links.some(l => l.href === current)));
    const aria = isCurrent ? ' aria-current="page"' : '';
    if (!item.panel) {
      return `        <li><a class="nav-link" href="${item.href}"${aria}>${item.label}</a></li>`;
    }
    return `        <li class="nav-item">
          <a class="nav-link" href="${item.href}" aria-expanded="false"${aria}>${item.label}${icon.chev}</a>${megaPanel(item.panel)}
        </li>`;
  }).join('\n');

  /* El rótulo del grupo enlaza a su página resumen y el chevron solo
     despliega: mismo gesto que en escritorio. */
  const accordions = nav.filter(i => i.panel).map(item => `
          <div class="acc">
            <div class="acc-row">
              <a class="acc-btn" href="${item.href}">${item.label}</a>
              <button class="acc-toggle" type="button" aria-expanded="false" aria-label="Desplegar ${item.label}">${icon.chev}</button>
            </div>
            <div class="acc-panel">
              <div class="acc-panel-inner">
                ${item.panel.groups.map(g => `<div>
                  ${g.title.trim() ? `<p class="acc-group-title">${g.title}</p>` : ''}
                  <ul class="acc-links">${g.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
                </div>`).join('\n                ')}
              </div>
            </div>
          </div>`).join('');

  return `<a class="skip" href="#main">Saltar al contenido</a>

  <div class="topbar">
    <div class="container">
      <p><span class="dot"></span>${mapLink(site.address + ' — ' + site.city)}</p>
      <ul>
        <li><a href="tel:${site.phoneRaw}">${site.phone}</a></li>
        <li><a href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener">WhatsApp ${site.whatsapp}</a></li>
        <li><a href="${site.booking}" target="_blank" rel="noopener">Acceso socios · CrossHero</a></li>
      </ul>
    </div>
  </div>

  <header class="site-header">
    <div class="header-bar">
      <div class="container">
        <a class="brand" href="index.html" aria-label="VERSUS CrossFit VSG — inicio">
          <img src="assets/img/logo.png" alt="VERSUS CrossFit VSG" width="200" height="52">
          <span class="brand-txt">Getafe<br>Madrid</span>
        </a>

        <nav aria-label="Principal">
          <ul class="nav">
${items}
          </ul>
        </nav>

        <div class="header-actions">
          <a class="icon-btn" href="tel:${site.phoneRaw}" aria-label="Llamar al ${site.phone}">${icon.phone}</a>
          <a class="icon-btn" href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">${icon.wa}</a>
          <a class="btn btn--ghost btn--sm" href="horarios.html">Horarios</a>
          <a class="btn btn--sm" href="clase-gratis.html">Clase gratis</a>
        </div>

        <button class="burger" type="button" aria-expanded="false" aria-controls="drawer">
          <span class="burger-lines" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="burger-txt">Menú</span>
        </button>
      </div>
    </div>

    <div class="drawer" id="drawer" aria-hidden="true">
      <div class="drawer-inner">
        <p class="drawer-title">Menú</p>
        <div>
          <div class="acc"><a class="acc-btn" href="index.html">Inicio</a></div>${accordions}
          <div class="acc"><a class="acc-btn" href="tarifas.html">Tarifas</a></div>
          <div class="acc"><a class="acc-btn" href="blog.html">Blog</a></div>
          <div class="acc"><a class="acc-btn" href="contacto.html">Contacto</a></div>
        </div>

        <div class="drawer-cta">
          <a class="btn btn--lg" href="clase-gratis.html">Reserva tu clase gratis</a>
          <a class="btn btn--ghost" href="${site.booking}" target="_blank" rel="noopener">Acceso socios · CrossHero</a>
        </div>

        <div class="drawer-foot">
          <div class="drawer-meta">
            <p><a href="tel:${site.phoneRaw}">${site.phone}</a></p>
            <p><a href="mailto:${site.email}">${site.email}</a></p>
          </div>
          <div class="drawer-social social">
          <a href="${site.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon.ig}</a>
          <a href="${site.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon.fb}</a>
            <a href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.wa}</a>
          </div>
        </div>
      </div>
    </div>
  </header>`;
}

function footer() {
  return `  <footer class="site-footer">
    <div class="container">
      <div class="footer-quote">
        <img src="assets/img/logo-mark.png" alt="" width="96" height="96" loading="lazy">
        <p class="q">${site.quote[0]}<br><em>${site.quote[1]} ${site.quote[2]} ${site.quote[3]}</em></p>
      </div>

      <div class="footer-main">
        <div class="footer-col footer-brand">
          <img src="assets/img/logo.png" alt="VERSUS CrossFit VSG" width="200" height="52" loading="lazy">
          <p>Box oficial afiliado a CrossFit y gimnasio oficial HYROX en Getafe. Más de 1000 m² dedicados al entrenamiento funcional.</p>
          <div class="social">
            <a href="${site.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon.ig}</a>
            <a href="${site.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${icon.fb}</a>
            <a href="${site.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon.yt}</a>
            <a href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.wa}</a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Entrenamientos</h4>
          <ul>${classes.map(c => `<li><a href="${c.file}">${c.shortName || c.name}</a></li>`).join('')}</ul>
        </div>

        <div class="footer-col">
          <h4>El box</h4>
          <ul>
            <li><a href="que-es-crossfit.html">¿Qué es CrossFit?</a></li>
            <li><a href="box.html">Nuestras instalaciones</a></li>
            <li><a href="entrenadores.html">Entrenadores</a></li>
            <li><a href="horarios.html">Horarios y reservas</a></li>
            <li><a href="tarifas.html">Tarifas</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="clase-gratis.html">Clase de prueba gratis</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contacto</h4>
          <address>
            ${mapLink('VERSUS CrossFit Getafe<br>' + site.address + '<br>' + site.city)}<br><br>
            <a href="tel:${site.phoneRaw}">${site.phone}</a><br>
            <a href="https://wa.me/${site.whatsappRaw}">WhatsApp ${site.whatsapp}</a><br>
            <a href="mailto:${site.email}">${site.email}</a>
          </address>
          <div class="app-badges">
            <a class="app-badge" href="${site.booking}" target="_blank" rel="noopener">${icon.apple} App iOS</a>
            <a class="app-badge" href="${site.booking}" target="_blank" rel="noopener">${icon.play} App Android</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© <span data-year>2026</span> CrossFit VSG — Todos los derechos reservados.</p>
        <ul>
          <li><a href="aviso-legal.html">Aviso legal</a></li>
          <li><a href="politica-de-privacidad.html">Política de privacidad</a></li>
          <li><a href="politica-de-cookies.html">Política de cookies</a></li>
          <li><a href="contacto.html">Contacto</a></li>
          <li><a href="${site.booking}" target="_blank" rel="noopener">Acceso socios</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <div class="mobile-bar">
    <a class="btn btn--ghost" href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener">${icon.wa} WhatsApp</a>
    <a class="btn" href="clase-gratis.html">Clase gratis</a>
  </div>

  <div class="cookie" role="region" aria-label="Aviso de cookies">
    <p>Usamos cookies propias y de terceros para mejorar tu experiencia de navegación. Puedes consultar más información en nuestra <a href="politica-de-cookies.html">política de cookies</a> y en la <a href="politica-de-privacidad.html">política de privacidad</a>.</p>
    <div class="btn-row">
      <button class="btn btn--sm" type="button" data-cookie="accept">Aceptar</button>
      <button class="btn btn--ghost btn--sm" type="button" data-cookie="reject">Solo esenciales</button>
    </div>
  </div>

  <div class="lb" aria-hidden="true" role="dialog" aria-label="Imagen ampliada">
    <button class="lb-close" type="button" aria-label="Cerrar">${icon.close}</button>
    <img src="" alt="">
  </div>`;
}

/* ---------------- Shell HTML ---------------- */
function page(opts) {
  const title = opts.title;
  const desc = opts.description;
  const jsonld = opts.jsonld ? `\n  <script type="application/ld+json">${JSON.stringify(opts.jsonld)}</script>` : '';
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="theme-color" content="#0a0b0c">
  <meta name="format-detection" content="telephone=no">
  <link rel="canonical" href="https://www.versuscrossfit.com/${opts.file === 'index.html' ? '' : opts.file}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="VERSUS CrossFit VSG">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="assets/img/${opts.og || 'news-battle.jpg'}">
  <meta property="og:locale" content="es_ES">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="assets/img/favicon.jpg">
  <link rel="apple-touch-icon" href="assets/img/favicon.jpg">
  <link rel="preload" href="assets/fonts/barlow-condensed-800.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="assets/css/site.css">${jsonld}
</head>
<body>
${BG_LOGO ? '  <div class="bg-logo" aria-hidden="true"><img src="assets/img/logo.png" alt="" width="206" height="75"></div>' : ''}
${header(opts.file)}

  <main id="main">
${opts.body}
  </main>

${footer()}

  <script src="assets/js/site.js" defer></script>
</body>
</html>
`;
}

/* ---------------- Bloques reutilizables ---------------- */
function pageHero(o) {
  const crumbs = (o.crumbs || []).map((c, i, arr) =>
    i === arr.length - 1
      ? `<li aria-current="page">${c.label}</li>`
      : `<li><a href="${c.href}">${c.label}</a></li>`
  ).join('');
  return `    <section class="page-hero">
      <div class="page-hero-media">
        <img src="${o.img}" alt="" width="1600" height="900" fetchpriority="high"${o.pos ? ` style="object-position:center ${o.pos}"` : ''}>
      </div>
      <div class="container">
        <ul class="crumbs">${crumbs}</ul>
        <h1 class="display d-lg">${o.title}</h1>
        ${o.lead ? `<p class="lead">${o.lead}</p>` : ''}
        ${o.tags ? `<div class="tag-row u-mt-2">${o.tags.map(t => `<span class="tag${t.green ? ' tag--green' : ''}">${t.label || t}</span>`).join('')}</div>` : ''}
      </div>
    </section>`;
}

function ctaBand(o) {
  o = o || {};
  return `    <section class="cta-band">
      <div class="cta-band-media">
        <img src="${o.img || 'assets/img/news-battle.jpg'}" alt="" loading="lazy" width="1440" height="960">
      </div>
      <div class="container" data-reveal>
        <p class="kicker" style="justify-content:center">${o.kicker || 'Primera clase gratis'}</p>
        <h2 class="display d-lg u-mt-2">${o.title || 'Ven a probar<br>un WOD con nosotros'}</h2>
        <p class="lead">${o.text || 'Reserva tu clase de prueba sin compromiso. Te enseñamos el box, te explicamos el método y entrenas con el grupo. Sin experiencia previa.'}</p>
        <div class="btn-row">
          <a class="btn btn--lg" href="clase-gratis.html">Reservar clase gratis</a>
          <a class="btn btn--ghost btn--lg" href="tarifas.html">Ver tarifas</a>
        </div>
      </div>
    </section>`;
}

function classCard(c) {
  const media = c.img
    ? responsiveImg(c.img, `Clase de ${c.name} en VERSUS CrossFit Getafe`, { w: 580, h: 360 })
    : brandTile();
  return `        <article class="card">
          <span class="card-accent"></span>
          <div class="card-media${cropClass(c.crop)}">
            ${media}
            <span class="tag tag--green">${c.level}</span>
          </div>
          <div class="card-body">
            <h3>${c.name}</h3>
            <p>${c.summary}</p>
            <div class="card-foot">
              <span class="tag">${c.duration}</span>
              <a class="link-arrow card-link" href="${c.file}">Ver clase ${icon.arrow}</a>
            </div>
          </div>
        </article>`;
}

/* Tarjeta de una opción dentro de una página resumen de sección */
function hubCard(o) {
  return `        <article class="card">
          <span class="card-accent"></span>
          <div class="card-media">
            ${responsiveImg('assets/img/' + o.img, o.alt || o.title, { w: 580, h: 360 })}
          </div>
          <div class="card-body">
            <h3>${o.title}</h3>
            <p>${o.text}</p>
            <div class="card-foot">
              <span class="tag">${o.tag}</span>
              <a class="link-arrow card-link" href="${o.href}">${o.cta || 'Ver'} ${icon.arrow}</a>
            </div>
          </div>
        </article>`;
}

function coachCard(c) {
  const media = c.img
    ? responsiveImg(c.img, `${c.name}, entrenador de VERSUS CrossFit`, { w: 600, h: 800, sizes: '(max-width:660px) 92vw, (max-width:1000px) 46vw, 23vw' })
    : `<span class="coach-fallback"><img src="assets/img/logo-mark.png" alt="" width="96" height="96" loading="lazy"></span>`;
  return `        <article class="coach">
          <div class="coach-media">${media}</div>
          <div class="coach-body">
            <h3>${c.shortName || c.name}</h3>
            <p>${c.role}</p>
          </div>
          <a class="coach-link" href="${c.file}"><span class="sr-only">Ver perfil de ${c.name}</span></a>
        </article>`;
}

function postCard(p) {
  return `        <article class="post">
          <div class="frame frame--4x3">${responsiveImg(p.img, '', { w: 640, h: 480 })}</div>
          <time datetime="${p.date}">${p.dateLabel} · ${p.cat}</time>
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
          <a class="post-link link-arrow" href="post-${p.slug}.html">Leer más ${icon.arrow}</a>
        </article>`;
}

function renderBlocks(blocks) {
  return blocks.map(b => {
    if (b.type === 'p') return `<p>${b.text}</p>`;
    if (b.type === 'h3') return `<h3>${b.text}</h3>`;
    if (b.type === 'ticks') return `<ul class="ticks">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    if (b.type === 'note') return `<div class="note u-mt-2">${icon.info}<p>${b.text}</p></div>`;
    if (b.type === 'quote') return `<blockquote>${b.text}${b.cite ? `<cite>${b.cite}</cite>` : ''}</blockquote>`;
    return '';
  }).join('\n        ');
}

module.exports = { icon, nav, mapLink, page, pageHero, ctaBand, classCard, coachCard, hubCard, postCard, renderBlocks };
