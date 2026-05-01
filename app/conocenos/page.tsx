"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";

const VALORES = [
  { icon: "✦", name: "Integridad", desc: "Hacemos lo que decimos y decimos lo que hacemos. Sin atajos." },
  { icon: "◎", name: "Compromiso", desc: "Nos involucramos de verdad con cada persona que pasa por Insside." },
  { icon: "⬡", name: "Empatía", desc: "Escuchamos primero. Porque el bienestar empieza en sentirse visto." },
  { icon: "◇", name: "Respeto", desc: "Cada proceso es único. Nunca asumimos, siempre preguntamos." },
  { icon: "○", name: "Servicio", desc: "Existimos para ti. Tu evolución es nuestra medida de éxito." },
];

const TEAM = [
  {
    name: "Adriana Sánchez",
    role: "Co-fundadora · CEO",
    bio: "Apasionada por el bienestar integral y el crecimiento humano. Adriana lidera la visión de Insside con la convicción de que el acceso a la salud mental y emocional no debería ser un privilegio, sino un derecho.",
    photo: "/equipo/DSC01121.jpg",
    instagram: "@adrianasan_",
    emoji: "🌿",
    color: "#5A634F",
  },
  {
    name: "Stephani De Gregorio",
    role: "Co-fundadora · COO",
    bio: "Life coach y emprendedora con un profundo amor por las personas. Steph construye los procesos que hacen de Insside un espacio seguro, cálido y efectivo para cada usuario.",
    photo: "/equipo/foto-home.png",
    instagram: "@stephanidegregorio",
    emoji: "💫",
    color: "#8B9970",
  },
];

const PARTNERS = [
  { src: "/partners/6934db01125252fbd61b4c7f_encontrandote.png", name: "Encontrándote" },
  { src: "/partners/6934db012bdd45447f7602b6_dai;y.png", name: "Daily" },
  { src: "/partners/6934db014e0ea3f0c642c814_calma.png", name: "Calma" },
  { src: "/partners/6934db0196e0c9d2389bdcb3_BEYONG.png", name: "Beyond" },
  { src: "/partners/6934db0ad07f99c0a1e227ef_thyroid.png", name: "Thyroid" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ConocenosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ background: "#FDFBF8" }}>
        {/* Background pattern */}
        <motion.div className="absolute inset-0 pointer-events-none" style={{ y: heroY }}>
          <div className="absolute top-10 left-10 w-[600px] h-[600px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #D9E5DB 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #B5BC8F 0%, transparent 70%)" }} />
        </motion.div>

        {/* Lineas decorativas */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "url('/fondo-lineas-web.png')", backgroundSize: "cover" }} />

        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-28 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(90,99,79,0.08)", border: "1px solid rgba(90,99,79,0.15)", color: "#5A634F" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A634F]" />
                Nuestra historia
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-[#262525] leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Creamos Insside porque<br />
                <span style={{ color: "#5A634F" }}>nosotras también</span><br />
                lo necesitábamos.
              </motion.h1>

              <motion.p
                className="text-[#6b6b6b] text-base sm:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Somos Adriana y Stephani. Dos mujeres que entendieron, desde adentro, lo difícil que es pedir ayuda cuando no sabes por dónde empezar. Por eso creamos un espacio donde el bienestar no sea un lujo ni un laberinto.
              </motion.p>

              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5A634F] text-white font-bold px-6 py-3 rounded-xl text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Escríbenos →
                </motion.a>
                <a href="#equipo" className="inline-flex items-center text-[#5A634F] font-semibold text-sm underline underline-offset-2">
                  Conoce al equipo ↓
                </a>
              </motion.div>
            </div>

            {/* Photo collage */}
            <motion.div
              className="relative h-[440px] hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute top-0 left-8 w-56 h-72 rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "4px solid white" }}>
                <Image src="/equipo/DSC01121.jpg" alt="Adriana" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-52 h-64 rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "4px solid white" }}>
                <Image src="/equipo/foto-home.png" alt="Stephani" fill className="object-cover" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute top-20 right-12 bg-white rounded-2xl px-4 py-3"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-bold text-[#262525]">Insside nació en 2023</p>
                <p className="text-[10px] text-[#9a9a9a]">Miami, Florida 🌴</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision / Valores / Enfoque */}
      <section className="py-20" style={{ background: "#5A634F" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Lo que nos mueve</h2>
              <p className="text-white/50 max-w-md mx-auto">Tres pilares que guían cada decisión en Insside.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                title: "Nuestra Visión",
                body: "Soñamos con un mundo donde todas las personas tengan acceso a herramientas efectivas y acompañamiento en su proceso de transformación. Un bienestar al alcance de todos, sin complicaciones.",
              },
              {
                icon: "◎",
                title: "Nuestro Enfoque",
                body: "Conectamos a cada persona con el especialista ideal para su proceso, abordando al ser de forma integral —mente, cuerpo y energía— en un espacio accesible, seguro y profundamente personalizado.",
              },
              {
                icon: "✦",
                title: "Nuestros Valores",
                body: "Integridad, compromiso, servicio, respeto y empatía. Cada interacción en Insside está basada en una conexión genuina y consciente, donde el cuidado del otro es el centro.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl p-7 h-full"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-3xl text-[#B5BC8F] mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="py-20" style={{ background: "#FDFBF8" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <FadeIn className="text-center mb-14">
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">Las personas detrás</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262525]">Somos Adriana y Stephani</h2>
            <p className="text-[#6b6b6b] mt-3 max-w-md mx-auto text-sm">Dos mujeres con una misión compartida: brindarte herramientas para que descubras tu mejor versión.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.15}>
                <div className="group rounded-3xl overflow-hidden border border-[#EDE7E1] bg-white hover:border-[#B5BC8F]/40 transition-all"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0" style={{ background: `${member.color}15` }} />
                    <Image src={member.photo} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-bold text-xl">{member.name}</p>
                      <p className="text-white/70 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex items-center gap-2 text-xs text-[#5A634F] font-semibold">
                      <span className="text-base">📸</span>
                      {member.instagram}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20" style={{ background: "#EDE7E1" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#262525] mb-3">Nuestros valores</h2>
            <p className="text-[#6b6b6b] text-sm">Lo que creemos, en práctica.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALORES.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.08}>
                <motion.div
                  className="bg-white rounded-2xl p-6 border border-[#D9E5DB]"
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                >
                  <div className="text-2xl text-[#5A634F] mb-3 font-bold">{v.icon}</div>
                  <h3 className="text-[#262525] font-bold text-base mb-2">{v.name}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t border-[#EDE7E1]" style={{ background: "#FDFBF8" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <FadeIn className="text-center mb-10">
            <p className="text-[#9a9a9a] text-sm uppercase tracking-widest font-semibold">Nos acompañan</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {PARTNERS.map((p) => (
              <div key={p.name} className="relative h-8 w-24 grayscale hover:grayscale-0 hover:opacity-100 opacity-70 transition-all">
                <Image src={p.src} alt={p.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: "#5A634F" }}>
        <div className="max-w-xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-3">¿Lista para empezar?</p>
            <h2 className="text-3xl font-bold text-white mb-4">Tu bienestar es nuestra misión.</h2>
            <p className="text-white/60 text-sm mb-8">Primera sesión exploratoria gratuita. Sin compromisos.</p>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#5A634F] font-bold px-8 py-4 rounded-xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Agenda tu primera sesión →
            </motion.a>
          </FadeIn>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
