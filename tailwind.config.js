/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom':['2px 1px 2px rgba(100, 200, 40, 0.9),0 0.5px 30px rgba(200, 120, 300,0.7)'],
        'custom2':['2px 1px 2px rgba(82, 255, 197, 0.9),0 0.5px 30px rgba(82, 255, 197,0.7)']
      },
      fontFamily:{
        'JetBrains':['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}