/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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
        "justa-violet": "#f99500",
      },
      backgroundImage: {
        'hero-bg': "url('/img/hero-image.png')",
        //'footer-texture': "url('/img/footer-texture.png')",
      },
      height: {
        'h-hero': '450px'
      }
    },
  },
  plugins: [],
}