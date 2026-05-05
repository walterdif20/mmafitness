/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dc2626',
          dark: '#0a0a0a'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(220,38,38,.35), 0 10px 30px rgba(220,38,38,.15)'
      }
    },
  },
  plugins: [],
}
