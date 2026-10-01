import type { MetadataRoute } from "next";

const DISALLOW = ["/capacitacion-pap", "/api/"];

// Buscadores e IA (ChatGPT, Claude, Perplexity, Gemini, Copilot) explícitamente permitidos
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bingbot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_BOTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://www.insside.co/sitemap.xml",
    host: "https://www.insside.co",
  };
}
