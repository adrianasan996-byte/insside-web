import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSpecialistBySlug, SPECIALISTS } from "@/lib/specialists";
import SpecialistDetailClient from "./SpecialistDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SPECIALISTS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);
  if (!specialist) return {};

  const title = `${specialist.name} — ${specialist.title} | Insside`;
  const description = specialist.shortBio;
  const url = `https://www.insside.co/profesionales/${specialist.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Insside",
      locale: "es_LA",
      type: "profile",
      images: [{ url: specialist.image, alt: specialist.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [specialist.image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SpecialistProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const specialist = getSpecialistBySlug(slug);

  if (!specialist) notFound();

  const url = `https://www.insside.co/profesionales/${specialist.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: specialist.name,
    jobTitle: specialist.title,
    description: specialist.shortBio,
    image: `https://www.insside.co${specialist.image}`,
    url,
    knowsAbout: specialist.specialties,
    address: {
      "@type": "PostalAddress",
      addressLocality: specialist.city,
      addressCountry: specialist.country,
    },
    ...(specialist.reviewCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: specialist.rating,
            reviewCount: specialist.reviewCount,
          },
        }
      : {}),
    makesOffer: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: specialist.sessionPrice,
      description: `Sesión con ${specialist.name}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpecialistDetailClient specialist={specialist} />
    </>
  );
}
