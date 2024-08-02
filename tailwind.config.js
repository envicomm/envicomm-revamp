/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend:{
        backgroundImage:{
          'custom-image': "url('../assets/homebg.jpg')"
        }
      }
    },

  },
  plugins: [],
}

