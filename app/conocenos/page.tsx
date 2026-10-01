import type { Metadata } from "next";
import ConocenosClient from "./ConocenosClient";

export const metadata: Metadata = {
  title: "Conócenos: Quiénes Somos y Por Qué Creamos Insside | Insside",
  description: "Insside nace para acercar la salud mental y el bienestar integral a la comunidad hispanohablante. Conoce nuestra historia, nuestros valores y cómo seleccionamos a cada especialista.",
  alternates: { canonical: "https://www.insside.co/conocenos" },
  openGraph: {
    title: "Conócenos: Quiénes Somos y Por Qué Creamos Insside | Insside",
    description: "Insside nace para acercar la salud mental y el bienestar integral a la comunidad hispanohablante. Conoce nuestra historia, nuestros valores y cómo seleccionamos a cada especialista.",
    url: "https://www.insside.co/conocenos",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1920, height: 1080, alt: "Insside" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conócenos: Quiénes Somos y Por Qué Creamos Insside | Insside",
    description: "Insside nace para acercar la salud mental y el bienestar integral a la comunidad hispanohablante. Conoce nuestra historia, nuestros valores y cómo seleccionamos a cada especialista.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Conócenos: Quiénes Somos y Por Qué Creamos Insside | Insside",
  "description": "Insside nace para acercar la salud mental y el bienestar integral a la comunidad hispanohablante. Conoce nuestra historia, nuestros valores y cómo seleccionamos a cada especialista.",
  "url": "https://www.insside.co/conocenos",
  "inLanguage": "es",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Insside",
    "url": "https://www.insside.co"
  }
};

export default function ConocenosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <ConocenosClient />
    </>
  );
}
