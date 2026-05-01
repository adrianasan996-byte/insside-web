"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const PASOS = [
  {
    num: "01", step: "Explora",  title: "¿Dónde está el ruido?",
    desc: "Un diagnóstico breve que identifica en qué dimensión está tu desequilibrio.",
  },
  {
    num: "02", step: "Conecta",  title: "El especialista correcto.",
    desc: "Sin búsqueda, sin confusión. Te conectamos con quien realmente necesitas.",
  },
  {
    num: "03", step: "Avanza",   title: "Tu transformación, integrada.",
    desc: "Seguimiento dentro de la plataforma con un enfoque holístico real.",
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

  return (
    <section ref={sectionRef} className="py-8 overflow-hidden relative" style={{ background: "transparent" }}>
      <div className="max-w-screen-2xl mx-auto px-12">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "#f2ede6" }}>

          {/* Uniform padding on all sides */}
          <div className="relative z-10 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-10 items-center">

              {/* ── LEFT — shifted right via pl ── */}
              <div className="pl-6">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-3"
                  initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                  <span style={{ color: "#E3812F" }}>¿Cómo funciona </span>
                  <span className="text-[#262525]">Insside?</span>
                </motion.h2>

                <motion.p
                  className="text-[#6b6b6b] text-base mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.09 }}>
                  No tienes que saber qué especialista necesitas.<br />
                  Nosotros te ayudamos a descubrirlo.
                </motion.p>

                {/* Steps */}
                <div className="flex flex-col">
                  {PASOS.map((p, i) => (
                    <motion.div key={p.num}
                      initial={{ opacity: 0, x: -18 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.18 + i * 0.12 }}>
                      {/* Divider line — doesn't reach full width */}
                      {i > 0 && <div className="border-t border-[#262525]/10 my-4 mr-12" />}
                      <div className="flex gap-4 items-start">
                        <span className="flex-shrink-0 bg-[#262525]/8 text-[#262525] text-xs font-bold px-3 py-1 rounded-full mt-0.5">{p.num}</span>
                        <div>
                          <p className="text-[#262525] font-semibold text-base">
                            {p.step}{" "}<span className="text-[#262525]/30 mx-1">•</span>{" "}<span style={{ color: "#AB6139" }}>{p.title}</span>
                          </p>
                          <p className="text-[#6b6b6b] text-sm mt-1">{p.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="mt-8"
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}>
                  <motion.a
                    href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#5A634F] text-white font-semibold px-8 py-3 rounded-xl text-sm"
                    whileHover={{ scale: 1.03, backgroundColor: "#4A5540" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    Comienza Hoy
                  </motion.a>
                </motion.div>
              </div>

              {/* ── RIGHT — photo, slight zoom (object-cover), full group visible ── */}
              <motion.div className="relative"
                initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
                <div className="relative rounded-2xl overflow-hidden w-full shadow-2xl" style={{ minHeight: "390px" }}>
                  <img
                    src="/equipo/DSC01121.jpg"
                    alt="Equipo Insside"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transform: "scale(1.04)" }}
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
