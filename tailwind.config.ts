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
          obsidian: "#070B12",
          navy: "#0A1628",
          ink: "#020a1f",
          charcoal: "#1F2937",
          slate: "#374151",
          paper: "#F4F1EA",
          paperWarm: "#F7F4EE",
          mist: "#E8EEF4",
          ice: "#F0F4F8",
          electric: "#0A84FF",
          royal: "#0066FF",
          sky: "#00A3FF",
          copper: "#B87333",
          teal: "#1C8C7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-inter)", "system-ui", "sans-serif"],
        editorial: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundSize: {
        grain: "120px 120px",
      },
      backgroundImage: {
        "vensai-gradient": "linear-gradient(135deg, #0066FF 0%, #0A84FF 50%, #00A3FF 100%)",
        "vensai-dark-surface": "linear-gradient(180deg, #0B1118 0%, #111827 100%)",
        "grid-light": "linear-gradient(to right, rgba(17, 24, 39, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 24, 39, 0.05) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "paper-grain":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "ink-mesh":
          "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(0,132,255,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(184,115,51,0.12) 0%, transparent 50%)",
      },
      boxShadow: {
        "enterprise-sm": "0 1px 2px 0 rgba(11, 17, 24, 0.04)",
        "enterprise": "0 4px 20px -2px rgba(11, 17, 24, 0.06), 0 1px 3px 0 rgba(11, 17, 24, 0.04)",
        "enterprise-lg": "0 16px 40px -8px rgba(11, 17, 24, 0.10), 0 4px 12px -2px rgba(11, 17, 24, 0.05)",
        "blue-glow": "0 10px 24px -12px rgba(0, 102, 255, 0.45)",
        "blue-glow-sm": "0 6px 16px -10px rgba(0, 102, 255, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
