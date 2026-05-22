"use client";

/* ─── WhatsApp screenshot testimonials ──────────────────────────────────── */
const SCREENSHOTS = [
  { src: "/TESTIMONIOS/tw-valen-1.png",      alt: "Testimonio real - Valentina" },
  { src: "/TESTIMONIOS/tw-dani.png",         alt: "Testimonio real - sesión con Dani" },
  { src: "/TESTIMONIOS/tw-blanca.png",       alt: "Testimonio real - Blanca" },
  { src: "/TESTIMONIOS/tw-valen-2.png",      alt: "Testimonio real - Valentina proceso" },
  { src: "/TESTIMONIOS/tw-luisa.png",        alt: "Testimonio real - Luisa" },
  { src: "/TESTIMONIOS/tw-exploratoria.png", alt: "Testimonio real - sesión exploratoria" },
];

const LOOP = [...SCREENSHOTS, ...SCREENSHOTS];

/* ─── Partner logos ─────────────────────────────────────────────────────── */
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

      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-12 mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#8B9970] to-[#64C1C4] bg-clip-text text-transparent">
          Ellos también confiaron en nuestros especialistas.
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #FDFBF8, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #FDFBF8, transparent)" }} />

        <div className="flex gap-4 items-start animate-marquee-right-slow" style={{ width: "max-content" }}>
          {LOOP.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid rgba(90,99,79,0.10)",
                boxShadow: "0 2px 12px rgba(90,99,79,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partner logos */}
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

      {/* Video testimonial */}
      <div className="flex justify-center mt-12 px-6">
        <div
          className="w-full max-w-sm rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 4px 24px rgba(90,99,79,0.12)",
            border: "1px solid rgba(90,99,79,0.10)",
          }}
        >
          <video
            src="/TESTIMONIOS/testimonio-video.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block"
            style={{ aspectRatio: "4/5", objectFit: "cover" }}
          />
        </div>
      </div>

    </section>
  );
}
