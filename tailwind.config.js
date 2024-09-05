/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',    // Extra extra small devices (small phones)  
        'xs': '480px',    // Extra small devices (phones, small tablets)
        'sm': '640px',    // Small devices (phones, tablets)
        'md': '768px',    // Medium devices (tablets, small laptops)
        'lg': '1024px',   // Large devices (laptops, desktops)
        'xl': '1280px',   // Extra large devices (desktops)
        '2xl': '1536px',  // 2x extra large devices (large desktops)
        '3xl': '1920px',  // 3x extra large devices (large desktops)
        '4xl': '2560px',  // 4x extra large devices (large screens, 4K)
        '5xl': '3840px',  // 5x extra large devices (large 4K screens)
        '6xl': '5120px',  // 6x extra large devices (large ultra-wide screens)
        '7xl': '6400px',  // 7x extra large devices (large ultra-wide screens)
      },
    },
  },
  plugins: [],
}
