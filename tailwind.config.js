/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
    },
    screens: {
      'md': '1024px',
      'lg': {'max': '1272px'}, 
      'xl': '1536px',
    },
    extend: {
      colors: {
        'custom-orange': '#F27F35'
      },
      fontSize: {
        'h2': '1.875rem',
        'h1': '2.125rem'
      }
    },
  },
  plugins: [],
}
