"use client";
import React from "react";
import Link from "next/link";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";

const SALVIA   = "#B5BC8F";
const DARK_GREEN = "#4D5840";

export default function VoluntariadoClient() {
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
      <div className="max-w-2xl mx-auto px-6 sm:px-12 py-16">
        <div className="rounded-3xl p-10 text-center border border-white/15" style={{ background: DARK_GREEN }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: "rgba(181,188,143,0.2)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SALVIA} strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">Cupos temporalmente cerrados</h2>
          <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            Por el momento no estamos recibiendo nuevas solicitudes de voluntariado.
          </p>
        </div>
      </div>

      <MarketingFooter />
    </div>
  );
}
