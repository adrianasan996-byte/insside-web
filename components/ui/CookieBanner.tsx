"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("insside-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("insside-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("insside-cookie-consent", "essential");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[100] sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm"
        >
          <div
            className="rounded-2xl p-5 shadow-2xl"
            style={{
              background: "#2D3828",
              border: "1px solid rgba(181,188,143,0.2)",
            }}
          >
            <p className="text-xs font-bold text-[#B5BC8F] uppercase tracking-wider mb-2">
              Cookies
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Usamos cookies para mejorar tu experiencia. Puedes aceptarlas o continuar solo con las esenciales.{" "}
              <Link
                href="/privacy-policy"
                className="text-[#B5BC8F] underline underline-offset-2 hover:text-white transition-colors"
              >
                Política de privacidad
              </Link>
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 bg-[#B5BC8F] text-[#2D3828] text-xs font-bold py-2.5 rounded-xl hover:bg-[#C5CC9F] transition-colors"
              >
                Aceptar todas
              </button>
              <button
                onClick={decline}
                className="flex-1 bg-white/10 text-white/70 text-xs font-semibold py-2.5 rounded-xl hover:bg-white/15 transition-colors"
              >
                Solo esenciales
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
