/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify your React component paths
  theme: {
    extend: {
      fontFamily: {
        dosis: ['"Dosis"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        prata: ['"Prata"', 'serif'],
        rubik: ['"Rubik"', 'sans-serif'],
        // stylish: ['"Playfair Display"', 'serif'],
        // sans: ['Poppins', 'sans-serif'], // Replace default sans with Poppins
      },
      colors: {
        customBlue: "#4070f4", // Add your custom color here
      },
    },
  },
  plugins: [],
};
