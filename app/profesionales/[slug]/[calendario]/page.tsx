import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getSpecialistBySlug } from "@/lib/specialists";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import type { CalendarType } from "@/components/profile/BookingModal";

interface PageProps {
  params: Promise<{ slug: string; calendario: string }>;
}

const CALENDAR_SLUG_MAP: Record<string, CalendarType> = {
  "calendario-individual": "individual",
  "calendario-parejas": "couple",
  "calendario-exploratoria": "exploratory",
  "calendario-paquete": "package4",
};

const CALENDAR_LABELS: Record<CalendarType, { title: string; description: string }> = {
  exploratory: {
    title: "Sesión Exploratoria",
    description: "Primera sesión de conocimiento",
  },
  individual: {
    title: "Sesión Individual",
    description: "Sesión de 60 minutos de acompañamiento personalizado",
  },
  couple: {
    title: "Terapia de Pareja",
    description: "Sesión de acompañamiento para parejas",
  },
  package4: {
    title: "Paquete 4 Sesiones",
    description: "Compromiso de 4 sesiones con precio especial",
  },
};

export default async function SpecialistCalendarPage({ params }: PageProps) {
  const { slug, calendario } = await params;
  const specialist = getSpecialistBySlug(slug);
  const calendarType = CALENDAR_SLUG_MAP[calendario];

  if (!specialist || !calendarType) notFound();

  const calendarUrl = specialist.calendars[calendarType];
  const label = CALENDAR_LABELS[calendarType];

  return (
    <>
      <MarketingNav />

      <main className="min-h-screen relative" style={{ background: "#F5F0EA" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-6">
          <Link
            href={`/profesionales/${specialist.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5A634F] hover:text-[#3D6B60] transition-colors group mb-5"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Ver perfil de {specialist.name}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={specialist.image}
                alt={specialist.name}
                fill
                className="object-cover object-top"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-xs font-medium text-[#8B9970] uppercase tracking-wider mb-0.5">
                Agendar con {specialist.name}
              </p>
              <h1 className="text-lg sm:text-xl font-bold text-[#2C2C2A]">{label.title}</h1>
              <p className="text-xs sm:text-sm text-[#7A7268]">{label.description}</p>
            </div>
          </div>

          {calendarUrl ? (
            <div
              className="w-full rounded-2xl overflow-hidden bg-white"
              style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.08)" }}
            >
              <iframe
                src={calendarUrl}
                className="w-full border-0"
                style={{ minHeight: "780px" }}
                title={`Calendario – ${label.title} con ${specialist.name}`}
                allow="payment"
              />
            </div>
          ) : (
            <div
              className="w-full rounded-2xl flex flex-col items-center justify-center gap-3 py-16 px-6 text-center bg-white"
              style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.08)" }}
            >
              <p className="text-[#5A634F] font-semibold text-sm">
                Este calendario no está disponible por ahora
              </p>
              <p className="text-[#8B9B8A] text-xs max-w-xs">
                Escríbenos por WhatsApp y te ayudamos a agendar tu sesión con {specialist.name}
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
        </div>
      </main>

      <MarketingFooter />
    </>
  );
}
