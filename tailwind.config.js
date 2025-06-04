module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-reverse": "spin-reverse 20s linear infinite",
        spin: 'spin 1.5s linear infinite', // Default spin for general use
        'spin-slow': 'spin-slow 4s linear infinite', // Custom slow spin for the loader
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        spin: {
          to: { transform: 'rotate(360deg)' }, // Default spin keyframe
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' }, // Slow spin keyframe
        },
      },
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
