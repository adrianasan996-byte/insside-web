"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";
const YOUTUBE_ID = "FGJzWaSyddw";

const DIFFERENTIATORS = [
  {
    title: "Acompañamiento integral",
    body: "No nos limitamos a una sola disciplina. Integramos psicología, coaching y nutrición para acompañarte como un todo.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Profesionales seleccionados",
    body: "Seleccionamos a cada especialista con rigor profesional y humano. No cualquiera forma parte de Insside.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Plataforma sencilla",
    body: "Todo en un solo lugar: agenda, paga y recibe acompañamiento sin confusiones.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: "Acompañamiento humano",
    body: "La tecnología nos ordena, pero las decisiones siguen siendo humanas y personalizadas.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: "Visión de bienestar sostenible",
    body: "No buscamos solo resolver una urgencia, sino transformar tu relación con el bienestar de forma profunda y sostenible.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7z"/>
      </svg>
    ),
  },
  {
    title: "Tecnología al servicio",
    body: "Nuestra tecnología simplifica tu camino: te guía, organiza tus citas y hace todo más fácil para ti.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
];

const FOR_YOU = [
  { yes: true,  text: "Quieres claridad para entender qué tipo de apoyo realmente necesitas." },
  { yes: true,  text: "Buscas un enfoque integral que conecte mente, cuerpo y hábitos." },
  { yes: true,  text: "Prefieres una experiencia guiada y simple, sin perder tiempo comparando especialistas." },
  { yes: false, text: "Buscas solo una sesión rápida sin intención de profundizar." },
  { yes: false, text: "Necesitas atención de emergencia o psiquiátrica, fuera de nuestro alcance." },
  { yes: false, text: "No estás listo/a para comprometerte contigo y tu bienestar." },
];

const EVENT_PHOTOS = [
  "/equipo/1.png", "/equipo/2.png", "/equipo/3.png", "/equipo/4.png",
  "/equipo/5.png", "/equipo/6.png", "/equipo/7.png", "/equipo/8.png",
  "/equipo/DSC01121.jpg",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

function EventCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + EVENT_PHOTOS.length) % EVENT_PHOTOS.length);
  const next = () => setCurrent(c => (c + 1) % EVENT_PHOTOS.length);

  // Auto-advance every 3.5 seconds
  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % EVENT_PHOTOS.length), 3500);
    return () => clearInterval(id);
  }, []);

  const visible = [
    EVENT_PHOTOS[(current) % EVENT_PHOTOS.length],
    EVENT_PHOTOS[(current + 1) % EVENT_PHOTOS.length],
    EVENT_PHOTOS[(current + 2) % EVENT_PHOTOS.length],
  ];

  return (
    <div className="relative">
      {/* Desktop: 3-up grid */}
      <div className="hidden sm:grid grid-cols-3 gap-4">
        {visible.map((src, i) => (
          <motion.div key={src + i}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EDE7E1]"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}>
            <Image src={src} alt="Evento Insside" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="33vw" />
          </motion.div>
        ))}
      </div>

      {/* Mobile: single card */}
      <div className="sm:hidden relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EDE7E1]"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}>
        <AnimatePresence mode="wait">
          <motion.div key={current} className="absolute inset-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}>
            <Image src={EVENT_PHOTOS[current]} alt="Evento Insside" fill className="object-cover" sizes="100vw" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <motion.button onClick={prev}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-[#EDE7E1] hover:border-[#B5BC8F] transition-colors bg-white"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A634F" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </motion.button>
        <div className="flex gap-1.5">
          {EVENT_PHOTOS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{ width: i === current ? 18 : 6, height: 6, background: i === current ? "#5A634F" : "#D9E5DB" }} />
          ))}
        </div>
        <motion.button onClick={next}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-[#EDE7E1] hover:border-[#B5BC8F] transition-colors bg-white"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A634F" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </motion.button>
      </div>
    </div>
  );
}

export default function ConocenosPage() {
  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#F5F0EB", minHeight: "460px" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#8B9970] text-xs font-bold uppercase tracking-widest mb-3">Conócenos</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#262525] leading-tight mb-4">
                De la idea<br />
                <span style={{ color: "#5A634F" }}>al propósito.</span>
              </h1>
              <p className="text-[#6b6b6b] text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                Insside es un espacio donde mente, cuerpo y alma se trabajan de forma integrada, con acompañamiento profesional real.
              </p>
              <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm text-white"
                style={{ background: "#5A634F" }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                Hablar con nosotras →
              </motion.a>
            </motion.div>

            {/* Founders photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5", maxHeight: "400px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
              <Image src="/equipo/foto-home.png" alt="Comunidad Insside"
                fill className="object-cover object-center" sizes="(min-width: 640px) 50vw, 100vw" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE VIDEO ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <FadeIn className="text-center mb-8">
          <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">Bienvenida</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#262525]">Un mensaje de Adriana y Stephanie</h2>
        </FadeIn>
        <FadeIn>
          <div className="relative w-full rounded-2xl overflow-hidden"
            style={{ paddingBottom: "56.25%", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
              title="Bienvenida Insside"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── NUESTRA HISTORIA ── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "4/5", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}>
                <Image src="/foto steph adri 1.png" alt="Adriana y Stephanie"
                  fill className="object-cover object-top" sizes="(min-width: 640px) 40vw, 100vw" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-3">¿De dónde nació Insside?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#262525] mb-5 leading-snug">
                Vimos que la salud no funciona por partes.
              </h2>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                Nosotras, Adriana y Stephanie, desde la psicología y el coaching entendimos que las personas no llegan con un solo problema, sino con necesidades que atraviesan mente, cuerpo, emociones y hábitos.
              </p>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                Ahí descubrimos algo esencial: el bienestar solo es real cuando se integra todo. Pero esa integración no existía. Muchos buscaban ayuda sin guía y no sabían qué tipo de apoyo necesitaban.
              </p>
              <p className="text-[#5A634F] text-sm leading-relaxed font-medium">
                Insside nació para resolver eso: un acompañamiento integral, simple y accesible, donde distintos profesionales trabajan con una misma visión — ver y sostener a la persona como un todo.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── QUÉ NOS HACE DIFERENTES ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <FadeIn className="mb-10">
          <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">¿Qué nos hace diferentes?</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#262525]">Nuestra forma de acompañar</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.07}>
              <div className="p-5 rounded-2xl h-full border border-[#EDE7E1] bg-white hover:border-[#B5BC8F]/50 transition-colors"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 text-[#5A634F]"
                  style={{ background: "#F0F4EC" }}>
                  {d.icon}
                </div>
                <h3 className="font-bold text-[#262525] text-sm mb-1.5">{d.title}</h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed">{d.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── EVENT CAROUSEL ── */}
      <section style={{ background: "#F5F0EB" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
          <FadeIn className="mb-8">
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">Comunidad</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#262525]">Eventos y activaciones</h2>
            <p className="text-[#6b6b6b] text-sm mt-2 max-w-lg">Creamos espacios de encuentro, aprendizaje y bienestar para nuestra comunidad.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <EventCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ── INSSIDE ES PARA TI SI ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <FadeIn className="mb-10">
          <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">¿Es para ti?</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#262525]">Insside es para ti si...</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FOR_YOU.map((item, i) => (
            <FadeIn key={item.text} delay={i * 0.06}>
              <div className="flex items-start gap-3 p-4 rounded-2xl"
                style={{ background: item.yes ? "#F0F4EC" : "#FDF8F5", border: `1px solid ${item.yes ? "rgba(90,99,79,0.15)" : "rgba(200,180,160,0.25)"}` }}>
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: item.yes ? "#5A634F" : "#E8DDD5" }}>
                  {item.yes ? (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  )}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: item.yes ? "#3D4A37" : "#8a8a8a" }}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pb-20">
        <FadeIn>
          <div className="rounded-3xl overflow-hidden relative border border-[#D9E5DB]"
            style={{ background: "#F0F4EC" }}>
            <div className="relative z-10 px-8 py-12 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[#8B9970] text-xs font-bold uppercase tracking-widest mb-2">¿Lista para empezar?</p>
                <h2 className="text-[#262525] text-2xl sm:text-3xl font-bold mb-2">Agenda tu primera sesión.</h2>
                <p className="text-[#6b6b6b] text-sm max-w-sm leading-relaxed">
                  Escríbenos y te conectamos con la especialista ideal para ti.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm text-white"
                  style={{ background: "#5A634F" }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  Escríbenos →
                </motion.a>
                <Link href="/profesionales-main"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm text-[#5A634F] border border-[#B5BC8F] hover:bg-white transition-colors">
                  Ver especialistas
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
