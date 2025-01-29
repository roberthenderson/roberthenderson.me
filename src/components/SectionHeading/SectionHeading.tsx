import { clsxMerge } from '@/src/utils/clsxMerge';
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
        'text-center font-dmSerif text-4xl font-semibold text-indigo-950 sm:text-5xl dark:text-slate-200',
        'lg:text-6xl',
        className,
      )}
    >
      {children}
    </h3>
  );
};
