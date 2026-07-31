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
import { FAQS } from "@/lib/faqs";
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
    title: "Insside — Especialistas en Psicología, Coaching y Nutrición en Español",
    description:
      "Conecta con especialistas seleccionados en psicología, coaching y nutrición. En español, desde donde estés.",
    url: "https://www.insside.co",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Insside — Especialistas en psicología, nutrición, coaching y más",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insside — Especialistas en Psicología, Coaching y Nutrición en Español",
    description:
      "Conecta con especialistas seleccionados en psicología, coaching y nutrición. En español, desde donde estés.",
    images: ["/og-image.png"],
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

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
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
