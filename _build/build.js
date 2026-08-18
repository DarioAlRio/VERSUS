/* Generador estático — VERSUS CrossFit VSG
   Uso:  node _build/build.js
   Escribe los .html en la raíz del proyecto. */

const fs = require('fs');
const path = require('path');
const { site, classes, coaches, pricing, schedule, posts } = require('./data');
const T = require('./templates');
const { icon, page, pageHero, ctaBand, classCard, coachCard, postCard, renderBlocks } = T;

const OUT = path.join(__dirname, '..');
const pages = [];
function add(file, html) { pages.push({ file, html }); }

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'VERSUS CrossFit VSG',
  description: 'Box oficial afiliado a CrossFit y gimnasio oficial HYROX en Getafe, Madrid.',
  url: 'https://www.versuscrossfit.com/',
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'C/ Sindicalismo 3 y 5',
    addressLocality: 'Getafe',
    postalCode: '28906',
    addressRegion: 'Madrid',
    addressCountry: 'ES'
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '07:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:30' }
  ]
};

/* ==================================================================== *
 * 1 · Home
 * ==================================================================== */
const home = `    <section class="hero">
      <div class="hero-media">
        <img src="assets/img/news-battle.jpg" alt="La comunidad de VERSUS CrossFit reunida en el box de Getafe" width="1440" height="960" fetchpriority="high">
      </div>
      <span class="hero-grain"></span>
      <div class="container">
        <div class="hero-content">
          <p class="kicker">Box oficial afiliado · Getafe, Madrid</p>
          <h1 class="display d-xl">CrossFit<br>en Getafe<em>Aquí se entrena en serio</em></h1>
          <p class="lead">Más de 1000&nbsp;m² con parking propio, siete disciplinas y un equipo de entrenadores certificados. Somos también <strong>gimnasio oficial HYROX</strong>.</p>
          <div class="btn-row">
            <a class="btn btn--lg" href="clase-gratis.html">Reserva tu clase gratis</a>
            <a class="btn btn--ghost btn--lg" href="clases.html">Ver entrenamientos ${icon.arrow}</a>
          </div>
          <div class="hero-badges">
            <span class="lbl">Oficialmente</span>
            <span class="badge-logo"><img src="assets/img/hyrox-logo.png" alt="HYROX Official Gym" width="297" height="170" loading="lazy"></span>
            <span class="tag tag--green">CrossFit Affiliate</span>
            <span class="tag">Desde 2018</span>
          </div>
        </div>
      </div>
      <span class="scroll-cue">Scroll</span>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="stats" data-stagger>
          <div class="stat"><b>1000<i>m²</i></b><span>De instalaciones<br>con parking propio</span></div>
          <div class="stat"><b>7</b><span>Disciplinas<br>en la programación</span></div>
          <div class="stat"><b>7</b><span>Entrenadores<br>certificados</span></div>
          <div class="stat"><b>+7</b><span>Años<br>de comunidad</span></div>
        </div>
      </div>
    </section>

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span>CrossFit</span><span>HYROX</span><span>Halterofilia</span><span>Gymnastic</span><span>Strongman</span><span>Open Box</span><span>Yoga + Core</span>
        <span>CrossFit</span><span>HYROX</span><span>Halterofilia</span><span>Gymnastic</span><span>Strongman</span><span>Open Box</span><span>Yoga + Core</span>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="split split--rev">
          <div data-reveal>
            <p class="kicker">Nuestro box</p>
            <h2 class="display d-md u-mt-2">Un box grande<br>para entrenar<br>sin esperas</h2>
            <p class="lead u-mt-2">CrossFit VSG está en el Polígono Industrial Los Olivos de Getafe, con parking propio. Más de 1000&nbsp;m² dedicados a clases guiadas, zona de tarimas de halterofilia y una amplia parte reservada al Open Box.</p>
            <div class="grid g-2 u-mt-3" data-stagger>
              <div class="feature"><span class="num">01</span><h3>Equipamiento</h3><p>Racks de potencia, barras de dominadas, anillas, material de competición, airbikes, Skiergs, C2Bikes, EchoBikes…</p></div>
              <div class="feature"><span class="num">02</span><h3>Servicios</h3><p>Vestuarios, duchas, taquillas, tienda de ropa y suplementación, sala de fisioterapia y nutricionista.</p></div>
            </div>
            <div class="btn-row u-mt-3">
              <a class="btn btn--outline-green" href="box.html">Conocer las instalaciones ${icon.arrow}</a>
            </div>
          </div>
          <div data-reveal>
            <div class="frame frame--4x3"><img src="assets/img/news-7anos.jpg" alt="Equipo VERSUS en el box de Getafe" loading="lazy" width="800" height="600"></div>
            <div class="collage--trio u-mt-1">
              <figure class="thumb"><div class="frame frame--16x9"><img src="assets/img/box-fachada.jpg" alt="Fachada del box" loading="lazy" width="220" height="103"></div><figcaption>Fachada</figcaption></figure>
              <figure class="thumb"><div class="frame frame--16x9"><img src="assets/img/box-instalaciones.jpg" alt="Interior del box" loading="lazy" width="220" height="103"></div><figcaption>Instalaciones</figcaption></figure>
              <figure class="thumb"><div class="frame frame--16x9"><img src="assets/img/box-material.jpg" alt="Material del box" loading="lazy" width="220" height="103"></div><figcaption>Material</figcaption></figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">Entrenamientos</p>
            <h2 class="display d-md u-mt-2">Siete formas<br>de hacerte más fuerte</h2>
            <p class="lead u-mt-2">Desde el WOD diario hasta la tarima de halterofilia. Todas las clases duran 60 minutos y están guiadas por un entrenador.</p>
          </div>
          <a class="btn btn--ghost" href="clases.html">Ver todas ${icon.arrow}</a>
        </div>
        <div class="grid g-3" data-stagger>
${classes.map(classCard).join('\n')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="band" data-reveal>
          <div class="band-media"><img src="assets/img/news-hardrunning-640.jpg" alt="" loading="lazy" width="640" height="800"></div>
          <div class="band-grid">
            <div>
              <span class="badge-logo"><img src="assets/img/hyrox-logo.png" alt="HYROX" width="297" height="170" loading="lazy"></span>
              <h2 class="display d-md">Gimnasio oficial<br>HYROX en Getafe</h2>
              <p class="lead u-mt-2">HYROX es un estilo de entrenamiento funcional que no requiere experiencia previa: combina resistencia y fuerza sin movimientos de halterofilia ni gran dificultad técnica. En VERSUS entrenamos el formato de competición con la programación y el material específicos.</p>
            </div>
            <div class="btn-row">
              <a class="btn" href="clase-hyrox.html">Descubrir HYROX</a>
              <a class="btn btn--ghost" href="horarios.html">Ver horarios</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">El equipo</p>
            <h2 class="display d-md u-mt-2">Entrenadores<br>que te corrigen<br>en cada rep</h2>
            <p class="lead u-mt-2">La diferencia con un gimnasio convencional: durante toda la sesión tienes un entrenador especializado enseñándote, corrigiendo tu técnica y exigiéndote.</p>
          </div>
          <a class="btn btn--ghost" href="entrenadores.html">Ver el equipo ${icon.arrow}</a>
        </div>
        <div class="grid g-4" data-stagger>
${coaches.slice(0, 4).map(coachCard).join('\n')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">Tarifas</p>
            <h2 class="display d-md u-mt-2">Elige cómo<br>quieres entrenar</h2>
            <p class="lead u-mt-2">${pricing.note}</p>
          </div>
          <a class="btn btn--ghost" href="tarifas.html">Todas las tarifas ${icon.arrow}</a>
        </div>
        <div class="grid g-3" data-stagger>
          <div class="plan plan--free">
            <h3>Clase de prueba</h3>
            <p class="amount">¡Gratis!</p>
            <p class="per">Primera sesión</p>
            <p class="desc">Reserva tu clase de prueba en nuestro box y conoce el método, las instalaciones y al equipo.</p>
            <a class="btn" href="clase-gratis.html">Reservar</a>
          </div>
          <div class="plan plan--featured">
            <h3>Box ilimitado</h3>
            <p class="amount"><span class="cur">€</span>89,90</p>
            <p class="per">/ mes</p>
            <p class="desc">Clases ilimitadas: disfruta de tantas clases como desees al mes (1 reserva al día).</p>
            <a class="btn" href="tarifas.html">Ver detalle</a>
          </div>
          <div class="plan">
            <h3>Drop in</h3>
            <p class="amount"><span class="cur">€</span>12</p>
            <p class="per">/ sesión</p>
            <p class="desc">Sesión de entrenamiento para atletas que no son socios del box. Ideal si estás de paso por Madrid.</p>
            <a class="btn btn--ghost" href="contacto.html">Contactar</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">Últimas noticias</p>
            <h2 class="display d-md u-mt-2">Lo que pasa<br>en el box</h2>
          </div>
          <a class="btn btn--ghost" href="blog.html">Ver el blog ${icon.arrow}</a>
        </div>
        <div class="grid g-3" data-stagger>
${posts.slice(0, 3).map(postCard).join('\n')}
        </div>
      </div>
    </section>

${ctaBand()}`;

add('index.html', page({
  file: 'index.html',
  title: 'VERSUS CrossFit VSG · Box de CrossFit y HYROX en Getafe',
  description: 'Box oficial afiliado a CrossFit y gimnasio oficial HYROX en Getafe (Madrid). Más de 1000 m², 7 disciplinas y entrenadores certificados. Reserva tu clase de prueba gratis.',
  jsonld: orgJsonLd,
  body: home
}));

/* ==================================================================== *
 * 2 · Qué es CrossFit
 * ==================================================================== */
const queEs = `${pageHero({
  img: 'assets/img/news-7anos.jpg',
  title: '¿Qué es<br>CrossFit?',
  lead: 'Un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a alta intensidad.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'El Box', href: 'box.html' }, { label: '¿Qué es CrossFit?' }]
})}

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="prose" data-reveal>
            <p>Nos valemos de una gran cantidad de ejercicios y disciplinas deportivas (gimnasia, halterofilia, carrera…), de entre las cuales seleccionamos técnicas o movimientos aplicables a la vida diaria y los combinamos de muchas formas diferentes en entrenamientos intensos. El resultado no es solo una experiencia exigente durante la cual el carácter lúdico y la camaradería cobran un papel primordial, sino también <strong>un programa insuperable para desarrollar las diez capacidades físicas generales</strong>.</p>
            <ul class="ticks">
              <li>Resistencia cardiovascular</li><li>Resistencia energética</li><li>Fuerza</li><li>Flexibilidad</li><li>Potencia</li>
              <li>Velocidad</li><li>Coordinación</li><li>Agilidad</li><li>Equilibrio</li><li>Precisión</li>
            </ul>
          </div>
          <div data-reveal>
            <div class="frame frame--4x3 crop-top"><img src="assets/img/clase-crossfit.jpg" alt="Clase de CrossFit" loading="lazy" width="800" height="600"></div>
            <div class="note u-mt-2">${icon.info}<p>Cada clase dura <strong>1 hora</strong>: calentamiento adaptado al WOD, parte principal y vuelta a la calma con estiramientos.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container container--narrow prose" data-reveal>
        <h3>¿A quién va dirigido este tipo de entrenamiento?</h3>
        <p>Gracias a su tremenda efectividad como sistema de preparación física, en sus orígenes el CrossFit fue elegido por numerosas academias militares, cuerpos de policía, artistas marciales y cientos de deportistas de élite en todo el mundo como programa de acondicionamiento y entrenamiento de fuerza estándar.</p>
        <p>No obstante, a día de hoy el CrossFit se ha popularizado en todos los sectores de la población. <strong>El hecho de ser un programa diseñado para ser fácilmente adaptable lo convierte en el sistema de entrenamiento perfecto para cualquier persona con motivación, independientemente de su edad, sexo, capacidades o experiencia previa.</strong></p>
        <p>Una de las grandes maravillas del CrossFit es que durante su práctica un mismo entrenamiento puede ser realizado simultáneamente por una persona mayor con movilidad reducida y un bombero en un estado de forma óptimo. La clave está en trabajar en niveles de intensidad relativos a cada individuo, adaptando cargas, tiempos y distancias para mantener los estímulos sin modificar el programa.</p>
        <blockquote>Las necesidades de los deportistas olímpicos y las de nuestros abuelos difieren en grado, no en modo.<cite>Greg Glassman, creador del CrossFit</cite></blockquote>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split split--rev">
          <div class="prose" data-reveal>
            <h3>La comunidad y el CrossFit</h3>
            <p>Podemos afirmar sin lugar a dudas que la comunidad supone una parte fundamental del CrossFit. Pertenecer a esa comunidad implica que en el momento en el que empezamos a practicarlo pasamos a engrosar una gran familia de personas con las que compartir sufrimientos y alegrías.</p>
            <p><strong>La comunidad interna del box se manifiesta cada vez que un deportista anima, apoya, da aliento y a la vez exige lo máximo a otro compañero de entrenamiento.</strong> Esto nos aleja de la soledad de los centros deportivos clásicos y nos conduce a un hermanamiento con nuestros camaradas de fatigas.</p>
            <blockquote>Sufrimos juntos y triunfamos juntos. Nos animamos unos a otros. Nos impulsamos a superar el sufrimiento y a alcanzar logros que creíamos imposibles. Tanto dentro como fuera del box acabamos siendo una familia.</blockquote>
          </div>
          <div class="frame frame--3x4" data-reveal><img src="assets/img/news-7anos.jpg" alt="Comunidad de VERSUS CrossFit" loading="lazy" width="700" height="930"></div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="grid g-2" data-stagger>
          <div class="feature">
            <span class="num">01</span>
            <h3>¿Por qué mejorarás respecto de un gym tradicional?</h3>
            <p>La mayoría de las personas han pasado alguna vez por un gimnasio convencional, logrando objetivos poco espectaculares o abandonándolo por falta de motivación o de resultados. La diferencia que marca el CrossFit es que <strong>durante toda la sesión tendrás entrenadores especializados enseñándote y corrigiendo tu técnica</strong>, además de exigirte para que consigas superarte en cada entrenamiento.</p>
          </div>
          <div class="feature">
            <span class="num">02</span>
            <h3>CrossFit como complemento para tu deporte</h3>
            <p>CrossFit trabaja todas las capacidades físicas, por lo que su práctica mejora notablemente cualquier otra modalidad deportiva. Cuanta mayor capacidad aeróbica desarrolles, más cómodo llegarás a rematar tras una carrera de 50 metros; cuanta más fuerza en las piernas, más potente será ese remate. <strong>Es la herramienta perfecta para sacar el máximo partido a tu rendimiento deportivo.</strong></p>
          </div>
        </div>
      </div>
    </section>

${ctaBand({ img: 'assets/img/news-hardrunning.jpg' })}`;

add('que-es-crossfit.html', page({
  file: 'que-es-crossfit.html',
  title: '¿Qué es CrossFit? · VERSUS CrossFit VSG Getafe',
  description: 'CrossFit es un sistema de entrenamiento de fuerza y acondicionamiento con ejercicios funcionales variados a alta intensidad. Descubre a quién va dirigido y por qué funciona.',
  og: 'news-7anos.jpg',
  body: queEs
}));

/* ==================================================================== *
 * 3 · Nuestro box
 * ==================================================================== */
const boxPage = `${pageHero({
  img: 'assets/img/news-battle.jpg',
  title: 'Nuestro box<br>en Getafe',
  lead: 'Más de 1000 m² en el Polígono Industrial Los Olivos, con parking propio y todo el material que necesitas.',
  tags: [{ label: '1000 m²', green: true }, 'Parking propio', 'Fisioterapia', 'Community zone'],
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'El Box', href: 'box.html' }, { label: 'Nuestro box' }]
})}

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="prose" data-reveal>
            <h3>Ubicación</h3>
            <p>CrossFit VSG está ubicado en la <strong>Calle Sindicalismo 3 y 5 de Getafe</strong>, Madrid, en el Polígono Industrial Los Olivos. Tenemos <strong>parking propio</strong>, así que aparcar nunca es un problema.</p>
            <h3>Instalaciones</h3>
            <p>Más de 1000&nbsp;m² dedicados a nuestras clases guiadas por entrenadores, zona de tarimas de halterofilia y una amplia parte dedicada al Open Box. Podrás descansar, comer o tomarte un café en nuestra confortable <strong>«Zona Community»</strong>. Disponemos también de sala de fisioterapia y nutricionista.</p>
          </div>
          <div data-reveal>
            <div class="frame frame--4x3"><img src="assets/img/news-battle.jpg" alt="Interior del box VERSUS CrossFit Getafe" loading="lazy" width="800" height="600"></div>
            <div class="collage--trio u-mt-1">
              <figure class="thumb"><div class="frame frame--16x9"><img src="assets/img/box-fachada.jpg" alt="Fachada del box" loading="lazy" width="220" height="103"></div><figcaption>Fachada</figcaption></figure>
              <figure class="thumb"><div class="frame frame--16x9"><img src="assets/img/box-material.jpg" alt="Material del box" loading="lazy" width="220" height="103"></div><figcaption>Material</figcaption></figure>
              <figure class="thumb"><div class="frame frame--16x9"><img src="assets/img/box-community.jpg" alt="Zona community" loading="lazy" width="300" height="93"></div><figcaption>Community</figcaption></figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Lo que vas a encontrar</p>
          <h2 class="display d-md u-mt-2">Equipamiento<br>y servicios</h2>
        </div>
        <div class="grid g-2" data-stagger>
          <div class="feature">
            <span class="num">01</span>
            <h3>Equipamiento CrossFit</h3>
            <p>Estructuras con racks de potencia, barras de dominadas, puestos de anillas, barras y discos de competición, kettlebells, cajones, balones, trineos, farmers, barriles, slam balls, sandbags, bancos de press, remos, cuerdas, bandas de estiramiento, colchonetas, foam rollers, combas, paralelas, GHD, airbike, Skiergs, C2Bikes, EchoBikes…</p>
          </div>
          <div class="feature">
            <span class="num">02</span>
            <h3>Servicios</h3>
            <p>Vestuarios, duchas, taquillas diarias, snacks, barritas, agua y bebidas isotónicas, proteínas y pre-entrenos, tienda de ropa y complementos y tienda de suplementación. Además, sala de fisioterapia y servicio de nutricionista.</p>
          </div>
          <div class="feature">
            <span class="num">03</span>
            <h3>Zona de halterofilia</h3>
            <p>Área específica con tarimas, barras y discos de competición donde entrena el <strong>Club de Halterofilia VERSUS</strong>, que compite cada temporada en la Liga Madrileña.</p>
          </div>
          <div class="feature">
            <span class="num">04</span>
            <h3>Open Box</h3>
            <p>Una amplia zona reservada para entrenamiento libre: recupera un WOD, prepara una competición o trabaja el movimiento que se te resiste. <strong>Gratis todos los sábados para socios.</strong></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Cómo llegar</p>
          <h2 class="display d-md u-mt-2">Mapa de localización</h2>
        </div>
        <div class="map" data-reveal>
          <iframe src="${site.mapEmbed}" title="Mapa de situación de VERSUS CrossFit Getafe" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
        <div class="grid g-3 u-mt-3" data-stagger>
          <div class="info-tile"><span class="ic">${icon.pin}</span><div><h3>Dirección</h3><p>VERSUS CrossFit Getafe<br>${site.address}<br>${site.city}</p></div></div>
          <div class="info-tile"><span class="ic">${icon.phone}</span><div><h3>Teléfono</h3><p><a href="tel:${site.phoneRaw}">${site.phone}</a><br><a href="https://wa.me/${site.whatsappRaw}">WhatsApp ${site.whatsapp}</a></p></div></div>
          <div class="info-tile"><span class="ic">${icon.mail}</span><div><h3>Email</h3><p><a href="mailto:${site.email}">${site.email}</a></p></div></div>
        </div>
      </div>
    </section>

${ctaBand({ img: 'assets/img/news-7anos.jpg' })}`;

add('box.html', page({
  file: 'box.html',
  title: 'Nuestro box en Getafe · VERSUS CrossFit VSG',
  description: 'Más de 1000 m² en el Polígono Industrial Los Olivos de Getafe, con parking propio, tarimas de halterofilia, zona Open Box, fisioterapia y nutricionista.',
  og: 'news-battle.jpg',
  body: boxPage
}));

/* ==================================================================== *
 * 4 · Horarios y reservas
 * ==================================================================== */
const horarios = `${pageHero({
  img: 'assets/img/news-open2025.jpg',
  title: 'Horarios<br>y reservas',
  lead: 'Abrimos de 7:00 a 22:00. Reserva tu plaza desde la app CrossHero, disponible para iOS y Android.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'El Box', href: 'box.html' }, { label: 'Horarios y reservas' }]
})}

    <section class="section">
      <div class="container">
        <div class="split">
          <div data-reveal>
            <p class="kicker">Franjas de apertura</p>
            <h2 class="display d-md u-mt-2">Cuándo<br>puedes entrenar</h2>
            <div class="table-wrap u-mt-3">
              <table class="tbl">
                <thead><tr><th scope="col">Franja</th><th scope="col">Días</th><th scope="col">Horario</th></tr></thead>
                <tbody>
${schedule.map(s => s.rows.map((r, i) => `                  <tr>${i === 0 ? `<th scope="row" rowspan="${s.rows.length}">${s.block}</th>` : ''}<td>${r[0]}</td><td><b>${r[1]}</b></td></tr>`).join('\n')).join('\n')}
                </tbody>
              </table>
            </div>
            <div class="note u-mt-2">${icon.info}<p>El cuadrante detallado de clases por disciplina se publica en el box y en la app. Consulta la imagen del horario completo aquí al lado.</p></div>
          </div>

          <div data-reveal>
            <p class="kicker">Reservas</p>
            <h2 class="display d-md u-mt-2">Reserva desde<br>la app</h2>
            <p class="lead u-mt-2">Descárgate la aplicación para la reserva de nuestras clases o accede desde la web de CrossHero.</p>
            <div class="btn-row u-mt-3">
              <a class="btn" href="${site.booking}" target="_blank" rel="noopener">Entrar en CrossHero ${icon.arrow}</a>
            </div>
            <div class="app-badges u-mt-2">
              <a class="app-badge" href="${site.booking}" target="_blank" rel="noopener">${icon.apple} Aplicación iOS</a>
              <a class="app-badge" href="${site.booking}" target="_blank" rel="noopener">${icon.play} Aplicación Android</a>
            </div>
            <div class="grid u-mt-3" data-stagger>
              <div class="info-tile"><span class="ic">${icon.clock}</span><div><h3>Duración</h3><p>Todas las clases guiadas duran 60 minutos.</p></div></div>
              <div class="info-tile"><span class="ic">${icon.cal}</span><div><h3>Open Box</h3><p>Gratuito todos los sábados para socios del box.</p></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">Cuadrante completo</p>
            <h2 class="display d-md u-mt-2">Horario de clases</h2>
            <p class="lead u-mt-2">Pulsa sobre la imagen para verla a pantalla completa.</p>
          </div>
        </div>
        <div class="frame zoomable" data-reveal style="border-radius:var(--radius-lg);max-width:900px;margin-inline:auto">
          <img src="assets/img/horario.jpg" alt="Cuadrante de horarios de clases de VERSUS CrossFit Getafe" loading="lazy" width="1192" height="1686" style="height:auto">
        </div>
        <div class="btn-row u-mt-2" data-reveal style="justify-content:center">
          <a class="btn btn--ghost" href="assets/img/horario.jpg" target="_blank" rel="noopener">${icon.download} Abrir el horario en grande</a>
        </div>
      </div>
    </section>

${ctaBand({ img: 'assets/img/news-barbacoa.jpg' })}`;

add('horarios.html', page({
  file: 'horarios.html',
  title: 'Horarios y reservas · VERSUS CrossFit VSG Getafe',
  description: 'Horarios de VERSUS CrossFit Getafe: mañanas de 7:00 a 13:00, mediodía y tardes hasta las 22:00. Reserva tus clases desde la app CrossHero.',
  og: 'news-open2025.jpg',
  body: horarios
}));

/* ==================================================================== *
 * 5 · Clases (índice) + páginas de clase
 * ==================================================================== */
const clasesIndex = `${pageHero({
  img: 'assets/img/news-battle.jpg',
  title: 'Entrenamientos',
  lead: 'Siete disciplinas dentro del mismo box. Todas las clases guiadas duran 60 minutos y están dirigidas por un entrenador certificado.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Entrenamientos' }]
})}

    <section class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Programas base</p>
          <h2 class="display d-md u-mt-2">El núcleo<br>de la programación</h2>
        </div>
        <div class="grid g-3" data-stagger>
${classes.filter(c => ['crossfit', 'halterofilia', 'gymnastic'].indexOf(c.slug) > -1).map(classCard).join('\n')}
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Especialidades</p>
          <h2 class="display d-md u-mt-2">Para afinar<br>o cambiar de estímulo</h2>
        </div>
        <div class="grid g-4" data-stagger>
${classes.filter(c => ['crossfit', 'halterofilia', 'gymnastic'].indexOf(c.slug) === -1).map(classCard).join('\n')}
        </div>
      </div>
    </section>

${ctaBand()}`;

add('clases.html', page({
  file: 'clases.html',
  title: 'Entrenamientos y clases · VERSUS CrossFit VSG Getafe',
  description: 'CrossFit, HYROX, Halterofilia, Gymnastic, Hybrid Strongman, Yoga + Core y Open Box. Siete disciplinas guiadas por entrenadores certificados en Getafe.',
  og: 'news-battle.jpg',
  body: clasesIndex
}));

classes.forEach(c => {
  const others = classes.filter(o => o.slug !== c.slug).slice(0, 3);
  const trainerChips = c.trainers.length
    ? `<div class="u-mt-3">
              <p class="kicker kicker--muted">Entrenadores de esta clase</p>
              <div class="tag-row u-mt-2">${c.trainers.map(t => {
      const co = coaches.find(x => x.name === t || x.shortName === t);
      return co ? `<a class="tag" href="${co.file}">${t}</a>` : `<span class="tag">${t}</span>`;
    }).join('')}</div>
            </div>`
    : '';

  const body = `${pageHero({
    img: c.heroImg || c.img || 'assets/img/news-battle.jpg',
    pos: c.crop === 'top' ? '12%' : c.crop === 'bottom' ? '86%' : '35%',
    title: c.name,
    lead: c.intro,
    tags: [{ label: c.level, green: true }, c.duration, ...(c.badge ? [c.badge] : [])],
    crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Entrenamientos', href: 'clases.html' }, { label: c.shortName || c.name }]
  })}

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="prose" data-reveal>
        ${renderBlocks(c.blocks)}
          </div>
          <div data-reveal>
            <div class="frame frame--4x3${c.crop === 'top' ? ' crop-top' : c.crop === 'bottom' ? ' crop-bottom' : ''}">${c.img ? `<img src="${c.img}" alt="Clase de ${c.name}" loading="lazy" width="800" height="600">` : `<img src="${c.heroImg}" alt="Sesión en VERSUS CrossFit" loading="lazy" width="800" height="600">`}</div>
            ${trainerChips}
            <div class="btn-row u-mt-3">
              <a class="btn" href="clase-gratis.html">Probar gratis</a>
              <a class="btn btn--ghost" href="horarios.html">Ver horarios</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">Otras clases</p>
            <h2 class="display d-md u-mt-2">Sigue explorando</h2>
          </div>
          <a class="btn btn--ghost" href="clases.html">Ver todas ${icon.arrow}</a>
        </div>
        <div class="grid g-3" data-stagger>
${others.map(classCard).join('\n')}
        </div>
      </div>
    </section>

${ctaBand()}`;

  add(c.file, page({
    file: c.file,
    title: `${c.name} · VERSUS CrossFit VSG Getafe`,
    description: c.summary,
    og: (c.img || c.heroImg || 'assets/img/news-battle.jpg').replace('assets/img/', ''),
    body
  }));
});

/* ==================================================================== *
 * 6 · Entrenadores (índice) + fichas
 * ==================================================================== */
const entrenadores = `${pageHero({
  img: 'assets/img/coach-mateo.jpg',
  title: 'Entrenadores',
  lead: 'Certificaciones CrossFit Level 1 y 2, entrenadores nacionales de halterofilia, especialistas en gimnasia, kettlebell y strongman. Un equipo que corrige, exige y acompaña.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Equipo' }]
})}

    <section class="section">
      <div class="container">
        <div class="grid g-4" data-stagger>
${coaches.map(coachCard).join('\n')}
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container container--narrow prose u-center" data-reveal>
        <blockquote style="border:0;padding:0;text-align:center">La diferencia con un gimnasio típico es que durante una sesión de CrossFit tendrás entrenadores especializados enseñándote y corrigiendo tu técnica en todo momento, además de exigiéndote para que consigas superarte a ti mismo en cada entrenamiento.</blockquote>
      </div>
    </section>

${ctaBand({ img: 'assets/img/news-liga2.jpg' })}`;

add('entrenadores.html', page({
  file: 'entrenadores.html',
  title: 'Entrenadores · VERSUS CrossFit VSG Getafe',
  description: 'Conoce al equipo de entrenadores de VERSUS CrossFit Getafe: CrossFit Level 1 y 2, halterofilia nacional, gimnasia, kettlebell y strongman.',
  og: 'coach-mateo.jpg',
  body: entrenadores
}));

coaches.forEach(c => {
  const others = coaches.filter(o => o.slug !== c.slug).slice(0, 4);
  const media = c.img
    ? `<div class="frame frame--3x4"><img src="${c.img}" alt="${c.name}" loading="lazy" width="700" height="930" style="object-position:center 20%"></div>`
    : `<div class="frame frame--3x4"><span class="coach-fallback"><img src="assets/img/logo-mark.png" alt="" width="96" height="96" loading="lazy"></span></div>`;

  const body = `${pageHero({
    img: c.img || 'assets/img/box-instalaciones.jpg',
    title: c.name,
    lead: c.role,
    crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Equipo', href: 'entrenadores.html' }, { label: c.shortName || c.name }]
  })}

    <section class="section">
      <div class="container">
        <div class="split split--rev">
          <div class="prose" data-reveal>
            ${c.bio.map(p => `<p>${p}</p>`).join('\n            ')}
            ${c.quote ? `<blockquote>${c.quote}<cite>${c.name}</cite></blockquote>` : ''}
            ${c.creds.length ? `<h3>Titulaciones</h3><ul class="ticks">${c.creds.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
            ${c.teaches.length ? `<h3>Clases que imparte</h3><div class="tag-row">${c.teaches.map(t => {
    const cl = classes.find(x => x.name === t || x.shortName === t);
    return cl ? `<a class="tag tag--green" href="${cl.file}">${t}</a>` : `<span class="tag">${t}</span>`;
  }).join('')}</div>` : ''}
          </div>
          <div data-reveal>
            ${media}
            <div class="btn-row u-mt-3">
              <a class="btn" href="clase-gratis.html">Entrenar con el equipo</a>
              <a class="btn btn--ghost" href="horarios.html">Horarios</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head section-head--split" data-reveal>
          <div>
            <p class="kicker">El equipo</p>
            <h2 class="display d-md u-mt-2">Otros entrenadores</h2>
          </div>
          <a class="btn btn--ghost" href="entrenadores.html">Ver todos ${icon.arrow}</a>
        </div>
        <div class="grid g-4" data-stagger>
${others.map(coachCard).join('\n')}
        </div>
      </div>
    </section>`;

  add(c.file, page({
    file: c.file,
    title: `${c.name} · Entrenador en VERSUS CrossFit VSG`,
    description: `${c.name} — ${c.role}. Entrenador en VERSUS CrossFit Getafe.`,
    og: c.img ? c.img.replace('assets/img/', '') : 'news-battle.jpg',
    body
  }));
});

/* ==================================================================== *
 * 7 · Tarifas
 * ==================================================================== */
function planCard(p) {
  const amount = p.free
    ? `<p class="amount">${p.price}</p>`
    : `<p class="amount"><span class="cur">€</span>${p.price}</p>`;
  return `          <div class="plan${p.featured ? ' plan--featured' : ''}${p.free ? ' plan--free' : ''}">
            <h3>${p.name}</h3>
            ${amount}
            <p class="per">${p.per}</p>
            <p class="desc">${p.desc}</p>
            <a class="btn${p.free ? '' : ' btn--ghost'}" href="${p.href || 'contacto.html'}">${p.cta || 'Quiero esta tarifa'}</a>
          </div>`;
}

/* En la pestaña «Todas» las tarifas sin cuota van primero:
   la clase de prueba gratuita es la puerta de entrada. */
const gruposTodas = [
  ...pricing.groups.filter(g => g.id === 'suelto'),
  ...pricing.groups.filter(g => g.id !== 'suelto')
];

const tarifas = `${pageHero({
  img: 'assets/img/news-halterofilia3.jpg',
  title: 'Tarifas',
  lead: 'Bonos mensuales, trimestrales y sesiones sueltas. Sin permanencia y con Open Box gratuito todos los sábados.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Tarifas' }]
})}

    <section class="section">
      <div class="container">
        <div class="note u-mb-2" data-reveal>${icon.info}<p>${pricing.note}</p></div>

        <div data-tabs data-reveal>
          <div class="price-tabs" role="tablist" aria-label="Tipo de tarifa">
            <button class="price-tab" type="button" role="tab" id="tab-todas" aria-controls="panel-todas" aria-selected="true">Todas</button>
${pricing.groups.map(g => `            <button class="price-tab" type="button" role="tab" id="tab-${g.id}" aria-controls="panel-${g.id}" aria-selected="false">${g.label}</button>`).join('\n')}
          </div>

          <div id="panel-todas" role="tabpanel" aria-labelledby="tab-todas">
${gruposTodas.map((g, i) => `            <div class="price-block${g.plans.length === 2 ? ' price-block--wide' : ''}${i ? ' u-mt-3' : ''}">
              <p class="kicker kicker--muted">${g.label}</p>
              <div class="grid g-4 u-mt-2">
${g.plans.map(planCard).join('\n')}
              </div>
            </div>`).join('\n')}
          </div>

${pricing.groups.map(g => `          <div id="panel-${g.id}" class="${g.plans.length === 2 ? 'price-block--wide' : ''}" role="tabpanel" aria-labelledby="tab-${g.id}" hidden>
            <div class="grid g-4">
${g.plans.map(planCard).join('\n')}
            </div>
          </div>`).join('\n')}
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Preguntas frecuentes</p>
          <h2 class="display d-md u-mt-2">Antes de<br>apuntarte</h2>
        </div>
        <div class="container--narrow" style="padding:0" data-acc-single data-reveal>
          <div class="acc">
            <button class="acc-btn" type="button">¿Necesito experiencia previa? ${icon.chev}</button>
            <div class="acc-panel"><div class="acc-panel-inner"><p class="muted">No. El CrossFit está diseñado para ser fácilmente adaptable: es válido para cualquier persona con motivación, independientemente de su edad, sexo, capacidades o experiencia previa. El entrenador adapta cargas, tiempos y distancias a tu nivel.</p></div></div>
          </div>
          <div class="acc">
            <button class="acc-btn" type="button">¿Cuánto dura una clase? ${icon.chev}</button>
            <div class="acc-panel"><div class="acc-panel-inner"><p class="muted">Cada sesión guiada dura 1 hora: comienza con un calentamiento adaptado al WOD del día y termina con unos minutos de estiramientos y vuelta a la calma.</p></div></div>
          </div>
          <div class="acc">
            <button class="acc-btn" type="button">¿Qué incluye el Open Box? ${icon.chev}</button>
            <div class="acc-panel"><div class="acc-panel-inner"><p class="muted">Open Box es entrenamiento libre en el que puedes usar el material del box a tu ritmo: recuperar un WOD que te perdiste, practicar un movimiento concreto o preparar una competición. Está incluido gratis todos los sábados en todas las tarifas.</p></div></div>
          </div>
          <div class="acc">
            <button class="acc-btn" type="button">Estoy de paso por Madrid, ¿puedo entrenar? ${icon.chev}</button>
            <div class="acc-panel"><div class="acc-panel-inner"><p class="muted">Sí. La tarifa <strong>Drop In</strong> (12&nbsp;€) es una sesión suelta para atletas que no son socios de nuestro box. Escríbenos por WhatsApp y te decimos en qué clase encajas mejor.</p></div></div>
          </div>
          <div class="acc">
            <button class="acc-btn" type="button">¿Cómo reservo las clases? ${icon.chev}</button>
            <div class="acc-panel"><div class="acc-panel-inner"><p class="muted">Desde la aplicación CrossHero, disponible para iOS y Android, o desde su web. Allí ves las plazas disponibles de cada franja y reservas en segundos.</p></div></div>
          </div>
        </div>
      </div>
    </section>

${ctaBand({ img: 'assets/img/news-dani.jpg' })}`;

add('tarifas.html', page({
  file: 'tarifas.html',
  title: 'Tarifas · VERSUS CrossFit VSG Getafe',
  description: 'Tarifas de VERSUS CrossFit Getafe: bonos de 10 y 15 clases, ilimitado desde 89,90 €/mes, trimestrales y drop-in 12 €. Open Box gratis todos los sábados.',
  og: 'news-halterofilia3.jpg',
  body: tarifas
}));

/* ==================================================================== *
 * 8 · Blog + posts
 * ==================================================================== */
const blog = `${pageHero({
  img: 'assets/img/news-open2025.jpg',
  title: 'Blog<br>y noticias',
  lead: 'Competiciones, eventos, formación y todo lo que pasa dentro del box.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Blog' }]
})}

    <section class="section">
      <div class="container">
        <div class="grid g-3" data-stagger>
${posts.map(postCard).join('\n')}
        </div>
      </div>
    </section>

${ctaBand({ img: 'assets/img/news-barbacoa.jpg' })}`;

add('blog.html', page({
  file: 'blog.html',
  title: 'Blog y noticias · VERSUS CrossFit VSG Getafe',
  description: 'Noticias de VERSUS CrossFit Getafe: competiciones, eventos HYROX, liga de halterofilia y vida de la comunidad del box.',
  og: 'news-open2025.jpg',
  body: blog
}));

posts.forEach((p, idx) => {
  const others = posts.filter(o => o.slug !== p.slug).slice(0, 3);
  const body = `${pageHero({
    img: p.img,
    title: p.title,
    lead: p.excerpt,
    tags: [{ label: p.cat, green: true }, p.dateLabel],
    crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Blog', href: 'blog.html' }, { label: p.title }]
  })}

    <section class="section">
      <div class="container container--narrow">
        <div class="frame frame--16x9 u-mb-2" data-reveal><img src="${p.img}" alt="${p.title}" loading="lazy" width="1200" height="675"></div>
        <div class="prose" data-reveal>
        ${renderBlocks(p.body)}
        </div>
        <div class="btn-row u-mt-3" data-reveal>
          <a class="btn btn--ghost" href="blog.html">← Volver al blog</a>
          <a class="btn" href="clase-gratis.html">Reservar clase gratis</a>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Sigue leyendo</p>
          <h2 class="display d-md u-mt-2">Más del box</h2>
        </div>
        <div class="grid g-3" data-stagger>
${others.map(postCard).join('\n')}
        </div>
      </div>
    </section>`;

  add(`post-${p.slug}.html`, page({
    file: `post-${p.slug}.html`,
    title: `${p.title} · VERSUS CrossFit VSG`,
    description: p.excerpt,
    og: p.img.replace('assets/img/', ''),
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      description: p.excerpt,
      publisher: { '@type': 'Organization', name: 'VERSUS CrossFit VSG' }
    },
    body
  }));
});

/* ==================================================================== *
 * 9 · Clase gratis
 * ==================================================================== */
const claseGratis = `${pageHero({
  img: 'assets/img/news-hardrunning.jpg',
  title: 'Clase de<br>prueba gratis',
  lead: 'Ven a probar un WOD con nosotros. Sin compromiso, sin experiencia previa y sin traer nada más que ropa cómoda.',
  tags: [{ label: 'Gratis', green: true }, '60 minutos', 'Sin compromiso'],
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Clase gratis' }]
})}

    <section class="section">
      <div class="container">
        <div class="split">
          <div data-reveal>
            <p class="kicker">Cómo funciona</p>
            <h2 class="display d-md u-mt-2">Tres pasos<br>y estás dentro</h2>
            <div class="grid u-mt-3" data-stagger>
              <div class="feature"><span class="num">01</span><h3>Escríbenos</h3><p>Rellena el formulario o mándanos un WhatsApp. Cuéntanos qué días te vienen bien y si has entrenado antes.</p></div>
              <div class="feature"><span class="num">02</span><h3>Te asignamos clase</h3><p>Te proponemos la franja que mejor encaje con tu nivel y tu horario, y te reservamos plaza.</p></div>
              <div class="feature"><span class="num">03</span><h3>Vienes y entrenas</h3><p>Llega 10 minutos antes. Te enseñamos el box, te explicamos el WOD del día y entrenas con el grupo.</p></div>
            </div>
            <div class="note u-mt-3">${icon.info}<p>Trae ropa deportiva, zapatillas y una botella de agua. Del resto del material nos encargamos nosotros.</p></div>
          </div>

          <div data-reveal>
            <p class="kicker">Formulario</p>
            <h2 class="display d-md u-mt-2">Reserva<br>tu plaza</h2>
            <form class="form u-mt-3" data-mailto="${site.email}">
              <div class="field"><label for="cg-nombre">Nombre y apellidos</label><input id="cg-nombre" name="nombre" type="text" required placeholder="Tu nombre"></div>
              <div class="field"><label for="cg-email">Email</label><input id="cg-email" name="email" type="email" required placeholder="tucorreo@ejemplo.com"></div>
              <div class="field"><label for="cg-tel">Teléfono</label><input id="cg-tel" name="telefono" type="tel" placeholder="600 000 000"></div>
              <div class="field">
                <label for="cg-interes">¿Qué te interesa?</label>
                <select id="cg-interes" name="interes">
${classes.map(c => `                  <option>${c.name}</option>`).join('\n')}
                  <option>Todavía no lo sé</option>
                </select>
              </div>
              <div class="field"><label for="cg-msg">Mensaje</label><textarea id="cg-msg" name="mensaje" placeholder="Cuéntanos tu disponibilidad y si has entrenado antes"></textarea></div>
              <input type="hidden" name="asunto" value="Solicitud de clase de prueba gratis">
              <label class="check"><input type="checkbox" required> He leído y acepto la <a href="politica-de-cookies.html">política de privacidad y cookies</a>.</label>
              <button class="btn btn--lg" type="submit">Solicitar clase gratis</button>
              <p class="muted" style="font-size:.82rem" data-form-status hidden></p>
            </form>
            <p class="muted u-mt-2" style="font-size:.85rem">¿Prefieres hablarlo? Escríbenos por <a class="u-green" href="https://wa.me/${site.whatsappRaw}">WhatsApp</a> o llama al <a class="u-green" href="tel:${site.phoneRaw}">${site.phone}</a>.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="kicker">Después de la prueba</p>
          <h2 class="display d-md u-mt-2">Tarifas sin sorpresas</h2>
        </div>
        <div class="grid g-3" data-stagger>
          <div class="plan"><h3>Box 10</h3><p class="amount"><span class="cur">€</span>69,90</p><p class="per">/ mes</p><p class="desc">10 clases a distribuir como prefieras dentro de 1 mes.</p><a class="btn btn--ghost" href="tarifas.html">Ver tarifas</a></div>
          <div class="plan plan--featured"><h3>Box ilimitado</h3><p class="amount"><span class="cur">€</span>89,90</p><p class="per">/ mes</p><p class="desc">Clases ilimitadas, 1 reserva al día. La opción más elegida del box.</p><a class="btn" href="tarifas.html">Ver tarifas</a></div>
          <div class="plan"><h3>Trimestral ilimitado</h3><p class="amount"><span class="cur">€</span>255</p><p class="per">/ 3 meses</p><p class="desc">Clases ilimitadas durante 3 meses (1 reserva al día).</p><a class="btn btn--ghost" href="tarifas.html">Ver tarifas</a></div>
        </div>
      </div>
    </section>`;

add('clase-gratis.html', page({
  file: 'clase-gratis.html',
  title: 'Clase de prueba gratis · VERSUS CrossFit VSG Getafe',
  description: 'Reserva tu clase de prueba gratuita en VERSUS CrossFit Getafe. Sin compromiso y sin experiencia previa: solo ropa cómoda y ganas de entrenar.',
  og: 'news-hardrunning.jpg',
  body: claseGratis
}));

/* ==================================================================== *
 * 10 · Contacto
 * ==================================================================== */
const contacto = `${pageHero({
  img: 'assets/img/news-liga2.jpg',
  title: 'Contacto',
  lead: 'Estamos en el Polígono Industrial Los Olivos de Getafe, con parking propio. Escríbenos, llámanos o pásate por el box.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Contacto' }]
})}

    <section class="section">
      <div class="container">
        <div class="split">
          <div data-reveal>
            <p class="kicker">Datos de contacto</p>
            <h2 class="display d-md u-mt-2">Versus<br>CrossFit Getafe</h2>
            <div class="grid u-mt-3" data-stagger>
              <div class="info-tile"><span class="ic">${icon.pin}</span><div><h3>Dirección</h3><p>${site.address}<br>${site.city}<br><a href="${site.mapLink}" target="_blank" rel="noopener">Ver mapa de situación ↗</a></p></div></div>
              <div class="info-tile"><span class="ic">${icon.phone}</span><div><h3>Teléfono</h3><p><a href="tel:${site.phoneRaw}">${site.phone}</a></p></div></div>
              <div class="info-tile"><span class="ic">${icon.wa}</span><div><h3>WhatsApp</h3><p><a href="https://wa.me/${site.whatsappRaw}" target="_blank" rel="noopener">${site.whatsapp}</a></p></div></div>
              <div class="info-tile"><span class="ic">${icon.mail}</span><div><h3>Email</h3><p><a href="mailto:${site.email}">${site.email}</a></p></div></div>
              <div class="info-tile"><span class="ic">${icon.clock}</span><div><h3>Horario</h3><p>L-V 7:00–13:00 y 16:00–22:00 (V hasta 21:00)<br>Mediodía L-J 14:30–15:30 · Sábados 9:00–14:30</p></div></div>
            </div>
          </div>

          <div data-reveal>
            <p class="kicker">Escríbenos</p>
            <h2 class="display d-md u-mt-2">¿Hablamos?</h2>
            <form class="form u-mt-3" data-mailto="${site.email}">
              <div class="field"><label for="c-nombre">Nombre</label><input id="c-nombre" name="nombre" type="text" required placeholder="Tu nombre"></div>
              <div class="field"><label for="c-email">Email</label><input id="c-email" name="email" type="email" required placeholder="tucorreo@ejemplo.com"></div>
              <div class="field"><label for="c-tel">Teléfono</label><input id="c-tel" name="telefono" type="tel" placeholder="600 000 000"></div>
              <div class="field"><label for="c-msg">Mensaje</label><textarea id="c-msg" name="mensaje" required placeholder="Cuéntanos en qué podemos ayudarte"></textarea></div>
              <input type="hidden" name="asunto" value="Consulta desde versuscrossfit.com">
              <label class="check"><input type="checkbox" required> He leído y acepto la <a href="politica-de-cookies.html">política de privacidad y cookies</a>.</label>
              <button class="btn btn--lg" type="submit">Enviar mensaje</button>
              <p class="muted" style="font-size:.82rem" data-form-status hidden></p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt section--edge">
      <div class="container">
        <div class="map" data-reveal>
          <iframe src="${site.mapEmbed}" title="Mapa de situación de VERSUS CrossFit Getafe" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>

${ctaBand()}`;

add('contacto.html', page({
  file: 'contacto.html',
  title: 'Contacto · VERSUS CrossFit VSG Getafe',
  description: 'Contacta con VERSUS CrossFit Getafe: C/ Sindicalismo 3 y 5, Pol. Ind. Los Olivos. Teléfono 910 849 952, WhatsApp 640 835 165, getafe@versuscrossfit.com.',
  og: 'news-liga2.jpg',
  jsonld: orgJsonLd,
  body: contacto
}));

/* ==================================================================== *
 * 11 · Política de cookies
 * ==================================================================== */
const cookies = `${pageHero({
  img: 'assets/img/news-rcp.jpg',
  title: 'Política<br>de cookies',
  lead: 'Información sobre el uso de cookies en versuscrossfit.com.',
  crumbs: [{ label: 'Inicio', href: 'index.html' }, { label: 'Política de cookies' }]
})}

    <section class="section">
      <div class="container container--narrow prose" data-reveal>
        <p>Este sitio web utiliza cookies para que usted tenga la mejor experiencia de usuario. Si continúa navegando está dando su consentimiento para la aceptación de las mencionadas cookies y la aceptación de nuestra política de cookies.</p>

        <h3>¿Qué son las cookies?</h3>
        <p>Una cookie es un pequeño fichero de texto que un sitio web guarda en su navegador cuando usted lo visita. Sirve para recordar sus preferencias y para obtener información estadística sobre el uso del sitio.</p>

        <h3>Cookies que utilizamos</h3>
        <ul class="ticks">
          <li><strong>Técnicas y de preferencias:</strong> guardan su decisión sobre este aviso de cookies para no volver a mostrarlo en cada visita.</li>
          <li><strong>Analíticas:</strong> nos permiten conocer de forma agregada cómo se navega por la web para poder mejorarla.</li>
          <li><strong>De terceros:</strong> el mapa de localización incrustado en las páginas de contacto y del box procede de Google Maps y puede instalar sus propias cookies.</li>
        </ul>

        <h3>Cómo desactivarlas</h3>
        <p>Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador. Consulte la ayuda de Chrome, Safari, Firefox o Edge para conocer el procedimiento exacto en cada caso.</p>

        <h3>Contacto</h3>
        <p>Si tiene cualquier duda sobre esta política puede escribirnos a <a class="u-green" href="mailto:${site.email}">${site.email}</a> o llamarnos al <a class="u-green" href="tel:${site.phoneRaw}">${site.phone}</a>.</p>
      </div>
    </section>`;

add('politica-de-cookies.html', page({
  file: 'politica-de-cookies.html',
  title: 'Política de cookies · VERSUS CrossFit VSG',
  description: 'Política de cookies de versuscrossfit.com: qué cookies usamos, para qué sirven y cómo desactivarlas.',
  og: 'news-rcp.jpg',
  body: cookies
}));

/* ==================================================================== *
 * Escritura + sitemap
 * ==================================================================== */
pages.forEach(p => {
  fs.writeFileSync(path.join(OUT, p.file), p.html, 'utf8');
});

const BASE = 'https://www.versuscrossfit.com/';
const today = new Date().toISOString().slice(0, 10);

/* Prioridad y frecuencia por tipo de página */
const seoMeta = {
  'index.html':            { group: 'Página de Inicio',          freq: 'weekly',  prio: '1.0' },
  'clases.html':           { group: 'Entrenamientos',            freq: 'monthly', prio: '0.9' },
  'tarifas.html':          { group: 'Tarifas',                   freq: 'monthly', prio: '0.9' },
  'clase-gratis.html':     { group: 'Conversión',                freq: 'monthly', prio: '0.9' },
  'horarios.html':         { group: 'El Box',                    freq: 'weekly',  prio: '0.8' },
  'box.html':              { group: 'El Box',                    freq: 'monthly', prio: '0.8' },
  'que-es-crossfit.html':  { group: 'El Box',                    freq: 'yearly',  prio: '0.7' },
  'entrenadores.html':     { group: 'Equipo',                    freq: 'monthly', prio: '0.8' },
  'contacto.html':         { group: 'Contacto',                  freq: 'yearly',  prio: '0.7' },
  'blog.html':             { group: 'Blog',                      freq: 'weekly',  prio: '0.8' },
  'politica-de-cookies.html': { group: 'Legal',                  freq: 'yearly',  prio: '0.2' }
};
function metaFor(file) {
  if (seoMeta[file]) return seoMeta[file];
  if (file.indexOf('clase-') === 0) return { group: 'Entrenamientos', freq: 'monthly', prio: '0.7' };
  if (file.indexOf('entrenador-') === 0) return { group: 'Equipo', freq: 'monthly', prio: '0.6' };
  if (file.indexOf('post-') === 0) return { group: 'Blog', freq: 'yearly', prio: '0.5' };
  return { group: 'Otras', freq: 'monthly', prio: '0.5' };
}
function lastmodFor(file) {
  if (file.indexOf('post-') === 0) {
    const slug = file.replace(/^post-/, '').replace(/\.html$/, '');
    const post = posts.filter(function (p) { return p.slug === slug; })[0];
    if (post) return post.date;
  }
  return today;
}

const bySection = [];
pages.forEach(p => {
  const m = metaFor(p.file);
  let sec = bySection.find(s => s.group === m.group);
  if (!sec) { sec = { group: m.group, urls: [] }; bySection.push(sec); }
  sec.urls.push([
    '<url>',
    `<loc>${BASE}${p.file === 'index.html' ? '' : p.file}</loc>`,
    `<lastmod>${lastmodFor(p.file)}</lastmod>`,
    `<changefreq>${m.freq}</changefreq>`,
    `<priority>${m.prio}</priority>`,
    '</url>'
  ].join('\n'));
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  bySection.map(s => `<!--  ${s.group}  -->\n${s.urls.join('\n')}`).join('\n\n'),
  '</urlset>',
  ''
].join('\n');

fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(OUT, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://www.versuscrossfit.com/sitemap.xml\n', 'utf8');

console.log(`✔ ${pages.length} páginas generadas`);
pages.forEach(p => console.log('  · ' + p.file));
