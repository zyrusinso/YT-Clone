/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'Arial', 'sans-serif']
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '68': '16rem',
        '92': '23rem',
      }
    },
  },
  plugins: [],
}