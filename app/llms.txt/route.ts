import { SPECIALISTS } from "@/lib/specialists";
import { POSTS } from "@/lib/blog";
import { FAQS } from "@/lib/faqs";

const BASE_URL = "https://www.insside.co";

export const dynamic = "force-static";

// Resumen del sitio para motores de IA (estándar llms.txt)
export function GET() {
  const body = `# Insside

> Insside es una plataforma de bienestar integral que conecta a personas hispanohablantes con especialistas seleccionados en psicología, life coaching, health coaching y nutrición. Todas las sesiones son online y en español, desde cualquier país.

## Páginas principales

- [Inicio](${BASE_URL}): qué es Insside, cómo funciona, precios y preguntas frecuentes.
- [Directorio de especialistas](${BASE_URL}/profesionales-main): todas las especialistas, filtrables por especialidad.
- [Recursos](${BASE_URL}/recursos): test gratuito de ansiedad, guías descargables y sesiones especiales.
- [Test gratuito de ansiedad](https://test.insside.co): quiz de 5 minutos con resultado personalizado.
- [Blog](${BASE_URL}/blog): artículos sobre salud emocional y bienestar.
- [Conócenos](${BASE_URL}/conocenos): historia y valores de Insside.
- [Contacto](${BASE_URL}/contact)

## Especialistas

${SPECIALISTS.map((s) => `- [${s.name}](${BASE_URL}/profesionales/${s.slug}): ${s.title}. ${s.shortBio}`).join("\n")}

## Blog

${POSTS.map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.quickAnswer}`).join("\n")}

## Preguntas frecuentes

${FAQS.map((f) => `- ${f.q} ${f.a}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
