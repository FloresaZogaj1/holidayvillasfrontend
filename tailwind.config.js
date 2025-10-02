// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: "#0E1A16",
        ink: "#F6F3EC",
        card: "#1F2A24",
        line: "#2B342F",
        accent: { DEFAULT: "#E6D2A5", 2: "#7A6230" },
      },
      fontFamily: {
        serifLux: ["NyghtSerif", "Times New Roman", "serif"],
        sansBrand: ["Argentum Sans", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: { 'xl2': '14px' },
      boxShadow: {
        'lux': "0 10px 30px rgba(230,210,165,0.08)",
        'inner-lux': "inset 0 1px 0 rgba(255,255,255,0.06)",
        'card': "0 12px 30px rgba(0,0,0,.25)"
      },
      keyframes: {
        'fade-up': { '0%': {opacity:0, transform:'translateY(16px)'}, '100%': {opacity:1, transform:'translateY(0)'} },
        'shine': { '0%': { transform:'translateX(-150%)' }, '100%': { transform:'translateX(150%)' } },
      },
      animation: { 'fade-up': 'fade-up .6s ease-out both', 'shine': 'shine 1.2s ease-in-out' },
      transitionTimingFunction: { 'lux': 'cubic-bezier(.2,.7,.2,1)' },
      screens: { xs: "420px" },
    },
  },
  plugins: [],
};
