import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, ReactNode } from 'react';

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

export const SectionContent: FC<SectionContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsxMerge(
        'mx-auto flex max-w-screen-xl flex-col justify-center gap-8 px-8',
        'md:flex-row md:gap-6 lg:gap-8 lg:px-12 2xl:px-0',
        className,
      )}
    >
      {children}
    </div>
  );
};
