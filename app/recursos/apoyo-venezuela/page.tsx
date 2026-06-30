import type { Metadata } from "next";
import ApoyoVenezuelaClient from "./ApoyoVenezuelaClient";

export const metadata: Metadata = {
  title: "Apoyo Psicológico Gratuito · Venezuela | Insside",
  description: "Sesiones gratuitas de apoyo emocional para personas afectadas por los terremotos en Venezuela. Completa el formulario y nuestro equipo de psicólogas se pondrá en contacto contigo.",
};

export default function ApoyoVenezuelaPage() {
  return <ApoyoVenezuelaClient />;
}
