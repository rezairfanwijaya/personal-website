/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js,jsx}", "public/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Kanit' :['Kanit', 'sams-serif']
    },
    colors: {
      'primary': '#763EE7',
      'primary-hover' :'#482A83',
      'dark-card': '#191919',
      'white' : '#ffff',
      'dark-primary' : '#161616',
      'white-mute' : '#C0C0C0',
      'dark-button-card' : '#212121'
    },
  },
  plugins: [],
}
