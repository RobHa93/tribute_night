/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // «Hallenlicht»: abgeleitet vom Hallenfoto – Hallendecke, Gobo-Amber, Bühnenrot
      colors: {
        hall: {
          DEFAULT: '#110D0B',
          surface: '#1B1512',
          raised: '#272019',
          line: '#4A3C33',
          edge: '#7D6B5D',
        },
        ink: {
          DEFAULT: '#F5EFE8',
          muted: '#BFB3A8',
          subtle: '#9A8D80',
        },
        accent: {
          DEFAULT: '#F5A524',
          hover: '#FFBE55',
          ink: '#1A0F05',
        },
        ember: '#E5533D',
      },
      fontFamily: {
        display: ['"Big Shoulders Display Variable"', 'Impact', 'sans-serif'],
        sans: ['"Archivo Variable"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
