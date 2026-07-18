import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary red ramp — CTAs, brand emphasis, active states
        ember: {
          50: "#fdeceb",
          400: "#ec9a9a",
          500: "#e63946",
          600: "#c62839",
          700: "#a81f2e",
        },
        // Secondary accents — cyan highlight + soft aqua tint
        "amber-glow": "#a8dadc",
        "amber-soft": "#cdeae5",
        // Trust blue ramp — secondary sections, decorative accents
        moss: {
          300: "#a8dadc",
          400: "#77abbd",
          500: "#457b9d",
          600: "#31587a",
          700: "#1d3557",
        },
        // Ink (text/dark surfaces) — navy scale
        ink: {
          950: "#1d3557",
          500: "#3d6f8f",
          300: "#c7d9e3",
        },
        // Mist (light backgrounds) — cream/aqua tints
        mist: {
          50: "#f1faee",
          100: "#e4f1ec",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", '"SFMono-Regular"', "monospace"],
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg) translateX(var(--r)) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(var(--r)) rotate(-360deg)" },
        },
        "orbit-reverse": {
          from: { transform: "rotate(360deg) translateX(var(--r)) rotate(-360deg)" },
          to: { transform: "rotate(0deg) translateX(var(--r)) rotate(0deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(18px, -24px) scale(1.05)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "orbit-slow": "orbit 32s linear infinite",
        "orbit-slow-reverse": "orbit-reverse 40s linear infinite",
        drift: "drift 14s ease-in-out infinite",
        "drift-delay": "drift 16s ease-in-out infinite 2s",
        marquee: "marquee 34s linear infinite",
        blink: "blink 1.6s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
