import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/components/*.vue",
      "./src/pages/*.vue",
      "./src/*.vue"
  ],
    theme: {
        extend: {
            colors: {
                primary: colors.purple,
                secondary: colors.zinc
            }
        }
    },
  plugins: [],
}

