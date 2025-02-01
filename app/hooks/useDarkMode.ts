'use client';

import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference) {
      setDarkMode(JSON.parse(storedPreference));
    } else if (typeof window !== 'undefined') {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    // prevents a flash of the screen if the user has selected light mode
    setReady(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
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
  }, [darkMode]);

  return { ready, darkMode, setDarkMode };
};
