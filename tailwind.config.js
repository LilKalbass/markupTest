/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '60px'
    },
    screens: {
      ph: '320px',
      pl: '460px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1920px'
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-Montserrat)', 'sans-serif'],
      },
      colors: {
        yellow: '#FFC711',
        grey: {
          textButton: '#4D4D4D',
          iconButton: '#272727',
          aboutText: '#2C2C2C'
        }
      },
      backgroundImage: {
        hero:'url(/assets/hero/bg1.webp)',
        about:'url(/assets/about/bg3.webp)',
        footer:'url(/assets/footer/bg2.webp)',
      },
    },
  },
  plugins: [],
};
