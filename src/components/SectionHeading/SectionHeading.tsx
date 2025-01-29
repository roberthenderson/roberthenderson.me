import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h3
      className={clsxMerge(
        'text-center font-dmSerif text-4xl font-semibold text-indigo-950 sm:text-5xl dark:text-slate-200',
        'lg:text-6xl',
        className,
      )}
    >
      {children}
    </h3>
  );
};
