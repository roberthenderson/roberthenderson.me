import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, ReactNode } from 'react';

export const SectionBanner: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className={clsxMerge(
      'relative w-full overflow-hidden bg-violet-200 py-5 dark:bg-slate-700/40',
      'md:py-8',
    )}
  >
    <div className="mx-auto max-w-screen-xl py-4 text-left md:px-12 md:py-0 lg:px-16">
      {children}
    </div>
  </div>
);
