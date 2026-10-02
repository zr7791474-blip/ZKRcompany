import type { Config } from "tailwindcss";

/**
 * ZKR palette — deliberately small. One accent (red).
 *  night  : deep navy, almost black (dark surfaces, text on light)
 *  paper  : warm off-white (light surfaces, text on dark)
 *  blue   : muted blue, used rarely for secondary detail
 *  red    : ZKR red — the action colour. `red` on light surfaces, `red-bright` on dark.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: "#0d1424", 2: "#151f35" },
        paper: { DEFAULT: "#f3efe7", deep: "#e8e1d2" },
        blue: { DEFAULT: "#6f8dab", deep: "#3f5c7a" },
        red: { DEFAULT: "#b82333", dark: "#9c1c2b", bright: "#f2707a" },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: { DEFAULT: "2px", sm: "2px", md: "3px", lg: "4px" },
      maxWidth: { page: "88rem" },
    },
  },
  plugins: [],
};

export default config;
