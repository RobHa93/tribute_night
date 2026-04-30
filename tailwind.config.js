/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive'],
      },
      colors: {
        night: {
          950: '#07070a',
          900: '#0d0d10',
          800: '#161618',
          700: '#1e1e22',
          600: '#2a2a2f',
          500: '#3a3a40',
        },
        blues: {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
          dark: '#b45309',
        },
        rock: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#b91c1c',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.8s ease-out 0.3s forwards',
        'fade-up-delay2': 'fadeUp 0.8s ease-out 0.6s forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'bounce2': 'bounce2 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

