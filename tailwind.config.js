/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable manual toggle or set to 'media' for OS-level preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the theme here
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Or any other Google Font
      },
    },
  },
  plugins: [],
};