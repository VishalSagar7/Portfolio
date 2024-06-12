/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto : ["Roboto Condensed",'sans-serif'],
        poppins : ["Poppins", 'sans-serif'],
        poetse : ["Poetsen One",'sans-serif'] 
      }
    },
  },
  plugins: [],
}

