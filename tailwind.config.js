/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray':'#404040'
      },
      fontSize: {
        'deuns-xs' : '0.75rem',
        'deuns-s' : '1rem',
        'deuns-m' : '1.25rem',
        'deuns-l': '2.25rem',
      }
    },
  },
  plugins: [],
}