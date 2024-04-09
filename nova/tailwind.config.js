/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],theme: {
    extend: {
      colors:{
        "color-fondo":"#E6E6E6",
        "color-azul-lapiz":"#33658A",
        "color-blue-carolina":"#86BBD8",
        "color-verde-moss":"#758E4F",
        "color-amarillo-hunyadi":"#F6AE2D",
        "color-naranja-pantone":"#F26419",
        "color-blanco":"#fff",
        "color-negro":"#242424",
        "color-gota":"#a427df",
      }
    },
    container:{
      center: true,
      padding:{
        default:"20px",
        md:"50px"
      }
    }
  },
  plugins: [],
}