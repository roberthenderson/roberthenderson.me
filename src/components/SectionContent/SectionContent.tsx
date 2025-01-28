import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, ReactNode } from 'react';

interface SectionContentProps {
  children: ReactNode;
  alwaysColumn?: boolean;
  className?: string;
}

export const SectionContent: FC<SectionContentProps> = ({
  children,
  alwaysColumn,
  className,
}) => {
  return (
    <div
      className={clsxMerge(
        'relative mx-auto flex max-w-screen-xl flex-col justify-center gap-8 px-8',
        'md:flex-row md:px-12 2xl:px-0',
        alwaysColumn && 'px-8 text-center md:flex-col lg:px-0',
        className,
      )}
    >
      {children}
    </div>
  );
};
