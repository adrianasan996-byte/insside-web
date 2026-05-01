"use client";

const TESTIMONIOS = [
  { texto: "Después de 3 meses soy yo misma otra vez. Encontré a alguien que realmente me entendió.", nombre: "María V.", ciudad: "Miami, FL", servicio: "Psicología", iniciales: "MV", color: "#D9E5DB" },
  { texto: "No sabía que necesitaba un coach hasta que tuve una. Cambió completamente mi forma de tomar decisiones.", nombre: "Camila R.", ciudad: "Bogotá", servicio: "Life Coaching", iniciales: "CR", color: "#B5BC8F" },
  { texto: "Llevaba años con una relación rara con la comida. Por fin entiendo qué estaba pasando.", nombre: "Andrea M.", ciudad: "Ciudad de México", servicio: "Nutrición", iniciales: "AM", color: "#EDE7E1" },
  { texto: "Me conectaron con la especialista correcta en menos de 24 horas. No lo podía creer.", nombre: "Sofía L.", ciudad: "Buenos Aires", servicio: "Psicología", iniciales: "SL", color: "#D9E5DB" },
  { texto: "La sesión exploratoria me bastó para saber que era el lugar correcto. Llevo 4 meses y no paro.", nombre: "Valentina C.", ciudad: "Santiago", servicio: "Health Coaching", iniciales: "VC", color: "#B5BC8F" },
  { texto: "Por fin alguien que no me habla con términos raros ni me juzga. Directo al punto.", nombre: "Carlos D.", ciudad: "Caracas", servicio: "Life Coaching", iniciales: "CD", color: "#EDE7E1" },
];

const LOOP = [...TESTIMONIOS, ...TESTIMONIOS];

const PARTNERS = [
  "/partners/6934db01125252fbd61b4c7f_encontrandote.png",
  "/partners/6934db012bdd45447f7602b6_dai;y.png",
  "/partners/6934db014e0ea3f0c642c814_calma.png",
  "/partners/6934db0196e0c9d2389bdcb3_BEYONG.png",
  "/partners/6934db0ad07f99c0a1e227ef_thyroid.png",
];
const PARTNERS_LOOP = [...PARTNERS, ...PARTNERS];

export default function TestimoniosSection() {
  return (
    <section className="py-12 overflow-hidden" style={{ background: "transparent" }}>

      {/* Header — centered */}
      <div className="max-w-screen-2xl mx-auto px-12 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#262525] leading-tight">
          Ellos también <span style={{ color: "#E3812F" }}>confiaron en Insside.</span>
        </h2>
      </div>

      {/* Testimonios carousel — scroll right, edge fade */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #FDFBF8, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #FDFBF8, transparent)" }} />

        <div className="flex gap-4 animate-marquee-right" style={{ width: "max-content" }}>
          {LOOP.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] rounded-2xl p-5 flex flex-col justify-between"
              style={{
                background: "#fff",
                border: "1px solid rgba(90,99,79,0.10)",
                boxShadow: "0 2px 12px rgba(90,99,79,0.06)",
              }}
            >
              <p className="text-[#262525] text-sm leading-relaxed mb-4">"{t.texto}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#5A634F] flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.iniciales}
                </div>
                <div>
                  <p className="text-[#5A634F] font-semibold text-xs">{t.nombre}</p>
                  <p className="text-[#9a9a9a] text-[11px]">{t.ciudad} · {t.servicio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner logos — scroll left (opposite direction), edge fade */}
      <div className="relative mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #FDFBF8, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #FDFBF8, transparent)" }} />
        <div className="flex gap-16 items-center animate-marquee-left py-3" style={{ width: "max-content" }}>
          {PARTNERS_LOOP.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo}
              alt="partner"
              className="h-14 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all object-contain"
            />
          ))}
        </div>
      </div>

    </section>
  );
}
