module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        down: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(140px)' },
        },
        right: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(800px)' },
        }
      },
      animation: {
        down: 'down 1.5s ease-in-out',
        right: 'right 1.5s ease-in-out'
      },
      fontFamily: {
        'sans': 'Lato, Helvetica, Arial, sans-serif'
      },
      colors: {
        "primary-color": "#000032"
      }
    },
  },
  plugins: [],
}
