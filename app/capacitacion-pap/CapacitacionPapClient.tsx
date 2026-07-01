"use client";
import React, { useState, useEffect } from "react";

const SALVIA    = "#B5BC8F";
const TE_VERDE  = "#8B9970";
const NATURAL   = "#EDE7E1";
const NEGRO     = "#262525";
const DARK_GREEN = "#4D5840";

const SESSION_KEY = "pap_auth";
const PASSWORD    = "VENEZUELA";

export default function CapacitacionPapClient() {
  const [authed, setAuthed]   = useState(false);
  const [input, setInput]     = useState("");
  const [error, setError]     = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") setAuthed(true);
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toUpperCase() === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (checking) return null;

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "#FDFBF8" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: DARK_GREEN }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-1" style={{ color: NEGRO }}>Área de especialistas</h1>
            <p className="text-sm" style={{ color: "#9a9a9a" }}>Ingresa la clave de acceso para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Clave de acceso"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false); }}
              autoFocus
              className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all"
              style={{
                borderColor: error ? "#f87171" : "#EDE7E1",
                color: NEGRO,
                background: "#fff",
                boxShadow: error ? "0 0 0 3px rgba(248,113,113,0.15)" : undefined,
              }}
            />
            {error && (
              <p className="text-red-400 text-xs text-center">Clave incorrecta. Intenta de nuevo.</p>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
              style={{ background: DARK_GREEN }}
            >
              Entrar →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      {/* Header */}
      <div style={{ background: DARK_GREEN }}>
        <div className="max-w-4xl mx-auto px-6 sm:px-12 pt-16 pb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: SALVIA }}>
            Especialistas · Apoyo Venezuela
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-3">
            Capacitación PAP
          </h1>
          <p className="text-white/65 text-base max-w-xl leading-relaxed">
            Material de apoyo para los especialistas voluntarios del programa de Primeros Auxilios Psicológicos.
          </p>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16">
        <div className="rounded-3xl p-12 text-center border border-dashed" style={{ borderColor: "rgba(181,188,143,0.4)", background: "rgba(181,188,143,0.05)" }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: SALVIA }}>Próximamente</p>
          <p className="text-base" style={{ color: "#9a9a9a" }}>El material estará disponible aquí muy pronto.</p>
        </div>
      </div>
    </div>
  );
}
