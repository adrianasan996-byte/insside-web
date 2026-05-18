"use client";

const TESTIMONIOS = [
  { texto: "Por primera vez entendí por qué me sentía tan vacía. Hoy confío más en mí y me siento alineada a mi esencia.", nombre: "María V.", ciudad: "Miami, FL", servicio: "Psicología", iniciales: "MV", color: "#D9E5DB" },
  { texto: "Dejé de culparme por no tener disciplina y entendí que solo necesitaba descansar mejor y enfocar mi energía en lo importante.", nombre: "Camila R.", ciudad: "Bogotá", servicio: "Life Coaching", iniciales: "CR", color: "#B5BC8F" },
  { texto: "Llegué pensando que tenía que resolver toda mi vida pero primero empezamos entendiendo por qué me sentía tan perdida. Hoy siento más claridad.", nombre: "Andrea M.", ciudad: "Ciudad de México", servicio: "Nutrición", iniciales: "AM", color: "#EDE7E1" },
  { texto: "Me ayudó a ordenar cosas que llevaba años evitando mirar y a soltar bloqueos que no me permitían avanzar.", nombre: "Sofía L.", ciudad: "Buenos Aires", servicio: "Psicología", iniciales: "SL", color: "#D9E5DB" },
  { texto: "Me siento más capaz y mucho más coherente con mi propósito. La mejor inversión que he hecho.", nombre: "Valentina C.", ciudad: "Santiago", servicio: "Health Coaching", iniciales: "VC", color: "#B5BC8F" },
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
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
          Ellos también confiaron en Insside.
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
