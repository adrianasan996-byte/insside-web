"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b last:border-0" style={{ borderColor: "#E8EDE4" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-base transition-colors"
          style={{ color: isOpen ? "#3D6B60" : "#262525" }}
        >
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ background: isOpen ? "#D9E5DB" : "#F0F4EC" }}
        >
          <ChevronDown size={15} style={{ color: "#5A634F" }} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProfileAccordionProps {
  bio: string;
  approach: string;
  credentials: string[];
}

export default function ProfileAccordion({ bio, approach, credentials }: ProfileAccordionProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden px-6"
      style={{
        background: "#fff",
        border: "1px solid #E8EDE4",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      }}
    >
      <AccordionItem title="Sobre mí" defaultOpen>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4a4a4a" }}>{bio}</p>
      </AccordionItem>

      <AccordionItem title="Mi enfoque terapéutico">
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4a4a4a" }}>{approach}</p>
      </AccordionItem>

      <AccordionItem title="Formación y credenciales">
        <ul className="space-y-2.5">
          {credentials.map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#4a4a4a" }}>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold"
                style={{ background: "#D9E5DB", color: "#3D6B60" }}
              >
                ✓
              </span>
              {c}
            </li>
          ))}
        </ul>
      </AccordionItem>
    </div>
  );
}
