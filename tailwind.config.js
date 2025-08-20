/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.html", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        allura: ['Allura', 'cursive'],
        'noto-serif': ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
