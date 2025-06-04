module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Make sure Tailwind can see your files
  darkMode: false,
  theme: {
    extend: {
      animation: {
        spin: "spin 1.5s linear infinite",
        "spin-slow": "spin-slow 4s linear infinite",
        "spin-reverse": "spin-reverse 20s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      fontFamily: {
        monofett: ["Monofett", "cursive"],
      },
    },
  },
  plugins: [],
};
