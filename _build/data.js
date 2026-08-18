/* Contenido del sitio VERSUS CrossFit VSG (Getafe).
   Textos e imágenes tomados del dominio versuscrossfit.com. */

const site = {
  name: 'VERSUS CrossFit VSG',
  shortName: 'VERSUS',
  tagline: 'Box oficial de CrossFit y HYROX en Getafe',
  address: 'C/ Sindicalismo 3 y 5, Pol. Ind. Los Olivos',
  city: '28906 Getafe · Madrid',
  phone: '+34 910 849 952',
  phoneRaw: '+34910849952',
  whatsapp: '+34 640 835 165',
  whatsappRaw: '34640835165',
  email: 'getafe@versuscrossfit.com',
  booking: 'https://www.crosshero.com/',
  instagram: 'https://www.instagram.com/crossfitvsg/',
  facebook: 'https://www.facebook.com/versuscrossfitvsg/',
  youtube: 'https://www.youtube.com/',
  mapEmbed: 'https://www.google.com/maps?q=C%2F%20Sindicalismo%203%2C%2028906%20Getafe%2C%20Madrid&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=C%2F+Sindicalismo+3%2C+28906+Getafe%2C+Madrid',
  quote: ['Tu WOD es un reflejo de lo que eres en la vida.', 'Luchador o cobarde.', 'Sincero o mentiroso.', 'Honesto o tramposo.']
};

/* ------------------------------------------------------------------ *
 * Datos del titular para el aviso legal y la política de privacidad.
 *
 * PENDIENTE: los campos entre corchetes no están publicados en el
 * dominio, así que hay que sustituirlos por los datos reales antes de
 * poner la web en producción. La LSSI-CE (art. 10) exige el nombre o
 * razón social, el NIF y el domicilio del titular.
 * ------------------------------------------------------------------ */
const legal = {
  titular: '[RAZÓN SOCIAL DEL TITULAR]',
  nif: '[NIF / CIF]',
  domicilio: 'C/ Sindicalismo 3 y 5, Pol. Ind. Los Olivos, 28906 Getafe (Madrid)',
  registro: '',                       /* opcional: Registro Mercantil, tomo, folio, hoja */
  actualizado: '18 de agosto de 2026'
};

/* ------------------------------------------------------------------ *
 * Clases
 * ------------------------------------------------------------------ */
const classes = [
  {
    slug: 'crossfit',
    name: 'CrossFit',
    file: 'clase-crossfit.html',
    img: 'assets/img/clase-crossfit.jpg',
    crop: 'top',
    level: 'Todos los niveles',
    duration: '60 min',
    summary: 'Fuerza y acondicionamiento con ejercicios funcionales constantemente variados, ejecutados a alta intensidad.',
    menuDesc: 'El programa base del box',
    intro: 'CrossFit se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad.',
    trainers: ['Mateo Santiago', 'Michel Wu', 'Santiago Machado', 'Carlos Gaitán', 'Eduardo Gonzalo'],
    blocks: [
      { type: 'p', text: 'Esto significa que nos valemos de una gran cantidad de ejercicios y disciplinas deportivas (gimnasia, halterofilia, carrera, etc), de entre las cuales seleccionamos técnicas o movimientos aplicables a la vida diaria y los combinamos de muchas formas diferentes en entrenamientos intensos resultando, no solo una experiencia exigente durante la cual el carácter lúdico y la camaradería cobran un papel primordial, sino también un programa insuperable para desarrollar al máximo las 10 capacidades físicas.' },
      { type: 'h3', text: 'Las 10 capacidades físicas' },
      { type: 'ticks', items: ['Resistencia cardiovascular', 'Resistencia energética', 'Fuerza', 'Flexibilidad', 'Potencia', 'Velocidad', 'Coordinación', 'Agilidad', 'Equilibrio', 'Precisión'] },
      { type: 'p', text: 'Los entrenamientos pueden ser cortos o largos dentro de la sesión de 1 hora de duración, alternando también con ejercicios en los que trabajemos la fuerza de un movimiento específico o la mejora de un gesto técnico. Esta variación en duración y elementos es lo que asegura una mejora de las capacidades anteriormente mencionadas y lo que convierte el CrossFit en un deporte completo y global adaptable a todas las personas.' },
      { type: 'p', text: 'Cada clase de 1 hora comenzará siempre por un calentamiento adaptado al tipo de ejercicios presentes en el WOD (<strong>Workout Of the Day</strong> — entrenamiento del día), y terminará por unos minutos finales de estiramientos (vuelta a la calma).' },
      { type: 'h3', text: 'Beneficios' },
      { type: 'ticks', items: ['Mejora las cualidades físicas de todos los atletas que decidan practicarlo.', 'Mejora los porcentajes de grasa y activa el metabolismo.', 'Deporte personalizado dentro de un ambiente colectivo que estimula su práctica.', 'Transferencia directa sobre la salud, colesterol, contracturas musculares y mucho más.'] },
      { type: 'h3', text: '¿A quién va dirigido?' },
      { type: 'p', text: 'El hecho de ser un programa diseñado para ser fácilmente adaptable lo convierte en el sistema de entrenamiento perfecto para cualquier persona con motivación, independientemente de su sexo, edad, capacidades atléticas o experiencia previa.' },
      { type: 'p', text: 'En CrossFit siempre formarás parte del grupo independientemente de tus resultados, y serás respetado y animado por tus entrenadores y compañeros. Lo importante es que siempre des tu 100% en cada entreno, sea cual sea.' }
    ]
  },
  {
    slug: 'hyrox',
    name: 'HYROX',
    file: 'clase-hyrox.html',
    img: 'assets/img/news-hardrunning.jpg',
    crop: null,
    level: 'Sin experiencia previa',
    duration: '60 min',
    summary: 'Entrenamiento funcional que combina resistencia y fuerza, sin movimientos de halterofilia ni gran dificultad técnica.',
    menuDesc: 'Gimnasio oficial HYROX',
    intro: 'HYROX es un estilo de entrenamiento funcional que no requiere experiencia previa.',
    trainers: ['Alex Ferrer', 'Michel Wu', 'Adrian Blanco', 'Mateo Santiago', 'Santiago Machado'],
    badge: 'Official HYROX Gym',
    blocks: [
      { type: 'p', text: 'HYROX combina ejercicios funcionales con elementos clásicos de resistencia y un componente de fuerza, pero son movimientos que la gran mayoría, con un buen entrenamiento, puede ejecutar. Es decir, <strong>no hay movimientos de halterofilia, con grandes cargas o de una gran dificultad técnica</strong>.' },
      { type: 'p', text: 'VERSUS CrossFit es <strong>gimnasio oficial HYROX en Getafe</strong>: entrenamos el formato de competición dentro del box, con el material y la programación específica de la disciplina.' }
    ]
  },
  {
    slug: 'halterofilia',
    name: 'Halterofilia',
    file: 'clase-halterofilia.html',
    img: 'assets/img/clase-halterofilia.jpg',
    crop: 'bottom',
    level: 'Progresión guiada',
    duration: '60 min',
    summary: 'La máxima expresión de la potencia: arrancada y dos tiempos, con progresión técnica y segura.',
    menuDesc: 'Arrancada y dos tiempos',
    intro: 'La halterofilia consiste en levantar el mayor peso posible desde el suelo hasta quedar completamente extendido con los brazos por encima de la cabeza.',
    trainers: ['Mateo Santiago', 'Michel Wu', 'Santiago Machado', 'Adrian Blanco', 'Eduardo Gonzalo'],
    blocks: [
      { type: 'p', text: 'Estos levantamientos se pueden realizar de dos formas: en un solo movimiento, denominado <strong>«Arrancada»</strong> (o <em>Snatch</em>), o en dos tiempos, denominado <strong>«Cargada de dos tiempos»</strong> (o <em>Clean &amp; Jerk</em>).' },
      { type: 'p', text: 'La halterofilia se considera la máxima expresión de la potencia en un atleta, lo que nos hace mejorar en multitud de ejercicios, no solo en CrossFit, sino también en cualquier disciplina deportiva.' },
      { type: 'p', text: 'Los entrenamientos van orientados a perfeccionar la técnica para, una vez pulida, ir aumentando la intensidad y mejorando los pesos que podemos levantar, siempre de una forma progresiva y segura. Pero no solo nos limitaremos a practicar estos dos ejercicios: existen multitud de gestos que nos ayudarán a que nuestra evolución sea siempre ascendente, personalizada y segura.' },
      { type: 'note', text: 'El <strong>Club de Halterofilia VERSUS</strong> compite cada temporada en la Liga Madrileña de Halterofilia.' }
    ]
  },
  {
    slug: 'gymnastic',
    name: 'Gymnastic',
    file: 'clase-gymnastic.html',
    img: 'assets/img/clase-gymnastic.jpg',
    crop: 'bottom',
    level: 'Cualquier nivel',
    duration: '60 min',
    summary: 'Uno de los pilares del CrossFit: control motor, propiocepción y las habilidades gimnásticas que desbloquean tu progreso.',
    menuDesc: 'Habilidades y control corporal',
    intro: 'Las habilidades gimnásticas constituyen uno de los pilares fundamentales del CrossFit.',
    trainers: ['Santiago Machado', 'Michel Wu', 'Mateo Santiago', 'Adrian Blanco'],
    blocks: [
      { type: 'p', text: 'Para ayudar en su desarrollo contamos con la especialidad de <strong>Gymnastic</strong>, un programa de entrenamiento orientado a mejorar la fuerza necesaria y practicar dichas habilidades, ayudando a nuestros deportistas en su desarrollo integral como <em>crossfiters</em>.' },
      { type: 'p', text: 'Los gimnastas son conocidos por ser deportistas extremadamente completos y con una gran capacidad para aprender nuevos movimientos gracias a su excelente control motor y propiocepción. Practicando las mecánicas propias de la gimnasia de forma adecuada, nuestros deportistas mejoran de forma dramática su capacidad para rendir al máximo durante sus entrenamientos de CrossFit.' },
      { type: 'h3', text: '¿A quién va dirigido?' },
      { type: 'p', text: 'Nuestras clases Gymnastic constituyen una excelente herramienta para desarrollar y mantener deportistas sanos y equilibrados de cualquier nivel o disciplina deportiva. La transferencia desde las habilidades gimnásticas al resto de modalidades que trabajamos (olímpicos, carrera…) resulta primordial.' },
      { type: 'p', text: 'Definitivamente, todo deportista serio interesado en mejorar su rendimiento como crossfiter haría bien en incorporar nuestra clase de Gymnastic en su entrenamiento.' }
    ]
  },
  {
    slug: 'hybrid-strongman',
    name: 'CrossFit Hybrid Strongman',
    shortName: 'Hybrid Strongman',
    file: 'clase-hybrid-strongman.html',
    img: 'assets/img/clase-hybrid.jpg',
    crop: 'top',
    level: 'Alta intensidad',
    duration: '60 min',
    summary: 'Piedras atlas, volteo de ruedas y cargas pesadas: una fusión creativa de CrossFit y Strongman.',
    menuDesc: 'Piedras, ruedas y cargas pesadas',
    intro: 'CrossFit Hybrid es una clase de CrossFit incorporando movimientos de Strongman.',
    trainers: ['Mateo Santiago', 'Michel Wu', 'Santiago Machado'],
    blocks: [
      { type: 'p', text: 'Piedras atlas, volteo de ruedas, cargas pesadas… Una fusión creativa de CrossFit y Strongman única, llamada <strong>CrossFit Hybrid</strong>.' },
      { type: 'p', text: 'Se ajusta perfectamente a un modelo tradicional de CrossFit: movimientos funcionales, variados y ejecutados a alta intensidad.' }
    ]
  },
  {
    slug: 'yoga-core',
    name: 'Yoga + Core',
    file: 'clase-yoga-core.html',
    img: null,
    heroImg: 'assets/img/news-rcp.jpg',
    crop: null,
    level: 'Nivel bajo',
    duration: '60 min',
    summary: 'Movilidad, respiración y trabajo profundo de core. El contrapeso perfecto a la alta intensidad.',
    menuDesc: 'Movilidad y trabajo de core',
    intro: 'Trabajo de movilidad, respiración y core para equilibrar la carga de las sesiones de alta intensidad.',
    trainers: ['Sonia Sanguino'],
    blocks: [
      { type: 'p', text: 'La clase de <strong>Yoga + Core</strong> completa la semana de entrenamiento con trabajo de movilidad, control respiratorio y fortalecimiento profundo de la zona media.' },
      { type: 'p', text: 'Es la sesión ideal para recuperar entre WODs exigentes, mejorar rangos de movimiento y ganar estabilidad en los levantamientos.' }
    ]
  },
  {
    slug: 'open-box',
    name: 'Open Box',
    file: 'clase-open-box.html',
    img: 'assets/img/clase-openbox.jpg',
    crop: 'top',
    level: 'Entrenamiento libre',
    duration: 'Libre',
    summary: 'Entrena a tu manera: recupera un WOD, prepara una competición o trabaja ese ejercicio que se te resiste.',
    menuDesc: 'Gratis todos los sábados',
    intro: '¿Te has perdido algún entrenamiento? ¿Quieres hacer algún WOD en especial? ¿O simplemente practicar algún ejercicio en concreto?',
    trainers: [],
    blocks: [
      { type: 'p', text: '<strong>OPEN BOX</strong> es una clase libre que te permite entrenar cualquier cosa a tu manera, con acceso a todo el material del box.' },
      { type: 'note', text: 'Todas nuestras tarifas incluyen <strong>Open Box gratuito todos los sábados</strong>.' }
    ]
  }
];

/* ------------------------------------------------------------------ *
 * Entrenadores
 * ------------------------------------------------------------------ */
const coaches = [
  {
    slug: 'natalia-paz',
    name: 'Natalia Paz',
    file: 'entrenador-natalia-paz.html',
    img: 'assets/img/coach-natalia.jpg',
    role: 'CrossFit · Halterofilia · Nutrición',
    teaches: ['CrossFit', 'Halterofilia', 'Gymnastics', 'Skill'],
    creds: [
      'Entrenadora de CrossFit',
      'Entrenadora nacional de Halterofilia nivel 1 (cursando nivel 2)',
      'Técnico auxiliar en nutrición y dietética',
      'L3 y L4 en nutrición deportiva',
      'CrossFit Semifinal Athlete 2022'
    ],
    quote: 'Me apasiona mi trabajo y poder ayudar a las personas a superarse cada día y a conseguir su mejor versión.',
    bio: []
  },
  {
    slug: 'mateo-santiago',
    name: 'Mateo Santiago',
    file: 'entrenador-mateo-santiago.html',
    img: 'assets/img/coach-mateo.jpg',
    role: 'CrossFit L2 · Halterofilia · Artes marciales',
    teaches: ['CrossFit', 'Kettlebell', 'Halterofilia', 'Gymnastics', 'Strongman', 'Skill'],
    creds: ['CrossFit Level 2', 'Entrenador Nacional de Halterofilia nivel 2', 'Instructor de Wing Chun Kung Fu, 2.º grado técnico', 'Formación en Kettlebell KSE, Gymnastics y Strongman'],
    bio: [
      'Mateo Santiago, entrenador de <strong>CrossFit Level 2</strong>, entrenador Nacional de Halterofilia, experto en artes marciales y defensa personal.',
      'Comenzó a los 5 años haciendo Karate Shito-Ryu, arte marcial que practicó durante varios años hasta conseguir el cinturón negro, siguiendo en los años posteriores con boxeo, Wing Chun, armas y escrima.',
      'En la actualidad ostenta el título de segundo grado técnico de Wing Chun Kung Fu, siendo instructor infantil y de adultos en esta disciplina.',
      'Amante de la escalada y de los deportes de riesgo, comienza en 2014 a practicar CrossFit consiguiendo al poco tiempo el certificado de <strong>CrossFit Level 1 y Level 2</strong>, continuando con su formación en Kettlebell KSE, Gymnastics, Strongman… Actualmente es entrenador Nacional de Halterofilia de nivel 2.'
    ]
  },
  {
    slug: 'michel-wu',
    name: 'Michel Wu',
    file: 'entrenador-michel-wu.html',
    img: 'assets/img/coach-michel.jpg',
    role: 'CrossFit L2 · Halterofilia · Artes marciales',
    teaches: ['CrossFit', 'Kettlebell', 'Halterofilia', 'Strongman', 'Gymnastics', 'Skill'],
    creds: ['CrossFit Level 2', 'Campeón de España de Wushu', 'Instructor de Wing Chun, cinturón negro 2.º grado técnico', 'Kettlebell KSE · Halterofilia · Strongman Hybrid Athletics'],
    bio: [
      'Entrenador de <strong>CrossFit Level 2</strong>, experto en artes marciales y defensa personal. Desde la edad de 6 años empezó a practicar artes marciales y ha practicado muchas modalidades de deportes de contacto: Tae Kwon Do, Kung Fu, Wushu, boxeo, Muay Thai, escrima filipina, Wing Chun… Fue campeón de España en un campeonato celebrado en Madrid de Wushu.',
      'En el año 2007 empezó a practicar Wing Chun; en la actualidad es instructor cinturón negro 2.º grado técnico.',
      'En 2013 descubrió CrossFit y en seguida decidió sacarse el curso oficial para el certificado <strong>CrossFit Level 1</strong>. Empezó a asistir a cursos para especializarse y a formarse con los mejores de distintas modalidades como Kettlebell KSE (Kettlebell Sport España), halterofilia, Strongman de Hybrid Athletics, Gymnastics…'
    ]
  },
  {
    slug: 'eduardo-gonzalo',
    name: 'Eduardo Gonzalo Rodríguez',
    shortName: 'Eduardo Gonzalo',
    file: 'entrenador-eduardo-gonzalo.html',
    img: 'assets/img/coach-edu.jpg',
    role: 'CrossFit L2 · Endurance · Halterofilia',
    teaches: ['CrossFit', 'CrossFit Endurance', 'Kettlebell', 'Halterofilia'],
    creds: ['CrossFit Level 2 (Level 1 en 2012)', 'Entrenador nacional de Halterofilia (FEH)', 'KFIC nivel 1 de Kettlebells', 'Official CrossFit Endurance · Weightlifting · Competitor', 'Running Technique Instructor Course'],
    bio: [
      'Enamorado de los deportes y el ejercicio en general, a los 13 años eligió el piragüismo como deporte, siendo la canoa canadiense su especialidad. Varias veces fue campeón de la Comunidad de Madrid, llegando a ganar carreras tan importantes como el Nalón y el Bidasoa, y a conseguir un segundo puesto en la Regata Internacional del Sella.',
      'Más tarde, la bicicleta —tanto de montaña como de carretera— y la carrera hicieron que se decidiera sobre todo por los duatlones.',
      'El deseo de hacer de esta pasión por el entrenamiento su forma de vida y de ayudar a otros a lograr sus metas hicieron que se formara hasta acabar siendo coach de CrossFit y carreras de obstáculos, especializándose en Endurance, Bootcamp y carrera descalcista, llegando a participar en el campeonato del mundo en Oropesa del Mar en 2017.'
    ]
  },
  {
    slug: 'santiago-machado',
    name: 'Santiago Machado',
    file: 'entrenador-santiago-machado.html',
    img: 'assets/img/coach-santiago.jpg',
    role: 'CrossFit · Halterofilia nivel 2',
    teaches: ['CrossFit', 'CrossFit Hybrid', 'Kettlebell', 'Halterofilia', 'Skill'],
    creds: ['Entrenador Nacional de Halterofilia nivel 2 (2019)', 'Instructor Académico de Halterofilia — CAR de Canarias (2015)', 'Top 10 de Madrid dos años consecutivos', '4.º en la Copa Absoluta de Madrid 2017'],
    bio: [
      'En 2011 empieza su camino como entrenador personal, pero es en 2013 cuando cambia su vida deportiva al llegar al CrossFit y sobre todo a la halterofilia. Empezó su trayectoria en la competición participando en la Liga Powerkan y en los años siguientes en la Primera División de la Liga Madrileña de halterofilia, llegando a estar 2 años seguidos entre el top 10 de Madrid y clasificándose en 2017 para la Copa Absoluta de Madrid, quedando 4.º.',
      'En 2015 se forma como Instructor Académico de Halterofilia en el Centro de Alto Rendimiento de Canarias, de la mano de Manuel Galván, y en 2019 da un paso más formándose como Entrenador Nacional de Halterofilia nivel 2.'
    ]
  },
  {
    slug: 'adrian-blanco',
    name: 'Adrian Blanco',
    file: 'entrenador-adrian-blanco.html',
    img: null,
    role: 'HYROX · Halterofilia · Gymnastic',
    teaches: ['HYROX', 'Halterofilia', 'Gymnastic'],
    creds: [],
    bio: ['Entrenador del equipo VERSUS. Imparte las clases de <strong>HYROX</strong>, <strong>Halterofilia</strong> y <strong>Gymnastic</strong> dentro de la programación semanal del box.']
  },
  {
    slug: 'alex-ferrer',
    name: 'Alex Ferrer',
    file: 'entrenador-alex-ferrer.html',
    img: null,
    role: 'HYROX',
    teaches: ['HYROX'],
    creds: [],
    bio: ['Entrenador del equipo VERSUS. Responsable de las clases de <strong>HYROX</strong>, la disciplina de entrenamiento funcional en la que el box es gimnasio oficial.']
  }
];

/* ------------------------------------------------------------------ *
 * Tarifas
 * ------------------------------------------------------------------ */
const pricing = {
  note: 'Todas nuestras tarifas incluyen <strong>Open Box gratuito todos los sábados</strong>.',
  groups: [
    {
      id: 'mensual',
      label: 'Mensual',
      plans: [
        { name: 'Box 10', price: '69,90', per: '/ mes', desc: '10 clases a distribuir como prefieras dentro de 1 mes.' },
        { name: 'Box 15', price: '79,90', per: '/ mes', desc: '15 clases a distribuir como prefieras dentro de 1 mes.' },
        { name: 'Box ilimitado', price: '89,90', per: '/ mes', desc: 'Clases ilimitadas: disfruta de tantas clases como desees al mes (1 reserva al día).', featured: true },
        { name: 'Box ilimitado premium', price: '99,90', per: '/ mes', desc: 'Clases ilimitadas con 2 reservas al día para quien quiere doblar sesión.' }
      ]
    },
    {
      id: 'trimestral',
      label: 'Trimestral',
      plans: [
        { name: 'Trimestral 30', price: '195', per: '/ 3 meses', desc: '30 clases a distribuir como prefieras en 3 meses.' },
        { name: 'Trimestral 45', price: '225', per: '/ 3 meses', desc: '45 clases a distribuir como prefieras en 3 meses.' },
        { name: 'Trimestral ilimitado', price: '255', per: '/ 3 meses', desc: 'Clases ilimitadas durante 3 meses (1 reserva al día).', featured: true },
        { name: 'Trimestral ilimitado premium', price: '275', per: '/ 3 meses', desc: 'Clases ilimitadas durante 3 meses con 2 reservas al día.' }
      ]
    },
    {
      id: 'suelto',
      label: 'Sin cuota',
      plans: [
        { name: 'Clase de prueba', price: 'Gratis', per: 'Primera sesión', desc: 'Reserva tu clase de prueba en nuestro box y conoce el método, las instalaciones y al equipo.', free: true, cta: 'Reservar clase gratis', href: 'clase-gratis.html' },
        { name: 'Drop in', price: '12', per: '/ sesión', desc: 'Sesión de entrenamiento para atletas que no son socios de nuestro box. Ideal si estás de paso por Madrid.' }
      ]
    }
  ]
};

/* ------------------------------------------------------------------ *
 * Horario
 * ------------------------------------------------------------------ */
const schedule = [
  { block: 'Mañanas', rows: [['Lunes a viernes', '7:00 – 13:00'], ['Sábados', '9:00 – 14:30']] },
  { block: 'Mediodía', rows: [['Lunes a jueves', '14:30 – 15:30']] },
  { block: 'Tardes', rows: [['Lunes a jueves', '16:00 – 22:00'], ['Viernes', '16:00 – 21:00']] }
];

/* ------------------------------------------------------------------ *
 * Blog / Noticias
 * ------------------------------------------------------------------ */
const posts = [
  {
    slug: 'hyrox-pft-versus-crossfit',
    title: 'HYROX PFT — VERSUS CrossFit',
    date: '2025-09-30',
    dateLabel: '30 septiembre 2025',
    img: 'assets/img/news-hyrox-pft.jpg',
    cat: 'Eventos',
    excerpt: 'Evento oficial HYROX PFT en el box: sábado 8 de noviembre. Gratuito para socios de VERSUS.',
    body: [
      { type: 'p', text: '<strong>VERSUS HYROX PFT — EVENTO OFICIAL.</strong> Sábado 8 de noviembre en Versus CrossFit. Gratuito para socios de VERSUS. No socios: acceso Drop-In del box (12&nbsp;€).' },
      { type: 'p', text: 'Reserva tu plaza por mensaje privado en Instagram <strong>@crossfitvsg</strong> o por mail a <strong>getafe@versuscrossfit.com</strong>.' },
      { type: 'h3', text: '¿Qué es el HYROX PFT?' },
      { type: 'p', text: 'Un test oficial diseñado por HYROX para medir tu nivel de fitness.' },
      { type: 'ticks', items: ['Resultados en ranking global (por género y edad)', 'Certificado oficial con tu tiempo', 'Parche según tu nivel: oro, plata o bronce'] },
      { type: 'h3', text: 'PFT — For Time' },
      { type: 'ticks', items: ['1000 m Run', '50 m Burpee Broad Jumps', '100 Lunges', '1000 m Row', '30 Hand Release Push Ups', '100 Wall Balls (6/4 kg)'] }
    ]
  },
  {
    slug: 'iii-jornada-liga-halterofilia',
    title: 'III Jornada de Liga de Halterofilia completada',
    date: '2025-06-29',
    dateLabel: '29 junio 2025',
    img: 'assets/img/news-halterofilia3.jpg',
    cat: 'Competición',
    excerpt: '¡Enhorabuena equipo! Orgullosos de ver cómo crecéis jornada tras jornada representando al Club Versus.',
    body: [
      { type: 'p', text: '<strong>III Jornada de Liga de Halterofilia completada. ¡Enhorabuena equipo!</strong>' },
      { type: 'p', text: 'Orgullosos de ver cómo vais creciendo jornada tras jornada, representando al Club Versus con mucho esfuerzo, actitud y compañerismo.' },
      { type: 'p', text: 'Ahora a seguir entrenando con la mirada puesta en la 4.ª jornada. ¡Vamos a por más kilos, más técnica y más equipo!' }
    ]
  },
  {
    slug: 'formacion-rcp-desa',
    title: 'Formación en RCP y uso del desfibrilador (DESA)',
    date: '2025-06-14',
    dateLabel: '14 junio 2025',
    img: 'assets/img/news-rcp.jpg',
    cat: 'Box',
    excerpt: 'Todo el equipo de VERSUS ha completado una formación en RCP y uso del desfibrilador.',
    body: [
      { type: 'p', text: 'Hoy todo el equipo de VERSUS hemos completado una <strong>formación en RCP y uso del desfibrilador (DESA)</strong>.' },
      { type: 'p', text: 'La seguridad de nuestros atletas es una prioridad, y por eso seguimos formándonos constantemente.' },
      { type: 'p', text: 'Porque no solo entrenamos para estar más fuertes, también para estar preparados si alguna vez pudiese pasar algo (ojalá sigamos así y nunca tengamos que ponerlo en práctica).' },
      { type: 'p', text: 'La seguridad de nuestra comunidad es lo primero y queremos que sepas que aquí estás en buenas manos.' }
    ]
  },
  {
    slug: 'barbacoa',
    title: 'Barbacoa en el box',
    date: '2025-06-08',
    dateLabel: '8 junio 2025',
    img: 'assets/img/news-barbacoa.jpg',
    cat: 'Comunidad',
    excerpt: 'Buena comida, mejor compañía y ese ambiente de comunidad que hace que todo valga la pena.',
    body: [
      { type: 'p', text: '<strong>¡Ya era hora de barbacoa en el box!</strong>' },
      { type: 'p', text: 'Buena comida, mejor compañía y ese ambiente de comunidad que hace que todo valga la pena.' },
      { type: 'p', text: 'Gracias a todos los que vinieron a cerrar el día como se merece: con risas, brasas y buen rollo. ¡Aquí en esto no nos gana nadie!' }
    ]
  },
  {
    slug: 'versus-battle-of-teams-2025',
    title: 'VERSUS Battle of Teams 2025',
    date: '2025-06-08',
    dateLabel: '8 junio 2025',
    img: 'assets/img/news-battle.jpg',
    cat: 'Competición',
    excerpt: 'Una jornada brutal en el box con nuestra competición por equipos: esfuerzo, estrategia y mucha garra.',
    body: [
      { type: 'p', text: '<strong>VERSUS: Battle of Teams.</strong> Ayer vivimos una jornada brutal en el box con nuestra competición por equipos.' },
      { type: 'p', text: 'Esfuerzo, compañerismo, estrategia y mucha garra en cada WOD. Gracias a todos los atletas por darlo todo, al público por animar sin parar y a quienes lo hicieron posible detrás de escena.' }
    ]
  },
  {
    slug: 'hard-running',
    title: 'Hard Running',
    date: '2025-06-02',
    dateLabel: '2 junio 2025',
    img: 'assets/img/news-hardrunning.jpg',
    cat: 'Comunidad',
    excerpt: 'Correr solo es duro. Correr con tu gente es épico.',
    body: [
      { type: 'p', text: '<strong>VERSUS TEAM.</strong> Correr solo es duro. Correr con tu gente es épico.' },
      { type: 'p', text: 'Gracias al equipazo VERSUS por hacer de esta carrera OCR una experiencia inolvidable.' }
    ]
  },
  {
    slug: 'segunda-jornada-liga-halterofilia',
    title: 'Segunda Jornada de la Liga de Halterofilia Madrileña',
    date: '2025-04-30',
    dateLabel: '30 abril 2025',
    img: 'assets/img/news-liga2.jpg',
    cat: 'Competición',
    excerpt: 'Los chicos del box dieron lo mejor de sí en la tarima, demostrando todo el trabajo que hay detrás.',
    body: [
      { type: 'p', text: '<strong>¡Orgullosos de nuestros atletas!</strong>' },
      { type: 'p', text: 'Este fin de semana, los chicos del box dieron lo mejor de sí en la tarima, demostrando todo el trabajo, constancia y pasión que hay detrás de cada levantamiento.' },
      { type: 'p', text: '¡Seguimos sumando experiencia, kilos y ganas para lo que viene!' }
    ]
  },
  {
    slug: 'dani-primer-puesto-master',
    title: '¡Enhorabuena Dani por tu primer puesto!',
    date: '2025-04-13',
    dateLabel: '13 abril 2025',
    img: 'assets/img/news-dani.jpg',
    cat: 'Competición',
    excerpt: 'Dani, del Club de Halterofilia Versus, ha logrado medalla en el campeonato Máster de España.',
    body: [
      { type: 'p', text: 'Dani, del <strong>Club de Halterofilia Versus</strong>, ha logrado medalla en el campeonato Máster de España.' },
      { type: 'p', text: '¡Enhorabuena Dani por tu primer puesto!' }
    ]
  },
  {
    slug: 'ganadores-versus-open-2025',
    title: '¡Ganadores Versus Open 2025!',
    date: '2025-03-22',
    dateLabel: '22 marzo 2025',
    img: 'assets/img/news-open2025.jpg',
    cat: 'Competición',
    excerpt: 'Ya tenemos los podios del Versus Open 2025 en categorías RX y Scaled, masculino y femenino.',
    body: [
      { type: 'p', text: 'Ya tenemos a los <strong>ganadores del Versus Open 2025</strong>, con podios en RX masculino, RX femenino, Scaled masculino y Scaled femenino.' },
      { type: 'p', text: '¡Enhorabuena a todos los participantes por el nivelazo y el ambiente que dejasteis en el box!' }
    ]
  },
  {
    slug: '7-anos-de-locura-compartida',
    title: '7 años de locura compartida',
    date: '2025-03-07',
    dateLabel: '7 marzo 2025',
    img: 'assets/img/news-7anos.jpg',
    cat: 'Box',
    excerpt: 'Celebramos 7 años de esfuerzo, sudor, abrazos, PRs, risas, lágrimas, burpees y, sobre todo, familia.',
    body: [
      { type: 'p', text: 'Celebramos <strong>7 años</strong> de esfuerzo, sudor, abrazos, PRs, risas, lágrimas, burpees y, sobre todo… familia.' },
      { type: 'p', text: 'Gracias a cada uno de los que habéis sido parte de este viaje: los que habéis estado desde el día 1, los que os habéis sumado en el camino y los que hacéis que este box sea mucho más que un sitio para entrenar.' },
      { type: 'p', text: 'Esto no sería posible sin vosotros. ¡Vamos por muchos más!' }
    ]
  }
];

module.exports = { site, legal, classes, coaches, pricing, schedule, posts };
