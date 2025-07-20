// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50:  '#E3F4F8',
          100: '#C5E9F2',
          200: '#93D3E2',
          300: '#7EB7C3',
          400: '#6C9DA8',
          500: '#578089',
          600: '#45666D',
          700: '#334D53',
          800: '#22363A',
          900: '#111D20',
          950: '#091214',
        },
      },
      fontFamily: {
        encode: ['"Encode Sans"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'], // if you're using both
      }
    },
  },
  plugins: [],
}
