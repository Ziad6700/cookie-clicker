/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // HTML in root
    "./src/**/*.{js,html}" // optional files in src
  ],
  theme: {
    extend: { 
          animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
  },
  plugins: [],
}
