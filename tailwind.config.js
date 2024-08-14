/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./img/img1.jpg')",
      },
    },
  },
  plugins: [],
}
