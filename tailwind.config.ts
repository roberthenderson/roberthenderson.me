import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: {
          '50': '#f7f8f8',
          '100': '#edeef1',
          '200': '#d8dbdf',
          '300': '#b6bac3',
          '400': '#8e95a2',
          '500': '#6b7280',
          '600': '#5b616e',
          '700': '#4a4e5a',
          '800': '#40444c',
          '900': '#383a42',
          '950': '#25272c',
        },
        teal: {
          '50': '#f2fbfa',
          '100': '#d2f5f2',
          '200': '#a6e9e6',
          '300': '#71d7d6',
          '400': '#55c1c3',
          '500': '#2b9da1',
          '600': '#207b81',
          '700': '#1d6368',
          '800': '#1c4e53',
          '900': '#1b4346',
          '950': '#0a2629',
        },
        orange: {
          '50': '#fff8eb',
          '100': '#feeac7',
          '200': '#fdd28a',
          '300': '#fcbb4d',
          '400': '#fbab24',
          '500': '#f59e0b',
          '600': '#d98b06',
          '700': '#b47409',
          '800': '#92610e',
          '900': '#78510f',
          '950': '#452c03',
        },
        text: {
          primary: '#4a4e5a',
          secondary: '#8e95a2',
          tertiary: '#d8dbdf',
        },
        icon: {
          base: '#1d6368',
          hover: '#b47409',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
