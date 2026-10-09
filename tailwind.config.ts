import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vensai: {
          obsidian: "#0B1118",
          navy: "#111827",
          charcoal: "#1F2937",
          slate: "#374151",
          ice: "#F7F9FC",
          electric: "#0A84FF",
          royal: "#0066FF",
          sky: "#00A3FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "vensai-gradient": "linear-gradient(135deg, #0066FF 0%, #0A84FF 50%, #00A3FF 100%)",
        "vensai-dark-surface": "linear-gradient(180deg, #0B1118 0%, #111827 100%)",
        "grid-light": "linear-gradient(to right, rgba(17, 24, 39, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 24, 39, 0.05) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "enterprise-sm": "0 1px 2px 0 rgba(11, 17, 24, 0.04)",
        "enterprise": "0 4px 20px -2px rgba(11, 17, 24, 0.06), 0 1px 3px 0 rgba(11, 17, 24, 0.04)",
        "enterprise-lg": "0 16px 40px -8px rgba(11, 17, 24, 0.10), 0 4px 12px -2px rgba(11, 17, 24, 0.05)",
        "blue-glow": "0 0 32px -4px rgba(10, 132, 255, 0.28)",
        "blue-glow-sm": "0 0 16px -2px rgba(10, 132, 255, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
