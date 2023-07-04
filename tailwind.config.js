module.exports = {
  content: ["./src/**/*.{js,html,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      brightness: {
        10: ".1",
        25: ".25",
        175: "1.75",
      },
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      colors: {
        darkbg: "#1e293b",
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        serif: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
