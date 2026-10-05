import type { Config } from "tailwindcss";

/**
 * ZKR design tokens.
 *
 * Colours are CSS variables (see app/globals.css) so ONE set of class names works in dark mode,
 * light mode and inside forced-dark sections (`.surface-dark`). Palette comes from the hero photograph:
 * deep navy-black, icy white, electric blue — and red used sparingly, like the two red points in the image.
 *
 *   fg       text / lines          bg       page surface          surface  raised / alternate surface
 *   accent   electric blue (text)  danger   errors                red      the ONE action colour (fixed)
 */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fg: "rgb(var(--fg) / <alpha-value>)",
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        red: { DEFAULT: "#c8372b", dark: "#a92b21" },
        // Fixed (non-theme) values, used only where a surface must stay dark in both modes.
        night: "#070e18",
      },
      fontFamily: {
        // One family (Archivo, variable weight + width). "display" is the same family at a wider setting (see globals.css).
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: { DEFAULT: "2px", sm: "2px", md: "3px", lg: "4px" },
    },
  },
  plugins: [],
};

export default config;
