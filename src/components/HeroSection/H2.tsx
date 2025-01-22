import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';

export const H2: FC = () => {
  return (
    <h2
      className={clsxMerge(
        'pb-6 text-center font-dmSerif font-semibold text-purple-950 transition-colors',
        'dark:text-yellow-600',
        'sm:text-right',
      )}
    >
      <span
        className={clsxMerge(
          'leading-16 relative text-8xl',
          'max-sm:tracking-wider sm:-right-5 sm:text-7xl sm:text-[5rem] md:-right-6 md:text-8xl lg:-right-8 lg:text-9xl',
        )}
      >
        <span className="max-sm:ml-2.5 sm:mr-3">Hello</span>
        <span className="max-sm:hidden">world.</span>
      </span>
    </h2>
  );
};
