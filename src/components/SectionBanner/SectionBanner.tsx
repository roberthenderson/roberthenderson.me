import { FC, PropsWithChildren } from 'react';

export const SectionBanner: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative w-full overflow-hidden bg-violet-200 py-5 dark:bg-slate-700/40">
    <div className="mx-auto max-w-screen-xl px-8 py-4 text-center sm:px-12 sm:text-left md:px-12 md:py-8 2xl:px-0">
      {children}
    </div>
  </div>
);
