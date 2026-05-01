"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP = "https://wa.me/17866356816";

export default function PreciosSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-10 relative" style={{ background: "transparent" }}>
      <div className="max-w-screen-2xl mx-auto px-12">

        {/* Header — centered */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#262525] leading-tight">
            Simple y <span style={{ color: "#E3812F" }}>accesible.</span>
          </h2>
        </motion.div>

        {/* Grid: 1 large left + 2 stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-3 max-w-5xl mx-auto">

          {/* Large card — Individual session */}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-7 min-h-[320px] group"
            style={{ background: "#5A634F" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: "url('/equipo/fondo-16.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.25,
            }} />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-block text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-3">Más elegido</span>
                <h3 className="text-white font-bold text-xl mb-2">Sesión individual</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                  60 minutos con el especialista indicado para trabajar en tus objetivos.
                </p>
              </div>
              <div>
                <div className="mb-4">
                  <span className="text-white font-bold text-3xl">Desde $57</span>
                  <p className="text-white/45 text-xs mt-1">USD por sesión · el precio varía según la especialidad</p>
                </div>
                <span className="inline-flex items-center gap-2 bg-white text-[#5A634F] font-semibold px-5 py-2.5 rounded-xl text-sm group-hover:bg-[#EDE7E1] transition-colors">
                  Reservar sesión →
                </span>
              </div>
            </div>
          </motion.a>

          {/* Right column */}
          <div className="flex flex-col gap-3">

            {/* Exploratoria */}
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-5 flex-1 group"
              style={{ background: "#f2ede6" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <h3 className="font-bold text-[#262525] text-sm mb-1">Sesión exploratoria</h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed">Esta sesión es para conocer al especialista y alinear expectativas.</p>
              </div>
              <div className="flex items-end justify-between mt-3">
                <div>
                  <span className="text-[#262525] font-bold text-xl">$25</span>
                  <p className="text-[#9a9a9a] text-[11px] mt-0.5">USD · sesión única</p>
                </div>
                <span className="text-[#5A634F] text-xs font-semibold group-hover:translate-x-1 transition-transform">Agendar →</span>
              </div>
            </motion.a>

            {/* Paquete 4 */}
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-5 flex-1 group"
              style={{ background: "#D9E5DB" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.26 }}
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <h3 className="font-bold text-[#262525] text-sm mb-1">Paquete de 4 sesiones</h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed">Continuidad real. El precio varía según la especialidad.</p>
              </div>
              <div className="flex items-end justify-between mt-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#262525] font-bold text-xl">Desde $219</span>
                    <span className="text-[#9a9a9a] text-sm line-through">$228</span>
                  </div>
                  <p className="text-[#9a9a9a] text-[11px] mt-0.5">desde $54/sesión · ahorras $9</p>
                </div>
                <span className="text-[#5A634F] text-xs font-semibold group-hover:translate-x-1 transition-transform">Ver opciones →</span>
              </div>
            </motion.a>

          </div>
        </div>

        {/* Payment methods */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 text-sm text-[#9a9a9a] mt-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <span>Aceptamos</span>
          <span className="text-[#5A634F]/30">·</span>
          {["Tarjeta de Crédito", "PayPal", "Zelle", "Binance"].map((m, i, arr) => (
            <span key={m} className="flex items-center gap-2">
              <span className="font-medium text-[#5A634F]">{m}</span>
              {i < arr.length - 1 && <span className="text-[#5A634F]/30">·</span>}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
