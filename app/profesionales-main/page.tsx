import type { Metadata } from "next";
import ProfesionalesMainClient from "./ProfesionalesMainClient";

export const metadata: Metadata = {
  title: "Directorio de Especialistas | Insside",
  description:
    "Explora especialistas en psicología, life coaching, health coaching y nutrición. Filtra por especialidad, modalidad y precio, y agenda tu primera sesión.",
  alternates: { canonical: "https://www.insside.co/profesionales-main" },
  openGraph: {
    title: "Directorio de Especialistas | Insside",
    description:
      "Explora especialistas en psicología, life coaching, health coaching y nutrición. Filtra por especialidad, modalidad y precio, y agenda tu primera sesión.",
    url: "https://www.insside.co/profesionales-main",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ProfesionalesPage() {
  return <ProfesionalesMainClient />;
}
