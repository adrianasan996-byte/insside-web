"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";

const CATEGORIES = ["Todo", "Cursos", "Guías", "Invitados especiales", "Meditaciones", "Masterclasses"];

const RECURSOS = [
  {
    id: "r1", type: "Curso", category: "Cursos",
    title: "Regulación Emocional: De la crisis a la calma",
    subtitle: "6 módulos · Certificado incluido",
    description: "Aprende las herramientas que usan los psicólogos para regular emociones difíciles. Ansiedad, enojo, tristeza: aprende a navegarlos con claridad.",
    instructor: "Dra. Amalia López", instructorRole: "Psicóloga Clínica",
    price: 97, originalPrice: 147, currency: "USD", duration: "6 semanas",
    tag: "Más vendido", tagColor: "#E3812F", color: "#5A634F", accent: "#B5BC8F",
    features: ["6 módulos en video", "Cuadernillo de trabajo", "Comunidad privada", "Certificado"],
    available: true,
  },
  {
    id: "r2", type: "Masterclass", category: "Masterclasses",
    title: "Construye Hábitos que Duran: El método de las 4 R",
    subtitle: "2 horas · Acceso inmediato",
    description: "Una masterclass intensiva sobre la ciencia del hábito. Por qué fallan y cómo hacer que queden.",
    instructor: "Carlos Mendoza", instructorRole: "Coach Ejecutivo",
    price: 37, originalPrice: 57, currency: "USD", duration: "2 horas",
    tag: "Nuevo", tagColor: "#64C1C4", color: "#4A7070", accent: "#64C1C4",
    features: ["Video HD 2h", "Guía de implementación", "Acceso de por vida"],
    available: true,
  },
  {
    id: "r3", type: "Guía", category: "Guías",
    title: "Tu relación con la comida — sin dietas",
    subtitle: "PDF descargable · 48 páginas",
    description: "Una guía práctica y compasiva para entender tu relación emocional con la comida y empezar a transformarla sin caer en dietas restrictivas.",
    instructor: "Lic. Andrea Ruiz", instructorRole: "Nutricionista",
    price: 19, originalPrice: 29, currency: "USD", duration: "PDF",
    tag: "Descargable", tagColor: "#8B9970", color: "#6B7A55", accent: "#B5BC8F",
    features: ["48 páginas en PDF", "Ejercicios prácticos", "Registro de comidas consciente"],
    available: true,
  },
  {
    id: "r4", type: "Invitado especial", category: "Invitados especiales",
    title: "Navegando el duelo sin perderte",
    subtitle: "Evento en vivo · Mayo 2026",
    description: "Una sesión abierta con la Dra. Ximena Valverde sobre cómo acompañar el duelo con presencia y herramientas reales.",
    instructor: "Dra. Ximena Valverde", instructorRole: "Psicoterapeuta · Especialista en duelo",
    price: 0, originalPrice: 0, currency: "USD", duration: "90 min",
    tag: "Gratis", tagColor: "#3D6B60", color: "#3D5A5A", accent: "#D9E5DB",
    features: ["En vivo por Zoom", "Espacio de Q&A", "Grabación incluida"],
    available: true, isLive: true, liveDate: "17 de mayo · 7pm (Miami)",
  },
  {
    id: "r5", type: "Meditación", category: "Meditaciones",
    title: "10 Meditaciones Guiadas para el Estrés",
    subtitle: "Audio MP3 · 5–20 min cada una",
    description: "Diez meditaciones para momentos específicos: antes de dormir, al despertar, en crisis de ansiedad, antes de una conversación difícil.",
    instructor: "Camila Ríos", instructorRole: "Instructora de Mindfulness",
    price: 29, originalPrice: 45, currency: "USD", duration: "10 audios",
    tag: "Pack", tagColor: "#AB6139", color: "#7A5040", accent: "#E3812F",
    features: ["10 audios MP3", "Guía de uso", "Acceso de por vida"],
    available: true,
  },
  {
    id: "r6", type: "Curso", category: "Cursos",
    title: "Human Design Aplicado: Vive según tu diseño",
    subtitle: "4 módulos · Incluye lectura de carta",
    description: "Entiende tu carta de Human Design y aprende cómo usarla para tomar decisiones desde tu autoridad.",
    instructor: "Mara Vega", instructorRole: "Consultora Human Design",
    price: 127, originalPrice: 197, currency: "USD", duration: "4 semanas",
    tag: "Premium", tagColor: "#8B4513", color: "#5A3D28", accent: "#E3812F",
    features: ["4 módulos en video", "Lectura de carta 1:1", "Comunidad privada", "Certificado"],
    available: false, comingSoon: "Junio 2026",
  },
];

function ResourceCard({ rec, index }: { rec: typeof RECURSOS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);

  const discount = rec.originalPrice > rec.price && rec.price > 0
    ? Math.round((1 - rec.price / rec.originalPrice) * 100) : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
      whileHover={{ y: -3, boxShadow: "0 20px 60px rgba(0,0,0,0.13)" }}
    >
      {/* Photo / gradient area */}
      <div
        className="relative w-full cursor-pointer select-none"
        style={{ height: "190px", background: `linear-gradient(145deg, ${rec.color} 0%, ${rec.accent}99 100%)` }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px" }} />

        {/* Big initial watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[120px] font-black leading-none text-white opacity-[0.07]">
            {rec.instructor.split(" ").map((w: string) => w[0]).slice(0, 1)}
          </span>
        </div>

        {/* Badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white shrink-0"
            style={{ background: rec.tagColor }}>{rec.tag}</span>
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white text-right"
            style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.28)" }}>
            {rec.type}
          </span>
        </div>

        {/* Live badge */}
        {rec.isLive && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.28)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-[10px] font-bold text-white">{rec.liveDate}</span>
          </div>
        )}

        {/* Discount pill */}
        {discount > 0 && (
          <div className="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.92)", color: rec.tagColor }}>
            -{discount}%
          </div>
        )}

        {/* Ver más pill (shows on hover, hides when discount is there) */}
        {!discount && (
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.28)" }}>
              {expanded ? "Cerrar ↑" : "Ver más ↓"}
            </span>
          </div>
        )}
      </div>

      {/* Static content row */}
      <div
        className="px-4 pt-3 pb-2 bg-white cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-[#262525] font-bold text-sm leading-snug mb-2 line-clamp-2">{rec.title}</h3>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-white"
            style={{ background: rec.color }}>
            {rec.instructor.split(" ").map((w: string) => w[0]).slice(0, 2).join("")}
          </div>
          <p className="text-[11px] text-[#8a8a8a] truncate flex-1">{rec.instructor}</p>
          <motion.svg
            width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B5BC8F" strokeWidth="2.5"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </div>
      </div>

      {/* Expandable details */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white"
          >
            <div className="px-4 pt-1 pb-3">
              <p className="text-[#6b6b6b] text-xs leading-relaxed mb-3">{rec.description}</p>
              <p className="text-[10px] text-[#B5BC8F] font-semibold uppercase tracking-wide mb-2">{rec.subtitle}</p>
              <ul className="space-y-1.5">
                {rec.features.map((f: string) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#5A634F]">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: rec.accent }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Price + CTA — always visible */}
      <div className="px-4 pb-4 pt-2 bg-white" style={{ borderTop: "1px solid #F5F5F3" }}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            {rec.price === 0 ? (
              <span className="text-base font-bold text-[#3D6B60]">Gratis</span>
            ) : (
              <>
                <span className="text-base font-bold text-[#262525]">${rec.price} <span className="text-xs font-normal text-[#9a9a9a]">USD</span></span>
                {rec.originalPrice > rec.price && (
                  <span className="text-xs text-[#c0c0c0] line-through">${rec.originalPrice}</span>
                )}
              </>
            )}
          </div>
          {rec.available ? (
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold px-4 py-2 rounded-xl text-white flex-shrink-0"
              style={{ background: rec.price === 0 ? "#3D6B60" : rec.color }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {rec.price === 0 ? "Registrarme →" : "Obtener →"}
            </motion.a>
          ) : (
            <span className="text-[11px] px-3.5 py-2 rounded-xl border border-[#EDE7E1] text-[#b0b0b0] flex-shrink-0">
              {rec.comingSoon}
            </span>
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
      <section className="relative overflow-hidden" style={{ minHeight: "340px" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(38,37,37,0.88) 0%, rgba(38,37,37,0.60) 55%, rgba(38,37,37,0.28) 100%)" }} />
        </div>

        <div ref={heroRef} className="max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-3">Recursos</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Más allá de la sesión.<br />
              <span style={{ color: "#B5BC8F" }}>Tu bienestar, siempre contigo.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg max-w-xl leading-relaxed">
              Cursos, guías, meditaciones y eventos especiales para que tu crecimiento no tenga pausa.
            </p>
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

        {/* Bottom CTA — book a session */}
        <motion.div
          className="mt-20 rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #5A634F 0%, #3D4A37 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(181,188,143,0.18) 0%, transparent 65%)" }} />
          <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">¿Lista para dar el siguiente paso?</p>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Agenda tu sesión hoy.</h2>
              <p className="text-white/55 text-sm max-w-sm leading-relaxed">
                Nuestras especialistas están disponibles para acompañarte. Escríbenos y te conectamos con quien más se ajuste a ti.
              </p>
            </div>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-white font-bold px-7 py-3.5 rounded-xl text-sm"
              style={{ color: "#5A634F" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Escríbenos por WhatsApp →
            </motion.a>
          </div>
        </motion.div>
      </div>

      <MarketingFooter />
    </div>
  );
}
