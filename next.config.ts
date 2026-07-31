import type { NextConfig } from "next";
import path from "path";

// Every external host the app actually talks to from the browser — booking widget
// (link.insside.co), GTM/analytics, YouTube embeds, and the two image CDNs used
// for specialist/blog photos.
const isDev = process.env.NODE_ENV !== "production";

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://link.insside.co`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://cdn.prod.website-files.com https://*.website-files.com https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  "frame-src https://www.youtube.com https://link.insside.co https://www.googletagmanager.com",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "*.website-files.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
};

export default nextConfig;
