"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_BASE = "https://wa.me/17866356816?text=";

const SITUACIONES = [
  "Ansiedad, estrés o sobrecarga emocional",
  "Problemas en mis relaciones o vínculos",
  "No encuentro propósito ni dirección",
  "Mi relación con la comida o mi cuerpo",
  "No logro mantener hábitos ni constancia",
  "Mi relación de pareja está en un momento difícil",
  "No sé bien lo que me pasa",
];

const URGENCIA = [
  { label: "Lo antes posible", result: "esta semana" },
  { label: "Esta semana", result: "esta semana" },
  { label: "En los próximos días", result: "pronto" },
  { label: "Sin apuro, cuando pueda", result: "cuando estés listo" },
];

const TIPO_APOYO = [
  "Psicología individual",
  "Psicología de pareja",
  "Life Coaching",
  "Health Coaching",
  "Nutrición",
];


const PAISES = [
  { code: "US", dial: "+1",   flag: "🇺🇸" },
  { code: "MX", dial: "+52",  flag: "🇲🇽" },
  { code: "CO", dial: "+57",  flag: "🇨🇴" },
  { code: "AR", dial: "+54",  flag: "🇦🇷" },
  { code: "CL", dial: "+56",  flag: "🇨🇱" },
  { code: "PE", dial: "+51",  flag: "🇵🇪" },
  { code: "VE", dial: "+58",  flag: "🇻🇪" },
  { code: "EC", dial: "+593", flag: "🇪🇨" },
  { code: "BO", dial: "+591", flag: "🇧🇴" },
  { code: "PY", dial: "+595", flag: "🇵🇾" },
  { code: "UY", dial: "+598", flag: "🇺🇾" },
  { code: "ES", dial: "+34",  flag: "🇪🇸" },
  { code: "CR", dial: "+506", flag: "🇨🇷" },
  { code: "PA", dial: "+507", flag: "🇵🇦" },
  { code: "DO", dial: "+1",   flag: "🇩🇴" },
  { code: "GT", dial: "+502", flag: "🇬🇹" },
];
const ROTATING_WORDS = ["psicología.", "coaching.", "nutrición.", "ti."];

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const word = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (charIdx < word.length) {
        t = setTimeout(() => { setDisplay(word.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 72);
      } else {
        t = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("deleting"), 0);
    } else {
      if (charIdx > 0) {
        t = setTimeout(() => { setDisplay(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 32);
      } else {
        const next = (wordIdx + 1) % words.length;
        setWordIdx(next);
        setCharIdx(0);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [phase, charIdx, wordIdx, words]);

  return { display, phase };
}

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235A634F' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

const selectBase = "w-full h-full pl-4 pr-10 py-4 text-sm text-[#262525] bg-transparent focus:outline-none appearance-none cursor-pointer";

export default function HeroSection() {
  const [tab, setTab] = useState<1 | 2>(1);

  // Tab 1
  const [situacion1, setSituacion1] = useState("");
  const [urgencia1, setUrgencia1] = useState("");
  const [modal, setModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [paisCodigo, setPaisCodigo] = useState("+1");
  const [sent, setSent] = useState(false);

  // Tab 2
  const [tipoApoyo, setTipoApoyo] = useState("");
  const [situacion2, setSituacion2] = useState("");
  const [urgencia2, setUrgencia2] = useState("");
  const [matchState, setMatchState] = useState(false);
  const [email, setEmail] = useState("");

  const { display, phase } = useTypewriter(ROTATING_WORDS);

  function handleContacto(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, soy ${nombre}.\n` +
      `Correo: ${correo}\n` +
      `Situación: ${situacion1 || "No especificada"}\n` +
      `Cuándo necesita ayuda: ${urgencia1 || "No especificado"}\n` +
      `WhatsApp: ${paisCodigo} ${telefono}\n` +
      `Quiero que me contacten.`
    );
    window.open(WHATSAPP_BASE + msg, "_blank");
    setSent(true);
  }

  function handleVerEspecialistas(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, busco ${tipoApoyo || "apoyo"} para: ${situacion2 || "una situación que quiero conversar"}.\n` +
      `Quiero empezar: ${urgencia2 || "pronto"}\n` +
      `Email: ${email}`
    );
    window.open(WHATSAPP_BASE + msg, "_blank");
  }

  const urgenciaResult = URGENCIA.find(u => u.label === urgencia2)?.result || "pronto";

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">

      {/* Background photo with brand treatment */}
      <div className="absolute inset-0">
        <img
          src="/hero-photo-brand.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ display: "block" }}
        />
        {/* Gradient overlay: dark top for text + subtle vignette */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(20,28,18,0.42) 0%, rgba(20,28,18,0.25) 45%, rgba(20,28,18,0.45) 100%)"
        }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-12 pt-28 pb-20 text-center w-full">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-2">
            No estás en crisis.
          </h1>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D9E5DB] leading-[1.08] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
Pero tampoco estás bien.
          </motion.h1>
        </motion.div>

        {/* Typewriter subheadline */}
        <motion.p
          className="text-base sm:text-lg text-white/70 mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Especialistas en{" "}
          <motion.span
            className="font-bold text-white px-3 py-0.5 rounded-full inline-block"
            style={{ background: "rgba(90,99,79,0.85)", backdropFilter: "blur(6px)", border: "1px solid rgba(181,188,143,0.35)" }}
          >
            {display}
            <motion.span
              className="inline-block w-[2px] h-[0.8em] bg-white/70 ml-[2px] align-middle rounded-sm"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          </motion.span>
          {" "}En español, desde donde estés.
        </motion.p>

        {/* Tabs — glassmorphic */}
        <motion.div
          className="inline-flex rounded-xl p-1 mb-6"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {[
            { id: 1 as const, label: "Necesito dirección" },
            { id: 2 as const, label: "Ya sé lo que busco" },
          ].map((t) => (
            <motion.button
              key={t.id}
              onClick={() => { setTab(t.id); setMatchState(false); }}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                tab === t.id ? "text-white" : "text-white/60 hover:text-white/90"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {tab === t.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#B5BC8F] rounded-lg shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {tab === 1 ? (
            <motion.div
              key="tab1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <p className="text-sm text-white/55">
                Para quien sabe que algo no está bien, pero no sabe por dónde empezar.
              </p>
              <motion.div
                className="rounded-2xl flex items-stretch overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex-1 border-r border-[#EDE7E1] min-w-0">
                  <select
                    value={situacion1}
                    onChange={(e) => setSituacion1(e.target.value)}
                    className={selectBase}
                    style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                  >
                    <option value="" disabled>¿Qué situación te describe mejor?</option>
                    {SITUACIONES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div className="flex-1 border-r border-[#EDE7E1] min-w-0">
                  <select
                    value={urgencia1}
                    onChange={(e) => setUrgencia1(e.target.value)}
                    className={selectBase}
                    style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                  >
                    <option value="" disabled>¿Qué tan pronto deseas ayuda?</option>
                    {URGENCIA.map((u) => <option key={u.label} value={u.label}>{u.label}</option>)}
                  </select>
                </div>
                <div className="px-3 py-2.5 flex items-center shrink-0">
                  <motion.button
                    onClick={() => setModal(true)}
                    className="bg-[#5A634F] text-white font-semibold px-6 py-3 rounded-xl whitespace-nowrap text-sm"
                    whileHover={{ scale: 1.03, backgroundColor: "#4A5540" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    Enviar solicitud →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="tab2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              <p className="text-sm text-white/55">
                Tienes claridad. Elige directamente lo que necesitas.
              </p>
              <motion.div
                className="rounded-2xl flex items-stretch overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex-1 border-r border-[#EDE7E1] min-w-0">
                  <select
                    value={tipoApoyo}
                    onChange={(e) => setTipoApoyo(e.target.value)}
                    className={selectBase}
                    style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                  >
                    <option value="" disabled>Tipo de apoyo</option>
                    {TIPO_APOYO.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="flex-1 border-r border-[#EDE7E1] min-w-0">
                  <select
                    value={situacion2}
                    onChange={(e) => setSituacion2(e.target.value)}
                    className={selectBase}
                    style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                  >
                    <option value="" disabled>¿Qué está pasando?</option>
                    {SITUACIONES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div className="flex-1 border-r border-[#EDE7E1] min-w-0">
                  <select
                    value={urgencia2}
                    onChange={(e) => setUrgencia2(e.target.value)}
                    className={selectBase}
                    style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}
                  >
                    <option value="" disabled>¿Cuándo empezar?</option>
                    {URGENCIA.map((u) => <option key={u.label} value={u.label}>{u.label}</option>)}
                  </select>
                </div>
                <div className="px-3 py-2.5 flex items-center shrink-0">
                  <motion.button
                    onClick={() => setMatchState(true)}
                    className="bg-[#5A634F] text-white font-semibold px-5 py-3 rounded-xl whitespace-nowrap text-sm"
                    whileHover={{ scale: 1.03, backgroundColor: "#4A5540" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    Explorar →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

            {/* Match modal — Tab 2 */}
      <AnimatePresence>
        {matchState && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) { setMatchState(false); } }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {/* Stacked avatars */}
              <div className="flex justify-center mb-5">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format",
                    "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&h=80&fit=crop&auto=format",
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                      initial={{ opacity: 0, x: -12, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1">
                Casi listo — último paso
              </p>
              <h3 className="text-xl font-bold text-[#262525] mb-1">
                Encontramos especialistas para ti
              </h3>
              <p className="text-sm text-[#6b6b6b] mb-6">
                {tipoApoyo || "Especialistas"} disponibles{" "}
                <span className="font-semibold text-[#5A634F]">{urgenciaResult}</span>.{" "}
                Ingresa tu correo para ver tu selección.
              </p>

              <form onSubmit={handleVerEspecialistas} className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-[#D9E5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/30"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-[#5A634F] text-white font-semibold py-3 rounded-xl text-sm"
                  whileHover={{ scale: 1.02, backgroundColor: "#4A5540" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver mis especialistas →
                </motion.button>
              </form>

              <button
                onClick={() => setMatchState(false)}
                className="w-full text-xs text-[#9a9a9a] mt-4 hover:text-[#5A634F] transition-colors"
              >
                ← Cambiar mi búsqueda
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact modal — Tab 1 */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) { setModal(false); setSent(false); } }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              {sent ? (
                <motion.div className="text-center space-y-3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                  <motion.div className="text-5xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 0.5 }}>✓</motion.div>
                  <h3 className="text-xl font-bold text-[#262525]">Recibido.</h3>
                  <p className="text-[#6b6b6b] text-sm">Te escribimos en menos de 24 horas.</p>
                  <button onClick={() => { setModal(false); setSent(false); }} className="w-full bg-[#5A634F] text-white font-semibold py-3 rounded-xl mt-2">Cerrar</button>
                </motion.div>
              ) : (
                <form onSubmit={handleContacto} className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#262525] mb-1">Cuéntanos dónde estás.</h3>
                    <p className="text-sm text-[#6b6b6b]">Te orientamos y conectamos con el especialista correcto. Sin costo, sin compromiso.</p>
                  </div>
                  {(situacion1 || urgencia1) && (
                    <div className="bg-[#F5F0EB] rounded-xl p-3 space-y-1 text-left">
                      {situacion1 && <p className="text-xs text-[#5A634F]"><span className="font-semibold">Situación:</span> {situacion1}</p>}
                      {urgencia1 && <p className="text-xs text-[#5A634F]"><span className="font-semibold">Cuándo:</span> {urgencia1}</p>}
                    </div>
                  )}
                  <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="w-full border border-[#D9E5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/30" />
                  <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required className="w-full border border-[#D9E5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/30" />
                  <div className="flex gap-2">
                    <select
                      value={paisCodigo}
                      onChange={(e) => setPaisCodigo(e.target.value)}
                      className="border border-[#D9E5DB] rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/30 bg-white shrink-0 w-28"
                    >
                      {PAISES.map((p) => (
                        <option key={p.code} value={p.dial}>{p.flag} {p.dial}</option>
                      ))}
                    </select>
                    <input type="tel" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="flex-1 border border-[#D9E5DB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/30 min-w-0" />
                  </div>
                  <motion.button type="submit" className="w-full bg-[#5A634F] text-white font-semibold py-3 rounded-xl" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Enviar solicitud →
                  </motion.button>
                  <p className="text-xs text-center text-[#9a9a9a]">Te escribimos en menos de 24 horas.</p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
