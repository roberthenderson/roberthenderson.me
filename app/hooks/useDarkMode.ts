'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import colors from 'tailwindcss/colors';

export const useDarkMode = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'system' && systemTheme) {
      setTheme(systemTheme);
    }
  }, [theme, systemTheme, setTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty(
        '--foreground',
        colors.slate[200],
      );
      document.documentElement.style.setProperty(
        '--background',
        colors.slate[800],
      );
    } else {
      document.documentElement.style.setProperty(
        '--foreground',
        colors.slate[950],
      );
      document.documentElement.style.setProperty(
        '--background',
        colors.indigo[200],
      );
    }
  }, [theme]);
};
