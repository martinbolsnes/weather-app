/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#80CED7',
        darkblue: '#007EA7',
        white: '#FDFDFD',
      },
      fontFamily: {
        sans: ['Zen Dots', 'cursive'],
      },
    },
  },
  plugins: [],
};
