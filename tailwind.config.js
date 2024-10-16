/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customLight: {
          text: '#000000',
          textInBlack: '#ffffff',
          background: '#ffffff',
          firstColor: '#363636',
          secondColor: '#707070',
          thirdColor: '#DDDDDD'
        },
        customDark: {
          text: '#ffffff',
          textInBlack: '#000000',
          background: '#001F3F',
          firstColor: '#165981',
          secondColor: '#2F6F97',
          thirdColor: '#6A9AB0'
        },
    },
    },
  },
  plugins: [],
};