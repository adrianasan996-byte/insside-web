import type { Metadata } from "next";
import RecursosClient from "./RecursosClient";

export const metadata: Metadata = {
  title: "Recursos de Bienestar: Test de Ansiedad, Guías y Sesiones | Insside",
  description: "Haz el test gratuito de ansiedad, descarga guías prácticas y reserva sesiones especiales con especialistas de Insside. Recursos de bienestar en español.",
  alternates: { canonical: "https://www.insside.co/recursos" },
  openGraph: {
    title: "Recursos de Bienestar: Test de Ansiedad, Guías y Sesiones | Insside",
    description: "Haz el test gratuito de ansiedad, descarga guías prácticas y reserva sesiones especiales con especialistas de Insside. Recursos de bienestar en español.",
    url: "https://www.insside.co/recursos",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1920, height: 1080, alt: "Insside" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursos de Bienestar: Test de Ansiedad, Guías y Sesiones | Insside",
    description: "Haz el test gratuito de ansiedad, descarga guías prácticas y reserva sesiones especiales con especialistas de Insside. Recursos de bienestar en español.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Recursos de Bienestar: Test de Ansiedad, Guías y Sesiones | Insside",
  "description": "Haz el test gratuito de ansiedad, descarga guías prácticas y reserva sesiones especiales con especialistas de Insside. Recursos de bienestar en español.",
  "url": "https://www.insside.co/recursos",
  "inLanguage": "es",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Insside",
    "url": "https://www.insside.co"
  }
};

export default function RecursosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <RecursosClient />
    </>
  );
}
