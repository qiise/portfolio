/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', 'cursive'],
      },
      keyframes: {
        'bounce-small': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },  // smaller bounce, only 5% up
        },
        'bounce-tiny': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },  // smaller bounce, only 5% up
        },
      },
      animation: {
        'bounce-slow': 'bounce-small 3s infinite',
        'bounce-smaller': 'bounce-tiny 3s infinite'
      },
    },
  },
}
