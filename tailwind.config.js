/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        bellefair: ['Bellefair', 'serif']
      },
      backgroundImage: {
        'mainImage': 'url(@/assets/images/homepage/home-planet.png)',
        'aboutImage': 'url(https://www.nasa.gov/wp-content/uploads/2023/10/moon-and-mars.png?w=2048)',
        'aboutImage2': 'url(@/assets/images/about/bg-about.png)',
      },
      plugins: [],
    }
  }
}
