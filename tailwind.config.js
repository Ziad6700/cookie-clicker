/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./cookie.js",     // HTML in root
    "./src/**/*.{js,html}" // optional files in src
  ],
  theme: {
    extend: { 
          animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
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
