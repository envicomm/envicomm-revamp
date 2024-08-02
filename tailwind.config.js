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
      },
    },
  },
  plugins: [
  ],
}

