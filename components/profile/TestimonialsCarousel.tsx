"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialsCarouselProps {
  images: string[];
  specialistName: string;
}

export default function TestimonialsCarousel({
  images,
  specialistName,
}: TestimonialsCarouselProps) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold text-[#262525] mb-4">
        Reseñas de pacientes
      </h2>
      <div ref={constraintsRef} className="overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing select-none"
          style={{ width: "max-content" }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden"
              style={{
                width: "280px",
                height: "380px",
                background: "#F0F4EC",
                border: "1px solid #E8EDE4",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={src}
                alt={`Reseña de paciente de ${specialistName} ${i + 1}`}
                fill
                className="object-cover pointer-events-none"
                sizes="280px"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <p className="text-xs text-[#8B9B8A] mt-3">
        Desliza para ver más reseñas
      </p>
    </div>
  );
}
