'use client';

import { navigateToSection } from '@/app/utils/navigateToSection';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const Logo: FC = () => {
  const pathname = usePathname();

  const handleLogoClick = () =>
    navigateToSection('/', null, `logo_click__from_${pathname.slice(1)}`);

  return (
    <button
      aria-label="Robert Henderson"
      onClick={handleLogoClick}
      className="group pb-2 font-dmSerif text-logo sm:pb-1"
    >
      <span className="text-violet-950 transition-colors dark:text-yellow-600">
        .r
      </span>
      <span className="text-violet-600 transition-all group-hover:text-violet-950 max-sm:hidden dark:text-slate-400 group-hover:dark:text-yellow-600">
        obert
      </span>
    </button>
  );
};
