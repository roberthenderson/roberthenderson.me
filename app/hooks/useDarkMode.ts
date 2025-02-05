'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'system' && systemTheme) {
      setTheme(systemTheme);
    }
  }, [theme, systemTheme, setTheme]);
};
