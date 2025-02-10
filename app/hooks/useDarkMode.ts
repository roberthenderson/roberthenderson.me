'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export const useDarkMode = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === 'system' && systemTheme) {
      setTheme(systemTheme);
    }
    const themeColorElement = document.querySelector(
      'meta[name="theme-color"]',
    );
    if (theme === 'dark') {
      themeColorElement?.setAttribute('content', '#1e293b');
    } else {
      themeColorElement?.setAttribute('content', '#c7d2fe');
    }
  }, [theme, systemTheme, setTheme]);
};
