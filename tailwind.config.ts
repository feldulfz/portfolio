// tailwind.config.js
export default {
  content: ["./src/**/*.{html,ts,scss,css}"], // Angular scans templates + TS + styles
  darkMode: "class", // toggle dark mode with a class
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6", // custom color example
          dark: "#1e40af",
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
