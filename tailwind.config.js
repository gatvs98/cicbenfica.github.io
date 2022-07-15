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
        'custom-orange': 'rgb(94.9%, 49.8%, 20.8%)',
        'faded-black': 'rgb(48%, 48%, 48%)'
      },
      fontSize: {
        'h2': '1.875rem',
        'h1': '2.125rem'
      }
    },
  },
  plugins: [],
}
