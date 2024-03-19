/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEED00",
        grayInput: "#F2F4F7",
        modalGray: "#F6F6F6",
      },
      container: {
        center: true,
        screens: {
          lg: "1440px",
        }
      },
      screens: {
        md: "765px",
        lg: "1366px",
      }
    },
  },
  plugins: [],
}