/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      '1': '1px',
    },
    colors: {
      'white': '#FFFFFF',
      'grey': '#CCCCCCCC',
      'light-grey': '#DADADA',
      'dark-grey': '#BABABA'
    },
    extend: {
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%'
      },
      width: {
        '600': '37.5rem',
        '1200': '75rem'
      }
    },
  },
  plugins: [],
}
