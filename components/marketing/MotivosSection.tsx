"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type TagItem = { label: string; href: string };

const ROW1: TagItem[] = [
  { label: "Ansiedad",           href: "/profesionales-main?area=ansiedad" },
  { label: "Propósito",          href: "/profesionales-main?area=proposito" },
  { label: "Depresión",          href: "/profesionales-main?area=depresion" },
  { label: "Cuerpo y nutrición", href: "/profesionales-main?area=nutricion" },
  { label: "Ciclo hormonal",     href: "/profesionales-main?area=ciclo" },
];
const ROW2: TagItem[] = [
  { label: "Hábitos",              href: "/profesionales-main?area=habitos" },
  { label: "Relaciones de pareja", href: "/profesionales-main?area=pareja" },
  { label: "Autoestima",           href: "/profesionales-main?area=autoestima" },
  { label: "Identidad",            href: "/profesionales-main?area=identidad" },
  { label: "Estrés",               href: "/profesionales-main?area=estres" },
];
const ROW3: TagItem[] = [
  { label: "Duelo",             href: "/profesionales-main?area=duelo" },
  { label: "Trabajo y carrera", href: "/profesionales-main?area=trabajo" },
  { label: "Sueño",             href: "/profesionales-main?area=sueno" },
  { label: "Límites",           href: "/profesionales-main?area=limites" },
  { label: "Motivación",        href: "/profesionales-main?area=motivacion" },
];

function Tag({
  label, href, delay, selected, onToggle,
}: {
  label: string; href: string; delay: number; selected: boolean; onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const active = selected || hovered;

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { e.preventDefault(); onToggle(); }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "9px 20px",
        borderRadius: "999px",
        border: `1.5px solid ${active ? "#5A634F" : "rgba(90,99,79,0.3)"}`,
        background: active ? "#5A634F" : "transparent",
        color: active ? "#ffffff" : "#262525",
        fontSize: "14px",
        fontWeight: 400,
        cursor: "pointer",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
        userSelect: "none",
      }}
    >
      {label}
    </motion.a>
  );
}

export default function MotivosSection() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.1 });
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(label: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  const ALL_TAGS = [...ROW1, ...ROW2, ...ROW3];

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ background: "#FDFBF8" }}
    >
      {/* Outer container matches other sections */}
      <div ref={ref} className="max-w-screen-2xl mx-auto px-12">
        {/* Inner card-equivalent padding to align with ComoFuncionaSection text */}
        <div className="lg:px-12 lg:pl-[4.5rem]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">

            {/* LEFT — heading + tags */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-7"
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#262525] leading-tight">
                  Por lo que sientes.
                  <br />
                  <span style={{ color: "#E3812F" }}>No por lo que crees que necesitas.</span>
                </h2>
                <p className="text-[#7a7a7a] text-base mt-3">
                  Elige lo que más se acerca a tu momento actual.
                </p>
              </motion.div>

              {/* Tags — flex wrap, natural row breaks */}
              {visible && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {ALL_TAGS.map((tag, i) => (
                    <Tag
                      key={tag.label}
                      label={tag.label}
                      href={tag.href}
                      delay={0.1 + i * 0.035}
                      selected={selected.has(tag.label)}
                      onToggle={() => toggle(tag.label)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — illustration (desktop only) */}
            <motion.div
              className="hidden lg:flex items-center justify-center flex-shrink-0"
              style={{ width: "360px", height: "420px" }}
              initial={{ opacity: 0, x: 20 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/ilustraciones/Apoyo.png"
                alt="Ilustración de acompañamiento"
                width={360}
                height={420}
                className="object-contain object-center w-full h-full"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
