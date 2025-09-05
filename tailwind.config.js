/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sabi: {
          green: "#9FC131", // A vibrant, techy green from the logo
          blue: "#007CC3", // A deep, trustworthy blue
          dark: "#1A202C", // For primary text
          gray: {
            DEFAULT: "#A0AEC0", // For secondary text
            light: "#F7FAFC", // For backgrounds
            card: "#FFFFFF",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Using Inter for a clean, modern UI
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