export interface SpecialistProfile {
  id: string
  slug: string
  name: string
  title: string
  category: string
  shortBio: string
  bio: string
  approach: string
  specialties: string[]
  credentials: string[]
  modalities: string[]
  languages: string[]
  rating: number
  reviewCount: number
  sessionPrice: number
  image: string
  available: boolean
  city: string
  country: string
  youtubeId?: string
  testimonialImages?: string[]
  registrationBadge?: string
  calendars: {
    exploratory?: string
    individual?: string
    package4?: string
    couple?: string
  }
}

export const SPECIALISTS: SpecialistProfile[] = [
  {
    id: "1",
    slug: "valentina-tello",
    name: "Valentina Tello",
    title: "Psicóloga Clínica",
    category: "Psicología",
    shortBio:
      "Psicóloga clínica con enfoque cognitivo-conductual. Acompaña procesos de ansiedad, autoestima y transformación personal.",
    bio: "Soy psicóloga clínica venezolana que desde pequeña sintió curiosidad por entender cómo funciona la mente. Esa curiosidad me llevó a estudiar Psicología, pero con el tiempo entendí que no solo quería comprender, sino acompañar. Hoy acompaño procesos de cambio real, ayudando a quienes me consultan a entenderse mejor, transformar sus patrones y fortalecer sus recursos internos.",
    approach:
      "Trabajo desde la Terapia Cognitivo-Conductual con una filosofía integradora. Mis sesiones combinan psicoeducación, metáforas y herramientas prácticas para que puedas comprenderte mejor y transformar los patrones que te limitan.",
    specialties: [
      "Ansiedad",
      "Depresión",
      "Trauma",
      "Duelo",
      "Autoestima",
      "Límites",
      "Hábitos",
      "Dependencia emocional",
      "Resolución de conflictos",
    ],
    credentials: [
      "Licenciada en Psicología Clínica – Universidad Arturo Michelena (Venezuela)",
      "Registro #17.562 – Colegio de Psicólogos de Venezuela",
      "Diplomado en Terapia Cognitivo-Conductual – Instituto Latinoamericano de Estudios de Posgrado",
      "Experta en Psicología Cognitivo-Conductual – Universidad Tecnológica TECH",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.9,
    reviewCount: 118,
    sessionPrice: 57,
    image: "/especialistas/valentina-tello.png",
    available: true,
    city: "Valencia",
    country: "Venezuela",
    youtubeId: "m0to1FJOEpU",
    registrationBadge: "FPV: #17.562",
    testimonialImages: [],
    calendars: {
      exploratory: "https://link.insside.co/widget/bookings/valentina-llamada-exploratoria",
      individual: "https://link.insside.co/widget/bookings/valentina-tello1",
    },
  },
  {
    id: "2",
    slug: "malena-lum",
    name: "Malena Lum",
    title: "Health Coach Holística",
    category: "Health Coaching",
    shortBio:
      "Health Coach holística con más de 8 años de experiencia. Guía procesos de transformación desde adentro hacia afuera.",
    bio: "Durante años me sentí desconectada de mi cuerpo: malos hábitos, poca energía, problemas digestivos y adicción al azúcar eran mi cotidianidad. Fue a través de explorar la salud holística que encontré un camino para transformarme desde adentro hacia afuera. Hoy acompaño a otras personas en ese mismo proceso, desde la comprensión y sin juicios.",
    approach:
      "Mi enfoque es realista, libre de juicios y sin sacrificios extremos. Adapto cada proceso a tu ritmo y estilo de vida. Mi metodología integrativa trabaja cuerpo, mente y emociones para alcanzar un bienestar natural y sostenible. No necesitas hacerlo perfecto, solo empezar con intención.",
    specialties: [
      "Hábitos Saludables",
      "Pérdida de Peso",
      "Bienestar Emocional",
      "Alimentación Consciente",
      "Relación con la Comida",
      "Conexión Cuerpo-Mente",
      "Salud Integral",
    ],
    credentials: [
      "Holistic Health Coach – Institute for Integrative Nutrition (IIN, 2015)",
      "Más de 8 años acompañando transformaciones en sesiones individuales y programas grupales",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.8,
    reviewCount: 94,
    sessionPrice: 79,
    image: "/especialistas/malena-lum.png",
    available: true,
    city: "Berlín",
    country: "Alemania",
    testimonialImages: [],
    calendars: {
      exploratory: "https://link.insside.co/widget/bookings/malena-llamada-exploratoria",
      individual: "https://link.insside.co/widget/bookings/malena-lum1",
    },
  },
  {
    id: "3",
    slug: "barbara-serrano",
    name: "Barbara Serrano",
    title: "Life Coach Ontológica",
    category: "Life Coaching",
    shortBio:
      "Coach ontológica especializada en heridas emocionales, límites y amor propio. Acompaña desde la presencia y la compasión.",
    bio: "Mi camino comenzó cuando reconocí un vacío interno que el éxito no podía llenar. A través del coaching y el trabajo de transformación personal, reconecté con mi esencia y hoy guío a otros en procesos similares. Trabajo desde la sensibilidad, la presencia y una escucha profunda del cuerpo y las emociones, sin juicios.",
    approach:
      "Trabajo desde una perspectiva ontológica, compasiva y centrada en el cuerpo. Mi metodología integra el lenguaje, la emoción y la corporalidad como vías de transformación. Cada sesión es un espacio íntimo, sin juicios, donde puedes explorar tu mundo interior a tu propio ritmo.",
    specialties: [
      "Heridas emocionales",
      "Límites",
      "Amor propio",
      "Manejo de la ansiedad",
      "Patrones de autoexigencia",
      "Objetivos personales",
      "Estrategia de vida",
      "Creencias limitantes",
    ],
    credentials: [
      "Coach Ontológica, Constructivista y Sistémica – Buenos Aires (2018-2019)",
      "Más de 6 años en procesos de transformación emocional y sanación",
      "Especialización en reconexión cuerpo-alma-propósito",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.8,
    reviewCount: 87,
    sessionPrice: 57,
    image: "/especialistas/barbara-serrano.jpg",
    available: true,
    city: "Montreal",
    country: "Canadá",
    testimonialImages: [],
    calendars: {
      exploratory: "https://link.insside.co/widget/bookings/barbara-llamada-exploratoria",
      individual: "https://link.insside.co/widget/bookings/barbara-serrano-1",
    },
  },
  {
    id: "4",
    slug: "blanca-vazquez",
    name: "Blanca Vazquez",
    title: "Nutricionista – Salud Hormonal Femenina",
    category: "Nutrición",
    shortBio:
      "Nutricionista especializada en salud hormonal femenina. Acompaña a mujeres a reconectar con su cuerpo de forma sostenible.",
    bio: "Viví en carne propia el SOP, lo que me llevó a descubrir la importancia de entender y equilibrar las hormonas. Hoy guío a mujeres en ese mismo proceso: reconectar con su cuerpo y alcanzar un bienestar real y sostenible. Creo en acompañar con respeto y consciencia, adaptándome a la historia, el ritmo y el estilo de vida de cada persona.",
    approach:
      "Mi enfoque integrativo considera todos los factores que afectan la salud hormonal. No creo en procesos rápidos ni en soluciones mágicas. Me adapto a tu historia única, tu ritmo y tu estilo de vida, buscando siempre procesos realistas y sostenibles.",
    specialties: [
      "Pérdida de Peso",
      "Endometriosis",
      "Embarazo",
      "Fertilidad",
      "Lactancia",
      "Salud Hormonal",
      "SOP / PCOS",
      "Recomposición Corporal",
    ],
    credentials: [
      "Licenciada en Nutrición – Universidad de Guadalajara",
      "Máster en Nutrición, Medicina & Salud Hormonal Femenina – UCAM",
      "Certificación en Salud Hormonal – Institute for Integrative Nutrition",
      "Diplomado en Microbiota – SIAMP&P",
      "Certificación Internacional en Suplementación Deportiva – SEFIDE",
      "Miembro activa del Colegio Mexicano de Nutrición Clínica, ASPEN y ESPEN",
      "Investigadora clínica – Hospital Civil Fray Antonio Alcalde",
      "Co-autora del libro 'Alquimia Femenina'",
      "Publicada en Journal of Clinical Medicine",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.7,
    reviewCount: 76,
    sessionPrice: 79,
    image: "/especialistas/blanca-vazquez.png",
    available: true,
    city: "Guadalajara",
    country: "México",
    youtubeId: "ngK2skYVeRU",
    testimonialImages: [],
    calendars: {
      exploratory: "https://link.insside.co/widget/bookings/blanca-vazquez-exploratoria",
      individual: "https://link.insside.co/widget/bookings/blanca-vazquez",
    },
  },
  {
    id: "5",
    slug: "luisa-reyes",
    name: "Luisa Reyes",
    title: "Psicóloga & Coach Ontológica",
    category: "Psicología",
    shortBio:
      "Psicóloga venezolana con enfoque integrativo Gestalt + coaching. Acompaña a mujeres jóvenes en autoconocimiento y crecimiento.",
    bio: "Vengo de una familia comprometida con el bienestar comunitario y desde siempre sentí el llamado a acompañar y sostener a otros. Como mamá de dos hijos, he profundizado mi sensibilidad hacia la orientación emocional. Estudié psicología para entender la mente humana y brindar un espacio seguro a quienes lo necesitan. Trabajo principalmente con mujeres jóvenes, ayudándoles a identificar qué les frena mientras practican la autocompasión.",
    approach:
      "Mi metodología integrativa combina la Terapia Gestalt con recursos del coaching ontológico. Rechazo las fórmulas rígidas — prefiero procesos humanos y honestos, guiados por la presencia y la empatía. El objetivo es que te reconozcas, te comprendas y avances con mayor claridad.",
    specialties: [
      "Gestión Emocional",
      "Límites",
      "Autoestima",
      "Ansiedad",
      "Escucha Interior",
      "Trauma",
      "Autoconocimiento",
      "Autoconfianza",
      "Depresión",
    ],
    credentials: [
      "Licenciada en Psicología – Universidad Yacambú",
      "Registrada en el Colegio de Psicólogos de Venezuela (FPV: 19.325)",
      "Coach Ontológica Certificada – Indelser Consultores",
      "Voluntaria en Programa PANACED – Hospital Pediátrico Dr. Agustín Zubillaga",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.9,
    reviewCount: 102,
    sessionPrice: 57,
    image: "/especialistas/luisa-reyes.png",
    available: true,
    city: "Caracas",
    country: "Venezuela",
    testimonialImages: [],
    calendars: {
      exploratory: "https://link.insside.co/widget/bookings/luisa-reyes-exploratoria",
      individual: "https://link.insside.co/widget/bookings/luisa-reyes",
    },
  },
  {
    id: "6",
    slug: "steph-de-gregorio",
    name: "Steph De Gregorio",
    title: "Life Coach & Co-fundadora de Insside",
    category: "Life Coaching",
    shortBio:
      "Co-fundadora de Insside, coach certificada y autora. Guía procesos de claridad, propósito y transiciones de vida.",
    bio: "Soy co-fundadora de Insside, coach de vida certificada y autora. Me especializo en acompañar a personas en períodos de transición — cambios de carrera, mudanzas y transformaciones emocionales — ayudándoles a ganar claridad y reconectar con su propósito. Creo profundamente que cuando te miras adentro con honestidad y compasión, tu próximo capítulo aparece con más claridad.",
    approach:
      "Mi metodología combina introspección profunda con compasión activa. Ayudo a organizar pensamientos, establecer hábitos de bienestar y construir la vida que imaginas. Las sesiones de claridad son espacios para explorar tu situación actual, organizar prioridades y definir intenciones para los próximos meses.",
    specialties: [
      "Desarrollo del Autoconocimiento",
      "Expansión de Consciencia",
      "Transformación de Creencias",
      "Conexión con el Propósito",
      "Metas Profesionales",
      "Rutinas de Bienestar",
    ],
    credentials: [
      "Life Coach Certificada",
      "Facilitadora QLT™",
      "Co-fundadora de Insside",
      "Autora de 'Calma en el Alma' (Diario Guiado)",
      "Directora de 'Alquimia Femenina' (libro colectivo)",
      "Fundadora de la organización 'Calma en el Alma' (apoyo gratuito a sobrevivientes de abuso sexual)",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 5.0,
    reviewCount: 143,
    sessionPrice: 57,
    image: "/especialistas/steph-de-gregorio.png",
    available: true,
    city: "Miami",
    country: "EE.UU.",
    testimonialImages: [],
    calendars: {
      individual: "https://link.insside.co/widget/booking/NkmzXs9gJ3RjyNRmplTC",
    },
  },
  {
    id: "7",
    slug: "paty-romero",
    name: "Paty Romero",
    title: "Psicóloga – Bioneuroemoción & PNL",
    category: "Psicología",
    shortBio:
      "Psicóloga con más de 15 años de experiencia en bioneuroemoción, PNL y terapia de pareja. Transforma patrones emocionales inconscientes.",
    bio: "Psicóloga con más de 15 años de experiencia, especializada en bioneuroemoción, PNL y terapia de pareja. Acompaño procesos individuales y relacionales desde una mirada profunda y compasiva, ayudando a sanar conflictos emocionales inconscientes y transformar patrones que afectan el bienestar y los vínculos. Mi premisa: cuando entendemos el origen emocional de lo que nos pasa, recuperamos claridad, equilibrio y capacidad de elegir distinto.",
    approach:
      "Integro la psicología con la bioneuroemoción y la PNL para acompañar a las personas a comprender y transformar los conflictos emocionales que operan de manera inconsciente. Mi mirada es compasiva, profunda y orientada a que cada persona pueda conocerse, sanar sus patrones y mejorar la forma en que se relaciona. En terapia de pareja, combino comprensión emocional, reconocimiento de heridas individuales y trabajo práctico.",
    specialties: [
      "Terapia de Pareja",
      "Terapia Individual",
      "Conflictos Emocionales Inconscientes",
      "Bioneuroemoción",
      "Heridas de la Infancia",
      "Trauma",
      "Autoconocimiento",
      "Regulación Emocional",
      "Depresión",
    ],
    credentials: [
      "Psicóloga con más de 15 años de experiencia clínica",
      "Master Internacional en Programación Neurolingüística (PNL) – Richard Bandler",
      "Certificación Internacional en Biodescodificación Emocional",
      "Master en Formador de Formadores en Bioneuroemoción",
      "Uso de herramientas de psicología, neurociencia, biología emocional y PNL",
    ],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.8,
    reviewCount: 89,
    sessionPrice: 115,
    image: "/especialistas/patricia-romero.jpg",
    available: true,
    city: "Bogotá",
    country: "Colombia",
    youtubeId: "DrcSJOLFLLw",
    testimonialImages: [],
    calendars: {
      individual: "https://link.insside.co/widget/booking/wpFmP5k0E2Y2E6GYlI0a",
      couple: "https://link.insside.co/widget/booking/DFiu33h3q9g1vpuAebrN",
    },
  },
]

export function getSpecialistBySlug(slug: string): SpecialistProfile | undefined {
  return SPECIALISTS.find((s) => s.slug === slug)
}
