import type { Config } from "tailwindcss";

/**
 * ZKR palette — taken from the hero photograph (long-exposure ice-blue on near-black, with two red dots).
 *  night       : blue-black, from the photo's shadows (dark surfaces, text on light)
 *  paper       : icy off-white, from the photo's highlights (light surfaces, text on dark)
 *  blue        : the photo's electric blue, for accents on dark   |  blue-deep: same hue, for accents on light
 *  red         : the photo's red dots — the ONE action colour (buttons, tiny accents)
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: "#0b1421", 2: "#14202f" },
        paper: { DEFAULT: "#edf4fa", deep: "#d6e5f2" },
        blue: { DEFAULT: "#5db4e4", deep: "#1f6a99" },
        red: { DEFAULT: "#c8372b", dark: "#a92b21", bright: "#ff7b6b" },
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
