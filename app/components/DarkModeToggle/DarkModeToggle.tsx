'use client';

import { useDarkMode } from '@/app/hooks/useDarkMode';
import { sendGAEvent } from '@next/third-parties/google';
import { useTheme } from 'next-themes';
import { FC, useMemo } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const THEME_ICON_SIZE = 28;

export const DarkModeToggle: FC = () => {
  const { theme, setTheme } = useTheme();
  useDarkMode();
  const darkMode = useMemo(() => theme === 'dark', [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    sendGAEvent(
      'event',
      `dark_mode_toggle_click__changing_to_${darkMode ? 'light' : 'dark'}`,
    );
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="opacity-100 transition-opacity hover:opacity-80"
    >
      <MdDarkMode
        size={THEME_ICON_SIZE}
        className="hidden text-yellow-600 dark:block"
      />
      <MdOutlineDarkMode
        size={THEME_ICON_SIZE}
        className="text-indigo-950 dark:hidden"
      />
    </button>
  );
};
