import type { Metadata } from "next";
import MarketingNav from "@/components/marketing/MarketingNav";
import HeroSection from "@/components/marketing/HeroSection";
import MotivosSection from "@/components/marketing/MotivosSection";
import ComoFuncionaSection from "@/components/marketing/ComoFuncionaSection";
import PreciosSection from "@/components/marketing/PreciosSection";
import EspecialistasSection from "@/components/marketing/EspecialistasSection";
import TestimoniosSection from "@/components/marketing/TestimoniosSection";
import CTAFinalSection from "@/components/marketing/CTAFinalSection";
import FAQSection from "@/components/marketing/FAQSection";
import MarketingFooter from "@/components/marketing/MarketingFooter";

export const metadata: Metadata = {
  title: "Insside — Especialistas en Psicología, Coaching y Nutrición en Español",
  description:
    "Conecta con especialistas seleccionados en psicología, life coaching, health coaching y nutrición. En español, desde donde estés. Primera sesión exploratoria gratis.",
  keywords: [
    "psicología online en español",
    "terapeuta en español",
    "coach en español",
    "nutrición online latina",
    "bienestar integral",
    "psicólogo para latinos",
    "terapia online en español",
    "health coaching en español",
    "life coaching latino",
    "salud mental hispana",
  ],
  openGraph: {
    title: "Insside — No estás en crisis. Pero tampoco estás bien.",
    description:
      "Conecta con especialistas en psicología, coaching y nutrición. En español, desde donde estés.",
    url: "https://www.insside.co",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insside — Especialistas de bienestar en español",
    description:
      "Psicología, coaching, nutrición y salud integral. En español, desde donde estés.",
  },
  alternates: { canonical: "https://www.insside.co" },
  robots: { index: true, follow: true },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Insside",
  url: "https://www.insside.co",
  logo: "https://www.insside.co/logos/logo-principal-blanco.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-786-635-6816",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.instagram.com/byinsside/"],
  description:
    "Plataforma de bienestar integral que conecta personas con especialistas en psicología, coaching, nutrición y salud integral. En español.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <div className="min-h-screen overflow-x-hidden" style={{ background: "#FDFBF8" }}>
        <MarketingNav />
        <HeroSection />
        <MotivosSection />
        <ComoFuncionaSection />
        <PreciosSection />
        <EspecialistasSection />
        <TestimoniosSection />
        <CTAFinalSection />
        <FAQSection />
        <MarketingFooter />
      </div>
    </>
  );
}
