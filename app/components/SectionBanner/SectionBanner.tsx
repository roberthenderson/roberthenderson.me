import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, PropsWithChildren } from 'react';

interface SectionBannerProps {
  className?: string;
}

export const SectionBanner: FC<PropsWithChildren<SectionBannerProps>> = ({
  className,
  children,
}) => (
  <div
    className={clsxMerge(
      'dark:bg-slate-750 relative w-full overflow-hidden bg-violet-200 py-5',
      className,
    )}
  >
    <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-8 pb-2 pt-4 text-center sm:px-12 sm:text-left md:px-12 md:py-8 2xl:px-0">
      {children}
    </div>
  </div>
);
