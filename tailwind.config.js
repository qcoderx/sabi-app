/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sabi: {
          green: "#9FC131",
          blue: "#007CC3",
          dark: "#1A202C",
          gray: {
            DEFAULT: "#A0AEC0",
            light: "#F7FAFC",
            card: "#FFFFFF",
          },
          white: "#FFFFFF",
          black: "#000000",
          red: "#FF0000",
          orange: "#FFA500",
          yellow: "#FFFF00",
          purple: "#800080",
          pink: "#FFC0CB",
          brown: "#A52A2A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px rgba(0, 0, 0, 0.07)',
      },
      borderRadius: {
        'xl': '1.0rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};