import { useAppContext } from '@/src/app/AppContextProvider';
import { FC } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const THEME_ICON_SIZE = 28;

export const DarkModeToggle: FC = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleDarkMode}
      className="opacity-100 transition-opacity hover:opacity-80"
    >
      {darkMode ? (
        <MdDarkMode size={THEME_ICON_SIZE} className="text-yellow-600" />
      ) : (
        <MdOutlineDarkMode size={THEME_ICON_SIZE} className="text-amber-700" />
      )}
    </button>
  );
};
