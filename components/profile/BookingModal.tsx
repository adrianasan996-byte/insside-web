"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type CalendarType = "exploratory" | "individual" | "package4" | "couple";

interface Calendars {
  exploratory?: string;
  individual?: string;
  package4?: string;
  couple?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  specialistName: string;
  calendars: Calendars;
}

const TABS: { key: CalendarType; label: string; description: string }[] = [
  {
    key: "exploratory",
    label: "Sesión Exploratoria",
    description: "Primera sesión de conocimiento — $25 USD",
  },
  {
    key: "individual",
    label: "Sesión Individual",
    description: "Sesión de 60 minutos de acompañamiento personalizado",
  },
  {
    key: "couple",
    label: "Terapia de Pareja",
    description: "Sesión de acompañamiento para parejas",
  },
  {
    key: "package4",
    label: "Paquete 4 Sesiones",
    description: "Compromiso de 4 sesiones con precio especial",
  },
];

export default function BookingModal({
  isOpen,
  onClose,
  specialistName,
  calendars,
}: BookingModalProps) {
  const [activeTab, setActiveTab] = useState<CalendarType>("individual");

  // Load GHL form_embed.js once
  useEffect(() => {
    if (document.getElementById("ghl-form-embed")) return;
    const script = document.createElement("script");
    script.id = "ghl-form-embed";
    script.src = "https://link.insside.co/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Default to individual; fallback to first available tab
  useEffect(() => {
    if (isOpen) {
      if (calendars.individual) {
        setActiveTab("individual");
      } else {
        const first = TABS.find((t) => calendars[t.key]);
        if (first) setActiveTab(first.key);
      }
    }
  }, [isOpen, calendars]);

  const calendarUrl = calendars[activeTab];
  const availableTabs = TABS.filter((t) => Boolean(calendars[t.key]));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50"
            style={{
              background: "rgba(20,28,18,0.65)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-50 flex flex-col bg-white rounded-t-3xl overflow-hidden"
            style={{
              maxHeight: "92vh",
              boxShadow: "0 -16px 60px rgba(0,0,0,0.20)",
            }}
          >
            {/* Top accent bar */}
            <div
              className="h-1.5 w-full flex-shrink-0"
              style={{ background: "linear-gradient(90deg, #B5BC8F, #8B9970)" }}
            />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8EDE4] flex-shrink-0">
              <div>
                <p className="text-xs font-medium text-[#8B9970] uppercase tracking-wider mb-0.5">
                  Agendar con
                </p>
                <h3 className="text-lg font-bold text-[#262525]">{specialistName}</h3>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#F0F4EC] transition-colors"
                aria-label="Cerrar"
              >
                <X size={18} className="text-[#5A634F]" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 px-6 pt-4 pb-3 overflow-x-auto flex-shrink-0 scrollbar-hide">
              {availableTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    background: activeTab === tab.key ? "#B5BC8F" : "#F0F4EC",
                    color: activeTab === tab.key ? "#fff" : "#5A634F",
                  }}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "#B5BC8F", zIndex: -1 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab description */}
            <p className="px-6 pb-3 text-xs text-[#8B9B8A] flex-shrink-0">
              {TABS.find((t) => t.key === activeTab)?.description}
            </p>

            {/* Calendar iframe area */}
            <div className="flex-1 overflow-hidden px-2 pb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  {calendarUrl ? (
                    <iframe
                      src={calendarUrl}
                      className="w-full h-full rounded-2xl border-0"
                      style={{ minHeight: "500px" }}
                      title={`Calendario – ${TABS.find((t) => t.key === activeTab)?.label}`}
                      allow="payment"
                    />
                  ) : (
                    <div
                      className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3"
                      style={{ background: "#F5F9F5", minHeight: "400px" }}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ background: "#E8EDE4" }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5A634F"
                          strokeWidth="1.8"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <p className="text-[#5A634F] font-semibold text-sm">
                        Calendario próximamente disponible
                      </p>
                      <p className="text-[#8B9B8A] text-xs text-center max-w-xs">
                        Escríbenos por WhatsApp y te ayudamos a agendar tu sesión
                      </p>
                      <a
                        href="https://wa.me/17866356816"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: "#3D6B60" }}
                      >
                        Contactar por WhatsApp
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
