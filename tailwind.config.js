/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'ges-blue': '#455A64',
        'ges-green': '#8BC34A',
        'ges-dark': '#2C3E50',
        'ges-light': '#ECEFF1',
      },
    },
  },
  plugins: [],
}
