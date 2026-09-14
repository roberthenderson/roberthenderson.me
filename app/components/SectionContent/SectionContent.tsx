import type { FC, PropsWithChildren } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

interface SectionContentProps {
  className?: string;
  layout?: 'row' | 'column';
}

export const SectionContent: FC<PropsWithChildren<SectionContentProps>> = ({
  children,
  className,
  layout = 'column',
}) => {
  return (
    <div
      className={clsxMerge(
        'flex flex-col justify-center gap-8',
        'mx-auto max-w-screen-xl',
        'px-8 py-12 sm:px-12 md:py-16 2xl:px-0',
        'text-center',
        layout === 'row' && 'md:flex-row',
        className,
      )}
    >
      {children}
    </div>
  );
};
