/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-atkinson)", "system-ui", "sans-serif"],
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
      },
      colors: {
        alabaster: "#F8F6F2",
        "warm-stone": "#E2DDD5",
        "pacific-navy": "#0F2942",
        "coastal-terracotta": "#B8332A",
        "charcoal-slate": "#111827",
      },
    },
  },
  plugins: [],
};
