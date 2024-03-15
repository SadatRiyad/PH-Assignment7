/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#150B2B",
        secondary: "#150B2B99",
        tertiary: "#878787",
        "p-color": "#FFFFFF",
        green: "#0BE58A",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};