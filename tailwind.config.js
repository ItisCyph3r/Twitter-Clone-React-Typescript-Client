/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitterBlue': '#1D9BF0',
      },
      backgroundImage: theme => ({
        'loginpic': "url('assets/lohpen.png')",
      })
    },
  },
  plugins: [],
}
