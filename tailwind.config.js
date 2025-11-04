/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./cookie.js",     // HTML in root
    "./src/**/*.{js,html}" // optional files in src
  ],
  theme: {
    extend: { 
      keyframes: {
      pulseheart: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
          animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        'pulse-heart': 'pulseheart 1.5s ease-in-out infinite',
      }, colors: {
        lightbrown: '#78350F',
        brown: '#D2691E',
        cream: '#F5E9D4',
    }, height: {
      '7.5': '1.875rem',
      '112': '28rem',
    }
   },
  },
  plugins: [],
}
