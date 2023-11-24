/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        purple: '#6741D9',
        lilac: '#F0C3F1',
        gray: '#C2C2C2',
      }
    },
  },
  plugins: [],
}

