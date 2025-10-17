/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fef7f7',
          100: '#feeaea',
          200: '#fccdd3',
          300: '#faa2aa',
          400: '#f8bbd9',
          500: '#e91e63',
          600: '#c2185b',
          700: '#ad1457',
          800: '#880e4f',
          900: '#4a148c',
        },
        bronze: {
          400: '#cd7f32',
          500: '#b8722c',
          600: '#a36626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      }
    },
  },
  plugins: [],
};