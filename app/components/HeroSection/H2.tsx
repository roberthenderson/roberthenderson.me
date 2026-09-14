import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

export const H2: FC = () => {
  return (
    <div className="flex justify-center gap-2 sm:justify-end">
      <h2
        className={clsxMerge(
          'flex flex-col pr-1.5 pl-2 text-center leading-10 lg:pr-2',
          'sm:text-right',
        )}
      >
        <p
          className={clsxMerge(
            'pl-0.5 font-leagueSpartan text-[26px] text-slate-500 tracking-tight',
            'sm:pl-0 sm:text-[22px] sm:tracking-wide lg:text-[25px]',
          )}
        >
          Accomplished Senior
        </p>
        <p
          className={clsxMerge(
            'text-left font-leagueSpartan text-6xl text-indigo-800',
            'dark:text-slate-200',
            'sm:text-[53px] sm:tracking-tight lg:text-6xl lg:tracking-normal',
          )}
        >
          <span className="block text-[55px] leading-11 sm:text-[49px] lg:text-[55px]">
            Full-Stack
          </span>
          <span className="leading-10">Engineer</span>
        </p>
      </h2>
    </div>
  );
};
