/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sabi: {
          green: "#9FC131",
          blue: "#007CC3",
          dark: "#1A202C",
          // Add these new dark theme colors
          'dark-blue': '#1A202C',
          'dark-blue-light': '#2D3748',
          gray: {
            DEFAULT: "#A0AEC0",
            light: "#F7FAFC",
            card: "#FFFFFF",
          },
          white: "#FFFFFF",
          black: "#000000",
          red: "#E53E3E", // A better red
          orange: "#DD6B20",
          purple: "#805AD5",
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