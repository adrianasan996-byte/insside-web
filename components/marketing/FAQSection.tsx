"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "¿Qué es Insside?",
    a: "Una plataforma que conecta personas con especialistas en Psicología, Coaching, Nutrición y más — con enfoque integral.",
  },
  {
    q: "¿Cómo funcionan las sesiones?",
    a: "Son virtuales. Eliges especialista, fecha y pagas en la plataforma. Te llega un link por correo para el día de tu sesión.",
  },
  {
    q: "¿Quiénes son los especialistas?",
    a: "Profesionales seleccionados por experiencia y compromiso. Cada uno pasó por un proceso de revisión antes de estar disponible.",
  },
  {
    q: "¿Puedo combinar servicios?",
    a: "Sí. Puedes trabajar con distintos especialistas en paralelo para abordar tu bienestar desde todos los ángulos.",
  },
  {
    q: "¿Cómo se paga?",
    a: "De forma segura en la plataforma. Al agendar, eliges entre diferentes métodos de pago.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16" style={{ background: "#FDFBF8" }}>
      <div className="max-w-screen-2xl mx-auto px-12">

        <h2 className="text-5xl font-bold text-[#262525] mb-10">FAQs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setOpen(open === i ? null : i)}
              className="rounded-2xl px-6 py-5 cursor-pointer select-none"
              style={{
                background: open === i ? "#5A634F" : "#fff",
                border: `1px solid ${open === i ? "transparent" : "rgba(90,99,79,0.10)"}`,
                boxShadow: open === i ? "0 8px 32px rgba(90,99,79,0.18)" : "0 2px 8px rgba(90,99,79,0.05)",
              }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className="text-xs font-bold tabular-nums mt-0.5 flex-shrink-0"
                    style={{ color: open === i ? "rgba(181,188,143,0.7)" : "rgba(90,99,79,0.3)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="font-semibold text-sm leading-snug"
                      style={{ color: open === i ? "#fff" : "#262525" }}
                    >
                      {faq.q}
                    </p>
                    <AnimatePresence initial={false}>
                      {open === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="text-xs leading-relaxed mt-2 overflow-hidden"
                          style={{ color: "rgba(255,255,255,0.7)" }}
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-lg font-light leading-none mt-0.5"
                  style={{ color: open === i ? "rgba(181,188,143,0.8)" : "rgba(90,99,79,0.4)" }}
                >
                  +
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
