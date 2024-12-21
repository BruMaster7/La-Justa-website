/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html",    // Archivos HTML
    "./src/**/*.js",      // Archivos JS
    "./index.html",],       // Archivo HTML principal,
  theme: {
    
    extend: {
      fontFamily: {
        "Merriweather": ['Merriweather', 'sans-serif']
      },
      colors: {
        "justa-dark-blue": "#233340",
        "justa-green": "#5dac77",
        "justa-grey": "#b8b9bd",
        "justa-white": "#f1f3f9",
        "justa-red": "#f24f50",
        "justa-fontGrey": "#696969",
        "justa-orange": "#f99500",
        "justa-violet": "#8c419f",
      },
      backgroundImage: {
        'hero-bg': "url('/img/hero-image.png')",
        //'footer-texture': "url('/img/footer-texture.png')",
      },
      height: {
        'h-hero': '450px'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}