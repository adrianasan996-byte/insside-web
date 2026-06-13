"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";
const YOUTUBE_ID = "FGJzWaSyddw";

// Each photo slot = 310px tall + 14px bottom padding = 324px per slot
// 5 photos × 324px = 1620px per set → 2 sets = 3240px → -50% = -1620px ✓ seamless
const PHOTO_H = 310;
const PHOTO_GAP = 14;

const BASE = "/fotos%20carousel%20de%20conocenos";
const COL_A = [`${BASE}/1.png`, `${BASE}/3.png`, `${BASE}/5.png`, `${BASE}/7.png`, `${BASE}/DSC00717.jpg`];
const COL_B = [`${BASE}/2.png`, `${BASE}/4.png`, `${BASE}/6.png`, `${BASE}/8.png`, `${BASE}/DSC00768.jpg`];

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Ayuda simplificada",
    desc: "Cuando decides buscar apoyo, lo difícil no debería ser averiguar por dónde empezar. Te ayudamos a identificar qué tipo de acompañamiento puede ayudarte según lo que estás viviendo hoy.",
    accent: "#D9E5DB",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Profesionales seleccionados.",
    desc: "Cada especialista de Insside fue seleccionado por su experiencia, trayectoria y forma de acompañar a las personas. Porque encontrar ayuda también implica poder confiar en quién te acompaña.",
    accent: "#EDE7E1",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Menos confusión, más dirección.",
    desc: "No creemos que debas pasar horas comparando perfiles o intentando adivinar qué necesitas. Estamos aquí para ayudarte a tomar una decisión con más claridad.",
    accent: "#F0F4EC",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Pensamos en procesos sostenibles.",
    desc: "No buscamos soluciones rápidas ni cambios que duren una semana. Buscamos ayudarte a construir bienestar que puedas sostener en tu vida real.",
    accent: "#D9E5DB",
  },
];

const FOR_YOU_YES = [
  "Sabes que algo no se siente bien, aunque no puedas ponerlo en palabras.",
  "Quieres entender mejor lo que te pasa, no solo aliviarlo momentáneamente.",
  "Estás dispuesto a invertir tiempo y atención en tu bienestar.",
];
const FOR_YOU_NO = [
  "Buscas una solución inmediata sin disposición a profundizar en el proceso.",
  "Necesitas atención de emergencia o apoyo psiquiátrico especializado.",
  "No estás dispuesto a involucrarte activamente en tu bienestar.",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerList({ items, renderItem, className = "" }: {
  items: unknown[];
  renderItem: (item: unknown, i: number) => React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className={className}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderItem(item, i)}
        </motion.div>
      ))}
    </div>
  );
}

function VerticalPhotoCol({ photos, direction }: { photos: string[]; direction: "up" | "down" }) {
  const loop = [...photos, ...photos];
  return (
    <div style={{ height: "700px", overflow: "hidden", width: "265px" }}>
      <div
        className={direction === "up" ? "photo-col-up" : "photo-col-down"}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {loop.map((src, i) => (
          <div key={i} style={{ flexShrink: 0, paddingBottom: `${PHOTO_GAP}px` }}>
            <div
              style={{ width: "265px", height: `${PHOTO_H}px`, borderRadius: "18px", overflow: "hidden", position: "relative" }}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="265px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ConocenosPage() {
  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "#F5F0EB" }} className="overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 pt-20 pb-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: copy */}
          <div className="flex-1 min-w-0">
            <motion.p
              className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Conócenos
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5 text-[#262525]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              De la idea,{" "}
              <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                al propósito.
              </span>
            </motion.h1>

            <motion.p
              className="text-[#6b6b6b] text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Porque cuando algo no se siente bien, encontrar apoyo no debería convertirse en otro problema que resolver.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm text-white"
                style={{ background: "#5A634F" }}
              >
                Hablar con nosotras →
              </a>
              <Link
                href="/profesionales-main"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm text-[#5A634F] border border-[#B5BC8F]/50 hover:border-[#8B9970] transition-colors"
              >
                Ver especialistas
              </Link>
            </motion.div>

          </div>

          {/* Right: vertical scrolling photo columns (desktop) */}
          <motion.div
            className="hidden lg:flex gap-4 flex-shrink-0 items-start overflow-hidden"
            style={{
              height: "620px",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <VerticalPhotoCol photos={COL_A} direction="up" />
            <div style={{ paddingTop: "60px" }}>
              <VerticalPhotoCol photos={COL_B} direction="down" />
            </div>
          </motion.div>

          {/* Mobile: horizontal strip */}
          <motion.div
            className="lg:hidden w-full flex gap-3 overflow-hidden"
            style={{ height: "320px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="animate-marquee-right-slow flex gap-3 items-center" style={{ width: "max-content" }}>
              {[...COL_A, ...COL_B, ...COL_A, ...COL_B].map((src, i) => (
                <div key={i} className="relative flex-shrink-0 rounded-2xl overflow-hidden" style={{ width: "200px", height: "320px" }}>
                  <Image src={src} alt="" fill className="object-cover" sizes="200px" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NUESTRA HISTORIA ──────────────────────────────────── */}
      <section style={{ background: "#FDFBF8" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "4/5", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <Image
                  src="/foto steph adri 1.png"
                  alt="Adriana y Stephanie"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 40vw, 90vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-3">
                ¿Cómo nació Insside?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-5">
                Encontrar apoyo no debería{" "}
                <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                  ser tan complicado.
                </span>
              </h2>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                Nos dimos cuenta de que pedir ayuda suele ser más complicado de lo que debería. Muchas personas saben que algo no está bien. Se sienten agotadas, confundidas, estancadas o desconectadas de sí mismas.
              </p>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                Pero cuando deciden buscar ayuda aparece una nueva pregunta: ¿Por dónde empiezo? ¿Necesito terapia? ¿Coaching? ¿Nutrición? ¿Estoy exagerando? ¿Y si elijo mal?
              </p>
              <p className="text-[#5A634F] text-sm leading-relaxed font-medium">
                Ahí nació Insside. Creamos un espacio que hace más simple encontrar el acompañamiento adecuado para lo que estás viviendo, sin tener que resolverlo todo solo antes de empezar.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── COMUNIDAD EN INSTAGRAM ───────────────────────────── */}
      <section style={{ background: "#F5F0EB" }} className="overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-16 pb-6">
          <FadeIn className="text-center">
            <p className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-2">
              Nuestra comunidad
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Nuestra{" "}
              <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                Comunidad
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Scroll container con fade en bordes */}
        <div className="relative">
          {/* Fade izquierda */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10"
            style={{ background: "linear-gradient(to right, #F5F0EB, transparent)" }} />
          {/* Fade derecha */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10"
            style={{ background: "linear-gradient(to left, #F5F0EB, transparent)" }} />

          <div
            className="flex gap-5 py-8 overflow-x-auto scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              paddingLeft: "clamp(24px, 8vw, 120px)",
              paddingRight: "clamp(24px, 8vw, 120px)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {[
              "DN6WSQsjiYG",
              "DOUOM3WAUPH",
              "DM00m4kvC8q",
              "DMVxwjYJqz5",
              "DLYSfV0hKP2",
              "DNYj51ctvWh",
              "DLIq07QpmER",
            ].map((id, i) => (
              <motion.div
                key={id}
                className="flex-shrink-0"
                style={{
                  scrollSnapAlign: "center",
                  width: "300px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(90,99,79,0.12)",
                  background: "#fff",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(90,99,79,0.18)" }}
              >
                <iframe
                  src={`https://www.instagram.com/p/${id}/embed/`}
                  width="300"
                  height="460"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  loading="lazy"
                  style={{ border: "none", display: "block" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 PILARES ────────────────────────────────────────── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
          <FadeIn className="mb-10">
            <p className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-2">
              Cómo acompañamos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              ¿Qué nos hace{" "}
              <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                diferentes?
              </span>
            </h2>
          </FadeIn>

          <StaggerList
            items={PILLARS}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            renderItem={(item, i) => {
              const p = item as typeof PILLARS[0];
              return (
                <motion.div
                  className="p-6 rounded-2xl bg-white border border-[#EDE7E1] h-full hover:shadow-md transition-shadow cursor-default"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(90,99,79,0.12)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-[#5A634F]"
                    style={{ background: p.accent }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-[#262525] text-base mb-2">{p.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            }}
          />
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────── */}
      <section style={{ background: "#FDFBF8" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
          <FadeIn className="text-center mb-8">
            <p className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-2">
              Bienvenida
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Adri y Steph tienen{" "}
              <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                un mensaje para ti…
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{ paddingBottom: "56.25%", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                title="Bienvenida Insside"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ¿ES PARA TI? ─────────────────────────────────────── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
          <FadeIn className="mb-10">
            <p className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-2">
              ¿Es para ti?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
              Insside es para ti{" "}
              <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                si...
              </span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Sí */}
            <FadeIn delay={0.05}>
              <div
                className="rounded-2xl p-6 h-full"
                style={{ background: "#F0F4EC", border: "1px solid rgba(90,99,79,0.12)" }}
              >
                <p className="text-[#8B9970] text-[11px] font-semibold uppercase tracking-widest mb-5">
                  ✓ Sí encaja
                </p>
                <ul className="space-y-4">
                  {FOR_YOU_YES.map((t, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "#5A634F" }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <p className="text-sm leading-relaxed text-[#3D4A37]">{t}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* No */}
            <FadeIn delay={0.1}>
              <div
                className="rounded-2xl p-6 h-full"
                style={{ background: "#FDF8F5", border: "1px solid rgba(200,180,160,0.25)" }}
              >
                <p className="text-[#C4A882] text-[11px] font-semibold uppercase tracking-widest mb-5">
                  — No es para ti si
                </p>
                <ul className="space-y-4">
                  {FOR_YOU_NO.map((t, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.1 }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "#E8DDD5" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" strokeWidth="3.5">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </div>
                      <p className="text-sm leading-relaxed text-[#9a9a9a]">{t}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section style={{ background: "#FDFBF8" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16 pb-24">
          <FadeIn>
            <div
              className="rounded-3xl overflow-hidden relative border border-[#D9E5DB]"
              style={{ background: "#F0F4EC" }}
            >
              <div className="relative z-10 px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-[#262525] text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-3">
                    Lo que estás viviendo{" "}
                    <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
                      merece atención.
                    </span>
                  </h2>
                  <p className="text-[#6b6b6b] text-sm max-w-lg leading-relaxed">
                    Da el primer paso y encuentra a la persona adecuada para acompañarte.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link
                    href="/profesionales-main"
                    className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm text-white"
                    style={{ background: "#5A634F" }}
                  >
                    Ver Profesionales Disponibles →
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
