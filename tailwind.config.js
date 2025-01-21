/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        logo: '2.5rem',
      },
      fontFamily: {
        poppins: '"Poppins", serif',
        dmSerif: '"DM Serif Text", serif',
      },
      fontWeight: {
        500: 500,
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        icon: {
          base: '#1d6368',
          hover: '#b47409',
        },
      },
    },
  },
  plugins: [],
};
