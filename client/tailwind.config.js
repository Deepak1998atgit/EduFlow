/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        customPink: '#ea1f63',
      },
      colors: {
        primary: "#00FFAA",
        secondary: "#00FF60",
        texlight: "#a7a7a7",
        bgPrimary: "#020010",
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          maxWidth: '100%',
          overflowX: 'hidden',
        },
      });
    },
  ],
}

