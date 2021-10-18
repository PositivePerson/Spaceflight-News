const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      purple: colors.purple,
    },
    extend: {
      backgroundImage: {
        'rocket': "url('./graphics/rocket.jpg')",
      },
      minWidth: {
        '8': '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}