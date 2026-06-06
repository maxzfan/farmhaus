import { ImageResponse } from "next/og";

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
          background: "#0D0D0D",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(47,170,63,0.18), transparent 70%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", color: "#2faa3f", fontSize: 30, letterSpacing: "4px", textTransform: "uppercase" }}>
          Stanford Hacker House
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 130,
            fontWeight: 700,
            letterSpacing: "-4px",
          }}
        >
          <span style={{ color: "#c8102e" }}>Farm</span>
          <span style={{ color: "#f4f1e6" }}>house</span>
        </div>
        <div style={{ display: "flex", marginTop: 16, color: "#a8a89c", fontSize: 38 }}>
          Summer 2026 · Code the Farm
        </div>
      </div>
    ),
    { ...size }
  );
}
