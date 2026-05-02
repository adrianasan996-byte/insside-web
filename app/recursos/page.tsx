"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";

const CATEGORIES = ["Todo", "Sesión especial", "Guías", "Quiz", "Programas"];

const RECURSOS = [
  {
    id: "r1", type: "Sesión especial", category: "Sesión especial",
    title: "Human Design: Conoce tu diseño auténtico",
    subtitle: "2 horas · Online · Lectura personalizada",
    description: "Una sesión de 2 horas donde Elisabet Martínez te guía a través de tu carta de Human Design. Descubre tu tipo, autoridad y estrategia para tomar decisiones más alineadas con quién realmente eres.",
    instructor: "Elisabet Martínez", instructorRole: "Consultora Human Design",
    price: 185, originalPrice: 185, currency: "USD", duration: "2 horas",
    tag: "Sesión 1:1", color: "#5A3D28", accent: "#E3812F",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=80",
    features: ["Lectura personalizada de tu carta", "Sesión de 2 horas por Zoom", "Grabación de la sesión", "Material complementario"],
    available: true,
    landingUrl: "/recursos/human-design",
  },
  {
    id: "r2", type: "Guía descargable", category: "Guías",
    title: "Guía de Ansiedad: De la crisis a la calma",
    subtitle: "PDF descargable · Ejercicios prácticos",
    description: "Una guía diseñada por nuestras psicólogas para acompañarte en los momentos de ansiedad. Aprende a identificar tus patrones, regularte en crisis y construir una vida con menos tensión.",
    instructor: "Equipo Insside", instructorRole: "Psicólogas y coaches certificadas",
    price: 0, originalPrice: 0, currency: "USD", duration: "PDF",
    tag: "Gratis", color: "#2C4A3E", accent: "#B5BC8F",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    features: ["PDF descargable al instante", "Ejercicios de regulación emocional", "Técnicas de respiración y grounding", "Acceso de por vida"],
    available: true,
  },
  {
    id: "r3", type: "Quiz", category: "Quiz",
    title: "Quiz: ¿Qué tipo de ansiedad tienes?",
    subtitle: "Próximamente · Gratuito",
    description: "Un quiz interactivo creado por nuestras psicólogas para ayudarte a identificar tu patrón de ansiedad y conectarte con los recursos y especialistas más adecuados para ti.",
    instructor: "Equipo Insside", instructorRole: "Psicólogas y coaches certificadas",
    price: 0, originalPrice: 0, currency: "USD", duration: "5 min",
    tag: "Próximamente", color: "#2D4A55", accent: "#64C1C4",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    features: ["Resultado personalizado", "Recomendaciones de especialista", "Recursos según tu perfil"],
    available: false, comingSoon: "Próximamente",
  },
  {
    id: "r4", type: "Programa", category: "Programas",
    title: "Programa Integral Insside: 6 semanas de transformación",
    subtitle: "Próximamente · Todas las especialidades",
    description: "Un programa de 6 semanas diseñado en conjunto por todas nuestras especialistas — psicología, nutrición, coaching y mindfulness — para acompañarte en una transformación real y sostenida.",
    instructor: "Equipo Insside", instructorRole: "Todas las especialidades",
    price: 0, originalPrice: 0, currency: "USD", duration: "6 semanas",
    tag: "Próximamente", color: "#3D4A37", accent: "#B5BC8F",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    features: ["Psicología · Nutrición · Coaching · Mindfulness", "Sesiones grupales semanales", "Acompañamiento personalizado", "Comunidad privada"],
    available: false, comingSoon: "Próximamente",
  },
];

const GLASS = {
  background: "rgba(255,255,255,0.18)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.30)",
} as React.CSSProperties;

function ResourceCard({ rec, index }: { rec: typeof RECURSOS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);

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
      {/* Photo area */}
      <div
        className="relative w-full cursor-pointer select-none overflow-hidden"
        style={{ height: "200px" }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Stock photo */}
        <img
          src={rec.image}
          alt={rec.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay — darker at bottom for legibility */}
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.45) 100%)` }} />

        {/* Top badges — both glassmorphic */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white shrink-0" style={GLASS}>
            {rec.tag}
          </span>
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white" style={GLASS}>
            {rec.type}
          </span>
        </div>

        {/* Ver más pill on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full" style={GLASS}>
            {expanded ? "Cerrar ↑" : "Ver más ↓"}
          </span>
        </div>
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

      {/* Price + CTA */}
      <div className="px-4 pb-4 pt-2 bg-white" style={{ borderTop: "1px solid #F5F5F3" }}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            {rec.price === 0 && rec.available ? (
              <span className="text-base font-bold text-[#3D6B60]">Gratis</span>
            ) : rec.price > 0 ? (
              <span className="text-base font-bold text-[#262525]">${rec.price} <span className="text-xs font-normal text-[#9a9a9a]">USD</span></span>
            ) : (
              <span className="text-sm font-semibold text-[#9a9a9a]">{rec.comingSoon}</span>
            )}
          </div>
          {rec.available ? (
            rec.landingUrl ? (
              <Link href={rec.landingUrl}
                className="text-[11px] font-bold px-4 py-2 rounded-xl text-white flex-shrink-0 inline-block"
                style={{ background: rec.color }}>
                Ver más →
              </Link>
            ) : (
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold px-4 py-2 rounded-xl text-white flex-shrink-0"
              style={{ background: rec.price === 0 ? "#3D6B60" : rec.color }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {rec.price === 0 ? "Obtener gratis →" : "Obtener →"}
            </motion.a>
            )
          ) : (
            <span className="text-[10px] font-semibold px-3.5 py-2 rounded-xl text-white flex-shrink-0"
              style={{ background: "rgba(90,99,79,0.18)", color: "#5A634F", border: "1px solid rgba(90,99,79,0.20)" }}>
              Próximamente
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

        {/* Bottom CTA */}
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
