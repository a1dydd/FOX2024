/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '360px',   // Small phones
        'sm': '640px',   // Phones, small tablets
        'md': '768px',   // Tablets, small laptops
        'lg': '1024px',  // Laptops, desktops
        'xl': '1280px',  // Large desktops
        '2xl': '1440px', // Extra large desktops (2K screens)
        '3xl': '1920px', // Full HD screens (1080p)
        '4xl': '2560px', // Quad HD screens (1440p)
        '5xl': '3840px', // 4K screens

      },
    },
  },
  plugins: [],
}
