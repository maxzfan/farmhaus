import type { Config } from "tailwindcss";

/**
 * Farmhouse design tokens — warm, cozy, daylight palette.
 * Barn red is the primary brand color, farm green the secondary accent, on a
 * warm cream/parchment background. shadcn semantic tokens (background,
 * foreground, primary, etc.) are mapped to CSS variables defined in globals.css
 * so shadcn components inherit the farmhouse look automatically.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // raw brand palette
        barn: {
          DEFAULT: "#C0392B", // barn red
          dark: "#8E2A20",
          bright: "#E05544",
        },
        farm: {
          DEFAULT: "#5B7B4A", // farm green
          dark: "#3F5A33",
          bright: "#7BA05B",
        },
        cream: "#F5EFE2", // parchment background
        wheat: "#E8DCC4",
        bark: "#3A3026", // warm dark brown text

        // shadcn semantic tokens -> CSS variables (see globals.css)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(58, 48, 38, 0.35)",
        "soft-lg": "0 24px 60px -18px rgba(58, 48, 38, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
