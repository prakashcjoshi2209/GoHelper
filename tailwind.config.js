/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify your React component paths
  theme: {
    extend: {
      colors: {
        customBlue: "#4070f4", // Add your custom color here
      },
    },
  },
  plugins: [],
};
