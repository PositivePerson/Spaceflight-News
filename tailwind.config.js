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
      red: colors.red,
    },
    extend: {
      animation: {
        spin: 'spin 0.25s ease-out 1',
        pulse: 'pulse 0.25s ease-in-out 1',
      },
      backgroundImage: {
        'rocket': "url('./graphics/rocket.jpg')",
      },
      maxHeight: {
        '75vh': '75vh',
      },
      minWidth: {
        '8': '4rem',
      },
    },
  },
  variants: {
    animation: ['active', 'hover', 'group-hover'],
    extend: {},
  },
  plugins: [],
}