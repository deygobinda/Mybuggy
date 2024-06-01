/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "display" : ["Poppins" , "sans-serif"],
        "body" : ["Inter" , "sans-serif"]
      },
      colors:{
        "primary" : "#3238f2"
      }
    },
  },
  plugins: [],
}

