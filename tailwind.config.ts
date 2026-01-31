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
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
