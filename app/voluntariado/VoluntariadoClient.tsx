"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const SALVIA   = "#B5BC8F";
const TE_VERDE = "#8B9970";
const NATURAL  = "#EDE7E1";
const NEGRO    = "#262525";
const DARK_GREEN = "#4D5840";

const PROFESIONES = [
  "Psicología clínica",
  "Psicología educativa",
  "Psicología organizacional",
  "Psiquiatría",
  "Trabajo social",
  "Terapia ocupacional",
  "Coaching certificado",
  "Consejería pastoral / espiritual",
  "Enfermería en salud mental",
  "Otra",
];

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const FRANJAS = ["Mañana (7am–12pm)", "Tarde (12pm–6pm)", "Noche (6pm–10pm)"];

const ZONAS = [
  "Venezuela (VET, UTC−4)",
  "Colombia / Panamá (COT, UTC−5)",
  "México (CST, UTC−6)",
  "USA Este (EST, UTC−5)",
  "USA Centro (CST, UTC−6)",
  "USA Pacífico (PST, UTC−8)",
  "España (CET, UTC+1)",
  "Argentina (ART, UTC−3)",
  "Otra",
];

type FormState = "idle" | "loading" | "success" | "error";

const EXPERIENCIA_OPCIONES = [
  { value: "si", label: "Sí, es parte de mi práctica" },
  { value: "formacion", label: "Tengo formación pero no es mi foco" },
  { value: "no", label: "No — mi trabajo es acompañamiento, no clínico" },
];

const DESASTRE_OPCIONES = ["Sí", "No"];

const inputClass = "w-full px-4 py-3 rounded-xl border bg-white text-sm placeholder:text-[#b0b0b0] focus:outline-none focus:border-[#B5BC8F] focus:ring-2 focus:ring-[#B5BC8F]/20 transition-all";
const labelClass = "block text-sm font-semibold mb-1.5";

export default function VoluntariadoClient() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    profesion: "",
    experienciaCrisis: "",
    colegiado: "",
    linkedin: "",
    dias: [] as string[],
    franjas: [] as string[],
    zonaHoraria: "",
    trabajoDesastre: "",
    trabajoDesastreDetalle: "",
  });
  const [cvFile, setCvFile] = useState<{ name: string; base64: string } | null>(null);
  const [cvError, setCvError] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setCvError("Solo se aceptan archivos PDF.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setCvError("El archivo no puede superar 5 MB.");
      return;
    }
    setCvError("");
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      setCvFile({ name: file.name, base64 });
    };
    reader.readAsDataURL(file);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleArray(field: "dias" | "franjas", value: string) {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.profesion || !form.telefono) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/voluntariado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, cvFile }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <MarketingNav />

      {/* Hero strip */}
      <div style={{ background: DARK_GREEN }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-12 pt-20 pb-14">
          <Link href="/recursos/apoyo-venezuela" className="text-xs text-white/40 hover:text-white/70 transition-colors mb-6 inline-block">
            ← Apoyo Venezuela
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: SALVIA }}>
            Voluntariado de especialistas
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 text-white">
            Súmate como especialista
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl">
            Acompañamiento por el terremoto en Venezuela. Si eres profesional de la salud mental y quieres ofrecer tu tiempo, completa el formulario.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-16">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl p-12 text-center"
            style={{ background: DARK_GREEN }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(181,188,143,0.25)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={SALVIA} strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">¡Gracias por sumarte!</h2>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm mx-auto mb-8">
              Recibimos tu información. Nos pondremos en contacto contigo pronto para coordinar los próximos pasos.
            </p>
            <Link href="/"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
              style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
              Ir al home
            </Link>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* Nombre */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>
                Nombre completo <span className="text-red-400">*</span>
              </label>
              <input type="text" name="nombre" required placeholder="Tu nombre y apellido"
                value={form.nombre} onChange={handleChange}
                className={inputClass} style={{ borderColor: "#EDE7E1", color: NEGRO }} />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>
                Correo electrónico <span className="text-red-400">*</span>
              </label>
              <input type="email" name="email" required placeholder="tu@correo.com"
                value={form.email} onChange={handleChange}
                className={inputClass} style={{ borderColor: "#EDE7E1", color: NEGRO }} />
            </div>

            {/* Teléfono */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>Teléfono <span className="text-red-400">*</span></label>
              <input type="tel" name="telefono" required placeholder="+1 (000) 000-0000"
                value={form.telefono} onChange={handleChange}
                className={inputClass} style={{ borderColor: "#EDE7E1", color: NEGRO }} />
            </div>

            {/* Fields hidden temporarily */}
            <div className="hidden">
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>
                Profesión / especialidad <span className="text-red-400">*</span>
              </label>
              <select name="profesion" required value={form.profesion} onChange={handleChange}
                className={inputClass}
                style={{ borderColor: "#EDE7E1", color: form.profesion ? NEGRO : "#b0b0b0", appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238B9970' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                <option value="" disabled>Selecciona tu área</option>
                {PROFESIONES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            {/* Experiencia en crisis */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>
                ¿Tienes formación y experiencia atendiendo crisis emocional aguda, duelo o trauma?
              </label>
              <div className="space-y-2 mt-2">
                {EXPERIENCIA_OPCIONES.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm(prev => ({ ...prev, experienciaCrisis: opt.value }))}
                    className="w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition-all"
                    style={form.experienciaCrisis === opt.value
                      ? { borderColor: TE_VERDE, background: `rgba(139,153,112,0.08)`, color: NEGRO, fontWeight: 600 }
                      : { borderColor: "#EDE7E1", background: "#fff", color: "#6b6b6b" }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Verificación profesional */}
            <div className="rounded-2xl p-5 space-y-4" style={{ background: NATURAL }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: TE_VERDE }}>
                Verificación profesional
              </p>
              <div>
                <label className={labelClass} style={{ color: NEGRO }}>Número de colegiado / licencia</label>
                <input type="text" name="colegiado" placeholder="Ej: FPV-123"
                  value={form.colegiado} onChange={handleChange}
                  className={inputClass} style={{ borderColor: "#d8d0c8", color: NEGRO }} />
              </div>
              <div>
                <label className={labelClass} style={{ color: NEGRO }}>Enlace a perfil profesional / LinkedIn</label>
                <input type="url" name="linkedin" placeholder="https://linkedin.com/in/..."
                  value={form.linkedin} onChange={handleChange}
                  className={inputClass} style={{ borderColor: "#d8d0c8", color: NEGRO }} />
              </div>
              {/* CV / Resume */}
              <div>
                <label className={labelClass} style={{ color: NEGRO }}>CV / Resume <span className="font-normal text-[#9a9a9a]">(PDF, máx. 5 MB — opcional)</span></label>
                <label
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border-2 border-dashed cursor-pointer transition-all text-sm"
                  style={cvFile
                    ? { borderColor: TE_VERDE, background: `rgba(139,153,112,0.06)`, color: NEGRO }
                    : { borderColor: "#d8d0c8", background: "#fff", color: "#9a9a9a" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={cvFile ? TE_VERDE : "#b0b0b0"} strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <span>{cvFile ? cvFile.name : "Seleccionar archivo PDF"}</span>
                  <input type="file" accept="application/pdf" onChange={handleCvChange} className="hidden" />
                </label>
                {cvError && <p className="text-red-500 text-xs mt-1">{cvError}</p>}
                {cvFile && (
                  <button type="button" onClick={() => setCvFile(null)}
                    className="text-xs text-[#9a9a9a] hover:text-red-400 mt-1 transition-colors">
                    × Eliminar archivo
                  </button>
                )}
              </div>
            </div>

            {/* Disponibilidad */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>Disponibilidad — días</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {DIAS.map(dia => (
                  <button
                    key={dia}
                    type="button"
                    onClick={() => toggleArray("dias", dia)}
                    className="px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all"
                    style={form.dias.includes(dia)
                      ? { borderColor: TE_VERDE, background: `rgba(139,153,112,0.1)`, color: NEGRO }
                      : { borderColor: "#EDE7E1", background: "#fff", color: "#6b6b6b" }}
                  >
                    {dia}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass} style={{ color: NEGRO }}>Disponibilidad — franjas horarias</label>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                {FRANJAS.map(franja => (
                  <button
                    key={franja}
                    type="button"
                    onClick={() => toggleArray("franjas", franja)}
                    className="flex-1 px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all text-center"
                    style={form.franjas.includes(franja)
                      ? { borderColor: TE_VERDE, background: `rgba(139,153,112,0.1)`, color: NEGRO }
                      : { borderColor: "#EDE7E1", background: "#fff", color: "#6b6b6b" }}
                  >
                    {franja}
                  </button>
                ))}
              </div>
            </div>

            {/* Zona horaria */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>Tu zona horaria</label>
              <select name="zonaHoraria" value={form.zonaHoraria} onChange={handleChange}
                className={inputClass}
                style={{ borderColor: "#EDE7E1", color: form.zonaHoraria ? NEGRO : "#b0b0b0", appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238B9970' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}>
                <option value="" disabled>Selecciona tu zona</option>
                {ZONAS.map(z => <option key={z} value={z}>{z}</option>)}
              </select>
            </div>

            {/* Experiencia en desastres */}
            <div>
              <label className={labelClass} style={{ color: NEGRO }}>
                ¿Has trabajado antes con población en situación de desastre o emergencia?
              </label>
              <div className="flex gap-3 mt-2 mb-3">
                {DESASTRE_OPCIONES.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm(prev => ({ ...prev, trabajoDesastre: opt }))}
                    className="flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all"
                    style={form.trabajoDesastre === opt
                      ? { borderColor: NEGRO, background: NEGRO, color: "#fff" }
                      : { borderColor: "#EDE7E1", background: "#fff", color: "#6b6b6b" }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <textarea name="trabajoDesastreDetalle" rows={3}
                placeholder="Cuéntanos (opcional)..."
                value={form.trabajoDesastreDetalle} onChange={handleChange}
                className={inputClass} style={{ borderColor: "#EDE7E1", color: NEGRO, resize: "none" }} />
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">Hubo un error al enviar. Por favor intenta de nuevo.</p>
            )}
            </div>{/* end hidden */}

            <motion.button
              type="submit"
              disabled={status === "loading" || !form.nombre || !form.email || !form.profesion || !form.telefono}
              className="w-full py-4 rounded-xl font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: DARK_GREEN, color: "#fff" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Enviando..." : "Enviar solicitud →"}
            </motion.button>

          </form>
        )}
      </div>

      <MarketingFooter />
    </div>
  );
}
