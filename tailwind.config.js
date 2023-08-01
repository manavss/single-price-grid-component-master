/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        lightCyan: "#4abebd",
        brightYellow: "hsl(71, 73%, 54%)",
        lightGray: "hsl(204, 43%, 93%)",
        grayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
