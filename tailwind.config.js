/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      lg : '1005px',
      md : '768px',
      sm : '580px'
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        merriweather: ["Merriweather", "serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      colors: {
        navy: {
          600: "#1E3A8A", // Warna biru navy
        },
      },
    },
  },
  plugins: [],
};
