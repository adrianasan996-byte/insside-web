import type { Metadata } from "next";
import CapacitacionPapClient from "./CapacitacionPapClient";

export const metadata: Metadata = {
  title: "Capacitación PAP | Insside",
  description: "Material de apoyo para especialistas voluntarios — Primeros Auxilios Psicológicos.",
  robots: { index: false, follow: false },
};

export default function CapacitacionPapPage() {
  return <CapacitacionPapClient />;
}
