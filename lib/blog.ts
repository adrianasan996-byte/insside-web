export interface BlogSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface BlogFAQ {
  q: string
  a: string
}

export interface BlogPost {
  slug: string
  category: string
  tag: string
  title: string
  metaDescription: string
  excerpt: string
  /** Respuesta directa de 2–3 frases: lo que citan Google y los motores de IA. */
  quickAnswer: string
  date: string
  datePublished: string
  readTime: string
  image: string
  color: string
  emoji: string
  featured: boolean
  keywords: string[]
  intro: string[]
  sections: BlogSection[]
  keyTakeaways: string[]
  faqs: BlogFAQ[]
  relatedSpecialists: string[]
}

export const BLOG_AUTHOR = {
  name: "Steph De Gregorio",
  role: "Life Coach & Co-fundadora de Insside",
  slug: "steph-de-gregorio",
  image: "/especialistas/steph-de-gregorio.png",
}

export const POSTS: BlogPost[] = [
  {
    slug: "ansiedad-aunque-todo-este-bien",
    category: "Psicología",
    tag: "Destacado",
    title: "¿Por qué sientes ansiedad aunque todo esté \"bien\"?",
    metaDescription:
      "Sentir ansiedad cuando todo va bien es más común de lo que crees. Descubre por qué pasa, cómo reconocerla y qué hacer para recuperar la calma.",
    excerpt:
      "La ansiedad no siempre llega en momentos de crisis. A veces aparece justo cuando todo parece estar en orden. Entender por qué es el primer paso para transformarla.",
    quickAnswer:
      "Puedes sentir ansiedad aunque tu vida esté \"bien\" porque tu sistema nervioso no responde solo a lo que pasa afuera, sino a lo que acumulaste adentro: estrés que no procesaste, emociones que pospusiste, exigencias internas y la costumbre de estar siempre alerta. Cuando por fin baja el ruido externo, lo que estaba guardado encuentra espacio para salir.",
    date: "28 abr 2026",
    datePublished: "2026-04-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?w=1200&h=750&fit=crop",
    color: "#5A634F",
    emoji: "🧠",
    featured: true,
    keywords: ["ansiedad sin motivo", "ansiedad cuando todo está bien", "por qué tengo ansiedad", "ansiedad funcional", "síntomas de ansiedad"],
    intro: [
      "Te voy a contar algo que escucho muchísimo: \"Steph, no entiendo. Tengo trabajo, tengo a mi familia, no me pasa nada grave… ¿por qué me siento así?\". Y casi siempre viene acompañado de culpa, como si no tuvieras \"derecho\" a sentirte mal.",
      "Quiero empezar por ahí: no necesitas una tragedia para que tu ansiedad sea válida. Lo que sientes tiene una razón de ser, aunque todavía no la veas. Y cuando te miras adentro con honestidad y compasión, esa razón empieza a aparecer.",
    ],
    sections: [
      {
        heading: "La ansiedad no siempre tiene que ver con lo que está pasando hoy",
        paragraphs: [
          "La ansiedad es una respuesta de alerta de tu cuerpo. Su trabajo es protegerte. El problema es que tu sistema nervioso no distingue muy bien entre un peligro real y una exigencia constante, un pendiente que no cierras o una emoción que llevas meses empujando hacia abajo.",
          "Muchas veces, cuando por fin las cosas \"se calman\", es cuando aparece. Pasaste tanto tiempo en modo supervivencia que tu cuerpo no sabe todavía cómo estar en paz. Es como cuando sales de vacaciones y te enfermas el primer día: lo que estaba aguantando, por fin suelta.",
        ],
      },
      {
        heading: "Las causas más comunes de la ansiedad \"sin motivo\"",
        bullets: [
          "Estrés acumulado: meses (o años) sosteniendo todo sin pausa.",
          "Exigencia interna: la voz que te dice que nunca es suficiente, aunque desde afuera todo se vea bien.",
          "Emociones pospuestas: duelos, decepciones o cambios que no te diste el tiempo de sentir.",
          "Desconexión con tu propósito: tener una vida que funciona, pero que no se siente tuya.",
          "Hábitos que activan el cuerpo: poco descanso, mucha cafeína, pantallas hasta tarde, cero movimiento.",
          "Transiciones: un cambio de trabajo, de país, de relación o de etapa, incluso cuando es un cambio que elegiste.",
        ],
      },
      {
        heading: "Cómo se ve la ansiedad cuando \"todo está bien\"",
        paragraphs: [
          "No siempre se ve como un ataque de pánico. A veces es mucho más silenciosa, y por eso cuesta tanto reconocerla.",
        ],
        bullets: [
          "Te cuesta desconectarte, incluso cuando descansas.",
          "Sientes un nudo en el pecho o en el estómago sin razón aparente.",
          "Duermes, pero te despiertas cansada.",
          "Te irritas con facilidad por cosas pequeñas.",
          "Piensas en escenarios negativos que no han pasado.",
          "Sientes que tienes que estar ocupada todo el tiempo para estar tranquila.",
        ],
      },
      {
        heading: "Qué puedes hacer hoy para empezar a sentirte mejor",
        bullets: [
          "Nómbralo sin juzgarlo: \"Estoy sintiendo ansiedad\" es muy distinto a \"algo está mal conmigo\".",
          "Respira más lento de lo que inhalas: exhalar más largo (por ejemplo, inhala en 4 y exhala en 6) le dice a tu cuerpo que está a salvo.",
          "Pregúntate qué estás cargando: escribe sin filtro durante 5 minutos qué te preocupa, qué te pesa y qué estás evitando.",
          "Revisa tus básicos: sueño, alimentación, movimiento y tiempo sin pantallas. Parecen obvios, pero sostienen todo lo demás.",
          "Baja la exigencia: no tienes que resolverlo todo hoy. Elige una sola cosa.",
        ],
      },
      {
        heading: "Cuándo es momento de buscar acompañamiento",
        paragraphs: [
          "Si la ansiedad dura varias semanas, interfiere con tu trabajo, tu sueño o tus relaciones, o si sientes que ya no puedes sola, es momento de pedir ayuda. Pedir apoyo no es un fracaso; es un acto de amor propio.",
          "Un buen primer paso es entender qué tipo de ansiedad estás viviendo. Por eso creamos un test gratuito de 5 minutos en test.insside.co que te da un resultado personalizado y te sugiere el tipo de especialista que más se ajusta a ti. Y si estás en una crisis o sientes que estás en peligro, contacta de inmediato a los servicios de emergencia de tu país.",
        ],
      },
    ],
    keyTakeaways: [
      "La ansiedad puede aparecer aunque tu vida esté en orden, porque responde a lo que acumulaste adentro.",
      "Suele mostrarse como tensión, cansancio, irritabilidad o dificultad para desconectarte.",
      "Nombrarla sin juicio, respirar lento y revisar tus básicos ayuda a bajar la intensidad.",
      "Si dura semanas o afecta tu día a día, busca acompañamiento profesional.",
    ],
    faqs: [
      {
        q: "¿Es normal tener ansiedad sin ningún motivo?",
        a: "Sí. Muchas veces sí hay un motivo, solo que no es evidente: estrés acumulado, exigencia interna, emociones no procesadas o una transición de vida. Que no veas la causa no significa que lo que sientes no sea real.",
      },
      {
        q: "¿Cómo sé si lo que tengo es ansiedad o solo estrés?",
        a: "El estrés suele tener un detonante claro y baja cuando la situación termina. La ansiedad tiende a mantenerse aunque la situación haya pasado, y muchas veces se anticipa a cosas que todavía no ocurren. Si dudas, un especialista puede ayudarte a identificarlo.",
      },
      {
        q: "¿Qué hago cuando siento ansiedad en el momento?",
        a: "Haz exhalaciones más largas que tus inhalaciones, apoya los pies en el suelo y nombra cinco cosas que ves a tu alrededor. Esto ayuda a tu sistema nervioso a regresar al presente.",
      },
      {
        q: "¿La ansiedad se puede curar?",
        a: "La ansiedad se puede manejar y reducir mucho con acompañamiento psicológico, cambios de hábitos y herramientas de regulación emocional. La meta no es no sentirla nunca, sino que deje de dirigir tu vida.",
      },
      {
        q: "¿Con qué tipo de especialista debo hablar si tengo ansiedad?",
        a: "Una psicóloga es el punto de partida ideal para trabajar la ansiedad. Si además sientes que te falta claridad o dirección en tu vida, un proceso de coaching puede complementarlo. En Insside puedes encontrar ambos, online y en español.",
      },
    ],
    relatedSpecialists: ["valentina-tello", "paty-romero"],
  },
  {
    slug: "como-poner-limites-sin-culpa",
    category: "Coaching",
    tag: "Coaching",
    title: "El poder de decir no: límites que liberan",
    metaDescription:
      "Aprende a poner límites sin culpa. Por qué nos cuesta tanto decir que no, cómo hacerlo con respeto y frases prácticas para empezar hoy.",
    excerpt:
      "Aprender a decir no no es egoísmo, es respeto propio. En este artículo exploramos por qué nos cuesta tanto y cómo establecer límites sin culpa.",
    quickAnswer:
      "Poner límites es comunicar con claridad qué aceptas y qué no, para cuidar tu energía, tu tiempo y tus valores. Nos cuesta porque aprendimos a ganarnos el cariño complaciendo, pero un límite dicho con respeto no aleja a las personas sanas: hace tus relaciones más honestas.",
    date: "21 abr 2026",
    datePublished: "2026-04-21",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=750&fit=crop",
    color: "#8B9970",
    emoji: "🎯",
    featured: false,
    keywords: ["cómo poner límites", "decir no sin culpa", "límites sanos", "complacer a los demás", "asertividad"],
    intro: [
      "¿Cuántas veces dijiste \"sí\" cuando por dentro estabas gritando \"no\"? Es uno de los patrones que más veo en las personas que acompaño: sí al trabajo extra, al favor de último minuto, al plan que no querías… y después, agotamiento y, sinceramente, un poco de resentimiento.",
      "Lo que he aprendido es que cada \"sí\" que no sientes es un \"no\" que te estás diciendo a ti. Y eso, con el tiempo, pesa.",
    ],
    sections: [
      {
        heading: "Por qué nos cuesta tanto decir que no",
        paragraphs: [
          "Casi nunca es por falta de carácter. Es porque en algún momento aprendimos que ser querida dependía de estar disponible, de no molestar, de ser \"la que siempre puede\". Esa creencia nos protegió en su momento, pero hoy probablemente ya no te sirve.",
        ],
        bullets: [
          "Miedo al rechazo o a decepcionar.",
          "Culpa, como si cuidarte fuera egoísta.",
          "La idea de que tu valor depende de lo que haces por los demás.",
          "Evitar el conflicto a toda costa.",
        ],
      },
      {
        heading: "Qué es (y qué no es) un límite",
        paragraphs: [
          "Un límite no es un castigo ni una forma de controlar a otra persona. Es información: le dices al otro cómo puede relacionarse contigo. Tú no controlas cómo reacciona, pero sí decides qué haces tú.",
          "Por ejemplo, \"no puedes llamarme después de las 9\" intenta controlar al otro. \"Después de las 9 no contesto llamadas de trabajo\" es un límite: habla de ti.",
        ],
      },
      {
        heading: "Cómo poner límites sin culpa, paso a paso",
        bullets: [
          "Identifica dónde te duele: ¿en qué situaciones terminas cansada, molesta o con la sensación de haberte traicionado?",
          "Conecta con tu porqué: un límite es más fácil de sostener cuando sabes qué estás cuidando (tu descanso, tu salud, tu familia, tu paz).",
          "Dilo corto y claro: no necesitas justificarte con diez explicaciones.",
          "Espera incomodidad: la culpa al principio no significa que estés haciendo algo mal, significa que estás haciendo algo nuevo.",
          "Sostenlo con coherencia: un límite que cambias cada vez que alguien insiste deja de ser un límite.",
        ],
      },
      {
        heading: "Frases que puedes usar hoy",
        bullets: [
          "\"Gracias por pensar en mí, pero esta vez no puedo.\"",
          "\"Déjame revisarlo y te confirmo.\" (Te da tiempo para no decir sí en automático.)",
          "\"Puedo ayudarte con esto, pero no con aquello.\"",
          "\"Esto no me hace sentir bien. Necesito que lo hablemos distinto.\"",
          "\"No.\" (Sí, también es una frase completa.)",
        ],
      },
      {
        heading: "Lo que cambia cuando empiezas a poner límites",
        paragraphs: [
          "Al principio da miedo. Pero muy pronto notas que tienes más energía, que tus \"sí\" se vuelven genuinos y que las relaciones que valen la pena se fortalecen. Las personas que solo estaban ahí por lo que les dabas, también se hacen visibles. Y eso, aunque duela, es un regalo.",
          "Si sientes que este patrón está muy arraigado, un proceso de coaching te puede ayudar a identificar las creencias que lo sostienen y a practicar nuevas formas de comunicarte.",
        ],
      },
    ],
    keyTakeaways: [
      "Cada \"sí\" que no sientes es un \"no\" hacia ti.",
      "Un límite habla de lo que tú vas a hacer, no de controlar al otro.",
      "La culpa inicial es normal: estás cambiando un patrón.",
      "Los límites hacen tus relaciones más honestas, no más distantes.",
    ],
    faqs: [
      {
        q: "¿Poner límites es ser egoísta?",
        a: "No. Ser egoísta es ignorar las necesidades de los demás; poner límites es reconocer también las tuyas. Cuidarte te permite estar para otros desde un lugar más sano y genuino.",
      },
      {
        q: "¿Por qué siento culpa cuando digo que no?",
        a: "Porque probablemente aprendiste que tu valor dependía de complacer. La culpa es la reacción de un patrón antiguo ante un comportamiento nuevo, y se va suavizando con la práctica.",
      },
      {
        q: "¿Cómo pongo límites con mi familia?",
        a: "Con calma, en un momento neutral y hablando desde ti: \"yo necesito\", \"yo prefiero\", \"yo no voy a\". Empieza por límites pequeños y sé constante. Con la familia es normal que tome más tiempo.",
      },
      {
        q: "¿Qué hago si la otra persona se enoja por mi límite?",
        a: "Su reacción es suya. Puedes validar su emoción (\"entiendo que te moleste\") sin retirar tu límite. Si alguien se enoja sistemáticamente cada vez que te cuidas, esa es información valiosa sobre la relación.",
      },
    ],
    relatedSpecialists: ["barbara-serrano", "luisa-reyes"],
  },
  {
    slug: "comer-con-culpa-como-romper-el-ciclo",
    category: "Nutrición",
    tag: "Nutrición",
    title: "Comer con culpa: cómo romper el ciclo",
    metaDescription:
      "¿Sientes culpa después de comer? Entiende el ciclo restricción-culpa, cómo se relaciona con tus emociones y pasos prácticos para sanar tu relación con la comida.",
    excerpt:
      "¿Terminas de comer y sientes culpa? No estás sola. La relación emocional con la comida es más común de lo que crees, y tiene solución.",
    quickAnswer:
      "La culpa al comer suele nacer de reglas rígidas sobre la comida (\"bueno\" vs. \"malo\") y de usarla para regular emociones. Se rompe el ciclo dejando de restringir de forma extrema, comiendo con más presencia, identificando qué emoción hay detrás del antojo y, si hace falta, trabajando con una nutricionista que acompañe desde la salud y no desde el castigo.",
    date: "14 abr 2026",
    datePublished: "2026-04-14",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=750&fit=crop",
    color: "#AB6139",
    emoji: "🌿",
    featured: false,
    keywords: ["culpa al comer", "hambre emocional", "relación con la comida", "comer por ansiedad", "alimentación consciente"],
    intro: [
      "Comes algo que \"no deberías\", y antes de terminar ya está ahí la voz: \"¿Por qué hiciste eso? Mañana empiezo de nuevo\". Y mañana restringes, y pasado vuelves a comer de más, y otra vez la culpa. Si esto te suena, quiero que sepas algo: no es falta de fuerza de voluntad.",
      "La comida casi nunca es solo comida. Es consuelo, es premio, es pausa, es compañía. Y entender eso cambia todo.",
    ],
    sections: [
      {
        heading: "El ciclo restricción → descontrol → culpa",
        paragraphs: [
          "Cuando te prohíbes ciertos alimentos, tu cuerpo y tu mente los desean más. Cuando por fin \"rompes la regla\", tiendes a comer más de lo que querías, porque sientes que es ahora o nunca. Y luego viene la culpa, que te lleva a restringir otra vez. Es un círculo, y el problema no eres tú: es el círculo.",
        ],
      },
      {
        heading: "Hambre física vs. hambre emocional",
        bullets: [
          "El hambre física aparece de a poco; el hambre emocional llega de golpe.",
          "El hambre física acepta distintas opciones; la emocional pide algo muy específico.",
          "El hambre física se calma al estar satisfecha; la emocional sigue aunque ya estés llena.",
          "Después del hambre física sientes bienestar; después de la emocional, muchas veces culpa.",
        ],
      },
      {
        heading: "Pasos para empezar a romper el ciclo",
        bullets: [
          "Elimina las etiquetas de \"bueno\" y \"malo\": la comida no tiene valor moral, y tú tampoco eres \"mala\" por comer algo.",
          "No llegues con hambre extrema: comer con regularidad reduce los episodios de descontrol.",
          "Haz una pausa antes del antojo: pregúntate \"¿qué estoy sintiendo ahora mismo?\". A veces es cansancio, aburrimiento o tristeza.",
          "Come con presencia: sin pantallas, saboreando, notando cuándo empiezas a sentirte satisfecha.",
          "Busca otras formas de consolarte: una caminata, escribir, llamar a alguien, darte un baño. No para reemplazar la comida siempre, sino para tener más opciones.",
          "Háblate como le hablarías a una amiga: la culpa no te hace comer mejor, solo te hace sentir peor.",
        ],
      },
      {
        heading: "Cuándo pedir ayuda profesional",
        paragraphs: [
          "Si la comida ocupa gran parte de tus pensamientos, si tienes episodios frecuentes en los que sientes que pierdes el control, si compensas lo que comes con ayunos, ejercicio excesivo u otras conductas, o si tu peso y tu cuerpo definen cómo te sientes contigo misma, es importante que busques acompañamiento. Una nutricionista con enfoque integral, y en algunos casos también una psicóloga, pueden ayudarte a sanar tu relación con la comida de raíz.",
        ],
      },
    ],
    keyTakeaways: [
      "La culpa al comer no es falta de voluntad: es un ciclo aprendido.",
      "La restricción extrema suele llevar a más descontrol, no a menos.",
      "Diferenciar hambre física de hambre emocional es el primer paso.",
      "Si la comida ocupa mucho espacio en tu mente, pide acompañamiento profesional.",
    ],
    faqs: [
      {
        q: "¿Por qué siento culpa después de comer?",
        a: "Generalmente porque tienes reglas internas sobre qué \"deberías\" comer, muchas veces aprendidas de dietas o mensajes culturales. Cuando las rompes, aparece la culpa. Revisar esas reglas con flexibilidad es clave para sanar.",
      },
      {
        q: "¿Qué es el hambre emocional?",
        a: "Es el deseo de comer para calmar una emoción (ansiedad, tristeza, aburrimiento, estrés) más que por una necesidad física. Es muy común y no es algo malo en sí; el problema aparece cuando es tu única herramienta para regularte.",
      },
      {
        q: "¿Hacer dieta ayuda a dejar de comer con ansiedad?",
        a: "Las dietas muy restrictivas suelen empeorar el ciclo, porque aumentan el deseo por los alimentos prohibidos. Funciona mejor una alimentación regular, flexible y acompañada por una profesional.",
      },
      {
        q: "¿Una nutricionista me puede ayudar con la culpa al comer?",
        a: "Sí, especialmente si trabaja con un enfoque integral y no solo de calorías. En Insside contamos con nutricionistas y health coaches que acompañan la relación con la comida desde la salud y el bienestar emocional.",
      },
    ],
    relatedSpecialists: ["blanca-vazquez", "malena-lum"],
  },
  {
    slug: "practica-mindfulness-5-minutos",
    category: "Mindfulness",
    tag: "Mindfulness",
    title: "5 minutos de presencia al día que cambian todo",
    metaDescription:
      "Una práctica de mindfulness de 5 minutos para principiantes, paso a paso. Cómo empezar a meditar sin presión y qué beneficios puedes notar.",
    excerpt:
      "La meditación no requiere horas ni silencio total. Aquí te enseñamos una práctica sencilla de 5 minutos que puedes empezar hoy.",
    quickAnswer:
      "Para empezar con mindfulness solo necesitas 5 minutos al día: siéntate cómoda, lleva tu atención a la respiración, nota cuando tu mente se distrae y vuelve con amabilidad. La clave no es dejar la mente en blanco, sino practicar el regreso al presente, todos los días, sin exigirte hacerlo perfecto.",
    date: "7 abr 2026",
    datePublished: "2026-04-07",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=750&fit=crop",
    color: "#4A7070",
    emoji: "🌙",
    featured: false,
    keywords: ["mindfulness para principiantes", "meditación de 5 minutos", "cómo empezar a meditar", "atención plena", "ejercicio de respiración"],
    intro: [
      "Si alguna vez pensaste que meditar no era para ti porque tu mente no para, no tienes tiempo o sientes que lo estás \"haciendo mal\", te entiendo. La meditación no se trata de callar la mente, sino de aprender a volver.",
      "Y para volver, cinco minutos son suficientes para empezar.",
    ],
    sections: [
      {
        heading: "Qué es mindfulness, en palabras simples",
        paragraphs: [
          "Mindfulness, o atención plena, es prestar atención a lo que está pasando ahora mismo, dentro y fuera de ti, con curiosidad y sin juzgar. No es una técnica para sentirte bien siempre; es una forma de estar presente con lo que hay, incluso cuando no es cómodo.",
        ],
      },
      {
        heading: "La práctica de 5 minutos, paso a paso",
        bullets: [
          "Minuto 1 — Llega: siéntate con la espalda cómoda, los pies en el suelo y cierra los ojos o baja la mirada.",
          "Minuto 2 — Respira: nota el aire entrando y saliendo. No lo cambies, solo obsérvalo.",
          "Minuto 3 — Siente tu cuerpo: recorre con tu atención la cabeza, los hombros, el pecho, el abdomen. ¿Dónde hay tensión?",
          "Minuto 4 — Vuelve: tu mente se va a distraer. Cuando lo notes, di internamente \"pensando\" y regresa a la respiración. Ese regreso es la práctica.",
          "Minuto 5 — Agradece: pregúntate \"¿qué necesito hoy?\" y abre los ojos despacio.",
        ],
      },
      {
        heading: "Cómo hacerlo un hábito (de verdad)",
        bullets: [
          "Ánclalo a algo que ya haces: después del café, antes de abrir el correo o al acostarte.",
          "Pon una alarma suave para no estar pendiente del tiempo.",
          "No te juzgues por los días que no lo haces: retoma al día siguiente.",
          "Empieza con 5 minutos y quédate ahí un tiempo. La constancia vale más que la duración.",
        ],
      },
      {
        heading: "Qué puedes notar con la práctica",
        paragraphs: [
          "Con la práctica constante, muchas personas notan que reaccionan con más calma, que identifican antes cuando el estrés empieza a subir y que duermen mejor. No es magia, es entrenamiento: estás enseñándole a tu mente a regresar al presente una y otra vez.",
          "Si quieres profundizar o te cuesta sostener la práctica sola, acompañarte con una especialista en bienestar emocional puede ayudarte a integrarla en tu día a día.",
        ],
      },
    ],
    keyTakeaways: [
      "Meditar no es dejar la mente en blanco: es practicar el regreso al presente.",
      "Cinco minutos diarios son suficientes para empezar.",
      "Anclar la práctica a un hábito existente ayuda a sostenerla.",
      "La constancia importa más que la duración.",
    ],
    faqs: [
      {
        q: "¿Cinco minutos de meditación sirven de algo?",
        a: "Sí. Una práctica corta pero constante es más útil que sesiones largas que haces de vez en cuando. Lo importante es crear el hábito de volver al presente.",
      },
      {
        q: "¿Qué hago si no puedo dejar de pensar mientras medito?",
        a: "Es completamente normal. La mente piensa; ese es su trabajo. La práctica consiste en notar que te distrajiste y volver con amabilidad a la respiración, todas las veces que haga falta.",
      },
      {
        q: "¿Cuál es el mejor momento del día para meditar?",
        a: "El que puedas sostener. Muchas personas prefieren la mañana para empezar el día con calma, y otras la noche para soltar antes de dormir. Lo importante es que sea siempre a una hora parecida.",
      },
      {
        q: "¿Mindfulness reemplaza la terapia?",
        a: "No. Es una herramienta muy valiosa para el bienestar, pero no sustituye el acompañamiento psicológico cuando estás atravesando ansiedad, depresión u otra dificultad emocional importante. Se complementan muy bien.",
      },
    ],
    relatedSpecialists: ["daniela-pena", "steph-de-gregorio"],
  },
  {
    slug: "duelo-no-reconocido-perdidas-sin-nombre",
    category: "Psicología",
    tag: "Psicología",
    title: "Cuando el duelo no tiene nombre: pérdidas no reconocidas",
    metaDescription:
      "El duelo no es solo por una muerte. Perder un trabajo, una amistad o una etapa también duele. Qué es el duelo no reconocido y cómo atravesarlo.",
    excerpt:
      "No todo duelo es por una muerte. Perder un trabajo, una amistad, una etapa de vida… también duele. Y merece ser atendido.",
    quickAnswer:
      "El duelo no reconocido es el dolor por una pérdida que el entorno no valida o no considera \"suficiente\": una ruptura, una mudanza, un trabajo, una amistad, un embarazo o una versión de ti que ya no está. Se atraviesa dándole nombre, permitiéndote sentirlo sin compararlo, creando un ritual de cierre y buscando espacios donde ese dolor sea escuchado.",
    date: "1 abr 2026",
    datePublished: "2026-04-01",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1200&h=750&fit=crop",
    color: "#5A634F",
    emoji: "💙",
    featured: false,
    keywords: ["duelo no reconocido", "duelo por una ruptura", "duelo migratorio", "cómo superar una pérdida", "tipos de duelo"],
    intro: [
      "Imagina mudarte de país por decisión propia. Todo \"va según el plan\" y, aun así, algo duele. Muchas veces eso que duele tiene nombre: es duelo. Por la rutina, por la gente, por la versión de ti que vivía allá.",
      "Muchas de las personas que acompaño viven algo parecido. Están atravesando una pérdida, pero como nadie murió, sienten que no tienen permiso para estar tristes.",
    ],
    sections: [
      {
        heading: "Qué es el duelo no reconocido",
        paragraphs: [
          "En psicología se habla de duelo no reconocido (o desautorizado) para describir las pérdidas que la sociedad no valida del todo. No hay velorio, no hay días libres, nadie te pregunta cómo estás. Y como no se reconoce afuera, muchas veces tampoco te lo permites adentro.",
        ],
      },
      {
        heading: "Pérdidas que también se lloran",
        bullets: [
          "El fin de una relación o una amistad importante.",
          "La migración: dejar tu país, tu idioma cotidiano, tu red.",
          "Un despido o el cierre de un proyecto que amabas.",
          "Un embarazo que no continuó o un diagnóstico de infertilidad.",
          "La pérdida de una mascota.",
          "La salud que tenías antes de una enfermedad.",
          "Una etapa de vida: los hijos que se van, el retiro, una identidad que ya no encaja.",
        ],
      },
      {
        heading: "Señales de que estás atravesando un duelo",
        bullets: [
          "Tristeza que aparece en momentos inesperados.",
          "Cansancio, apatía o dificultad para concentrarte.",
          "Irritabilidad o enojo sin una causa clara.",
          "Sensación de no reconocerte o de estar \"en pausa\".",
          "Necesidad de minimizar lo que sientes: \"no es para tanto\".",
        ],
      },
      {
        heading: "Cómo atravesar una pérdida que nadie nombra",
        bullets: [
          "Ponle nombre: \"estoy en duelo por…\". Nombrarlo le da legitimidad.",
          "No compares tu dolor: que otra persona esté peor no hace que tu pérdida no importe.",
          "Crea un ritual: una carta de despedida, un último recorrido, guardar objetos con intención. Los rituales ayudan a cerrar.",
          "Habla con alguien que sepa escuchar sin intentar arreglarte.",
          "Dale tiempo: el duelo no es lineal. Habrá días buenos y días en que parece que retrocedes.",
          "Pregúntate qué quieres llevarte de lo que perdiste: aprendizajes, recuerdos, partes de ti.",
        ],
      },
      {
        heading: "Cuándo buscar acompañamiento",
        paragraphs: [
          "Si después de un tiempo el dolor sigue siendo muy intenso, si te cuesta funcionar en tu día a día, si te aíslas o si sientes que no puedes seguir adelante, busca apoyo profesional. Una psicóloga puede acompañarte a procesar la pérdida y a reconstruir tu sentido. Si en algún momento tienes pensamientos de hacerte daño, contacta de inmediato a los servicios de emergencia o a una línea de crisis de tu país.",
        ],
      },
    ],
    keyTakeaways: [
      "No necesitas que alguien muera para estar en duelo.",
      "Las pérdidas no reconocidas también merecen tiempo y cuidado.",
      "Nombrar, no comparar y crear rituales ayuda a procesarlas.",
      "Si el dolor no cede o te impide funcionar, busca acompañamiento.",
    ],
    faqs: [
      {
        q: "¿Qué es un duelo no reconocido?",
        a: "Es el duelo por una pérdida que el entorno no valida o minimiza, como una ruptura, una migración, un despido o la pérdida de una mascota. El dolor es real aunque no tenga el reconocimiento social de otras pérdidas.",
      },
      {
        q: "¿Cuánto dura un duelo?",
        a: "No hay un tiempo fijo. Depende de la pérdida, de tu historia y del apoyo que tengas. Lo importante no es cuánto dura, sino que el dolor se vaya transformando y te permita seguir viviendo.",
      },
      {
        q: "¿Es normal sentir duelo por emigrar?",
        a: "Sí, es muy común. El llamado duelo migratorio incluye la pérdida de la familia cercana, la cultura, el idioma cotidiano y el estatus social. Puedes sentirlo incluso cuando el cambio fue una buena decisión.",
      },
      {
        q: "¿Cuándo debo ir a terapia por un duelo?",
        a: "Cuando el dolor no disminuye con el tiempo, afecta tu trabajo, tu sueño o tus relaciones, o cuando sientes que no puedes con él sola. Pedir ayuda no acelera el duelo a la fuerza, pero sí lo hace menos solitario.",
      },
    ],
    relatedSpecialists: ["valentina-tello", "paty-romero"],
  },
  {
    slug: "burnout-vs-estres-diferencias",
    category: "Bienestar",
    tag: "Bienestar",
    title: "Burnout vs. estrés: ¿sabes cuál estás viviendo?",
    metaDescription:
      "Burnout y estrés no son lo mismo. Conoce sus diferencias, los síntomas del síndrome de burnout y qué hacer para recuperarte de cada uno.",
    excerpt:
      "Ambos se sienten agotadores, pero tienen diferencias clave. Identificar cuál es el tuyo es esencial para saber qué tipo de apoyo buscar.",
    quickAnswer:
      "El estrés es sentir demasiado: demasiada presión, urgencia y actividad, pero con la sensación de que si resuelves todo te sentirás mejor. El burnout es sentir demasiado poco: agotamiento profundo, desconexión y sensación de que nada de lo que haces sirve. La Organización Mundial de la Salud lo reconoce como un fenómeno ocupacional causado por estrés laboral crónico mal gestionado.",
    date: "25 mar 2026",
    datePublished: "2026-03-25",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=1200&h=750&fit=crop",
    color: "#64C1C4",
    emoji: "⚡",
    featured: false,
    keywords: ["burnout síntomas", "diferencia entre estrés y burnout", "síndrome de desgaste profesional", "agotamiento laboral", "cómo recuperarse del burnout"],
    intro: [
      "\"Estoy cansada\" se ha vuelto casi un saludo. Pero hay un cansancio que se arregla con un fin de semana libre, y otro que no se va ni con vacaciones. Saber cuál es el tuyo cambia por completo lo que necesitas.",
    ],
    sections: [
      {
        heading: "Qué es el estrés",
        paragraphs: [
          "El estrés es la respuesta natural de tu cuerpo ante una exigencia. En dosis manejables, incluso te ayuda a enfocarte y rendir. Se vuelve un problema cuando es constante y no hay espacios de recuperación. Aun así, cuando estás estresada, todavía sientes que puedes con todo si solo logras organizarte mejor.",
        ],
      },
      {
        heading: "Qué es el burnout",
        paragraphs: [
          "La Organización Mundial de la Salud incluye el burnout en su Clasificación Internacional de Enfermedades (CIE-11) como un fenómeno ocupacional, no como una condición médica. Lo describe con tres dimensiones: sensación de agotamiento de energía, mayor distancia mental o cinismo hacia el trabajo, y menor eficacia profesional.",
          "Es lo que pasa cuando el estrés se sostiene tanto tiempo que te vacía. Ya no se trata de tener mucho que hacer, sino de no tener nada más que dar.",
        ],
      },
      {
        heading: "Diferencias clave entre estrés y burnout",
        bullets: [
          "Estrés: hiperactividad y urgencia. Burnout: desconexión y apatía.",
          "Estrés: emociones intensas (ansiedad, irritabilidad). Burnout: emociones apagadas, como si nada importara.",
          "Estrés: agota tu energía física. Burnout: agota tu motivación y tu esperanza.",
          "Estrés: mejora cuando baja la presión. Burnout: no mejora solo con descansar unos días.",
          "Estrés: \"tengo demasiado\". Burnout: \"ya no puedo más\".",
        ],
      },
      {
        heading: "Qué hacer según lo que estés viviendo",
        paragraphs: [
          "Si es estrés, suele ayudar organizar prioridades, delegar, poner límites a tu disponibilidad y crear pausas reales en tu día (no solo cambiar de pantalla).",
          "Si es burnout, necesitas algo más profundo:",
        ],
        bullets: [
          "Reconocerlo sin culpa: no es debilidad, es una señal de que algo en tu forma de trabajar o de vivir no es sostenible.",
          "Reducir la carga de verdad, no solo \"descansar para seguir igual\".",
          "Reconectar con lo que te importa: ¿para qué haces lo que haces?",
          "Revisar tus creencias sobre el éxito, la productividad y tu valor.",
          "Buscar acompañamiento: una psicóloga o una coach pueden ayudarte a salir del agotamiento y rediseñar tu forma de trabajar.",
        ],
      },
      {
        heading: "Una pregunta para ti",
        paragraphs: [
          "Si hoy te dieran dos semanas libres, ¿volverías con energía o con el mismo vacío? Tu respuesta dice mucho. Y si es la segunda, no estás exagerando: mereces parar, mirarte adentro y construir una forma de vivir que no te cueste la salud.",
        ],
      },
    ],
    keyTakeaways: [
      "El estrés es exceso de presión; el burnout es agotamiento con desconexión.",
      "La OMS reconoce el burnout como un fenómeno ocupacional en la CIE-11.",
      "El estrés mejora al bajar la presión; el burnout requiere cambios más profundos.",
      "Pedir ayuda a tiempo evita que el agotamiento se vuelva crónico.",
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre estrés y burnout?",
        a: "El estrés implica exceso de presión y urgencia, pero conservas la motivación. El burnout implica agotamiento profundo, distancia emocional con tu trabajo y sensación de ineficacia, y no se resuelve solo con descansar unos días.",
      },
      {
        q: "¿Cuáles son los síntomas del burnout?",
        a: "Agotamiento físico y emocional persistente, cinismo o desconexión con el trabajo, sensación de que nada de lo que haces sirve, dificultad para concentrarte, irritabilidad, problemas de sueño y pérdida de motivación.",
      },
      {
        q: "¿Cuánto tiempo toma recuperarse del burnout?",
        a: "Varía mucho según la persona y la intensidad, y puede tomar semanas o meses. Se acelera cuando hay cambios reales en la carga y el entorno, y cuando cuentas con acompañamiento profesional.",
      },
      {
        q: "¿El burnout es una enfermedad?",
        a: "La OMS no lo clasifica como una condición médica, sino como un fenómeno ocupacional relacionado con el estrés laboral crónico. Aun así, su impacto en la salud es real y puede coexistir con ansiedad o depresión, por lo que conviene consultarlo con una profesional.",
      },
      {
        q: "¿Qué especialista me puede ayudar con el burnout?",
        a: "Una psicóloga puede ayudarte a procesar el agotamiento y descartar otras condiciones, y una coach puede acompañarte a rediseñar tus prioridades, límites y forma de trabajar. En Insside tienes ambas opciones, online y en español.",
      },
    ],
    relatedSpecialists: ["steph-de-gregorio", "daniela-pena"],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
