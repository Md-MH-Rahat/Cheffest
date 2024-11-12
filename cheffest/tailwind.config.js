/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1202px',
      // => @media (min-width: 1280px) { ... }
    },

    fontFamily: {
      'inter': ['Inter', 'serif']
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('../images/Banner.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

