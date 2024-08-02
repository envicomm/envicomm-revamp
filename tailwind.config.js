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
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },

  },
  plugins: [],
}

