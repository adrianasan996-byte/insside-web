"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { label: "Especialistas", href: "/profesionales-main" },
  { label: "Blog", href: "/blog" },
  { label: "Conócenos", href: "/conocenos" },
  { label: "Contacto", href: "/contact" },
];

export default function MarketingFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <footer style={{ background: "#3D4A35" }} className="py-14">
      <div className="max-w-screen-2xl mx-auto px-12">

        {/* Row 1: logo | nav | instagram */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <Link href="/">
            <Image
              src="/logos/logo-principal-blanco.png"
              alt="Insside"
              width={120}
              height={32}
              style={{ height: "42px", width: "auto" }}
            />
          </Link>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-base text-white/60 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <a href="https://www.instagram.com/byinsside/" target="_blank" rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        {/* Newsletter strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-t border-white/10 border-b border-white/10 mb-8">
          <div>
            <p className="text-white font-semibold text-base">Únete a Insside</p>
            <p className="text-white/40 text-sm mt-0.5">Recursos, novedades y promociones exclusivas.</p>
          </div>
          {sent ? (
            <p className="text-[#B5BC8F] text-sm font-semibold">¡Listo! Te escribimos pronto 🌿</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="text-sm px-4 py-2.5 rounded-lg outline-none bg-white/10 border border-white/15 text-white placeholder:text-white/30 focus:border-white/40 w-full sm:w-56"
              />
              <button type="submit"
                className="bg-[#B5BC8F] text-[#3D4A35] text-xs font-bold px-5 py-2 rounded-lg hover:bg-[#C5CC9F] transition-colors whitespace-nowrap">
                Suscribirme
              </button>
            </form>
          )}
        </div>

        {/* Bottom bar: phone + email | copyright | legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <div className="flex items-center gap-4">
            <a href="tel:+17866356816" className="text-white font-bold text-base hover:text-[#B5BC8F] transition-colors">
              +1 (786) 635-6816
            </a>
            <span className="text-white/20">·</span>
            <a href="mailto:hello@insside.co" className="hover:text-white transition-colors">
              hello@insside.co
            </a>
          </div>

          <p>© 2026 Insside. Todos los derechos reservados.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="/politica-de-cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
