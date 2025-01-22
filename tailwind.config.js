/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '72px',
      },
      letterSpacing: {
        wide: '0.01em',
        wider: '0.02em',
        tight: '-0.005em',
      },
      fontSize: {
        logo: '2.5rem',
      },
      fontFamily: {
        leagueSpartan: '"League Spartan", serif',
        dmSerif: '"DM Serif Text", serif',
        dmSans: '"DM Sans", serif',
      },
      fontWeight: {
        500: 500,
      },
      borderWidth: {
        3: '3px',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
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
