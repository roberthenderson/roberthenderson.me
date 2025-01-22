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
        'sticky left-0 top-0 z-50',
        'flex items-center justify-between gap-2',
        'h-16 w-full px-4',
        'border-b-3 border-yellow-600 bg-indigo-300 text-violet-500',
        'dark:border-yellow-700 dark:bg-indigo-950 dark:text-violet-300',
        'transition-all',
        'md:px-8',
      )}
    >
      <button
        onClick={handleLogoClick}
        className="font-dmSerif text-logo group pb-1"
      >
        <span className="text-violet-900 transition-colors dark:text-violet-400">
          .r
        </span>
        <span className="transition-all group-hover:text-violet-900 max-sm:hidden dark:text-violet-600 group-hover:dark:text-violet-300">
          obert
        </span>
      </button>
      <div
        className={clsxMerge('flex items-center gap-6', 'md:gap-10 lg:gap-20')}
      >
        <Navigation />
        <button
          onClick={toggleDarkMode}
          className="opacity-100 transition-opacity hover:opacity-75"
        >
          {darkMode ? (
            <MdDarkMode size={THEME_ICON_SIZE} className="text-yellow-600" />
          ) : (
            <MdOutlineDarkMode
              size={THEME_ICON_SIZE}
              className="text-violet-600"
            />
          )}
        </button>
      </div>
    </header>
  );
};
