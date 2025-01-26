/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const darkMode = 'selector';
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];

const entries = Object.entries(Object.getOwnPropertyDescriptors(colors)).filter(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ([key, descriptor]) => {
    return typeof descriptor.get !== 'function'; // Exclude getters
  },
);

const nonDeprecatedColors = Object.fromEntries(
  entries.map(([key, descriptor]) => [key, descriptor.value]),
);

export const theme = {
  extend: {
    spacing: {
      13: '3.25rem',
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
      5: '5px',
      12: '12px',
    },
    lineHeight: {
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
    },
    colors: {
      ...nonDeprecatedColors,
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      border: {
        card: nonDeprecatedColors.indigo[400],
        dark: {
          card: nonDeprecatedColors.slate[700],
        },
      },
    },
  },
};
export const plugins = [];
