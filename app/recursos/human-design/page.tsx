import type { Metadata } from "next";
import HumanDesignClient from "./HumanDesignClient";

export const metadata: Metadata = {
  title: "Human Design con Elisabet Martínez | Insside",
  description: "Descubre tu carta de Human Design en una sesión 1:1 con Elisabet Martínez. Aprende tu tipo, autoridad y estrategia para vivir con mayor claridad y autenticidad.",
};

export default function HumanDesignPage() {
  return <HumanDesignClient />;
}
