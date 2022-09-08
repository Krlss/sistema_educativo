/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'
  ],
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
        light: '#EBEBEB'
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
        'screen-calculator': 'calc(100vh - 3.5rem)'
      }
    }
  },
  plugins: []
}
