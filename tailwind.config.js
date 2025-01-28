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
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        liftUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        marquee: 'marquee 30s linear infinite',
        liftUp: 'liftUp 0.3s ease-out forwards',
        shimmer: 'shimmer 2s infinite linear',

      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)', // A soft shadow for cards
        'card-hover': '0 4px 14px rgba(0, 0, 0, 0.15)', 
      },
      // Custom colors, if needed
      colors: {
        // This is optional, just an example of adding a custom color
        'accent': '#a78bfa', // e.g. a soft purple
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Or any other Google Font
      },
    },
  },
  plugins: [],
};