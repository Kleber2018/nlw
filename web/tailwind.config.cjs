/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'san-serif']
    },
    extend: {
      backgroundImage: {
        meu_backgroud: "url('background-galaxy.png')",
        'nlw-gradiente': 'linear-gradient(89.86deg, #9572fc 27.08%, #43e7ad 62.94%, #e1d55d 33.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.88%)'
      }
    },
  },
  plugins: [],
}
