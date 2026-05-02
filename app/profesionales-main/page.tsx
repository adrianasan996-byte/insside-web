"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import Link from "next/link";
import { SPECIALISTS, SpecialistProfile } from "@/lib/specialists";

const WHATSAPP = "https://wa.me/17866356816";
const STORAGE_KEY = "insside_directorio_access";

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
function SpecialistCard({ pro, index }: { pro: SpecialistProfile; index: number }) {
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
      {/* Mobile: photo top-left + info, tags + CTA below | Desktop: wide sidebar photo */}

      {/* Top row: photo + info */}
      <div className="flex flex-row">
        {/* Photo */}
        <div className="relative w-[120px] sm:w-44 flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#D9E5DB] to-[#EDE7E1]"
          style={{ minHeight: "160px" }}>
          {pro.image && (
            <img
              src={pro.image}
              alt={pro.name}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          )}
          {/* Category badge — desktop only */}
          <div className="hidden sm:block absolute top-3 left-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.22)", color: "#fff", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.35)" }}>
              {pro.category}
            </span>
          </div>
          {/* Available indicator — glassmorphic pill on both mobile and desktop */}
          {pro.available && (
            <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.22)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.35)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-white">Disponible</span>
            </div>
          )}
        </div>

        {/* Info — right of photo */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-w-0">
          {/* Category — mobile only */}
          <div className="sm:hidden mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: "#D9E5DB", color: "#3D6B60" }}>
              {pro.category}
            </span>
          </div>

          {/* Name + price */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="min-w-0">
              <h3 className="font-bold text-[#262525] text-base leading-tight">{pro.name}</h3>
              <p className="text-[#5A634F] text-xs font-medium mt-0.5">{pro.title}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-base font-bold text-[#262525]">${pro.sessionPrice}</p>
              <p className="text-[#9a9a9a] text-[10px]">/ sesión</p>
            </div>
          </div>

          {/* Rating + location */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6b6b6b]">
            <StarRating rating={pro.rating} />
            <span className="flex items-center gap-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {pro.city}{pro.country ? `, ${pro.country}` : ""}
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Próx. disponibilidad: Sábado
            </span>
          </div>

          {/* Bio + tags + extras — desktop only inside info column */}
          <p className="hidden sm:block text-[#6b6b6b] text-sm leading-relaxed mt-3 mb-2 line-clamp-2">{pro.shortBio}</p>
          <div className="hidden sm:flex flex-wrap gap-1.5 mb-2">
            {pro.specialties.map((tag) => (
              <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                style={{ background: "#D9E5DB", color: "#3D6B60" }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="hidden sm:flex flex-wrap gap-3 text-[11px] text-[#9a9a9a]">
            {pro.calendars.exploratory && (
              <span>Exploratoria: <strong className="text-[#5A634F]">$25</strong></span>
            )}
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
      </div>

      {/* Mobile-only: bio + tags + CTA below the photo row */}
      <div className="sm:hidden px-4 pb-4 flex flex-col gap-2.5" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <p className="text-[#6b6b6b] text-xs leading-relaxed line-clamp-2 pt-3">{pro.shortBio}</p>
        <div className="flex items-center gap-x-3 gap-y-1 flex-wrap">
          {pro.calendars.exploratory && (
            <span className="text-[10px] font-medium text-[#5A634F]">
              Exploratoria: <strong>$25</strong>
            </span>
          )}
          <span className="text-[10px] text-[#9a9a9a]">
            Próx. disponibilidad: <strong className="text-[#5A634F]">Esta semana</strong>
          </span>
        </div>
        <div className="flex items-center gap-x-3 gap-y-1 flex-wrap">
          {pro.calendars.exploratory && (
            <span className="text-[10px] font-medium text-[#5A634F]">
              Exploratoria: <strong>$25</strong>
            </span>
          )}
          <span className="text-[10px] text-[#9a9a9a]">
            Próx. disponibilidad: <strong className="text-[#5A634F]">Esta semana</strong>
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {pro.specialties.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: "#D9E5DB", color: "#3D6B60" }}>
              {tag}
            </span>
          ))}
          {pro.specialties.length > 3 && (
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full text-[#9a9a9a]">
              +{pro.specialties.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-2 pt-1">
          <Link
            href={`/profesionales/${pro.slug}`}
            className="flex-1 text-center text-sm font-semibold text-[#5A634F] border border-[#5A634F]/30 px-4 py-2.5 rounded-xl hover:bg-[#F5F9F5] transition-colors"
          >
            Ver perfil
          </Link>
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-sm font-bold text-white px-4 py-2.5 rounded-xl text-center"
            style={{ background: "#B5BC8F" }}
            whileHover={{ scale: 1.02, opacity: 0.92 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar →
          </motion.a>
        </div>
      </div>

      {/* Desktop-only CTA */}
      <div className="hidden sm:flex gap-2 px-5 pb-5 pt-3 border-t border-[#F0EAE3]">
        <Link
          href={`/profesionales/${pro.slug}`}
          className="flex-1 text-center text-sm font-semibold text-[#5A634F] border border-[#5A634F]/30 px-4 py-2.5 rounded-xl hover:bg-[#F5F9F5] transition-colors"
        >
          Ver perfil
        </Link>
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
    if (category !== "Todos") list = list.filter(p => p.category === category);
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
            style={{ background: "radial-gradient(ellipse 280px 220px at 8% 85%, #AB6139 0%, transparent 100%), radial-gradient(ellipse 320px 280px at 2% 5%, #64C1C4 0%, transparent 100%), radial-gradient(ellipse 280px 220px at 98% 5%, #2D4A48 0%, transparent 100%), radial-gradient(ellipse 460px 320px at 55% 45%, #8B9970 0%, transparent 100%), radial-gradient(ellipse 360px 280px at 78% 65%, #C5C99A 0%, transparent 100%), #4A5E4A" }} />

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
