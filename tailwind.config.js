/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Kaku Gothic New', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
        mincho: ['Shippori Mincho', 'serif'],
      }
    },
  },
  plugins: [],
}

