"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const PASOS = [
  {
    num: "01",
    title: "Entender",
    subtitle: "Antes de hablar de soluciones, entendemos qué estás atravesando realmente.",
    desc: "No solo lo que sientes hoy, sino también cómo estás viviendo, qué te está agotando y qué patrones se vienen repitiendo en tu vida.",
  },
  {
    num: "02",
    title: "Identificar",
    subtitle: "Muchas veces el problema no es solo el síntoma, es lo que lo sostiene.",
    desc: "Aquí buscamos entender de dónde viene lo que estás viviendo y cómo eso impacta distintas áreas de tu vida.",
  },
  {
    num: "03",
    title: "Dar dirección",
    subtitle: "No creemos en procesos genéricos.",
    desc: "Junto a ti, construimos claridad sobre lo que necesitas, hacia dónde quieres ir y cómo se ve sentirte mejor en tu vida real.",
  },
  {
    num: "04",
    title: "Acompañar",
    subtitle: "Empieza el trabajo real.",
    desc: "Herramientas, conversaciones y acciones adaptadas a ti, a tu proceso y al momento que estás atravesando.",
  },
  {
    num: "05",
    title: "Integrar",
    subtitle: "El objetivo no es sentir alivio solo durante una sesión.",
    desc: "Es que lo que descubras y trabajes pueda sostenerse en tu día a día, en tus relaciones y en la forma en la que vives tu vida.",
  },
];

const MSGS = [
  { from: "user",    name: "Sofía M.",  text: "Hola! Busco ayuda con mi ansiedad 😔" },
  { from: "insside", name: "insside",   text: "¡Hola! Cuéntanos más 🌿" },
  { from: "user",    name: "Carlos R.", text: "Salí de mi sesión... ¡fue increíble! 🙏" },
  { from: "insside", name: "insside",   text: "Encontramos al especialista ideal ✨" },
  { from: "user",    name: "María V.",  text: "Después de 3 meses soy yo misma otra vez" },
  { from: "insside", name: "insside",   text: "Te conectamos sin lista de espera ⚡" },
  { from: "user",    name: "Ana P.",    text: "¿Primera sesión gratis de verdad? 🙌" },
  { from: "insside", name: "insside",   text: "Sí, sin compromiso. Escríbenos 💬" },
];

const WHATSAPP = "https://wa.me/17866356816";

let _uid = 0;
const uid  = () => ++_uid;
const rand = (lo: number, hi: number) => Math.random() * (hi - lo) + lo;

interface Bubble { id: number; msgIdx: number; left: number; dur: number }

function ChatBubblesFloat({ active }: { active: boolean }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const msgIdxRef = useRef(0);
  const schedRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (document.getElementById("bubble-kf3")) return;
    const s = document.createElement("style");
    s.id = "bubble-kf3";
    s.textContent = `
      @keyframes bubbleRise3 {
        0%   { transform: translateY(0);      opacity: 0; }
        8%   { opacity: 1; }
        80%  { opacity: 1; }
        100% { transform: translateY(-560px); opacity: 0; }
      }
    `;
    document.head.appendChild(s);
  }, []);

  const spawn = useCallback(() => {
    const id     = uid();
    const msgIdx = msgIdxRef.current % MSGS.length;
    msgIdxRef.current++;
    const msg  = MSGS[msgIdx];
    const dur  = rand(9, 12);
    const left = msg.from === "user" ? rand(4, 8) : rand(44, 50);
    setBubbles(prev => {
      const trimmed = prev.length >= 6 ? prev.slice(1) : prev;
      return [...trimmed, { id, msgIdx, left, dur }];
    });
    setTimeout(() => setBubbles(prev => prev.filter(b => b.id !== id)), dur * 1000 + 300);
  }, []);

  const scheduleNext = useCallback(() => {
    schedRef.current = setTimeout(() => {
      spawn();
      scheduleNext();
    }, rand(1400, 2000));
  }, [spawn]);

  useEffect(() => {
    if (!active) return;
    const t0 = setTimeout(spawn,          300);
    const t1 = setTimeout(spawn,         1200);
    const t2 = setTimeout(scheduleNext,  2300);
    return () => {
      clearTimeout(t0); clearTimeout(t1); clearTimeout(t2);
      if (schedRef.current) clearTimeout(schedRef.current);
      setBubbles([]);
    };
  }, [active, spawn, scheduleNext]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {bubbles.map(b => {
        const msg    = MSGS[b.msgIdx];
        const isUser = msg.from === "user";
        return (
          <div key={b.id} style={{
            position:  "absolute",
            bottom:    "-90px",
            left:      `${b.left}%`,
            maxWidth:  "185px",
            animation: `bubbleRise3 ${b.dur}s ease-in-out forwards`,
          }}>
            <div style={{
              fontSize: "10px", fontWeight: 700,
              color: isUser ? "rgba(255,255,255,0.7)" : "#B5BC8F",
              marginBottom: "3px", paddingLeft: "4px",
            }}>
              {msg.name}
            </div>
            <div style={{
              background:   isUser ? "#ffffff" : "#25573a",
              color:        isUser ? "#1a1a1a" : "#ffffff",
              borderRadius: isUser ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
              padding:      "9px 12px",
              fontSize:     "12.5px",
              lineHeight:   1.45,
              boxShadow:    "0 2px 14px rgba(0,0,0,0.28)",
            }}>
              {msg.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ComoFuncionaSection() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: false, margin: "-60px" });
  const [open, setOpen] = useState(0);

  return (
    <section ref={sectionRef} className="py-8 overflow-hidden relative" style={{ background: "transparent" }}>
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-12">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "#f2ede6" }}>

          <div className="relative z-10 p-6 pt-10 sm:p-12 sm:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-10 items-start">

              {/* ── LEFT ── */}
              <div className="sm:pl-6">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-3 text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">¿Cómo funciona Insside?</span>
                </motion.h2>

                <motion.p
                  className="text-[#6b6b6b] text-base mb-6 leading-relaxed text-center lg:text-left"
                  initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.09 }}>
                  Esto es lo que te espera en cada sesión.
                </motion.p>

                {/* Accordion */}
                <div className="flex flex-col">
                  {PASOS.map((p, i) => {
                    const isOpen = open === i;
                    return (
                      <motion.div
                        key={p.num}
                        initial={{ opacity: 0, x: -18 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.18 + i * 0.1 }}
                      >
                        {/* Divider */}
                        {i > 0 && <div className="border-t border-[#262525]/10" />}

                        {/* Header row — always visible, clickable */}
                        <button
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          className="w-full flex items-center gap-3 py-3.5 text-left group"
                        >
                          {/* Number badge */}
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-300"
                            style={{
                              background: isOpen ? "#5A634F" : "rgba(38,37,37,0.08)",
                              color: isOpen ? "#fff" : "rgba(38,37,37,0.45)",
                            }}
                          >
                            {p.num}
                          </span>

                          {/* Title */}
                          <span
                            className="flex-1 font-semibold text-sm sm:text-base transition-colors duration-200"
                            style={{ color: isOpen ? "#262525" : "rgba(38,37,37,0.6)" }}
                          >
                            {p.title}
                          </span>

                          {/* Chevron */}
                          <motion.svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke={isOpen ? "#5A634F" : "#9a9a9a"} strokeWidth="2.5"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex-shrink-0"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </motion.svg>
                        </button>

                        {/* Expandable content */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div
                                className="ml-10 mb-4 pl-4 border-l-2"
                                style={{ borderColor: "#B5BC8F" }}
                              >
                                <p className="text-[#262525] font-medium text-sm leading-relaxed mb-1">
                                  {p.subtitle}
                                </p>
                                <p className="text-[#6b6b6b] text-sm leading-relaxed">
                                  {p.desc}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                  {/* Bottom divider */}
                  <div className="border-t border-[#262525]/10" />
                </div>

                <motion.div className="mt-6 sm:mt-8 flex lg:block justify-center"
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}>
                  <motion.a
                    href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#5A634F] text-white font-semibold px-8 py-3 rounded-xl text-sm"
                    whileHover={{ scale: 1.03, backgroundColor: "#4A5540" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    Quiero empezar →
                  </motion.a>
                </motion.div>
              </div>

              {/* ── RIGHT — photo + chat bubbles ── */}
              <motion.div className="relative"
                initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
                <div className="relative rounded-2xl overflow-hidden w-full shadow-2xl aspect-[4/3] sm:aspect-auto sm:min-h-[390px]">
                  <img
                    src="/equipo/DSC01121.jpg"
                    alt="Equipo Insside"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "center 30%", transform: "scale(1.1)" }}
                  />
                  <ChatBubblesFloat active={inView} />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
