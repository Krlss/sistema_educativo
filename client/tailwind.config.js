/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif']
      },
      colors: {
        placeholder: '#9DA1A8',
        'placeholder-light': '#D9D9D9',
        'yellow-page': '#FFC929',
        error: '#FF6961',
        success: '#77DD77',
        'red-logo-stronger': '#CC2525',
        'red-logo': '#EF502E',
        'black-logo': '#353535',
        light: '#EBEBEB',
        'lightblue-page': '#00bbf9',
        'purple-page': '#9b5de5',
        'cian-page': '#00f5d4',
        'yellow2-page': '#fee440',
        'pink-page': '#f15bb5',
        'green-page': '#00bb2d'
      },
      screens: {
        xs: '475px'
      },
      keyframes: {
        loader: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        loader: 'loader 1s linear infinite'
      },
      height: {
        'screen-calculator': 'calc(100vh - 10rem)'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
