"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const WHATSAPP = "https://wa.me/17866356816";

const PAISES = [
  { code: "US", dial: "+1", flag: "🇺🇸" },
  { code: "MX", dial: "+52", flag: "🇲🇽" },
  { code: "CO", dial: "+57", flag: "🇨🇴" },
  { code: "AR", dial: "+54", flag: "🇦🇷" },
  { code: "CL", dial: "+56", flag: "🇨🇱" },
  { code: "PE", dial: "+51", flag: "🇵🇪" },
  { code: "VE", dial: "+58", flag: "🇻🇪" },
  { code: "ES", dial: "+34", flag: "🇪🇸" },
  { code: "DO", dial: "+1", flag: "🇩🇴" },
  { code: "GT", dial: "+502", flag: "🇬🇹" },
];

const MOTIVOS = [
  "Quiero agendar una sesión",
  "Tengo una pregunta sobre los especialistas",
  "Soy especialista y quiero unirme",
  "Tengo dudas sobre pagos",
  "Otro motivo",
];

const CONTACT_INFO = [
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+1 (786) 635-6816",
    href: WHATSAPP,
    desc: "Respuesta en menos de 24 horas",
    color: "#5A634F",
  },
  {
    icon: "📧",
    label: "Correo",
    value: "hola@insside.co",
    href: "mailto:hola@insside.co",
    desc: "Para consultas formales",
    color: "#8B9970",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@byinsside",
    href: "https://www.instagram.com/byinsside/",
    desc: "Síguenos para contenido diario",
    color: "#E3812F",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [paisCodigo, setPaisCodigo] = useState("+1");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const msg = encodeURIComponent(
      `Hola Insside, soy ${nombre}.\n` +
      `Correo: ${correo}\n` +
      `Tel: ${paisCodigo} ${telefono}\n` +
      `Motivo: ${motivo}\n\n` +
      `${mensaje}`
    );
    setTimeout(() => {
      window.open(WHATSAPP + "?text=" + msg, "_blank");
      setLoading(false);
      setSent(true);
    }, 600);
  }

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16" style={{ background: "#5A634F" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/fondo-lineas-web.png')", backgroundSize: "cover" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(181,188,143,0.25) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(227,129,47,0.1) 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-3">Estamos aquí</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Escríbenos.<br />
              <span className="text-[#B5BC8F]">Respondemos de verdad.</span>
            </h1>
            <p className="text-white/60 text-base max-w-md">
              Cuéntanos qué necesitas. Estamos para orientarte, responder dudas o simplemente escucharte.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <FadeIn>
              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-3xl p-8 border border-[#EDE7E1]"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    <h2 className="text-xl font-bold text-[#262525] mb-1">Cuéntanos qué necesitas</h2>
                    <p className="text-[#9a9a9a] text-sm mb-6">Sin formularios eternos, sin bots. Te lee una persona real.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Nombre */}
                      <div>
                        <label className="block text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1.5">Nombre completo</label>
                        <input
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                          placeholder="¿Cómo te llamamos?"
                          className="w-full border border-[#EDE7E1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 focus:border-[#5A634F]/40 transition-all"
                        />
                      </div>

                      {/* Correo */}
                      <div>
                        <label className="block text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1.5">Correo electrónico</label>
                        <input
                          type="email"
                          value={correo}
                          onChange={(e) => setCorreo(e.target.value)}
                          required
                          placeholder="tu@correo.com"
                          className="w-full border border-[#EDE7E1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 focus:border-[#5A634F]/40 transition-all"
                        />
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className="block text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1.5">WhatsApp (opcional)</label>
                        <div className="flex gap-2">
                          <select
                            value={paisCodigo}
                            onChange={(e) => setPaisCodigo(e.target.value)}
                            className="border border-[#EDE7E1] rounded-xl px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 shrink-0 w-28 cursor-pointer"
                          >
                            {PAISES.map((p) => (
                              <option key={p.code + p.dial} value={p.dial}>{p.flag} {p.dial}</option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            placeholder="Número de teléfono"
                            className="flex-1 border border-[#EDE7E1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 min-w-0"
                          />
                        </div>
                      </div>

                      {/* Motivo */}
                      <div>
                        <label className="block text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1.5">Motivo de contacto</label>
                        <select
                          value={motivo}
                          onChange={(e) => setMotivo(e.target.value)}
                          required
                          className="w-full border border-[#EDE7E1] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 cursor-pointer text-[#262525]"
                        >
                          <option value="" disabled>Selecciona un motivo</option>
                          {MOTIVOS.map((m) => <option key={m}>{m}</option>)}
                        </select>
                      </div>

                      {/* Mensaje */}
                      <div>
                        <label className="block text-xs font-semibold text-[#5A634F] uppercase tracking-wider mb-1.5">Tu mensaje</label>
                        <textarea
                          value={mensaje}
                          onChange={(e) => setMensaje(e.target.value)}
                          required
                          rows={4}
                          placeholder="Cuéntanos en tus palabras qué estás buscando o necesitando..."
                          className="w-full border border-[#EDE7E1] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 focus:border-[#5A634F]/40 transition-all resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#5A634F] text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Enviando…
                          </>
                        ) : (
                          "Enviar mensaje →"
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-[#9a9a9a]">
                        Al enviar aceptas nuestra{" "}
                        <a href="#" className="underline hover:text-[#5A634F]">Política de Privacidad</a>.
                        <br />Respondemos en menos de 24 horas.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-12 border border-[#EDE7E1] text-center"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ scale: [0.5, 1.2, 1], rotate: [0, 10, -5, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      ✅
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#262525] mb-2">¡Mensaje recibido!</h3>
                    <p className="text-[#6b6b6b] mb-6">Te escribimos en menos de 24 horas. Gracias por confiar en Insside.</p>
                    <motion.button
                      onClick={() => { setSent(false); setNombre(""); setCorreo(""); setTelefono(""); setMotivo(""); setMensaje(""); }}
                      className="text-sm text-[#5A634F] font-semibold underline underline-offset-2"
                    >
                      Enviar otro mensaje
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {CONTACT_INFO.map((info, i) => (
              <FadeIn key={info.label} delay={i * 0.1}>
                <motion.a
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#EDE7E1] hover:border-[#B5BC8F]/50 transition-all group block"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: `${info.color}15` }}>
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: info.color }}>{info.label}</p>
                    <p className="text-[#262525] font-semibold text-sm">{info.value}</p>
                    <p className="text-[#9a9a9a] text-xs mt-0.5">{info.desc}</p>
                  </div>
                  <span className="ml-auto text-[#9a9a9a] group-hover:translate-x-1 transition-transform text-sm">→</span>
                </motion.a>
              </FadeIn>
            ))}

            {/* WhatsApp CTA */}
            <FadeIn delay={0.3}>
              <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "#5A634F" }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(181,188,143,0.2) 0%, transparent 70%)" }} />
                <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-wider mb-2">La forma más rápida</p>
                <p className="text-white font-bold text-lg mb-1">Escríbenos por WhatsApp</p>
                <p className="text-white/60 text-sm mb-4">Lunes a viernes · 9am – 6pm (Miami)</p>
                <motion.a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#5A634F] font-bold px-5 py-2.5 rounded-xl text-sm w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Abrir WhatsApp →
                </motion.a>
              </div>
            </FadeIn>

            {/* FAQ note */}
            <FadeIn delay={0.4}>
              <div className="rounded-2xl p-5 border border-dashed border-[#D9E5DB]">
                <p className="text-xs font-semibold text-[#5A634F] mb-1">¿Tienes una pregunta frecuente?</p>
                <p className="text-[#9a9a9a] text-xs">Antes de escribirnos, revisa nuestras FAQs en la página principal. Puede que ya tengamos la respuesta.</p>
                <a href="/#faq" className="text-xs text-[#5A634F] font-semibold underline underline-offset-2 mt-2 inline-block">Ver FAQs →</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
