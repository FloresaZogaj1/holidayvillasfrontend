/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        "ink-secondary": "var(--ink-secondary)",
        card: "var(--card)",
        line: "var(--line)",
        accent: { 
          DEFAULT: "var(--accent)", 
          2: "var(--accent-2)",
          light: "var(--accent-light)"
        },
      },
      fontFamily: {
        serifLux: ["NyghtSerif", "Times New Roman", "serif"],
        sansBrand: ["Argentum Sans", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "14px" },
      boxShadow: {
        lux: "0 10px 30px rgba(26, 60, 52, 0.12)",
        "inner-lux": "inset 0 1px 0 rgba(26, 60, 52, 0.06)",
        card: "0 12px 30px rgba(26, 60, 52, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shine: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s ease-out both",
        shine: "shine 1.2s ease-in-out",
      },
      transitionTimingFunction: { lux: "cubic-bezier(.2,.7,.2,1)" },
      screens: { xs: "420px", "2xs": "360px" },
      spacing: { 18: "4.5rem", 88: "22rem", 128: "32rem" },
    },
  },
  plugins: [],
};
