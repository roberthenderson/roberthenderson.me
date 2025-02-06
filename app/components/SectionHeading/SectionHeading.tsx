import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, PropsWithChildren } from 'react';

interface SectionHeadingProps {
  className?: string;
}

export const SectionHeading: FC<PropsWithChildren<SectionHeadingProps>> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={clsxMerge(
        'flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6',
        'text-center font-dmSerif font-semibold text-indigo-950 dark:text-slate-200',
        'text-4xl sm:text-5xl lg:text-6xl',
        className,
      )}
    >
      {children}
    </h3>
  );
};
