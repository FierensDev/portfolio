/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray':'#FFFFFF80',
        'gradient-black-71': 'rgba(0, 0, 0, 0.71)',
      },
      fontSize: {
        'deuns-xs' : '0.75rem',
        'deuns-s' : '1rem',
        'deuns-m' : '1.25rem',
        'deuns-l': '2.25rem',
        'deuns-xl': '3rem',
      },
    },
  },
  plugins: [],
}