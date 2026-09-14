import type { FC, PropsWithChildren } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

interface SectionBannerProps {
  className?: string;
}

export const SectionBanner: FC<PropsWithChildren<SectionBannerProps>> = ({
  className,
  children,
}) => (
  <div
    className={clsxMerge(
      'relative w-full overflow-hidden bg-violet-200 py-5 dark:bg-slate-750',
      className,
    )}
  >
    <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-8 pt-4 pb-2 text-left sm:px-12 md:px-12 md:py-8 2xl:px-0">
      {children}
    </div>
  </div>
);
