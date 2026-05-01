import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insside — Tu espacio de crecimiento",
  description: "Conecta con especialistas en bienestar, psicología, coaching y más.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
