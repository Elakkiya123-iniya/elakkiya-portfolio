/** @type {import('tailwindcss').Config} */
export default {
  // ✨ Enable dark mode manually using a class (for toggle switch)
  darkMode: "class",
  
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      // 🌈 Custom animations for smooth gradient backgrounds, fades, and glowing effects
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      // 🎨 Custom color palette extension
      colors: {
        primary: {
          light: "#fde68a", // soft yellow
          DEFAULT: "#facc15", // main yellow
          dark: "#ca8a04", // golden shade
        },
        darkbg: "#0f172a", // dark background for dark mode
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
