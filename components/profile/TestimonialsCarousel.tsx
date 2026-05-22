"use client";

interface TestimonialsCarouselProps {
  images: string[];
  specialistName: string;
}

export default function TestimonialsCarousel({
  images,
  specialistName,
}: TestimonialsCarouselProps) {
  if (!images || images.length === 0) return null;

  const loop = [...images, ...images];

  return (
    <div>
      <h2 className="text-sm font-bold text-[#2C2C2A] uppercase tracking-wide mb-4">
        Lo que dicen de {specialistName.split(" ")[0]}
      </h2>

      <div className="relative overflow-hidden -mx-4 sm:-mx-6">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F5F0EA, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F5F0EA, transparent)" }} />

        <div
          className="flex gap-3 animate-marquee-right-slow"
          style={{ width: "max-content", paddingLeft: "16px" }}
        >
          {loop.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid rgba(90,99,79,0.10)",
                boxShadow: "0 2px 12px rgba(90,99,79,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Testimonio de cliente de ${specialistName}`}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
