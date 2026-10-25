/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#FAF8F5',
          soft: '#F4F0E8',
          deep: '#ECE6DA',
          border: '#E4DCD0',
        },
        ink: {
          DEFAULT: '#1A1917',
          charcoal: '#1A1D20',
          muted: '#5C5850',
          subtle: '#8C867A',
        },
        forest: {
          DEFAULT: '#1D382B',
          hover: '#14271E',
          soft: '#EAF1ED',
        },
        ocean: {
          DEFAULT: '#0D9488',
          deep: '#0F766E',
          dark: '#0A4D52',
          light: '#F0FDFA',
          soft: '#CCFBF1',
          border: '#99F6E4',
          accent: '#14B8A6',
        },
        terracotta: {
          DEFAULT: '#8C5632',
          soft: '#F8F1EB',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        'xs': '390px',
      }
    },
  },
  plugins: [],
}
