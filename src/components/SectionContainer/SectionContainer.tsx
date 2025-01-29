import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, PropsWithChildren } from 'react';

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={clsxMerge(
        'flex flex-col',
        'relative overflow-hidden transition-all',
      )}
    >
      {children}
    </div>
  );
};
