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
      backgroundImage: {
        'custom-image-for-landingpage-1': "url('   https://media.gettyimages.com/id/1496098116/photo/a-happy-beautiful-blonde-businesswoman-looking-at-camera-while-holding-a-notebook.jpg?s=612x612&w=0&k=20&c=OZV1iAKpOgkUPq1L8GrhbMFfb0Yd3FM_cytwRPL39sU=')",
      },
      colors: {
        primary: "#00FFAA",
        secondary: "#00FF60",
        texlight: "#a7a7a7",
        bgprimary: "#020010",
        darkred: "#5D001E",
        platinum: "#E3E2DF",
        rosepink: "#E3AFBC",
        jazzberryjam: "#9A1750",
        darkpink:"#EE4C7C"
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

