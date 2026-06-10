import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#024579",
        cream: "#FAF9F6",
        terracotta: "#024579",
        charcoal: "#1F241E",
        sand: "#FAF9F6",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(2, 69, 121, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
