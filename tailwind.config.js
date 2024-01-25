/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'homeImage': 'url(@/assets/images/homepage/home-planet.png)',
      },
      plugins: [],
    }
  }
}
