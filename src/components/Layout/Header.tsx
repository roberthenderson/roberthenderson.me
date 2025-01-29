import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, useEffect, useRef } from 'react';
import { useAppContext } from '../../app/AppContextProvider';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import { EmailButton } from '../EmailButton/EmailButton';
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
        'h-16 w-full px-4 lg:h-18',
        'border-b-3 border-violet-600 bg-indigo-200',
        'dark:border-slate-600 dark:bg-slate-800',
        'transition-all',
        'md:px-8',
      )}
    >
      <Logo />
      <div className="sm:hidden">
        <Navigation />
      </div>
      <div className={clsxMerge('flex items-center')}>
        <div className="max-sm:hidden">
          <Navigation />
        </div>
        <div className="flex items-center gap-4 sm:pl-8 md:pl-12">
          <EmailButton location="header" />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};
