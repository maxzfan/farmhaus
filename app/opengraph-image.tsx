import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Farmhouse — Stanford Hacker House · Summer 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated OG image. Using the file convention means there is no
 * hand-produced PNG to source or keep in sync, and the build never depends on a
 * design asset being ready (it renders from code at request/build time).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(57,255,20,0.10), transparent 70%)",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#39FF14", fontSize: 30 }}>
          [founder@farmhouse ~]$ ./summer-2026
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: "-4px",
          }}
        >
          <span style={{ color: "#C8102E" }}>FARM</span>
          <span style={{ color: "#F5F7FA" }}>HOUSE</span>
        </div>
        <div style={{ display: "flex", marginTop: 16, color: "#C9CDD2", fontSize: 38 }}>
          Stanford Hacker House · Code the Farm
        </div>
      </div>
    ),
    { ...size }
  );
}
