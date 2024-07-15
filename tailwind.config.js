const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      animation: {
        fade: "fadeIn .5s ease-in-out",
        fade_out: "fadeOut .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opcaity: 1 },
          to: { opacity: 0 },
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
