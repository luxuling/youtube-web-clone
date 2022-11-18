/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F0F0F",
        "secondary":"#282828"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}