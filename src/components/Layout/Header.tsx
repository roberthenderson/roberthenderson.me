import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, useEffect, useRef } from 'react';
import { useAppContext } from '../../app/AppContextProvider';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import { Logo } from '../Logo/Logo';
import { Navigation } from './Navigation';

export const Header: FC = () => {
  const { setHeaderRef } = useAppContext();
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => setHeaderRef(headerRef), [setHeaderRef]);

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
      <Logo />
      <div
        className={clsxMerge('flex items-center gap-6', 'md:gap-10 lg:gap-20')}
      >
        <Navigation />
        <DarkModeToggle />
      </div>
    </header>
  );
};
