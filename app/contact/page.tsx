import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contacto | Insside — Especialistas en Bienestar en Español",
  description: "¿Tienes preguntas sobre Insside o quieres que te ayudemos a encontrar especialista? Escríbenos y te respondemos en español.",
  alternates: { canonical: "https://www.insside.co/contact" },
  openGraph: {
    title: "Contacto | Insside — Especialistas en Bienestar en Español",
    description: "¿Tienes preguntas sobre Insside o quieres que te ayudemos a encontrar especialista? Escríbenos y te respondemos en español.",
    url: "https://www.insside.co/contact",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1920, height: 1080, alt: "Insside" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Insside — Especialistas en Bienestar en Español",
    description: "¿Tienes preguntas sobre Insside o quieres que te ayudemos a encontrar especialista? Escríbenos y te respondemos en español.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto | Insside — Especialistas en Bienestar en Español",
  "description": "¿Tienes preguntas sobre Insside o quieres que te ayudemos a encontrar especialista? Escríbenos y te respondemos en español.",
  "url": "https://www.insside.co/contact",
  "inLanguage": "es",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Insside",
    "url": "https://www.insside.co"
  }
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <ContactClient />
    </>
  );
}
