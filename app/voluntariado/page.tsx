import type { Metadata } from "next";
import VoluntariadoClient from "./VoluntariadoClient";

export const metadata: Metadata = {
  title: "Voluntariado de Especialistas · Venezuela | Insside",
  description: "Súmate como especialista para acompañar emocionalmente a personas afectadas por el terremoto en Venezuela. Regístrate aquí.",
};

export default function VoluntariadoPage() {
  return <VoluntariadoClient />;
}
