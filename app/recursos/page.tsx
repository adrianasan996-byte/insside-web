"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";

const CATEGORIES = ["Todo", "Cursos", "Guías", "Invitados especiales", "Meditaciones", "Masterclasses"];

const RECURSOS = [
  {
    id: "r1",
    type: "Curso",
    category: "Cursos",
    title: "Regulación Emocional: De la crisis a la calma",
    subtitle: "6 módulos · Certificado incluido",
    description: "Aprende las herramientas que usan los psicólogos para regular emociones difíciles. Ansiedad, enojo, tristeza: aprende a navegarlos con claridad.",
    instructor: "Dra. Amalia López",
    instructorRole: "Psicóloga Clínica",
    price: 97,
    originalPrice: 147,
    currency: "USD",
    duration: "6 semanas",
    modules: 6,
    tag: "Más vendido",
    tagColor: "#E3812F",
    color: "#5A634F",
    accent: "#B5BC8F",
    emoji: "🧠",
    features: ["6 módulos en video", "Cuadernillo de trabajo", "Comunidad privada", "Certificado"],
    available: true,
  },
  {
    id: "r2",
    type: "Masterclass",
    category: "Masterclasses",
    title: "Construye Hábitos que Duran: El método de las 4 R",
    subtitle: "2 horas · Acceso inmediato",
    description: "Una masterclass intensiva sobre la ciencia del hábito. Por qué fallan y cómo hacer que queden.",
    instructor: "Carlos Mendoza",
    instructorRole: "Coach Ejecutivo",
    price: 37,
    originalPrice: 57,
    currency: "USD",
    duration: "2 horas",
    modules: 1,
    tag: "Nuevo",
    tagColor: "#64C1C4",
    color: "#4A7070",
    accent: "#64C1C4",
    emoji: "🎯",
    features: ["Video HD 2h", "Guía de implementación", "Acceso de por vida"],
    available: true,
  },
  {
    id: "r3",
    type: "Guía",
    category: "Guías",
    title: "Guía: Tu relación con la comida — sin dietas",
    subtitle: "PDF descargable · 48 páginas",
    description: "Una guía práctica y compasiva para entender tu relación emocional con la comida y empezar a transformarla sin caer en dietas restrictivas.",
    instructor: "Lic. Andrea Ruiz",
    instructorRole: "Nutricionista",
    price: 19,
    originalPrice: 29,
    currency: "USD",
    duration: "PDF",
    modules: 0,
    tag: "Descargable",
    tagColor: "#8B9970",
    color: "#6B7A55",
    accent: "#B5BC8F",
    emoji: "🌿",
    features: ["48 páginas en PDF", "Ejercicios prácticos", "Registro de comidas consciente"],
    available: true,
  },
  {
    id: "r4",
    type: "Invitado especial",
    category: "Invitados especiales",
    title: "Conversación: Navegando el duelo sin perderte",
    subtitle: "Evento en vivo · Mayo 2026",
    description: "Una sesión abierta con la Dra. Ximena Valverde sobre cómo acompañar el duelo — propio y ajeno — con presencia y herramientas reales.",
    instructor: "Dra. Ximena Valverde",
    instructorRole: "Psicoterapeuta · Especialista en duelo",
    price: 0,
    originalPrice: 0,
    currency: "USD",
    duration: "90 min",
    modules: 1,
    tag: "Gratis",
    tagColor: "#B5BC8F",
    color: "#3D5A5A",
    accent: "#D9E5DB",
    emoji: "💬",
    features: ["En vivo por Zoom", "Espacio de Q&A", "Grabación incluida"],
    available: true,
    isLive: true,
    liveDate: "17 de mayo · 7pm (Miami)",
  },
  {
    id: "r5",
    type: "Meditación",
    category: "Meditaciones",
    title: "Pack: 10 Meditaciones Guiadas para el Estrés",
    subtitle: "Audio MP3 · Duración: 5–20 min cada una",
    description: "Diez meditaciones diseñadas para momentos específicos: antes de dormir, al despertar, en crisis de ansiedad, antes de una conversación difícil.",
    instructor: "Camila Ríos",
    instructorRole: "Instructora de Mindfulness",
    price: 29,
    originalPrice: 45,
    currency: "USD",
    duration: "10 audios",
    modules: 10,
    tag: "Pack",
    tagColor: "#AB6139",
    color: "#7A5040",
    accent: "#E3812F",
    emoji: "🌙",
    features: ["10 audios MP3", "Guía de uso", "Acceso de por vida"],
    available: true,
  },
  {
    id: "r6",
    type: "Curso",
    category: "Cursos",
    title: "Human Design Aplicado: Vive según tu diseño",
    subtitle: "4 módulos · Incluye lectura de carta",
    description: "Entiende tu carta de Human Design y aprende cómo usarla para tomar decisiones desde tu autoridad y vivir alineado con tu estrategia.",
    instructor: "Mara Vega",
    instructorRole: "Consultora Human Design",
    price: 127,
    originalPrice: 197,
    currency: "USD",
    duration: "4 semanas",
    modules: 4,
    tag: "Premium",
    tagColor: "#8B4513",
    color: "#5A3D28",
    accent: "#E3812F",
    emoji: "🔮",
    features: ["4 módulos en video", "Lectura de carta 1:1", "Comunidad privada", "Certificado"],
    available: false,
    comingSoon: "Junio 2026",
  },
];

function ResourceCard({ rec, index }: { rec: typeof RECURSOS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-[#EDE7E1] bg-white"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.10)" }}
    >
      {/* Visual top */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${rec.color}15 0%, ${rec.accent}25 100%)` }}>
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 70% 30%, ${rec.accent}30 0%, transparent 60%)` }} />
        <motion.div
          className="text-6xl select-none"
          animate={hovered ? { scale: 1.15, rotate: [-3, 3, -3] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          {rec.emoji}
        </motion.div>
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ background: rec.tagColor }}>
            {rec.tag}
          </span>
        </div>
        {/* Type */}
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold text-[#5A634F] bg-white/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
            {rec.type}
          </span>
        </div>
        {/* Live badge */}
        {rec.isLive && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-[#262525]">{rec.liveDate}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          <p className="text-[#B5BC8F] text-[11px] font-bold uppercase tracking-widest mb-1">{rec.subtitle}</p>
          <h3 className="text-[#262525] font-bold text-lg leading-snug mb-2">{rec.title}</h3>
          <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4 line-clamp-3">{rec.description}</p>

          {/* Instructor */}
          <div className="flex items-center gap-2 mb-4 p-3 rounded-xl" style={{ background: "#F5F9F5" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: rec.color }}>
              {rec.instructor.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <div>
              <p className="text-[#262525] text-xs font-semibold">{rec.instructor}</p>
              <p className="text-[#9a9a9a] text-[11px]">{rec.instructorRole}</p>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-1.5 mb-4">
            {rec.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#6b6b6b]">
                <span className="text-[#B5BC8F] font-bold text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Price + CTA */}
        <div className="pt-4 border-t border-[#F0EAE3]">
          <div className="flex items-center justify-between mb-3">
            <div>
              {rec.price === 0 ? (
                <span className="text-2xl font-bold text-[#5A634F]">Gratis</span>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#262525]">${rec.price}</span>
                  {rec.originalPrice > rec.price && (
                    <span className="text-sm text-[#9a9a9a] line-through">${rec.originalPrice}</span>
                  )}
                </div>
              )}
            </div>
            {rec.originalPrice > rec.price && rec.price > 0 && (
              <span className="text-xs font-bold text-[#E3812F] bg-[#FFF4EC] px-2 py-1 rounded-full">
                {Math.round((1 - rec.price / rec.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {rec.available ? (
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-bold py-3 rounded-xl text-sm text-white"
              style={{ background: rec.price === 0 ? "#5A634F" : "#262525" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {rec.price === 0 ? "Registrarme gratis →" : "Obtener acceso →"}
            </motion.a>
          ) : (
            <div className="text-center">
              <p className="text-[#9a9a9a] text-xs mb-2">Disponible en {rec.comingSoon}</p>
              <button className="w-full font-semibold py-3 rounded-xl text-sm border-2 border-[#EDE7E1] text-[#6b6b6b] cursor-not-allowed">
                Próximamente
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function RecursosPage() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const filtered = activeCategory === "Todo" ? RECURSOS : RECURSOS.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16" style={{ background: "#262525" }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #B5BC8F 0, #B5BC8F 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        </div>
        <div className="absolute top-16 right-24 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(181,188,143,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-32 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(227,129,47,0.08) 0%, transparent 70%)" }} />

        <div ref={heroRef} className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(181,188,143,0.15)", border: "1px solid rgba(181,188,143,0.3)", color: "#B5BC8F" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B5BC8F] animate-pulse" />
              Recursos & Aprendizaje
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Más allá de la sesión.<br />
              <span style={{ color: "#B5BC8F" }}>Tu bienestar, siempre contigo.</span>
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
              Cursos, guías, meditaciones y eventos especiales para que tu crecimiento no tenga pausa.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              { n: "6+", label: "Recursos disponibles" },
              { n: "4", label: "Categorías" },
              { n: "100%", label: "En español" },
              { n: "∞", label: "Acceso de por vida" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white">{s.n}</p>
                <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-10">
        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-10">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-[#262525] text-white border-[#262525]"
                  : "bg-white text-[#6b6b6b] border-[#EDE7E1] hover:border-[#B5BC8F]/50"
              }`}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Resources grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((rec, i) => (
              <ResourceCard key={rec.id} rec={rec} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Únete banner */}
        <motion.div
          className="mt-20 rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #5A634F 0%, #3D4A37 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(181,188,143,0.15) 0%, transparent 60%)" }} />
          <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">¿Eres especialista?</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">Crea tu propio recurso en Insside.</h2>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Publica cursos, guías y masterclasses. Llega a miles de personas que buscan exactamente lo que tú ofreces.
          </p>
          <motion.a
            href="/unete"
            className="inline-flex items-center gap-2 bg-white text-[#5A634F] font-bold px-7 py-3.5 rounded-xl text-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Únete a Insside →
          </motion.a>
        </motion.div>
      </div>

      <MarketingFooter />
    </div>
  );
}
