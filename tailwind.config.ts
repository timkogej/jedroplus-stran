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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#5B4FE9",
          50: "#EEEDFB",
          100: "#DEDCF8",
          200: "#BDB9F1",
          300: "#9C95EA",
          400: "#7B72E3",
          500: "#5B4FE9",
          600: "#3023D7",
          700: "#251BA5",
          800: "#191274",
          900: "#0E0A42",
        },
        secondary: {
          DEFAULT: "#4ECDC4",
          50: "#E6F8F7",
          100: "#CDF2EF",
          200: "#9BE5DF",
          300: "#6AD8CF",
          400: "#4ECDC4",
          500: "#2DB8AE",
          600: "#238F87",
          700: "#1A6761",
          800: "#103F3B",
          900: "#071715",
        },
        // Agency brand
        "brand-purple": "#8b5cf6",
        "brand-blue": "#3b82f6",
        "brand-teal": "#14b8a6",
        "ag-bg": "#0a0a0a",
        "ag-bg-2": "#131313",
        "ag-bg-3": "#1c1c1c",
        "ag-text": "#fafafa",
        "ag-muted": "#a1a1a1",
        "ag-subtle": "#6e6e6e",
        "ag-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        geist: ["var(--font-geist)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #14b8a6 100%)",
        "brand-gradient-text": "linear-gradient(135deg, #c4b5fd 0%, #93c5fd 50%, #5eead4 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.18) 50%, rgba(20,184,166,0.18) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
