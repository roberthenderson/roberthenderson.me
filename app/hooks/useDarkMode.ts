'use client';

import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    const isDarkMode: boolean = storedPreference
      ? JSON.parse(storedPreference)
      : false;
    if (
      isDarkMode ||
      (!storedPreference &&
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty(
        '--foreground',
        colors.slate[200],
      );
      document.documentElement.style.setProperty(
        '--background',
        colors.slate[800],
      );
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty(
        '--foreground',
        colors.slate[950],
      );
      document.documentElement.style.setProperty(
        '--background',
        colors.indigo[200],
      );
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
};
