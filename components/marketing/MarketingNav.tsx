"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const WHATSAPP = "https://wa.me/17866356816";

const SOBRE_ITEMS = [
  { label: "Conócenos", desc: "Quiénes somos y qué nos mueve", href: "/conocenos" },
  { label: "Blog", desc: "Artículos y recursos de bienestar", href: "/blog" },
  { label: "Contacto", desc: "Escríbenos directamente", href: "/contact" },
];

const NAV_LINKS_MOBILE = [
  { label: "Especialistas", href: "/profesionales-main" },
  { label: "Recursos", href: "/recursos" },
  { label: "Conócenos", href: "/conocenos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contact" },
];

const ESPECIALIDADES = [
  "Psicología clínica",
  "Psicología positiva",
  "Coaching de vida",
  "Coaching ejecutivo",
  "Nutrición clínica",
  "Nutrición deportiva",
  "Terapia de pareja",
  "Terapia familiar",
  "Mindfulness y meditación",
  "Human Design",
  "Bienestar integral",
  "Otra especialidad",
];

const MODALIDADES = ["Online", "Presencial", "Híbrida (online y presencial)"];

function EspecialistaModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [confirmado, setConfirmado] = useState(false);
  const [form, setForm] = useState({
    nombre: "", apellido: "", email: "", telefono: "", paisCodigo: "+1",
    especialidad: "", otraEspecialidad: "", modalidad: "", anios: "",
    ciudad: "", pais: "", mensaje: "",
  });

  function set(key: string, val: string) {
    setForm(f => ({ ...f, [key]: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!confirmado) return;
    setLoading(true);
    const esp = form.especialidad === "Otra especialidad" ? form.otraEspecialidad : form.especialidad;
    const text = encodeURIComponent(
      `Hola, quiero aplicar como especialista en Insside.\n\n` +
      `Nombre: ${form.nombre} ${form.apellido}\n` +
      `Email: ${form.email}\n` +
      `Teléfono: ${form.paisCodigo} ${form.telefono}\n` +
      `Especialidad: ${esp}\n` +
      `Modalidad: ${form.modalidad}\n` +
      `Años de experiencia: ${form.anios}\n` +
      `Ubicación: ${form.ciudad}, ${form.pais}\n\n` +
      `${form.mensaje}`
    );
    setTimeout(() => {
      window.open(WHATSAPP + "?text=" + text, "_blank");
      setLoading(false);
      setStep("success");
    }, 600);
  }

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const inputCls = "w-full border border-[#EDE7E1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 focus:border-[#5A634F]/40 transition-all bg-white";
  const labelCls = "block text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1.5";

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60]"
          style={{ background: "rgba(20,28,18,0.6)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
          onClick={onClose}
        />

        {/* Modal panel */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[61] flex flex-col bg-white rounded-t-3xl overflow-hidden"
          style={{ maxHeight: "92vh", boxShadow: "0 -16px 60px rgba(0,0,0,0.20)" }}
          onClick={e => e.stopPropagation()}
        >
          {/* Accent bar */}
          <div className="h-1.5 w-full flex-shrink-0" style={{ background: "linear-gradient(90deg, #B5BC8F, #8B9970)" }} />

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8EDE4] flex-shrink-0">
            <div>
              <p className="text-xs font-bold text-[#8B9970] uppercase tracking-wider mb-0.5">Únete al equipo</p>
              <h3 className="text-lg font-bold text-[#262525]">Aplica como especialista</h3>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#F0F4EC] transition-colors"
              aria-label="Cerrar"
            >
              <X size={18} className="text-[#5A634F]" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <AnimatePresence mode="wait">
              {step === "form" ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 max-w-2xl mx-auto pb-6"
                >
                  {/* Confirmación */}
                  <label className="flex items-start gap-3 p-4 rounded-2xl border border-[#D9E5DB] cursor-pointer hover:bg-[#F5F9F5] transition-colors"
                    style={{ background: confirmado ? "#F0F4EC" : undefined }}>
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={confirmado}
                        onChange={e => setConfirmado(e.target.checked)}
                      />
                      <div className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
                        style={{ borderColor: confirmado ? "#5A634F" : "#B5BC8F", background: confirmado ? "#5A634F" : "white" }}>
                        {confirmado && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#262525]">Soy un profesional certificado / licenciado</p>
                      <p className="text-xs text-[#9a9a9a] mt-0.5">Confirmo que cuento con formación y credenciales en mi área de especialidad.</p>
                    </div>
                  </label>

                  {/* Nombre + Apellido */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Nombre</label>
                      <input type="text" required value={form.nombre} onChange={e => set("nombre", e.target.value)}
                        placeholder="Tu nombre" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Apellido</label>
                      <input type="text" required value={form.apellido} onChange={e => set("apellido", e.target.value)}
                        placeholder="Tu apellido" className={inputCls} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelCls}>Correo electrónico</label>
                    <input type="email" required value={form.email} onChange={e => set("email", e.target.value)}
                      placeholder="tu@correo.com" className={inputCls} />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className={labelCls}>WhatsApp / Teléfono</label>
                    <div className="flex gap-2">
                      <select value={form.paisCodigo} onChange={e => set("paisCodigo", e.target.value)}
                        className="border border-[#EDE7E1] rounded-xl px-3 py-3 text-sm bg-white focus:outline-none shrink-0 w-24 cursor-pointer">
                        {["+1","+52","+57","+54","+56","+51","+58","+34"].map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      <input type="tel" value={form.telefono} onChange={e => set("telefono", e.target.value)}
                        placeholder="Número de teléfono" className={inputCls + " flex-1"} />
                    </div>
                  </div>

                  {/* Especialidad */}
                  <div>
                    <label className={labelCls}>Tipo de especialidad</label>
                    <select required value={form.especialidad} onChange={e => set("especialidad", e.target.value)}
                      className={inputCls + " cursor-pointer"}>
                      <option value="" disabled>Selecciona tu especialidad</option>
                      {ESPECIALIDADES.map(e => <option key={e}>{e}</option>)}
                    </select>
                  </div>

                  {form.especialidad === "Otra especialidad" && (
                    <div>
                      <label className={labelCls}>Describe tu especialidad</label>
                      <input type="text" required value={form.otraEspecialidad} onChange={e => set("otraEspecialidad", e.target.value)}
                        placeholder="Ej: Terapia de duelo, neuropsicología..." className={inputCls} />
                    </div>
                  )}

                  {/* Modalidad + Años */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Modalidad</label>
                      <select required value={form.modalidad} onChange={e => set("modalidad", e.target.value)}
                        className={inputCls + " cursor-pointer"}>
                        <option value="" disabled>Selecciona</option>
                        {MODALIDADES.map(m => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Años de experiencia</label>
                      <select required value={form.anios} onChange={e => set("anios", e.target.value)}
                        className={inputCls + " cursor-pointer"}>
                        <option value="" disabled>Selecciona</option>
                        {["Menos de 1 año","1–2 años","3–5 años","6–10 años","Más de 10 años"].map(a => (
                          <option key={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Ciudad + País */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Ciudad</label>
                      <input type="text" required value={form.ciudad} onChange={e => set("ciudad", e.target.value)}
                        placeholder="Tu ciudad" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>País</label>
                      <input type="text" required value={form.pais} onChange={e => set("pais", e.target.value)}
                        placeholder="Tu país" className={inputCls} />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className={labelCls}>¿Por qué quieres unirte a Insside?</label>
                    <textarea required rows={4} value={form.mensaje} onChange={e => set("mensaje", e.target.value)}
                      placeholder="Cuéntanos sobre tu práctica, tu enfoque y qué te motiva a ser parte de nuestra comunidad..."
                      className={inputCls + " resize-none"} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || !confirmado}
                    className="w-full text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-opacity"
                    style={{ background: "#5A634F" }}
                    whileHover={{ scale: (!loading && confirmado) ? 1.02 : 1 }}
                    whileTap={{ scale: (!loading && confirmado) ? 0.98 : 1 }}
                  >
                    {loading ? (
                      <>
                        <motion.div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                          animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                        Enviando…
                      </>
                    ) : "Enviar mi aplicación →"}
                  </motion.button>

                  <p className="text-center text-xs text-[#9a9a9a]">
                    Revisamos cada aplicación con cuidado. Te respondemos en 3–5 días hábiles.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#F0F4EC" }}
                    animate={{ scale: [0.5, 1.15, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5A634F" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#262525] mb-3">Aplicación enviada</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">
                    Gracias por querer ser parte de Insside. Revisamos tu perfil con cuidado y te escribimos en los próximos días.
                  </p>
                  <button onClick={onClose}
                    className="text-sm text-[#5A634F] font-semibold underline underline-offset-2">
                    Cerrar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}

export default function MarketingNav() {
  const [open, setOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const sobreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.02));
    return unsub;
  }, [scrollYProgress]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (sobreRef.current && !sobreRef.current.contains(e.target as Node)) {
        setSobreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 transition-shadow duration-300"
        style={{ backgroundColor: "#5A634F" }}
        animate={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.18)" : "none" }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E3812F] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-6xl mx-auto px-12 h-16 flex items-center justify-between">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Image
                src="/logos/logo-principal-blanco.png"
                alt="Insside"
                width={120}
                height={32}
                style={{ height: "32px", width: "auto" }}
                priority
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {[
              { label: "Especialistas", href: "/profesionales-main" },
              { label: "Recursos", href: "/recursos" },
            ].map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href={l.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </Link>
              </motion.div>
            ))}

            {/* Sobre Nosotros dropdown */}
            <motion.div
              ref={sobreRef}
              className="relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              <button
                onClick={() => setSobreOpen(!sobreOpen)}
                className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors relative group"
              >
                Sobre Nosotros
                <motion.span animate={{ rotate: sobreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </button>

              <AnimatePresence>
                {sobreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl overflow-hidden shadow-2xl"
                    style={{ background: "#fff", border: "1px solid rgba(90,99,79,0.12)" }}
                  >
                    <div className="p-2">
                      {SOBRE_ITEMS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSobreOpen(false)}
                          className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[#F5F3EF] transition-colors group"
                        >
                          <span className="text-[#262525] font-semibold text-sm group-hover:text-[#5A634F] transition-colors">{item.label}</span>
                          <span className="text-[#9a9a9a] text-xs">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Soy Especialista */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.31 }}
            >
              <button
                onClick={() => setShowModal(true)}
                className="text-[#B5BC8F] hover:text-white text-sm font-semibold transition-colors border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg"
              >
                Soy Especialista
              </button>
            </motion.div>
          </nav>

          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-white text-[#5A634F] text-sm font-semibold px-4 py-2 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, backgroundColor: "#EDE7E1" }}
            whileTap={{ scale: 0.97 }}
          >
            Escríbenos Hoy →
          </motion.a>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="md:hidden overflow-hidden bg-[#4A5540] border-t border-white/10"
        >
          <div className="px-12 py-4 space-y-3">
            {NAV_LINKS_MOBILE.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-white/80 hover:text-white text-sm font-medium py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); setShowModal(true); }}
              className="block w-full text-left text-[#B5BC8F] hover:text-white text-sm font-semibold py-1 transition-colors"
            >
              Soy Especialista →
            </button>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-white text-[#5A634F] text-sm font-semibold px-4 py-2 rounded-lg mt-2">
              Escríbenos Hoy →
            </a>
          </div>
        </motion.div>
      </motion.header>

      {showModal && <EspecialistaModal onClose={() => setShowModal(false)} />}
    </>
  );
}
