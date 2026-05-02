import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Insside — Especialistas en Psicología, Coaching y Nutrición";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#F5F0EB",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -60, right: -60,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(181,188,143,0.15)", display: "flex"
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: 80,
          width: 200, height: 200, borderRadius: "50%",
          background: "rgba(181,188,143,0.10)", display: "flex"
        }} />

        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Logo wordmark */}
          <div style={{
            fontSize: 96, fontWeight: 900, color: "#5A634F",
            letterSpacing: "-3px", lineHeight: 1,
          }}>
            insside
          </div>
          <div style={{
            width: 80, height: 4, background: "#B5BC8F", borderRadius: 2,
            display: "flex"
          }} />
          <div style={{ fontSize: 28, color: "#8B9970", fontWeight: 600, marginTop: 8 }}>
            Especialistas en Psicología,
          </div>
          <div style={{ fontSize: 28, color: "#8B9970", fontWeight: 600 }}>
            Coaching y Nutrición en Español.
          </div>
          <div style={{ fontSize: 22, color: "#9a9a9a", marginTop: 8 }}>
            Desde donde estés.
          </div>
        </div>

        {/* Right: icon figure */}
        <div style={{
          width: 260, height: 260, borderRadius: "50%",
          background: "#B5BC8F",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          {/* Simple SVG figure inline */}
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
            {/* Head */}
            <circle cx="50" cy="22" r="10" fill="white"/>
            {/* Arms */}
            <rect x="10" y="36" width="30" height="10" rx="5" fill="white" transform="rotate(-20 10 36)"/>
            <rect x="60" y="36" width="30" height="10" rx="5" fill="white" transform="rotate(20 60 36)"/>
            {/* Body wave */}
            <path d="M 25 55 Q 35 45 50 50 Q 65 55 75 45" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
