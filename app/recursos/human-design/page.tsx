import type { Metadata } from "next";
import HumanDesignClient from "./HumanDesignClient";

export const metadata: Metadata = {
  title: "Human Design con Elisabet Martínez | Insside",
  description: "Descubre tu carta de Human Design en una sesión 1:1 con Elisabet Martínez. Aprende tu tipo, autoridad y estrategia para vivir con mayor claridad y autenticidad.",
  alternates: { canonical: "https://www.insside.co/recursos/human-design" },
  openGraph: {
    title: "Human Design con Elisabet Martínez | Insside",
    description: "Descubre tu carta de Human Design en una sesión 1:1 con Elisabet Martínez. Aprende tu tipo, autoridad y estrategia para vivir con mayor claridad y autenticidad.",
    url: "https://www.insside.co/recursos/human-design",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
  },
};

export default function HumanDesignPage() {
  return <HumanDesignClient />;
}
