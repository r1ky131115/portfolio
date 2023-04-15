/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/assets/**/*.{js,jsx,ts,tsx}",
    "./src/assets/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        writing: {
          from: { width: "100%" },
          to: { width: "0 " },
        },
      },
      animation: {
        gradient: "gradient 5s ease infinite",
        writing: "writing  3s steps(30) infinite alternate",
      },
    },
  },
  plugins: [],
}