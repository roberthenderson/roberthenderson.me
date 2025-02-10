import type { Config } from 'tailwindcss';
import allColors from 'tailwindcss/colors';

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

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        26: '6.5rem',
        34: '8.5rem',
        88: '22rem',
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
        500: '500',
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
        slate: {
          ...colors.slate,
          750: '#263345',
          850: '#172032',
        },
        violet: {
          ...colors.violet,
          150: '#e8e4fe',
        },
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
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
