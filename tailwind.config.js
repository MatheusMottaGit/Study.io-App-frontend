/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        title: 'Poppins_700Bold',
        body: 'Poppins_400Regular'
      }, 

      colors: {
        green: {
          200: '#34E0A1'
        }
      }
    },
  },
  plugins: [],
}

