"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";
const STORAGE_KEY = "insside_directorio_access";

/* ── Real specialists ─────────────────────────────────────── */
const SPECIALISTS = [
  {
    id: "1",
    name: "Luisa Reyes",
    title: "Psicóloga & Life Coach",
    category: "Psicología",
    bio: "Acompaña procesos de autoconocimiento, ansiedad y propósito desde una mirada integradora que combina psicología y coaching.",
    specialties: ["Autoconocimiento", "Ansiedad", "Propósito"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.9,
    reviewCount: 102,
    sessionPrice: 79,
    city: "Caracas",
    country: "Venezuela",
    image: "/especialistas/luisa-reyes.png",
    available: true,
  },
  {
    id: "2",
    name: "Blanca Vazquez",
    title: "Nutricionista",
    category: "Nutrición",
    bio: "Acompaña procesos de relación con la comida desde un enfoque no restrictivo. Sin dietas, con conciencia y amor propio.",
    specialties: ["Alimentación Consciente", "Relación con la Comida", "Bienestar"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.7,
    reviewCount: 76,
    sessionPrice: 65,
    city: "México",
    country: "",
    image: "/especialistas/blanca-vazquez.png",
    available: true,
  },
  {
    id: "3",
    name: "Valentina Tello",
    title: "Psicóloga Clínica",
    category: "Psicología",
    bio: "Especialista en ansiedad, autoestima y relaciones. Acompaña procesos de transformación personal con un enfoque humanista e integrador.",
    specialties: ["Ansiedad", "Autoestima", "Terapia de Parejas"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.9,
    reviewCount: 118,
    sessionPrice: 65,
    city: "Valencia",
    country: "Venezuela",
    image: "/especialistas/valentina-tello.png",
    available: true,
  },
  {
    id: "4",
    name: "Malena Lum",
    title: "Health Coach",
    category: "Health Coaching",
    bio: "Trabaja con mujeres en procesos de bienestar integral, hábitos saludables y reconexión con el cuerpo desde un enfoque empático.",
    specialties: ["Hábitos Saludables", "Bienestar Integral", "Reconexión"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.8,
    reviewCount: 94,
    sessionPrice: 57,
    city: "Alemania",
    country: "",
    image: "/especialistas/malena-lum.png",
    available: true,
  },
  {
    id: "5",
    name: "Barbara Serrano",
    title: "Life Coach",
    category: "Life Coaching",
    bio: "Acompaña a mujeres en procesos de cambio, claridad de metas y construcción de una vida con propósito y dirección.",
    specialties: ["Metas", "Claridad", "Transiciones"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.8,
    reviewCount: 87,
    sessionPrice: 57,
    city: "Canadá",
    country: "",
    image: "/especialistas/barbara-serrano.jpg",
    available: true,
  },
  {
    id: "6",
    name: "Steph De Gregorio",
    title: "Life Coach & Mentora",
    category: "Life Coaching",
    bio: "Co-fundadora de Insside. Acompaña a mujeres en procesos de reconexión consigo mismas, límites y vida con propósito.",
    specialties: ["Límites", "Reconexión", "Propósito"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 5.0,
    reviewCount: 143,
    sessionPrice: 57,
    city: "Caracas",
    country: "Venezuela",
    image: "/especialistas/steph-de-gregorio.png",
    available: true,
  },
  {
    id: "7",
    name: "Patricia Romero",
    title: "Psicóloga Clínica",
    category: "Psicología",
    bio: "Especialista en procesos terapéuticos para adultos. Trabaja ansiedad, vínculos y crecimiento personal con calidez y profundidad.",
    specialties: ["Ansiedad", "Vínculos", "Terapia de Parejas"],
    modalities: ["online"],
    languages: ["Español"],
    rating: 4.8,
    reviewCount: 89,
    sessionPrice: 79,
    city: "Bogotá",
    country: "Colombia",
    image: "/especialistas/patricia-romero.jpg",
    available: true,
  },
];

const CATEGORIES = ["Todos", "Psicología", "Terapia de Parejas", "Life Coaching", "Health Coaching", "Nutrición"];
const MODALITIES = ["Todos", "Online", "Presencial"];
const SORT_OPTIONS = ["Recomendadas", "Precio: menor", "Precio: mayor"];

/* ── Lead Gate Modal ──────────────────────────────────────── */
function LeadGateModal({ onUnlock }: { onUnlock: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, email, phone, ts: Date.now() }));
      onUnlock();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "rgba(20,28,18,0.60)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden relative"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.30)" }}
      >
        {/* Top accent */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #B5BC8F, #8B9970)" }} />

        <div className="p-8 sm:p-10">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
            style={{ background: "#F0F4EC" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5A634F" strokeWidth="1.8">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-[#262525] text-center mb-2">
            Conoce a nuestras especialistas
          </h2>
          <p className="text-[#6b6b6b] text-sm text-center mb-7 leading-relaxed">
            Déjanos tus datos para acceder al directorio completo y conectarte con la especialista ideal para ti.
          </p>

          {error && (
            <p className="text-red-500 text-xs text-center mb-4 bg-red-50 rounded-xl py-2 px-3">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B5BC8F]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EDE7E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#B5BC8F]/30 focus:border-[#B5BC8F] transition-all"
              />
            </div>
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B5BC8F]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EDE7E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#B5BC8F]/30 focus:border-[#B5BC8F] transition-all"
              />
            </div>
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B5BC8F]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
              </svg>
              <input
                type="tel"
                placeholder="Número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EDE7E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#B5BC8F]/30 focus:border-[#B5BC8F] transition-all"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white mt-1 disabled:opacity-60"
              style={{ background: loading ? "#9a9a9a" : "#B5BC8F" }}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? "Accediendo…" : "Ver especialistas →"}
            </motion.button>
          </form>

          <p className="text-[#9a9a9a] text-[11px] text-center mt-4 leading-relaxed">
            Tus datos están protegidos. No enviamos spam. <br />Al continuar aceptas nuestra{" "}
            <span className="underline cursor-pointer">Política de Privacidad</span>.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Star rating ──────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="11" height="11" viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#E3812F" : "none"}
          stroke="#E3812F" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="text-[#262525] font-semibold text-xs ml-0.5">{rating.toFixed(1)}</span>
      <span className="text-[#9a9a9a] text-xs">({rating > 0 ? Math.round(rating * 20) : 0})</span>
    </div>
  );
}

/* ── Specialist card ──────────────────────────────────────── */
function SpecialistCard({ pro, index }: { pro: typeof SPECIALISTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#EDE7E1] hover:border-[#B5BC8F]/50 transition-all duration-300"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
      whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(0,0,0,0.10)" }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Photo */}
        <div className="relative w-full sm:w-44 h-52 sm:h-auto shrink-0 overflow-hidden bg-gradient-to-br from-[#D9E5DB] to-[#EDE7E1]">
          {pro.image && (
            <img
              src={pro.image}
              alt={pro.name}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {/* Category badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.22)", color: "#fff", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.35)" }}>
              {pro.category}
            </span>
          </div>
          {/* Available dot */}
          {pro.available && (
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-semibold text-[#262525]">Disponible</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
          <div>
            {/* Name + price */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-bold text-[#262525] text-lg leading-tight">{pro.name}</h3>
                <p className="text-[#5A634F] text-sm font-medium">{pro.title}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xl font-bold text-[#262525]">${pro.sessionPrice}</p>
                <p className="text-[#9a9a9a] text-[11px]">por sesión</p>
              </div>
            </div>

            {/* Rating + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#6b6b6b]">
              <StarRating rating={pro.rating} />
              <span className="flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {pro.city}{pro.country ? `, ${pro.country}` : ""}
              </span>
              <span className="flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Próx. disponibilidad: Sábado
              </span>
            </div>

            {/* Bio */}
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-3 line-clamp-2">{pro.bio}</p>

            {/* Specialty tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {pro.specialties.map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "#D9E5DB", color: "#3D6B60" }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Sesión exploratoria */}
            <div className="flex items-center gap-1.5 mt-2 mb-1">
              <span className="text-[11px] text-[#9a9a9a]">Sesión exploratoria:</span>
              <span className="text-[11px] font-bold text-[#5A634F]">$25</span>
            </div>

            {/* Modality + language */}
            <div className="flex flex-wrap gap-3 text-[11px] text-[#9a9a9a]">
              {pro.modalities.map((m) => (
                <span key={m} className="flex items-center gap-1 capitalize">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B5BC8F" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  {m}
                </span>
              ))}
              {pro.languages.map((l) => (
                <span key={l} className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B5BC8F" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-[#F0EAE3]">
            <button className="flex-1 text-sm font-semibold text-[#5A634F] border border-[#5A634F]/30 px-4 py-2.5 rounded-xl hover:bg-[#F5F9F5] transition-colors">
              Ver perfil
            </button>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-sm font-bold text-white px-4 py-2.5 rounded-xl text-center"
              style={{ background: "#B5BC8F" }}
              whileHover={{ scale: 1.02, opacity: 0.92 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver disponibilidad →
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function ProfesionalesPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [modality, setModality] = useState("Todos");
  const [sort, setSort] = useState("Recomendadas");

  /* Check localStorage on mount */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setUnlocked(true);
    } catch {}
  }, []);

  const filtered = useMemo(() => {
    let list = [...SPECIALISTS];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.specialties.some(s => s.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    }
    if (category === "Terapia de Parejas") list = list.filter(p => p.specialties.includes("Terapia de Parejas"));
    else if (category !== "Todos") list = list.filter(p => p.category === category);
    if (modality === "Online") list = list.filter(p => p.modalities.includes("online"));
    if (modality === "Presencial") list = list.filter(p => p.modalities.includes("presencial"));
    if (sort === "Precio: menor") list.sort((a, b) => a.sessionPrice - b.sessionPrice);
    if (sort === "Precio: mayor") list.sort((a, b) => b.sessionPrice - a.sessionPrice);
    // "Recomendadas" preserves insertion order
    return list;
  }, [search, category, modality, sort]);

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* Directory content — always rendered, blurred through modal backdrop */}
      <div style={!unlocked ? { pointerEvents: "none", userSelect: "none" } : {}}>
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-10">
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 8% 85%, #AB6139 0%, transparent 38%), radial-gradient(ellipse at 2% 5%, #64C1C4 0%, transparent 42%), radial-gradient(ellipse at 98% 5%, #2D4A48 0%, transparent 38%), radial-gradient(ellipse at 55% 45%, #8B9970 0%, transparent 48%), radial-gradient(ellipse at 78% 65%, #C5C99A 0%, transparent 42%), #4A5E4A" }} />

          <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">Directorio</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                Encuentra tu especialista
              </h1>
              <p className="text-white/60 text-base max-w-lg">
                Cada una fue seleccionada. Cada perfil, revisado. Tu bienestar, en manos de alguien que realmente sabe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search + Filters */}
        <div className="sticky top-16 z-30 border-b border-[#EDE7E1]" style={{ background: "#FDFBF8" }}>
          <div className="max-w-5xl mx-auto px-6 sm:px-12 py-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9a9a9a]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Buscar por nombre, especialidad…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-[#EDE7E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 focus:border-[#5A634F]/40 transition-all bg-white"
                />
              </div>
              <select
                value={modality}
                onChange={(e) => setModality(e.target.value)}
                className="border border-[#EDE7E1] rounded-xl px-3 py-2.5 text-sm text-[#262525] bg-white focus:outline-none cursor-pointer"
              >
                {MODALITIES.map((m) => <option key={m}>{m}</option>)}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-[#EDE7E1] rounded-xl px-3 py-2.5 text-sm text-[#262525] bg-white focus:outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-8">
          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  category === cat
                    ? "bg-[#5A634F] text-white border-[#5A634F]"
                    : "bg-white text-[#6b6b6b] border-[#EDE7E1] hover:border-[#B5BC8F]/50"
                }`}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[#262525] font-semibold">{filtered.length} especialistas</p>
            <p className="text-[#9a9a9a] text-sm">Sesión exploratoria: <strong className="text-[#5A634F]">$25</strong></p>
          </div>

          {/* Cards */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <div className="flex flex-col gap-5">
                {filtered.map((pro, i) => (
                  <SpecialistCard key={pro.id} pro={pro} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <h3 className="text-[#262525] font-bold text-xl mb-2">Sin resultados</h3>
                <p className="text-[#9a9a9a] text-sm">Intenta con otra búsqueda o categoría.</p>
                <button
                  onClick={() => { setSearch(""); setCategory("Todos"); }}
                  className="mt-4 text-sm text-[#5A634F] font-semibold underline underline-offset-2"
                >
                  Limpiar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 rounded-3xl p-10 text-center relative overflow-hidden"
            style={{ background: "#5A634F", backgroundImage: "url('/fondo-lineas-web.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "multiply" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2 relative z-10">¿No sabes por dónde empezar?</p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3 relative z-10">Escríbenos Hoy</h2>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto relative z-10">
              Cuéntanos qué está pasando y te conectamos con la especialista ideal para ti.
            </p>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm relative z-10"
              style={{ background: "#B5BC8F", color: "#fff" }}
              whileHover={{ scale: 1.04, opacity: 0.92 }}
              whileTap={{ scale: 0.97 }}
            >
              Escríbenos por WhatsApp →
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Lead gate modal — overlaid when not unlocked */}
      <AnimatePresence>
        {!unlocked && (
          <LeadGateModal onUnlock={() => setUnlocked(true)} />
        )}
      </AnimatePresence>

      <MarketingFooter />
    </div>
  );
}
