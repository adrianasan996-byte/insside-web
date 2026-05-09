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
          background: "#EEF0E6",
          padding: "0 120px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Squiggly background pattern */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}
          viewBox="0 0 1200 630"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Row 1 */}
          <path d="M-40 80 C0 50, 60 110, 100 80 S200 50, 240 80 S340 110, 380 80 S480 50, 520 80 S620 110, 660 80 S760 50, 800 80 S900 110, 940 80 S1040 50, 1080 80 S1180 110, 1240 80" stroke="#5A634F" strokeWidth="18" strokeLinecap="round" fill="none"/>
          {/* Row 2 */}
          <path d="M-40 180 C0 150, 60 210, 100 180 S200 150, 240 180 S340 210, 380 180 S480 150, 520 180 S620 210, 660 180 S760 150, 800 180 S900 210, 940 180 S1040 150, 1080 180 S1180 210, 1240 180" stroke="#5A634F" strokeWidth="18" strokeLinecap="round" fill="none"/>
          {/* Row 3 */}
          <path d="M-40 290 C0 260, 60 320, 100 290 S200 260, 240 290 S340 320, 380 290 S480 260, 520 290 S620 320, 660 290 S760 260, 800 290 S900 320, 940 290 S1040 260, 1080 290 S1180 320, 1240 290" stroke="#5A634F" strokeWidth="18" strokeLinecap="round" fill="none"/>
          {/* Row 4 */}
          <path d="M-40 400 C0 370, 60 430, 100 400 S200 370, 240 400 S340 430, 380 400 S480 370, 520 400 S620 430, 660 400 S760 370, 800 400 S900 430, 940 400 S1040 370, 1080 400 S1180 430, 1240 400" stroke="#5A634F" strokeWidth="18" strokeLinecap="round" fill="none"/>
          {/* Row 5 */}
          <path d="M-40 510 C0 480, 60 540, 100 510 S200 480, 240 510 S340 540, 380 510 S480 480, 520 510 S620 540, 660 510 S760 480, 800 510 S900 540, 940 510 S1040 480, 1080 510 S1180 540, 1240 510" stroke="#5A634F" strokeWidth="18" strokeLinecap="round" fill="none"/>
        </svg>

        {/* Left: insside wordmark */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div style={{
            fontSize: 148,
            fontWeight: 900,
            color: "#3D4A35",
            letterSpacing: "-5px",
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}>
            insside
          </div>
        </div>

        {/* Right: yoga tree pose figure */}
        <div style={{ display: "flex", zIndex: 1, flexShrink: 0 }}>
          <svg width="260" height="420" viewBox="0 0 130 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sun / star */}
            <circle cx="65" cy="14" r="9" stroke="#3D4A35" strokeWidth="4" fill="none"/>
            <line x1="65" y1="1" x2="65" y2="0" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="65" y1="1" x2="65" y2="-4" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            {/* Sun rays */}
            <line x1="65" y1="2" x2="65" y2="-3" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="78" y1="5" x2="83" y2="1" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="82" y1="14" x2="88" y2="14" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="78" y1="23" x2="83" y2="27" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="52" y1="5" x2="47" y2="1" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="48" y1="14" x2="42" y2="14" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>
            <line x1="52" y1="23" x2="47" y2="27" stroke="#3D4A35" strokeWidth="3" strokeLinecap="round"/>

            {/* Head */}
            <circle cx="65" cy="46" r="13" stroke="#3D4A35" strokeWidth="4" fill="none"/>

            {/* Arms raised — V shape meeting above head */}
            <line x1="65" y1="68" x2="38" y2="38" stroke="#3D4A35" strokeWidth="4.5" strokeLinecap="round"/>
            <line x1="65" y1="68" x2="92" y2="38" stroke="#3D4A35" strokeWidth="4.5" strokeLinecap="round"/>

            {/* Torso */}
            <line x1="65" y1="59" x2="65" y2="120" stroke="#3D4A35" strokeWidth="4.5" strokeLinecap="round"/>

            {/* Standing leg — straight down */}
            <line x1="65" y1="120" x2="65" y2="200" stroke="#3D4A35" strokeWidth="4.5" strokeLinecap="round"/>

            {/* Bent leg — tree pose (knee out to side, foot at knee level) */}
            <line x1="65" y1="140" x2="38" y2="165" stroke="#3D4A35" strokeWidth="4.5" strokeLinecap="round"/>
            <line x1="38" y1="165" x2="63" y2="155" stroke="#3D4A35" strokeWidth="4.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
