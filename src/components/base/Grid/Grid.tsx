import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, PropsWithChildren } from 'react';

interface GridProps {
  columns?: number;
  className?: string;
}

export const Grid: FC<PropsWithChildren<GridProps>> = ({
  children,
  columns = 2,
  className,
}) => (
  <div
    className={clsxMerge(
      'mx-auto max-w-screen-xl',
      'grid grid-cols-1 items-center justify-center gap-6',
      'mb-2 lg:gap-10',
      columns === 2 && 'sm:grid-cols-2',
      columns === 3 && 'gap-8 sm:grid-cols-3 lg:gap-0 xl:gap-20',
      className,
    )}
  >
    {children}
  </div>
);
