import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, useEffect, useRef } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { useAppContext } from '../../app/AppContextProvider';
import { Navigation } from './Navigation';

const THEME_ICON_SIZE = 28;

export const Header: FC = () => {
  const { darkMode, setDarkMode, setHeaderRef } = useAppContext();
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => setHeaderRef(headerRef), [setHeaderRef]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <header
      ref={headerRef}
      className={clsxMerge(
        'sticky left-0 top-0',
        'flex items-center justify-between gap-2',
        'h-16 w-full px-8',
        'bg-indigo-200 text-violet-800',
        'dark:bg-indigo-950 dark:text-violet-300',
        'transition-all',
      )}
    >
      <button onClick={handleLogoClick} className="font-dmSerif text-logo">
        .robert
      </button>
      <div className="flex items-center gap-20">
        <Navigation />
        <button
          onClick={toggleDarkMode}
          className="opacity-100 transition-opacity hover:opacity-75"
        >
          {darkMode ? (
            <MdDarkMode size={THEME_ICON_SIZE} />
          ) : (
            <MdOutlineDarkMode size={THEME_ICON_SIZE} />
          )}
        </button>
      </div>
    </header>
  );
};
