/* eslint no-use-before-define: 0 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mark: ["Mark", "sans-serif"],
      georgia: ["Georgia", "sans-serif"],
      anvir: ["Anvir", "sans-serif"],
    },
    colors: {
      "bg-main": "#FAECE1;",
      "brand-green": "#A3D9CF"
    },
    extend: {
      colors: {
        'primary': '#A3D9CF',
        "black": "#1F1F1F",
      }
    },
  },
  plugins: [],
};
