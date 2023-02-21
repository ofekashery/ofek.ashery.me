const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#101010',
        link: '#2997ff',
        gray: {
          1: 'hsl(0, 0%, 8.5%)',
          2: 'hsl(0, 0%, 11%)',
          3: 'hsl(0, 0%, 13.6%)',
          4: 'hsl(0, 0%, 15.8%)',
          5: 'hsl(0, 0%, 18.2%)',
          6: 'hsl(0, 0%, 20.5%)',
          7: 'hsl(0, 0%, 24.3%)',
          8: 'hsl(0, 0%, 31.2%)',
          9: 'hsl(0, 0%, 43.9%)',
          10: 'hsl(0, 0%, 49.4%)',
          11: 'hsl(0, 0%, 62.8%)',
          12: 'hsl(0, 0%, 100%)',
        },
      },
      ringOffsetColor: (theme) => theme('colors.background'),
    },
  },
  plugins: [],
};
