/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      small: "300px",
      middle: "768px",
      large: "1216px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          large: "80px",
        },
      }
    },
  },
  plugins: [],
}
