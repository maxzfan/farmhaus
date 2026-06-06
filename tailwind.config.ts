import type { Config } from "tailwindcss";

/**
 * Farmhouse design tokens.
 * Barn red is the PRIMARY brand color but is restricted to large/display text
 * (>=24px bold) where it clears WCAG AA large-text 3:1 on ink. `red-bright` is
 * the body-size accent that clears 4.5:1. Terminal green is the futuristic accent
 * reserved for interactive elements, code, and glow.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        panel: "#111316",
        "panel-light": "#16191D",
        fog: "#C9CDD2",
        "fog-dim": "#8A9099",
        barn: {
          DEFAULT: "#C8102E", // brand red — display/large text only
          bright: "#FF3355", // body-size red accent (AA on ink)
        },
        terminal: {
          DEFAULT: "#39FF14", // hacker green
          dim: "#27C93F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // 1.25 (major third) type scale, base 16px
        xs: ["0.8rem", { lineHeight: "1.5" }],
        sm: ["0.9rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.5" }],
        xl: ["1.563rem", { lineHeight: "1.3" }],
        "2xl": ["1.953rem", { lineHeight: "1.2" }],
        "3xl": ["2.441rem", { lineHeight: "1.15" }],
        "4xl": ["3.052rem", { lineHeight: "1.1" }],
        "5xl": ["3.815rem", { lineHeight: "1.05" }],
        "6xl": ["4.768rem", { lineHeight: "1" }],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 8px 1px rgba(57,255,20,0.55), 0 0 24px 4px rgba(57,255,20,0.25)",
        "glow-sm": "0 0 6px 1px rgba(57,255,20,0.45)",
        "glow-red": "0 0 10px 2px rgba(200,16,46,0.5)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
