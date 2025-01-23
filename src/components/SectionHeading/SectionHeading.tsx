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
        'text-center font-dmSerif text-5xl font-semibold text-indigo-950 dark:text-slate-300',
        'lg:text-6xl',
        className,
      )}
    >
      {children}
    </h3>
  );
};
