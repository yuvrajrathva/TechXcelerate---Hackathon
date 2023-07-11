/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: ["#root"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#fff",
        },
        secondary: {
          light: "#ff4081",
          main: "#f50057",
          dark: "#c51162",
          contrastText: "#fff",
        },
      },  
    },
  },
  plugins: [],
};
