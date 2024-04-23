/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Pops", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        'body': '#D5C8BB',
        'txt': '#4E2A27',      
        'detail': '#BD9477' 
            
      },
      boxShadow: {
        // shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowOne: "2px 2px 2px #D5C8BB"
      },
    },
  },
  plugins: [],
}


