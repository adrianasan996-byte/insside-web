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
  { label: "Únete a Insside", href: "/unete" },
];

export default function MarketingNav() {
  const [open, setOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

            {/* Únete a Insside */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.31 }}
            >
              <Link
                href="/unete"
                className="text-[#B5BC8F] hover:text-white text-sm font-semibold transition-colors relative group border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg"
              >
                Únete a Insside
              </Link>
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
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-white text-[#5A634F] text-sm font-semibold px-4 py-2 rounded-lg mt-2">
              Escríbenos Hoy →
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
