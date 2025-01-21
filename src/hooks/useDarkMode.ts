import { useEffect, useState } from 'react';

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
  }, [darkMode]);

  return { ready, darkMode, setDarkMode };
};
