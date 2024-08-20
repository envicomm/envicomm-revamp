/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midgreen: '#8CBF3F',
        lightgreen: '#BBD979',
        darkgreen: '#547326',
      },
      
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'forest': "url('/src/assets/forest.png')",
        'services': "url('/src/assets/services.jpg')",
        'aboutbg' : "url('/src/assets/aboutbg.jpg')",
        'homebg'  : "url('/src/assets/homebg.jpg')",
        'project1' : "url('/src/assets/project1.jpg')",
        'footer' : "url('/src/assets/footer.png')",
        'bgfeedback' : "url('/src/assets/bgfeedback.jpg)",
      },
    },
  },
  plugins: [
  ],
}

