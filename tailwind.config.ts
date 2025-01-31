/** @type {import('tailwindcss').Config} */
import allColors from 'tailwindcss/colors';

export const darkMode = 'selector';
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];

const entries = Object.entries(
  Object.getOwnPropertyDescriptors(allColors),
).filter(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ([key, descriptor]) => {
    return typeof descriptor.get !== 'function'; // Exclude getters
  },
);

export const colors = Object.fromEntries(
  entries.map(([key, descriptor]) => [key, descriptor.value]),
);

export const theme = {
  extend: {
    spacing: {
      13: '3.25rem',
      18: '4.5rem',
      26: '6.5rem',
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
      ...colors,
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      border: {
        card: colors.indigo[400],
        dark: {
          card: colors.slate[700],
        },
      },
    },
  },
};
export const plugins = [];
