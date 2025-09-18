/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Add this line for dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#5f6FFF', 
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}
