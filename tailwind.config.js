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
        serif: ['Sora', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extraBold: 800,
      },
    },
  },
  plugins: [],
};
