"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Correct photo ↔ name mapping (verified against insside.co):
// esp-1.jpg = Barbara Serrano  |  esp-2.png = Valentina Tello
// esp-3.png = Luisa Reyes      |  esp-4.png = Blanca Vazquez
// esp-5.jpg = Paty Romero      |  esp-6.png = Steph De Gregorio
const ESPECIALISTAS = [
  {
    nombre: "Valentina Tello",
    especialidad: "Psicóloga",
    temas: ["Ansiedad sin causa aparente", "Relaciones que se repiten"],
    foto: "/especialistas/esp-2.png",
  },
  {
    nombre: "Malena Lum",
    especialidad: "Health Coach",
    temas: ["Energía y cansancio crónico", "Hábitos que no duran"],
    foto: "https://cdn.prod.website-files.com/67ee7a27c1f4ea3577ad0f2f/68271d14045e4a08ecb4b9d1_PHOTO-2025-05-14-09-46-31%20copy.png79.png",
  },
  {
    nombre: "Barbara Serrano",
    especialidad: "Life Coach",
    temas: ["Claridad sobre el siguiente paso", "Confianza y autosabotaje"],
    foto: "/especialistas/esp-1.jpg",
  },
  {
    nombre: "Blanca Vazquez",
    especialidad: "Nutricionista",
    temas: ["Relación emocional con la comida", "Hábitos alimentarios sostenibles"],
    foto: "/especialistas/esp-4.png",
  },
  {
    nombre: "Luisa Reyes",
    especialidad: "Psicóloga",
    temas: ["Pareja y vínculos afectivos", "Ansiedad y estrés laboral"],
    foto: "/especialistas/esp-3.png",
  },
  {
    nombre: "Steph De Gregorio",
    especialidad: "Life Coach",
    temas: ["Propósito y dirección", "Transiciones de vida"],
    foto: "/especialistas/esp-6.png",
  },
];

function GlassCard({ esp, index, visible }: { esp: typeof ESPECIALISTAS[0]; index: number; visible: boolean }) {
  return (
    <motion.a
      href="/profesionales-main"
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex-shrink-0 w-[280px] h-[400px] rounded-3xl overflow-hidden cursor-pointer block"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
    >
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <Image
          src={esp.foto}
          alt={esp.nombre}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="280px"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 20%, rgba(15,22,12,0.5) 55%, rgba(15,22,12,0.88) 100%)"
        }}
      />

      {/* Badge — top */}
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold text-white/90 tracking-wide"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B5BC8F] inline-block" />
          Seleccionado por Insside
        </div>
      </div>

      {/* Glass info panel — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 p-5"
        style={{
          background: "rgba(12, 20, 10, 0.52)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderTop: "1px solid rgba(90,99,79,0.15)",
        }}
      >
        <p className="text-[#B5BC8F] text-[11px] font-semibold uppercase tracking-widest mb-0.5">
          {esp.especialidad}
        </p>
        <h3 className="text-white font-bold text-lg leading-tight mb-3">
          {esp.nombre}
        </h3>

        <div className="space-y-1.5">
          {esp.temas.map((tema) => (
            <div key={tema} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#B5BC8F] shrink-0" />
              <span className="text-white/70 text-[12px] leading-snug">{tema}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function EspecialistasSection() {
  const titleRef = useRef(null);
  const visible = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="pt-0 pb-10 overflow-hidden relative"
      style={{ background: "#f2ede6" }}
    >
      {/* Peak divider */}
      <div className="w-full overflow-hidden leading-none" style={{ marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
          <path d="M0,0 L720,72 L1440,0 L1440,0 L0,0 Z" fill="#FDFBF8" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(181,188,143,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(227,129,47,0.06) 0%, transparent 70%)" }} />

      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-12 pt-10 mb-16">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#262525] mb-3 leading-tight text-center">
                Elegidos con criterio.<br />
                <span style={{ color: "#E3812F" }}>No encontrados en un directorio.</span>
              </h2>
              <p className="text-[#6b6b6b] text-base max-w-lg">
                Cada especialista pasó por un proceso de selección. Lo que ves en su perfil es lo que recibes en sesión.
              </p>
            </div>
            <motion.a
              href="/profesionales-main"
              className="hidden md:flex items-center gap-2 shrink-0 text-sm font-semibold text-[#B5BC8F] border border-[#B5BC8F]/30 px-5 py-2.5 rounded-xl whitespace-nowrap"
              whileHover={{ backgroundColor: "rgba(181,188,143,0.12)", borderColor: "rgba(181,188,143,0.5)" }}
            >
              Ver todos →
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Native scroll carousel */}
      <div
        className="scrollbar-hide flex gap-5 px-12 pb-4"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {ESPECIALISTAS.map((e, i) => (
          <div key={e.nombre} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
            <GlassCard esp={e} index={i} visible={visible} />
          </div>
        ))}
        {/* trailing spacer so last card doesn't sit flush at edge */}
        <div className="flex-shrink-0 w-8" />
      </div>

      <motion.p
        className="text-center text-[#5A634F]/40 text-xs mt-6 tracking-wider"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        ← Desliza para explorar →
      </motion.p>
    </section>
  );
}
