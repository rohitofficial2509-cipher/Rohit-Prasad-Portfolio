/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode via .dark class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(262, 80%, 60%)', // indigo‑purple
          light: 'hsl(262, 80%, 70%)',
          dark: 'hsl(262, 80%, 50%)',
        },
        accent: {
          DEFAULT: 'hsl(191, 80%, 55%)', // teal‑blue
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
