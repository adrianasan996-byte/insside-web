import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/ui/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.insside.co"),
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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TTDNB2MQ');`,
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased font-sans`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTDNB2MQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
