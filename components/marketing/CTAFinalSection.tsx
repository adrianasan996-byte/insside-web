"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const WHATSAPP = "https://wa.me/17866356816";

export default function CTAFinalSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-6 px-12" style={{ background: "transparent" }}>
      <div className="max-w-screen-2xl mx-auto">

        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{ background: "#5A634F" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Wavy pattern overlay — low opacity so dark green shows through */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url(/fondo-lineas-web.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "multiply" as const,
              opacity: 0.55,
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[176px_1fr_176px] items-end min-h-[300px]">

            {/* Left spacer */}
            <div className="hidden lg:block" />

            {/* Center — text + button */}
            <div className="flex flex-col items-center text-center px-8 py-14">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-7"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <span className="text-white">Escríbenos.<br /></span>
                <span style={{ color: "#B5BC8F" }}>Te guiamos desde el primer mensaje.</span>
              </motion.h2>

              <motion.div className="flex flex-col items-center"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white text-[#5A634F] font-bold px-7 py-3.5 rounded-xl text-sm"
                  whileHover={{ scale: 1.04, backgroundColor: "#EDE7E1" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
                </motion.a>
                <p className="text-white/40 text-xs mt-3">Respondemos en menos de 24 horas.</p>
              </motion.div>
            </div>

            {/* Right — illustration white, bottom-anchored */}
            <motion.div
              className="hidden lg:flex items-end justify-center pb-0 pr-6"
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-40 h-56">
                <Image
                  src="/ilustraciones/PersonajeCelular.png"
                  alt=""
                  fill
                  className="object-contain object-bottom"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
