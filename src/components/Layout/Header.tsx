import { clsxMerge } from '@/src/utils/clsxMerge';
import Link from 'next/link';
import { FC } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { useAppContext } from '../../app/AppContextProvider';
import { Navigation } from './Navigation';

const THEME_ICON_SIZE = 28;

export const Header: FC = () => {
  const { isDarkTheme, toggleTheme } = useAppContext();

  return (
    <header
      className={clsxMerge(
        'sticky left-0 top-0',
        'flex items-center justify-between gap-2',
        'h-16 w-full px-8',
        'bg-indigo-200 text-violet-800',
        'dark:bg-indigo-950 dark:text-violet-300',
        'transition-all',
      )}
    >
      <Link href="/" className="font-dmSerif text-logo">
        .robert
      </Link>
      <div className="flex items-center gap-20">
        <Navigation />
        <button
          onClick={toggleTheme}
          className="opacity-100 transition-opacity hover:opacity-75"
        >
          {isDarkTheme ? (
            <MdDarkMode size={THEME_ICON_SIZE} />
          ) : (
            <MdOutlineDarkMode size={THEME_ICON_SIZE} />
          )}
        </button>
      </div>
    </header>
  );
};
