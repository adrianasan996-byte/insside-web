"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

// Brand colors — from globals.css
const SALVIA   = "#B5BC8F";   // --salvia
const TE_VERDE = "#8B9970";   // --te-verde
const NATURAL  = "#EDE7E1";   // --natural
const NEGRO    = "#262525";   // --negro-neutro
const DARK_GREEN = "#4D5840"; // dark olive

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

function AccordionList({ items }: { items: { title: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y" style={{ borderTop: `1px solid rgba(181,188,143,0.3)`, borderBottom: `1px solid rgba(181,188,143,0.3)` }}>
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-semibold text-base" style={{ color: NEGRO }}>{item.title}</span>
            <motion.svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={TE_VERDE} strokeWidth="2.5"
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <polyline points="6 9 12 15 18 9"/>
            </motion.svg>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-[#6b6b6b] text-sm leading-relaxed pb-5">{item.body}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// Gradient text matching brand style
const gradientStyle: React.CSSProperties = {
  background: `linear-gradient(90deg, ${SALVIA} 0%, ${TE_VERDE} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

type FormState = "idle" | "loading" | "success" | "error";

const EDADES = [
  "Menos de 18 años",
  "18–24 años",
  "25–34 años",
  "35–44 años",
  "45–54 años",
  "55–64 años",
  "65 años o más",
];

export default function ApoyoVenezuelaClient() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    ciudad: "",
    online: "" as "" | "Sí" | "No",
    mensaje: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.edad) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/apoyo-venezuela", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all";
  const labelClass = "block text-sm font-semibold mb-1.5 text-white/80";

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex flex-col" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0">
          <img
            src="/venezuela-flag-silhouette.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(38,37,37,0.92) 0%, rgba(38,37,37,0.72) 55%, rgba(38,37,37,0.45) 100%)" }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-16 relative z-10 flex flex-col justify-end sm:justify-start" style={{ minHeight: "inherit" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-6 text-xs text-white/50">
              <Link href="/recursos" className="hover:text-white/80 transition-colors">Recursos</Link>
              <span>/</span>
              <span className="text-white/70">Apoyo Venezuela</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-5 text-white">
              Venezuela, estamos contigo.
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed mb-3">
              Sabemos que los últimos días han sido difíciles para muchas personas y familias en Venezuela.
            </p>
            <p className="text-white/70 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              Por eso, nos hemos unido a diversos <strong className="text-white font-semibold">especialistas en salud mental</strong> para ofrecer sesiones gratuitas de <strong className="text-white font-semibold">apoyo psicológico</strong> a las personas emocionalmente afectadas por esta situación.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#formulario"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm"
                style={{ background: DARK_GREEN, color: "#fff" }}>
                Registrarme →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CUPOS BANNER ── */}
      <div style={{ background: TE_VERDE }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-12 py-4 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0 bg-white" />
          <p className="text-white text-sm font-semibold">
            Cupos semanales limitados para atención psicológica.
          </p>
        </div>
      </div>

      {/* ── QUÉ OFRECEMOS ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
        <FadeIn>
          <h2 className="gradient-heading text-3xl sm:text-4xl font-bold mb-5 max-w-xl">
            Aquí estamos para acompañarte.
          </h2>
          <p className="text-[#6b6b6b] text-base max-w-2xl leading-relaxed mb-4">
            Lo que pasó en Venezuela dejó a muchas personas cargando <strong style={{ color: NEGRO }}>angustia, miedo y dolor.</strong>
          </p>
          <p className="text-[#6b6b6b] text-base max-w-2xl leading-relaxed mb-12">
            Hemos reunido a un equipo de profesionales capacitados para acompañarte con herramientas que te ayuden a sostener este momento: <strong style={{ color: NEGRO }}>calmar la ansiedad</strong>, ordenar lo que sientes y encontrar un poco de alivio en medio del caos.
          </p>
        </FadeIn>

        <AccordionList items={[
          { title: "2 sesiones gratuitas", body: "2 sesiones de acompañamiento emocional gratuitas por persona, sin costo." },
          { title: "Equipo especializado", body: "Las sesiones son facilitadas por un grupo de profesionales calificados en salud mental dispuestos a ayudarte." },
          { title: "100% online", body: "Las sesiones se realizan por videollamada para que puedas acceder desde cualquier lugar, estés en Venezuela o fuera." },
        ]} />
      </section>

      {/* ── FORMULARIO ── */}
      <section id="formulario" style={{ background: DARK_GREEN }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-12 py-20">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Regístrate Aquí</h2>
            <p className="text-white/65 text-base leading-relaxed mb-10">
              Si sientes que este espacio puede ayudarte, completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </FadeIn>

          {status === "success" ? (
            <FadeIn>
              <div className="rounded-3xl p-10 text-center bg-white/10 border border-white/20">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(181,188,143,0.25)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={SALVIA} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">¡Recibimos tu mensaje!</h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                  Uno de nuestros especialistas se pondrá en contacto contigo pronto para coordinar tus 2 sesiones. Gracias por confiar en nosotros.
                </p>
                <Link href="/"
                  className="inline-flex items-center gap-2 font-semibold px-6 py-2.5 rounded-xl text-sm"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
                  Ir al home
                </Link>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={labelClass}>
                    Nombre completo <span className="text-red-300">*</span>
                  </label>
                  <input type="text" name="nombre" required placeholder="Tu nombre y apellido"
                    value={form.nombre} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>
                    Correo electrónico <span className="text-red-300">*</span>
                  </label>
                  <input type="email" name="email" required placeholder="tu@correo.com"
                    value={form.email} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Teléfono</label>
                  <input type="tel" name="telefono" placeholder="+1 (000) 000-0000"
                    value={form.telefono} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>
                    Edad <span className="text-red-300">*</span>
                  </label>
                  <select name="edad" required value={form.edad} onChange={handleChange}
                    className={inputClass}
                    style={{ appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff80' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                    <option value="" disabled style={{ background: DARK_GREEN }}>Selecciona tu rango de edad</option>
                    {EDADES.map(e => (
                      <option key={e} value={e} style={{ background: DARK_GREEN, color: "#fff" }}>{e}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    ¿En qué ciudad y país resides actualmente?
                  </label>
                  <input type="text" name="ciudad" placeholder="Ej: Caracas, Venezuela / Miami, EE.UU."
                    value={form.ciudad} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>
                    ¿Tienes la posibilidad de realizar una sesión online?
                  </label>
                  <div className="flex gap-3">
                    {(["Sí", "No"] as const).map(opt => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, online: opt }))}
                        className="flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-all"
                        style={form.online === opt
                          ? { background: SALVIA, color: NEGRO, borderColor: SALVIA }
                          : { background: "transparent", color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.2)" }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Cuéntanos brevemente qué estás viviendo
                  </label>
                  <textarea name="mensaje" rows={4}
                    placeholder="Comparte lo que consideres importante para que podamos acompañarte mejor..."
                    value={form.mensaje} onChange={handleChange}
                    className={inputClass} style={{ resize: "none" }} />
                </div>

                {status === "error" && (
                  <p className="text-red-300 text-sm">Hubo un error al enviar. Por favor intenta de nuevo.</p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading" || !form.nombre || !form.email || !form.edad}
                  className="w-full py-4 rounded-xl font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: SALVIA, color: NEGRO }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "loading" ? "Enviando..." : "Registrarme →"}
                </motion.button>

                <div className="mt-4 p-4 rounded-xl text-xs text-white/50 leading-relaxed border border-white/10">
                  <strong className="text-white/70">Importante:</strong> Estas sesiones están pensadas como un espacio de acompañamiento emocional. Si tú o alguien cercano se encuentra en una situación de riesgo inmediato o requiere atención psiquiátrica de urgencia, te recomendamos buscar los servicios de emergencia disponibles en tu localidad.
                </div>
              </form>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6" style={{ color: NEGRO }}>
              Este espacio es para ti si…
            </h2>
            <ul className="space-y-3">
              {[
                "Estás sintiendo miedo, angustia o incertidumbre constante",
                "Tienes familiares en Venezuela y no sabes cómo manejar la distancia",
                "Llevas días sin poder dormir bien o concentrarte",
                "Sientes que el peso emocional es demasiado para cargarlo solo",
                "Quieres un espacio seguro para hablar de lo que estás viviendo",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3 text-[#6b6b6b] text-sm leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(181,188,143,0.22)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: SALVIA }} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative p-8 rounded-3xl overflow-hidden"
              style={{ background: NATURAL, border: `1px solid rgba(181,188,143,0.30)` }}>
              <div className="absolute top-4 left-6 text-7xl leading-none font-serif opacity-20"
                style={{ color: SALVIA }}>"</div>
              <p className="relative text-base leading-relaxed font-medium italic mt-4 mb-5"
                style={{ color: NEGRO }}>
                Pedir apoyo no es señal de debilidad. Es un acto de valentía y de amor propio, especialmente en los momentos más difíciles.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: SALVIA, color: NEGRO }}>I</div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: NEGRO }}>Equipo Insside</p>
                  <p className="text-[#9a9a9a] text-xs">Especialistas en salud mental certificados</p>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(181,188,143,0.25)" }}>
                <p className="text-xs text-[#9a9a9a] mb-3">¿Eres profesional de la salud mental?</p>
                <Link href="/voluntariado"
                  className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-xl text-sm border-2 transition-all hover:opacity-80"
                  style={{ borderColor: TE_VERDE, color: TE_VERDE, background: "transparent" }}>
                  Soy especialista →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
