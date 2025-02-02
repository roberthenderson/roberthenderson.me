'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { sendGAEvent } from '@next/third-parties/google';
import { FC } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const THEME_ICON_SIZE = 28;

export const DarkModeToggle: FC = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    sendGAEvent(
      'event',
      `dark_mode_toggle_click__changing_to_${darkMode ? 'lightMode' : 'darkMode'}`,
    );
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="opacity-100 transition-opacity hover:opacity-80"
    >
      {darkMode ? (
        <MdDarkMode size={THEME_ICON_SIZE} className="text-yellow-600" />
      ) : (
        <MdOutlineDarkMode size={THEME_ICON_SIZE} className="text-indigo-950" />
      )}
    </button>
  );
};
