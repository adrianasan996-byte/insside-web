"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";

const WHAT_IS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Un sistema de autoconocimiento",
    body: "El Human Design es un mapa de tu energía única — combina astrología, el I Ching, la Cábala y los centros energéticos para revelar cómo estás diseñado/a para vivir, tomar decisiones y relacionarte con el mundo.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "No es una creencia, es una herramienta",
    body: "No necesitas creer en nada para beneficiarte. Tu carta se calcula con tu fecha, hora y lugar de nacimiento. Lo que obtienes es información concreta: tu tipo de aura, cómo tomar decisiones, cuáles son tus dones y cómo fluir con tu energía.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Aplicable desde el primer día",
    body: "Cada lectura termina con herramientas prácticas. Descubrirás cómo usar tu tipo y autoridad en decisiones reales: relaciones, trabajo, crianza, salud y propósito.",
  },
];

const SESSION_TOPICS = [
  "Tu tipo de energía y aura",
  "Tu autoridad: cómo tomar decisiones auténticas",
  "Tu estrategia de vida",
  "Centros definidos e indefinidos",
  "Dones, talentos y propósito",
  "Tus roles en la vida y relaciones",
  "Integración práctica del Human Design",
];

const FOR_WHO = [
  "Sientes que vives en piloto automático y quieres reconectar contigo",
  "Tomas decisiones desde el miedo, la duda o la presión externa",
  "Estás en un momento de transición (trabajo, relaciones, identidad)",
  "Quieres entender tu energía y dejar de forzar lo que no te corresponde",
  "Buscas propósito y claridad sobre cómo vivir más alineada/o",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HumanDesignClient() {
  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "380px" }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(38,37,37,0.92) 0%, rgba(90,61,40,0.75) 60%, rgba(38,37,37,0.50) 100%)" }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-xs text-white/50">
              <Link href="/recursos" className="hover:text-white/80 transition-colors">Recursos</Link>
              <span>/</span>
              <span className="text-white/70">Human Design</span>
            </div>

            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 text-white"
              style={{ background: "rgba(227,129,47,0.30)", border: "1px solid rgba(227,129,47,0.45)" }}>
              Sesión 1:1 · Online
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Descubre tu<br />
              <span style={{ color: "#E3812F" }}>Human Design</span>
            </h1>
            <p className="text-white/65 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              Un sistema de autoconocimiento que revela cómo estás diseñada para tomar decisiones, usar tu energía y vivir con mayor autenticidad.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm text-white"
                style={{ background: "#E3812F" }}
                whileHover={{ scale: 1.04, opacity: 0.92 }}
                whileTap={{ scale: 0.97 }}
              >
                Reservar mi sesión →
              </motion.a>
              <a href="#que-es"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm text-white/80 border border-white/20 hover:border-white/40 transition-colors">
                Saber más ↓
              </a>
            </div>
          </motion.div>
        </div>

        {/* Price pill floating */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-8 right-8 hidden sm:flex flex-col items-end"
        >
          <div className="px-5 py-3 rounded-2xl text-right"
            style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.22)" }}>
            <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">Sesión 1:1</p>
            <p className="text-white text-2xl font-bold">$185 <span className="text-sm font-normal text-white/60">USD</span></p>
            <p className="text-white/50 text-[11px]">1h 45min · grabación incluida</p>
          </div>
        </motion.div>
      </section>

      {/* ── QUÉ ES ── */}
      <section id="que-es" className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
        <FadeIn>
          <p className="text-[#E3812F] text-xs font-bold uppercase tracking-widest mb-3">¿Qué es?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#262525] mb-12 max-w-xl">
            El Human Design es el mapa de quién eres realmente.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {WHAT_IS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl h-full" style={{ background: "#F5F0EB", border: "1px solid rgba(227,129,47,0.12)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-[#E3812F]"
                  style={{ background: "rgba(227,129,47,0.12)" }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#262525] text-base mb-2">{item.title}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
          <FadeIn>
            <p className="text-[#E3812F] text-xs font-bold uppercase tracking-widest mb-3">La sesión</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262525] mb-4">¿Qué exploramos en sesión?</h2>
            <p className="text-[#6b6b6b] text-base max-w-xl mb-12 leading-relaxed">
              Cada sesión es una lectura profunda y personalizada de tu carta. Elisabet traduce conceptos complejos en información clara y aplicable desde el primer día.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SESSION_TOPICS.map((topic, i) => (
              <FadeIn key={topic} delay={i * 0.06}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white"
                  style={{ border: "1px solid rgba(227,129,47,0.15)" }}>
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
                    style={{ background: "#E3812F" }}>
                    {i + 1}
                  </div>
                  <span className="text-[#262525] text-sm font-medium">{topic}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* What you receive */}
          <FadeIn className="mt-10">
            <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
              style={{ background: "linear-gradient(135deg, #5A3D28 0%, #3D2518 100%)" }}>
              <div className="flex-1">
                <p className="text-[#E3812F] text-[10px] font-bold uppercase tracking-widest mb-2">Lo que recibes</p>
                <h3 className="text-white font-bold text-xl mb-3">Incluido en tu sesión</h3>
                <ul className="space-y-2">
                  {["Sesión personalizada de 1h 45min por Zoom", "Grabación completa de la lectura", "Tu carta de Human Design en PDF", "Espacio de preguntas al final"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/75">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#E3812F" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:text-right shrink-0">
                <p className="text-white/50 text-xs mb-1">Inversión</p>
                <p className="text-white text-4xl font-bold">$185</p>
                <p className="text-white/50 text-xs mt-1">USD · pago único</p>
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-bold px-6 py-2.5 rounded-xl text-sm"
                  style={{ background: "#E3812F", color: "#fff" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Reservar →
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-[#E3812F] text-xs font-bold uppercase tracking-widest mb-3">¿Para quién es?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262525] mb-6">Esta sesión es para ti si…</h2>
            <ul className="space-y-3">
              {FOR_WHO.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3 text-[#6b6b6b] text-sm leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(227,129,47,0.15)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E3812F" }} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.15}>
            <div className="relative p-8 rounded-3xl overflow-hidden"
              style={{ background: "linear-gradient(145deg, #FDF6EE 0%, #F5EFE5 100%)", border: "1px solid rgba(227,129,47,0.15)" }}>
              <div className="absolute top-4 left-6 text-7xl leading-none font-serif text-[#E3812F] opacity-20">"</div>
              <p className="relative text-[#5A3D28] text-base leading-relaxed font-medium italic mt-4 mb-5">
                El Human Design no te dice quién debes ser. Te muestra quién ya eres — y cómo dejar de vivir en contra de eso.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: "#E3812F" }}>EM</div>
                <div>
                  <p className="text-[#262525] font-semibold text-sm">Elisabet Martínez</p>
                  <p className="text-[#9a9a9a] text-xs">Lectora de Human Design</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SOBRE ELISABET ── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
          <FadeIn>
            <p className="text-[#E3812F] text-xs font-bold uppercase tracking-widest mb-8">Tu guía</p>
          </FadeIn>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Photo placeholder */}
            <FadeIn className="shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden"
                style={{ background: "linear-gradient(145deg, #E3812F 0%, #C06820 100%)" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl font-black text-white/20">EM</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#262525] mb-1">Elisabet Martínez</h2>
              <p className="text-[#E3812F] font-semibold text-sm mb-4">Lectora de Human Design · Bionumerología · Trabajo Transgeneracional</p>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                Especialista certificada en Human Design con más de 4 años de experiencia y más de 700 lecturas realizadas con clientes de diversos países. Combina precisión técnica con sensibilidad emocional para crear espacios genuinos de comprensión y liberación personal.
              </p>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">
                Su enfoque es claro, práctico y holístico: traduce el Human Design en herramientas aplicables para vivir con mayor coherencia, claridad y autenticidad desde el primer día.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Human Design", "Bionumerología", "Trabajo Transgeneracional", "Autoconocimiento Holístico"].map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: "#5A3D28" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden relative text-center"
            style={{ background: "linear-gradient(135deg, #5A3D28 0%, #3D2518 100%)" }}>
            <div className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(227,129,47,0.20) 0%, transparent 55%)" }} />
            <div className="relative z-10 px-8 py-14 sm:py-16">
              <p className="text-[#E3812F] text-xs font-bold uppercase tracking-widest mb-3">¿Lista para conocerte?</p>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3">Reserva tu lectura de Human Design</h2>
              <p className="text-white/55 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Una sola sesión puede cambiar la forma en que te ves, te relacionas y tomas decisiones. Escríbenos para agendar tu fecha.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-sm"
                  style={{ background: "#E3812F", color: "#fff" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Reservar mi sesión ($185) →
                </motion.a>
                <Link href="/profesionales"
                  className="text-white/60 text-sm hover:text-white/90 transition-colors">
                  Ver todas las especialistas →
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <MarketingFooter />
    </div>
  );
}
