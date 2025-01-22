import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';

export const H1: FC = () => {
  return (
    <div className="flex justify-center gap-2 sm:justify-end">
      <h1
        className={clsxMerge(
          'flex flex-col pl-2 pr-1 text-center leading-10',
          'sm:text-right',
        )}
      >
        <p
          className={clsxMerge(
            'font-leagueSpartan pb-1 pl-0.5 text-left text-[28px] tracking-tight text-yellow-600 transition-colors',
            'sm:pl-0 sm:text-2xl sm:tracking-wide lg:pl-0.5 lg:text-[28px] lg:tracking-tight',
          )}
        >
          I'm an Experienced
        </p>
        <p
          className={clsxMerge(
            'font-leagueSpartan text-left text-6xl text-violet-800 transition-colors',
            'dark:text-violet-200',
            'sm:text-[53px] sm:tracking-tight lg:text-6xl lg:tracking-normal',
          )}
        >
          <span className="block leading-10">Frontend</span>
          <span className="leading-10">Engineer</span>
        </p>
      </h1>
    </div>
  );
};
