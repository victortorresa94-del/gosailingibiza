import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-deep": "#0B2C4A",
        turquoise: "#00C9B1",
        sand: "#F5EDD9",
        coral: "#E8604C",
        "off-white": "#FAFAFA",
        text: "#1A1A2E",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-instrument)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom, rgba(11,44,74,0.35) 0%, rgba(11,44,74,0.15) 50%, rgba(11,44,74,0.55) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
