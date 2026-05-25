"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PAISES = [
  { code: "US",  dial: "+1",    flag: "🇺🇸", name: "Estados Unidos" },
  { code: "MX",  dial: "+52",   flag: "🇲🇽", name: "México" },
  { code: "CO",  dial: "+57",   flag: "🇨🇴", name: "Colombia" },
  { code: "AR",  dial: "+54",   flag: "🇦🇷", name: "Argentina" },
  { code: "CL",  dial: "+56",   flag: "🇨🇱", name: "Chile" },
  { code: "PE",  dial: "+51",   flag: "🇵🇪", name: "Perú" },
  { code: "VE",  dial: "+58",   flag: "🇻🇪", name: "Venezuela" },
  { code: "EC",  dial: "+593",  flag: "🇪🇨", name: "Ecuador" },
  { code: "BO",  dial: "+591",  flag: "🇧🇴", name: "Bolivia" },
  { code: "PY",  dial: "+595",  flag: "🇵🇾", name: "Paraguay" },
  { code: "UY",  dial: "+598",  flag: "🇺🇾", name: "Uruguay" },
  { code: "ES",  dial: "+34",   flag: "🇪🇸", name: "España" },
  { code: "CR",  dial: "+506",  flag: "🇨🇷", name: "Costa Rica" },
  { code: "PA",  dial: "+507",  flag: "🇵🇦", name: "Panamá" },
  { code: "DO",  dial: "+1",    flag: "🇩🇴", name: "Rep. Dominicana" },
  { code: "GT",  dial: "+502",  flag: "🇬🇹", name: "Guatemala" },
  { code: "HN",  dial: "+504",  flag: "🇭🇳", name: "Honduras" },
  { code: "SV",  dial: "+503",  flag: "🇸🇻", name: "El Salvador" },
  { code: "NI",  dial: "+505",  flag: "🇳🇮", name: "Nicaragua" },
  { code: "CU",  dial: "+53",   flag: "🇨🇺", name: "Cuba" },
  { code: "PR",  dial: "+1",    flag: "🇵🇷", name: "Puerto Rico" },
  { code: "BR",  dial: "+55",   flag: "🇧🇷", name: "Brasil" },
  { code: "CA",  dial: "+1",    flag: "🇨🇦", name: "Canadá" },
  { code: "GB",  dial: "+44",   flag: "🇬🇧", name: "Reino Unido" },
  { code: "DE",  dial: "+49",   flag: "🇩🇪", name: "Alemania" },
  { code: "FR",  dial: "+33",   flag: "🇫🇷", name: "Francia" },
  { code: "IT",  dial: "+39",   flag: "🇮🇹", name: "Italia" },
  { code: "PT",  dial: "+351",  flag: "🇵🇹", name: "Portugal" },
  { code: "NL",  dial: "+31",   flag: "🇳🇱", name: "Países Bajos" },
  { code: "CH",  dial: "+41",   flag: "🇨🇭", name: "Suiza" },
  { code: "AU",  dial: "+61",   flag: "🇦🇺", name: "Australia" },
  { code: "JP",  dial: "+81",   flag: "🇯🇵", name: "Japón" },
  { code: "CN",  dial: "+86",   flag: "🇨🇳", name: "China" },
  { code: "IN",  dial: "+91",   flag: "🇮🇳", name: "India" },
];

export default function CountrySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const selected = PAISES.find((p) => p.dial === value) ?? PAISES[0];
  const filtered = PAISES.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.dial.includes(search)
  );

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); setSearch(""); }}
        className="flex items-center gap-1.5 border border-[#EDE7E1] rounded-xl px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20 cursor-pointer w-[88px] justify-between"
      >
        <span>{selected.flag} {selected.dial}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" strokeWidth="2.5">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full mt-1 z-20 bg-white border border-[#EDE7E1] rounded-2xl overflow-hidden"
              style={{ width: "220px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            >
              <div className="p-2 border-b border-[#EDE7E1]">
                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar país..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#EDE7E1] focus:outline-none focus:ring-2 focus:ring-[#5A634F]/20"
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-xs text-[#9a9a9a] text-center py-4">Sin resultados</p>
                ) : (
                  filtered.map((p) => (
                    <button
                      key={p.code}
                      type="button"
                      onClick={() => { onChange(p.dial); setOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-[#F5F0EB] transition-colors ${p.dial === value ? "bg-[#F0F4EC] font-semibold" : ""}`}
                    >
                      <span>{p.flag}</span>
                      <span className="flex-1 truncate">{p.name}</span>
                      <span className="text-[#9a9a9a] text-xs">{p.dial}</span>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
