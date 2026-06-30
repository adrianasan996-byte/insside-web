import type { Metadata } from "next";
import ApoyoVenezuelaClient from "./ApoyoVenezuelaClient";

export const metadata: Metadata = {
  title: "Apoyo Psicológico Gratuito · Venezuela | Insside",
  description: "Sesiones gratuitas de apoyo psicológico para personas emocionalmente afectadas por la crisis en Venezuela. Completa el formulario y un especialista se pondrá en contacto contigo.",
  openGraph: {
    title: "Apoyo Psicológico Gratuito · Venezuela | Insside",
    description: "Sesiones gratuitas de apoyo psicológico para personas emocionalmente afectadas por la crisis en Venezuela. Completa el formulario y un especialista se pondrá en contacto contigo.",
    url: "https://www.insside.co/recursos/apoyo-venezuela",
    siteName: "Insside",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoyo Psicológico Gratuito · Venezuela | Insside",
    description: "Sesiones gratuitas de apoyo psicológico para personas emocionalmente afectadas por la crisis en Venezuela.",
  },
};

export default function ApoyoVenezuelaPage() {
  return <ApoyoVenezuelaClient />;
}
