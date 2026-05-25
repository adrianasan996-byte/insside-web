import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insside-web.vercel.app"),
  title: "Insside | Especialistas en psicología, nutrición, coaching y más",
  description: "Una plataforma para conectar con especialistas que te entienden de verdad. En español y desde cualquier lugar.",
  openGraph: {
    title: "Insside | Especialistas que te entienden de verdad",
    description: "Una plataforma para conectar con especialistas que te entienden de verdad. En español y desde cualquier lugar.",
    url: "https://insside.co",
    siteName: "Insside",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "Insside — Especialistas en psicología, nutrición, coaching y más",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insside | Especialistas en psicología, nutrición, coaching y más",
    description: "Una plataforma para conectar con especialistas que te entienden de verdad. En español y desde cualquier lugar.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased font-sans`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
