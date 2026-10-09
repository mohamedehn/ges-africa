/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'ges-blue': '#2D3E50',
        'ges-green': '#7AC143',
        'ges-dark': '#1A2332',
        'ges-light': '#F4F7FA',
        'ges-navy': '#243447',
        'ges-green-light': '#E8F5D9',
        'ges-gray': '#64748B',
      },
    },
  },
  plugins: [],
}
