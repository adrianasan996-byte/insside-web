import type { Metadata } from "next";
import { POSTS, BLOG_AUTHOR } from "@/lib/blog";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog de Bienestar Emocional en Español | Insside",
  description: "Artículos sobre ansiedad, límites, duelo, burnout, alimentación consciente y mindfulness, escritos por especialistas de Insside. En español y para tu día a día.",
  alternates: { canonical: "https://www.insside.co/blog" },
  openGraph: {
    title: "Blog de Bienestar Emocional en Español | Insside",
    description: "Artículos sobre ansiedad, límites, duelo, burnout, alimentación consciente y mindfulness, escritos por especialistas de Insside. En español y para tu día a día.",
    url: "https://www.insside.co/blog",
    siteName: "Insside",
    locale: "es_LA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1920, height: 1080, alt: "Insside" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Bienestar Emocional en Español | Insside",
    description: "Artículos sobre ansiedad, límites, duelo, burnout, alimentación consciente y mindfulness, escritos por especialistas de Insside. En español y para tu día a día.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "El Blog de Insside",
  url: "https://www.insside.co/blog",
  inLanguage: "es",
  publisher: { "@type": "Organization", name: "Insside", url: "https://www.insside.co" },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://www.insside.co/blog/${p.slug}`,
    datePublished: p.datePublished,
    author: { "@type": "Person", name: BLOG_AUTHOR.name },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <BlogClient />
    </>
  );
}
