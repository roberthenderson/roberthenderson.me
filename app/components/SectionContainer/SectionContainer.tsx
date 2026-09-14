import type { FC, PropsWithChildren } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

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
