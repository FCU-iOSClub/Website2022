module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: [
        "Noto Serif TC",
        "ui-serif",
        "Georgia, Cambria",
        "Times New Roman",
        "Times, serif",
      ],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        iosbgblue: "#C2DED3",
        ioscardblue: "#8098B5",
        iostextblue: "#4771A3",
        footerbg: "#4F7096",
        btnbg: "#445484",
        btnbg1: "#FFF5D1",
      },
    },
  },
  plugins: [],
};
