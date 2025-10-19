/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "warm-terracotta": "#C75B39",
        "soft-gold": "#E7B24A",
        "deep-slate": "#0F2233",
        "muted-cream": "#FFF7ED"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial"]
      }
    }
  },
  plugins: []
};
