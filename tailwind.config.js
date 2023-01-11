/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'beach':'url("../img/fondo-playa.jpg")',
        'water':'url("../img/agua-playa.png")',
        'expBorabora':'url("../img/experiencia-borabora.jpg")',
        'viajesSouthIsland':'url("../img/viajes-southisland.jpg")',
        'viajesBorabora':'url("../img/viajes-borabora.jpg")',
        'viajesParis':'url("../img/viajes-paris.jpg")',
        'viajesMaui':'url("../img/viajes-maui.jpg")',
        'viajesLondon':'url("../img/viajes-london.jpg")',
        'viajesRome':'url("../img/viajes-rome.jpg")'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#0EA6B1',
        'secundary': '#0C7279',
        'terciary': '#B4B4B4',
      }),
      textColor:{
        'primary': '#000000',
        'secundary': '#0EA6B1',
        'terciary': '#959595',
      },
      fontSize:{
        'big': ['16vw', {
          lineHeight: '1'
        }],
      }
    },
    fontFamily:{
      Lato:['Lato', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
