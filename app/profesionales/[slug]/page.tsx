"use client";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, MapPin, Globe, Calendar, ChevronDown, Video } from "lucide-react";
import { getSpecialistBySlug } from "@/lib/specialists";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import TestimonialsCarousel from "@/components/profile/TestimonialsCarousel";
import BookingModal from "@/components/profile/BookingModal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E8E2DB] last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left gap-3"
      >
        <span className="font-semibold text-[#2C2C2A] text-sm sm:text-[15px]">{title}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
          <ChevronDown size={17} className="text-[#9A9088] flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-5 text-[#4A4540] text-sm leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SpecialistProfilePage({ params }: PageProps) {
  const { slug } = use(params);
  const specialist = getSpecialistBySlug(slug);

  if (!specialist) notFound();

  const [modalOpen, setModalOpen] = useState(false);

  const hasYoutube = Boolean(specialist.youtubeId);
  const hasTestimonials =
    specialist.testimonialImages && specialist.testimonialImages.length > 0;

  return (
    <>
      <MarketingNav />

      <main
        className="min-h-screen relative overflow-x-hidden"
        style={{ background: "#F5F0EA" }}
      >
        {/* Organic blob — top right */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[60vw] max-w-[480px] h-[380px] sm:h-[480px] -translate-y-8 translate-x-12 opacity-50"
          style={{ zIndex: 0 }}
        >
          <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M420 110 C475 185 468 318 402 374 C336 430 210 450 138 390 C66 330 28 205 76 128 C124 51 256 8 348 36 C395 50 405 75 420 110Z"
              fill="#B5BC8F"
              fillOpacity="0.4"
            />
          </svg>
        </div>

        {/* Secondary blob — bottom left */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-60 left-0 w-[32vw] max-w-[260px] h-[260px] -translate-x-14 opacity-35"
          style={{ zIndex: 0 }}
        >
          <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M225 75 C262 130 248 206 196 234 C144 262 65 248 28 188 C-9 128 18 48 75 24 C132 0 188 20 225 75Z"
              fill="#64C1C4"
              fillOpacity="0.28"
            />
          </svg>
        </div>

        <div className="relative" style={{ zIndex: 1 }}>
          {/* Back link */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-3">
            <Link
              href="/profesionales-main"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5A634F] hover:text-[#3D6B60] transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Ver todos los especialistas
            </Link>
          </div>

          {/* ── Profile Card ─────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden"
              style={{
                backgroundImage: "url('/fondo-lineas-claro.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 4px 28px rgba(0,0,0,0.08)",
              }}
            >
              {/* Horizontal: photo stretches to match info content height */}
              <div className="flex gap-3 sm:gap-5 items-stretch p-4 sm:p-6">
                {/* Photo — self-stretch so height = content height on both breakpoints */}
                <div className="relative flex-shrink-0 w-[108px] sm:w-[220px] self-stretch rounded-2xl overflow-hidden min-h-[130px] sm:min-h-[200px]">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 220px, 108px"
                    priority
                  />
                </div>

                {/* Info — right of photo */}
                <div className="flex-1 min-w-0 pt-0.5 sm:pt-1 flex flex-col justify-center">
                  <span
                    className="inline-block self-start px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2"
                    style={{ background: "#5A634F", color: "#fff" }}
                  >
                    {specialist.category}
                  </span>

                  <h1 className="text-lg sm:text-3xl font-bold text-[#2C2C2A] leading-tight mb-0.5 sm:mb-1">
                    {specialist.name}
                  </h1>
                  <p className="text-xs sm:text-base text-[#7A7268] font-medium mb-2 sm:mb-4">{specialist.title}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={11}
                          className="sm:w-4 sm:h-4"
                          fill={i <= Math.round(specialist.rating) ? "#E3812F" : "none"}
                          stroke={i <= Math.round(specialist.rating) ? "#E3812F" : "#D1D5DB"}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#2C2C2A]">{specialist.rating.toFixed(1)}</span>
                    <span className="text-[10px] sm:text-xs text-[#A89F96]">({specialist.reviewCount})</span>
                  </div>

                  {/* Meta pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium bg-white/60 text-[#7A7268]">
                      <MapPin size={9} className="sm:w-3.5 sm:h-3.5" />
                      {specialist.city}
                    </span>
                    {specialist.modalities.includes("online") && (
                      <span className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium bg-white/60 text-[#7A7268]">
                        <Globe size={9} className="sm:w-3.5 sm:h-3.5" />
                        Online
                      </span>
                    )}
                    {specialist.registrationBadge && (
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-sm font-medium bg-white/60 text-[#7A7268]">
                        {specialist.registrationBadge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Price + CTA */}
              <div
                className="flex items-center gap-3 px-4 sm:px-5 pb-4 sm:pb-5 pt-3"
                style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs text-[#A89F96] mb-0.5 uppercase tracking-wide">Desde</p>
                  <p className="text-lg sm:text-2xl font-bold text-[#2C2C2A]">
                    ${specialist.sessionPrice}
                    <span className="text-xs sm:text-sm font-normal text-[#A89F96] ml-1">USD/sesión</span>
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-sm font-bold text-white"
                  style={{ background: "#5A634F" }}
                >
                  <Calendar size={14} />
                  Agendar sesión
                </motion.button>
              </div>
            </motion.div>
          </section>

          {/* ── Short bio ─────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#4A4540] text-sm sm:text-[15px] leading-relaxed"
            >
              {specialist.shortBio}
            </motion.p>
          </section>

          {/* ── Specialties tags ──────────────────────────────────── */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {specialist.specialties.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "#5A634F", color: "#fff" }}
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </section>

          {/* ── Accordion sections ────────────────────────────────── */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl px-5 sm:px-7"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              <AccordionItem title="Sobre mí" defaultOpen>
                <p>{specialist.bio}</p>
              </AccordionItem>
              <AccordionItem title="Mi enfoque terapéutico">
                <p>{specialist.approach}</p>
              </AccordionItem>
              <AccordionItem title="Formación y credenciales">
                <ul className="space-y-2">
                  {specialist.credentials.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#B5BC8F" }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            </motion.div>
          </section>

          {/* ── YouTube video ─────────────────────────────────────── */}
          {hasYoutube && (
            <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Video size={15} className="text-[#5A634F]" />
                  <h2 className="text-sm font-bold text-[#2C2C2A] uppercase tracking-wide">Video introductorio</h2>
                </div>
                <div
                  className="relative w-full rounded-2xl overflow-hidden bg-black"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${specialist.youtubeId}`}
                    title={`Video de ${specialist.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </section>
          )}

          {/* ── Testimonials ──────────────────────────────────────── */}
          {hasTestimonials && (
            <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <TestimonialsCarousel
                  images={specialist.testimonialImages!}
                  specialistName={specialist.name}
                />
              </motion.div>
            </section>
          )}

          {/* ── Bottom CTA ────────────────────────────────────────── */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-28 lg:pb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="rounded-3xl overflow-hidden relative"
              style={{ background: "#5A634F", minHeight: "156px" }}
            >
              {/* Illustration — bottom right decorative */}
              <div className="hidden sm:block absolute right-0 bottom-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none select-none">
                <Image
                  src="/coffee copy.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom"
                  sizes="176px"
                />
              </div>

              {/* Text content */}
              <div className="relative z-10 p-6 sm:p-8 w-full flex flex-col items-center text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  ¿Listo/a para empezar?
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Agenda tu primera sesión y da el primer paso hacia tu bienestar.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold text-[#5A634F]"
                  style={{ background: "#B5BC8F" }}
                >
                  <Calendar size={13} />
                  Ver disponibilidad
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Sticky CTA — mobile only */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
        <div
          className="px-4 pb-safe pt-3"
          style={{
            background: "rgba(245,240,234,0.96)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderTop: "1px solid #DDD7CF",
          }}
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white"
            style={{ background: "#5A634F" }}
          >
            <Calendar size={14} />
            Agendar con {specialist.name.split(" ")[0]}
          </motion.button>
        </div>
      </div>

      <div className="pb-20 lg:pb-0">
        <MarketingFooter />
      </div>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        specialistName={specialist.name}
        calendars={specialist.calendars}
      />
    </>
  );
}
