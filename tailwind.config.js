module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monofett: ["Monofett", "cursive"],
      },
      colors: {
        light: {
          bulb: "#ccff99",
          background: "#fffce9",
        },
        dark: {
          bulb: "#888888",
          background: "#000011",
        },
        red: {
          bulb: "#ff9999",
          background: "#330000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
