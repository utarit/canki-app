/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d3120e",
          secondary: "#31b7d6",
          accent: "#75ea8a",
          neutral: "#28273A",
          "base-100": "#EEEFF2",
          info: "#8FD8EA",
          success: "#5FE7CE",
          warning: "#F1D274",
          error: "#E8596C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
