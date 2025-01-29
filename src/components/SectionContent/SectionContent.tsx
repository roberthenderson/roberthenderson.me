import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, ReactNode } from 'react';

interface SectionContentProps {
  children: ReactNode;
  alwaysColumn?: boolean;
  showPadding?: boolean;
  className?: string;
}

export const SectionContent: FC<SectionContentProps> = ({
  children,
  alwaysColumn,
  showPadding = true,
  className,
}) => {
  return (
    <div
      className={clsxMerge(
        'relative mx-auto flex max-w-screen-xl flex-col justify-center gap-8',
        'md:flex-row',
        alwaysColumn &&
          'max-w-full gap-0 px-0 pb-0 text-center md:flex-col md:p-0',
        showPadding && 'px-8 py-8 md:px-12 md:py-16 2xl:px-0',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const SectionInnerContent: FC<{
  children: ReactNode;
  columns?: number;
  className?: string;
}> = ({ children, columns = 2, className }) => (
  <div
    className={clsxMerge(
      'mx-auto max-w-screen-xl',
      'grid grid-cols-1 items-center justify-center gap-6',
      'mb-2 px-6 sm:gap-0 sm:px-8 md:px-12 lg:gap-10 lg:px-16',
      columns === 2 && 'sm:grid-cols-2',
      columns === 3 &&
        'gap-8 sm:grid-cols-3 sm:gap-0 md:px-4 lg:gap-0 lg:px-6 xl:gap-20 xl:px-12',
      className,
    )}
  >
    {children}
  </div>
);
