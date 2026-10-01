import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingNav from "@/components/marketing/MarketingNav";
import MarketingFooter from "@/components/marketing/MarketingFooter";
import { BLOG_AUTHOR, POSTS, getPostBySlug } from "@/lib/blog";
import { getSpecialistBySlug } from "@/lib/specialists";

const BASE_URL = "https://www.insside.co";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title} | Blog Insside`;
  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: BLOG_AUTHOR.name, url: `${BASE_URL}/profesionales/${BLOG_AUTHOR.slug}` }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "Insside",
      locale: "es_LA",
      type: "article",
      publishedTime: post.datePublished,
      authors: [BLOG_AUTHOR.name],
      section: post.category,
      tags: post.keywords,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;
  const specialists = post.relatedSpecialists
    .map((s) => getSpecialistBySlug(s))
    .filter((s) => s !== undefined);
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      datePublished: post.datePublished,
      dateModified: post.datePublished,
      inLanguage: "es",
      articleSection: post.category,
      keywords: post.keywords.join(", "),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Person",
        name: BLOG_AUTHOR.name,
        jobTitle: BLOG_AUTHOR.role,
        url: `${BASE_URL}/profesionales/${BLOG_AUTHOR.slug}`,
      },
      publisher: {
        "@type": "Organization",
        name: "Insside",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/icon.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#FDFBF8" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MarketingNav />

      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <nav aria-label="Breadcrumb" className="text-xs text-[#9a9a9a] mb-6">
          <Link href="/" className="hover:text-[#5A634F]">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#5A634F]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#6b6b6b]">{post.category}</span>
        </nav>

        <header className="mb-8">
          <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full text-white mb-4" style={{ background: post.color }}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#262525] leading-tight mb-5">{post.title}</h1>
          <div className="flex items-center gap-3">
            <img src={BLOG_AUTHOR.image} alt={BLOG_AUTHOR.name} className="w-10 h-10 rounded-full object-cover" />
            <div className="text-sm">
              <Link href={`/profesionales/${BLOG_AUTHOR.slug}`} className="font-semibold text-[#262525] hover:text-[#5A634F]">
                {BLOG_AUTHOR.name}
              </Link>
              <p className="text-[#9a9a9a] text-xs">
                {BLOG_AUTHOR.role} · <time dateTime={post.datePublished}>{post.date}</time> · {post.readTime} de lectura
              </p>
            </div>
          </div>
        </header>

        <img src={post.image} alt={post.title} className="w-full aspect-[16/10] object-cover rounded-3xl mb-10" />

        {/* Respuesta rápida — pensada para featured snippets y motores de IA */}
        <section aria-label="Respuesta rápida" className="rounded-2xl p-6 mb-10 border border-[#D9E5DB]" style={{ background: "#F3F6EF" }}>
          <p className="text-[#5A634F] text-xs font-bold uppercase tracking-widest mb-2">Respuesta rápida</p>
          <p className="text-[#262525] text-base leading-relaxed">{post.quickAnswer}</p>
        </section>

        <div className="text-[#3f3f3f] text-[17px] leading-[1.8]">
          {post.intro.map((p, i) => (
            <p key={i} className="mb-5">{p}</p>
          ))}

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl font-bold text-[#262525] leading-snug mb-4">{section.heading}</h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mb-5">{p}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 mb-5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[11px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: post.color }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl p-6 bg-white border border-[#EDE7E1]">
          <h2 className="text-lg font-bold text-[#262525] mb-4">Lo más importante</h2>
          <ul className="space-y-2.5 text-[#3f3f3f] text-[15px]">
            {post.keyTakeaways.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-[#8B9970] font-bold">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#262525] mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {post.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-[#EDE7E1] px-5 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[#262525]">
                  <h3 className="text-base">{f.q}</h3>
                  <span className="text-[#8B9970] text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[#6b6b6b] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {specialists.length > 0 && (
          <section className="mt-14 rounded-3xl p-8 text-white" style={{ background: "linear-gradient(135deg, #5A634F 0%, #3D4A37 100%)" }}>
            <p className="text-[#B5BC8F] text-xs font-bold uppercase tracking-widest mb-2">No tienes que hacerlo sola</p>
            <h2 className="text-2xl font-bold mb-5">Especialistas que pueden acompañarte</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {specialists.map((s) => (
                <Link key={s.slug} href={`/profesionales/${s.slug}`} className="flex items-center gap-3 rounded-2xl p-3 bg-white/10 hover:bg-white/20 transition-colors">
                  <img src={s.image} alt={s.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm">{s.name}</p>
                    <p className="text-white/60 text-xs truncate">{s.title}</p>
                  </div>
                </Link>
              ))}
            </div>
            <a href="https://test.insside.co" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-6 bg-white text-[#5A634F] font-bold px-6 py-3 rounded-xl text-sm">
              Haz el test gratuito →
            </a>
          </section>
        )}
      </article>

      <section className="max-w-5xl mx-auto px-6 sm:px-12 pb-20">
        <h2 className="text-xl font-bold text-[#262525] mb-6">Sigue leyendo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl overflow-hidden bg-white border border-[#EDE7E1]">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide mb-1" style={{ color: p.color }}>{p.category}</p>
                <h3 className="font-bold text-[#262525] text-sm leading-snug group-hover:text-[#5A634F]">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
