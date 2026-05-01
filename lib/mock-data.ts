import type { Professional, Session, Conversation, Notification } from "@/types";

export const MOCK_PROFESSIONALS: Professional[] = [
  // ── Psicología ──────────────────────────────────────────────────
  {
    id: "1", name: "Dra. Amalia López", title: "Psicóloga Clínica",
    specialties: ["Ansiedad", "Depresión", "Terapia cognitiva"],
    rating: 4.9, reviewCount: 127, sessionPrice: 30, currency: "USD",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces",
    bio: "10 años acompañando procesos de ansiedad, depresión y bienestar emocional.",
    city: "Bogotá", country: "Colombia", modalities: ["online", "presencial"], languages: ["Español"],
    category: "Psicología",
  },
  {
    id: "2", name: "Leah Rice", title: "Psicoanalista",
    specialties: ["Psicoanálisis", "Desarrollo personal", "Autoconocimiento"],
    rating: 4.5, reviewCount: 89, sessionPrice: 30, currency: "USD",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces",
    bio: "Acompañamiento profundo en procesos de autoconocimiento e identidad.",
    city: "Bogotá", country: "Colombia", modalities: ["online"], languages: ["Español", "Inglés"],
    category: "Psicología",
  },
  {
    id: "3", name: "Beatrice Haley", title: "Terapeuta Cognitiva",
    specialties: ["Terapia cognitiva", "Comportamiento", "Mindfulness"],
    rating: 4.5, reviewCount: 64, sessionPrice: 35, currency: "USD",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=faces",
    bio: "Especialista en TCC con enfoque en regulación emocional y mindfulness.",
    city: "Ciudad de México", country: "México", modalities: ["online", "presencial"], languages: ["Español"],
    category: "Psicología",
  },
  {
    id: "4", name: "Dr. Rodrigo Silva", title: "Psicoterapeuta",
    specialties: ["Trauma", "EMDR", "Duelo"],
    rating: 4.9, reviewCount: 203, sessionPrice: 45, currency: "USD",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces",
    bio: "Especializado en trauma y EMDR para el procesamiento emocional profundo.",
    city: "Santiago", country: "Chile", modalities: ["online", "presencial"], languages: ["Español", "Portugués"],
    category: "Psicología",
  },
  // ── Psiquiatría ─────────────────────────────────────────────────
  {
    id: "6", name: "Dra. Laura Pérez", title: "Psiquiatra",
    specialties: ["Ansiedad", "Sueño", "TDAH"],
    rating: 4.8, reviewCount: 156, sessionPrice: 60, currency: "USD",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces",
    bio: "Psiquiatra con enfoque en neuropsicología y trastornos del sueño y atención.",
    city: "Madrid", country: "España", modalities: ["online", "presencial"], languages: ["Español", "Inglés"],
    category: "Psiquiatría",
  },
  {
    id: "14", name: "Dr. Marcos Herrera", title: "Psiquiatra",
    specialties: ["Trastorno bipolar", "Esquizofrenia", "Psicosis"],
    rating: 4.7, reviewCount: 98, sessionPrice: 65, currency: "USD",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces",
    bio: "Especialista en trastornos del estado del ánimo y psicosis con 15 años de experiencia.",
    city: "Buenos Aires", country: "Argentina", modalities: ["online"], languages: ["Español"],
    category: "Psiquiatría",
  },
  // ── Coaching ────────────────────────────────────────────────────
  {
    id: "7", name: "Valentina Torres", title: "Life Coach",
    specialties: ["Propósito de vida", "Metas", "Productividad"],
    rating: 4.7, reviewCount: 82, sessionPrice: 28, currency: "USD",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=faces",
    bio: "Ayudo a profesionales a encontrar claridad, dirección y confianza en su camino.",
    city: "Medellín", country: "Colombia", modalities: ["online"], languages: ["Español"],
    category: "Coaching",
  },
  {
    id: "8", name: "Carlos Mendoza", title: "Coach Ejecutivo",
    specialties: ["Liderazgo", "Carrera profesional", "Comunicación"],
    rating: 4.6, reviewCount: 113, sessionPrice: 40, currency: "USD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
    bio: "Coach ejecutivo certificado. Especialista en liderazgo y desarrollo de carrera.",
    city: "Ciudad de México", country: "México", modalities: ["online", "presencial"], languages: ["Español", "Inglés"],
    category: "Coaching",
  },
  // ── Nutrición ───────────────────────────────────────────────────
  {
    id: "9", name: "Lic. Andrea Ruiz", title: "Nutricionista",
    specialties: ["Nutrición clínica", "Alimentación consciente", "Pérdida de peso"],
    rating: 4.8, reviewCount: 74, sessionPrice: 25, currency: "USD",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=500&fit=crop&crop=faces",
    bio: "Nutricionista clínica enfocada en hábitos sostenibles y relación sana con la comida.",
    city: "Lima", country: "Perú", modalities: ["online", "presencial"], languages: ["Español"],
    category: "Nutrición",
  },
  {
    id: "10", name: "Diana Flores", title: "Nutrióloga Funcional",
    specialties: ["Nutrición deportiva", "Intestino", "Inflamación"],
    rating: 4.9, reviewCount: 61, sessionPrice: 30, currency: "USD",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=faces",
    bio: "Nutrióloga funcional especializada en microbiota, deporte y optimización energética.",
    city: "Guadalajara", country: "México", modalities: ["online"], languages: ["Español"],
    category: "Nutrición",
  },
  // ── Yoga ────────────────────────────────────────────────────────
  {
    id: "5", name: "Sofía Castro", title: "Instructora de Yoga",
    specialties: ["Yoga", "Meditación", "Respiración"],
    rating: 4.6, reviewCount: 45, sessionPrice: 25, currency: "USD",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=faces",
    bio: "Instructora certificada. Clases personalizadas de yoga y meditación guiada.",
    city: "Lima", country: "Perú", modalities: ["online"], languages: ["Español"],
    category: "Yoga",
  },
  // ── Mindfulness ─────────────────────────────────────────────────
  {
    id: "11", name: "Camila Ríos", title: "Instructora de Mindfulness",
    specialties: ["Mindfulness", "Meditación", "Reducción del estrés"],
    rating: 4.7, reviewCount: 56, sessionPrice: 22, currency: "USD",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&fit=crop&crop=faces",
    bio: "Guía en prácticas de atención plena para reducir el estrés y mejorar el enfoque.",
    city: "Buenos Aires", country: "Argentina", modalities: ["online"], languages: ["Español"],
    category: "Mindfulness",
  },
  // ── Astrología ──────────────────────────────────────────────────
  {
    id: "12", name: "Luna Espinoza", title: "Astróloga",
    specialties: ["Carta natal", "Tránsitos", "Astrología evolutiva"],
    rating: 4.8, reviewCount: 93, sessionPrice: 35, currency: "USD",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=faces",
    bio: "Astróloga evolutiva. Lecturas de carta natal para el autoconocimiento y propósito.",
    city: "Barcelona", country: "España", modalities: ["online"], languages: ["Español"],
    category: "Astrología",
  },
  // ── Sexología ───────────────────────────────────────────────────
  {
    id: "15", name: "Dra. Patricia Vidal", title: "Sexóloga Clínica",
    specialties: ["Disfunciones sexuales", "Identidad", "Educación sexual"],
    rating: 4.9, reviewCount: 71, sessionPrice: 40, currency: "USD",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=500&fit=crop&crop=faces",
    bio: "Sexóloga clínica con enfoque integral en salud sexual, identidad y vínculos.",
    city: "Madrid", country: "España", modalities: ["online", "presencial"], languages: ["Español"],
    category: "Sexología",
  },
  {
    id: "16", name: "Lic. Tomás Reyes", title: "Sexólogo",
    specialties: ["Diversidad sexual", "Erotismo", "Terapia sexual"],
    rating: 4.7, reviewCount: 48, sessionPrice: 35, currency: "USD",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces",
    bio: "Especialista en diversidad sexual y acompañamiento terapéutico sin juicios.",
    city: "Bogotá", country: "Colombia", modalities: ["online"], languages: ["Español"],
    category: "Sexología",
  },
  // ── Human Design ────────────────────────────────────────────────
  {
    id: "17", name: "Mara Vega", title: "Consultora Human Design",
    specialties: ["Human Design", "Carta bodygraph", "Estrategia y Autoridad"],
    rating: 4.8, reviewCount: 62, sessionPrice: 38, currency: "USD",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop&crop=faces",
    bio: "Lecturas profundas de Human Design para vivir alineado con tu diseño único.",
    city: "Buenos Aires", country: "Argentina", modalities: ["online"], languages: ["Español"],
    category: "Human Design",
  },
  {
    id: "18", name: "Daniela Mora", title: "Analista Human Design",
    specialties: ["Human Design", "Ra Uru Hu", "Tipos y perfiles"],
    rating: 4.6, reviewCount: 39, sessionPrice: 32, currency: "USD",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&h=500&fit=crop&crop=faces",
    bio: "Analista certificada. Te ayudo a entender tu carta y tomar decisiones desde tu ser.",
    city: "Ciudad de México", country: "México", modalities: ["online"], languages: ["Español"],
    category: "Human Design",
  },
  // ── Terapia de Parejas ───────────────────────────────────────────
  {
    id: "19", name: "Dr. Ignacio Gómez", title: "Terapeuta de Parejas",
    specialties: ["Comunicación", "Crisis de pareja", "Infidelidad"],
    rating: 4.8, reviewCount: 85, sessionPrice: 50, currency: "USD",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=faces",
    bio: "Especialista en comunicación y resolución de conflictos en relaciones de pareja.",
    city: "Madrid", country: "España", modalities: ["online", "presencial"], languages: ["Español"],
    category: "Terapia de Parejas",
  },
  {
    id: "20", name: "Lic. Fernanda Castro", title: "Terapeuta Sistémica",
    specialties: ["Terapia de pareja", "Familia", "Vínculos afectivos"],
    rating: 4.7, reviewCount: 67, sessionPrice: 45, currency: "USD",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=500&fit=crop&crop=faces",
    bio: "Terapia sistémica para parejas y familias. Enfoque en vínculos saludables y comunicación.",
    city: "Santiago", country: "Chile", modalities: ["online"], languages: ["Español"],
    category: "Terapia de Parejas",
  },
];

export const MOCK_SESSIONS: Session[] = [
  { id: "s1", professionalId: "2", professionalName: "Leah Rice", professionalImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces", patientId: "p1", patientName: "María Alfonso", date: "2026-03-20", time: "14:00", duration: 60, modality: "online", status: "scheduled", price: 30, currency: "USD", sessionNumber: 10, sessionsAvailable: 6, specialties: ["Psicología", "Conductual"] },
  { id: "s2", professionalId: "5", professionalName: "Sofía Castro", professionalImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces", patientId: "p1", patientName: "María Alfonso", date: "2026-03-25", time: "12:00", duration: 60, modality: "online", status: "scheduled", price: 25, currency: "USD", sessionNumber: 3, sessionsAvailable: 4 },
  { id: "s3", professionalId: "7", professionalName: "Valentina Torres", professionalImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces", patientId: "p1", patientName: "María Alfonso", date: "2026-04-02", time: "12:00", duration: 60, modality: "online", status: "scheduled", price: 28, currency: "USD", sessionNumber: 2, sessionsAvailable: 5 },
  { id: "s4", professionalId: "4", professionalName: "Dr. Rodrigo Silva", professionalImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces", patientId: "p1", patientName: "María Alfonso", date: "2026-04-10", time: "12:00", duration: 60, modality: "online", status: "scheduled", price: 45, currency: "USD", sessionNumber: 1, sessionsAvailable: 6 },
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  { id: "c1", participantId: "1", participantName: "Dra. Amalia López", participantImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=faces", lastMessage: "Nos vemos el jueves, cualquier cosa me escribes.", lastMessageTime: "10:30 AM", unreadCount: 2, online: true },
  { id: "c2", participantId: "2", participantName: "Leah Rice", participantImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=faces", lastMessage: "¡Excelente sesión hoy! Recuerda los ejercicios.", lastMessageTime: "Ayer", unreadCount: 0, online: false },
  { id: "c3", participantId: "3", participantName: "Beatrice Haley", participantImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=faces", lastMessage: "Te envié el plan de seguimiento personalizado.", lastMessageTime: "Lun", unreadCount: 1, online: true },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: "n1", type: "message", title: "Nuevo mensaje", description: "Dra. Amalia López te envió un mensaje", time: "hace 5 min", read: false },
  { id: "n2", type: "session", title: "Sesión agendada", description: "Tienes una sesión el 10 de marzo a las 10:00 AM", time: "hace 1 hora", read: false },
  { id: "n3", type: "session", title: "Recordatorio", description: "Tu sesión con Leah Rice es mañana a las 3:00 PM", time: "hace 3 horas", read: true },
];

export const MOCK_PRO_CLIENTS = [
  { id: "p1", name: "María Gómez", tag: "Primera sesión", tagColor: "orange", status: "online", nextSession: "Jueves 5 de Marzo", time: "10:00 hs", sessionsUsed: 2, sessionsTotal: 6 },
  { id: "p2", name: "Flavio Mendoza", tag: "Primera sesión", tagColor: "orange", status: "online", nextSession: "Jueves 5 de Marzo", time: "14:00 hs", sessionsUsed: 1, sessionsTotal: 6 },
  { id: "p3", name: "Patricia Moiss", tag: "Activo", tagColor: "green", status: "offline", nextSession: "12 de Marzo", time: "11:00 hs", sessionsUsed: 4, sessionsTotal: 6 },
];
