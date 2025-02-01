'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC } from 'react';

export const H1: FC = () => {
  return (
    <h1
      className={clsxMerge(
        'text-center font-500 tracking-wider text-indigo-800 transition-colors',
        'dark:text-slate-200',
        'sm:text-right',
        'relative -top-4 sm:-top-5',
      )}
    >
      <span className="pl-0.5 text-[21px] sm:pl-0 sm:pr-1.5 sm:text-2xl sm:tracking-wider md:text-[32px] lg:pr-2">
        I'm Robert Henderson
      </span>
    </h1>
  );
};
