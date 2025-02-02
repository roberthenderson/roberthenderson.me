import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC } from 'react';

export const H3: FC = () => {
  return (
    <h3
      className={clsxMerge(
        'pb-5 text-center font-dmSerif font-semibold text-indigo-950 transition-colors',
        'dark:text-yellow-600',
        'sm:text-right',
      )}
    >
      <span
        className={clsxMerge(
          'relative text-8xl leading-16',
          'max-sm:tracking-wider sm:-right-5 sm:text-7xl sm:text-[5rem] md:-right-6 md:text-8xl lg:-right-8 lg:text-9xl',
        )}
      >
        <span className="max-sm:ml-2.5 sm:mr-3">Hello</span>
        <span className="max-sm:hidden">world.</span>
      </span>
    </h3>
  );
};
