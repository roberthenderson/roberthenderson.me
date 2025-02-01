'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { getYearsExperience } from '@/app/utils/getYearsExperience';
import { FC } from 'react';

export const TagLine: FC = () => (
  <p
    className={clsxMerge(
      'pl-1 text-right text-[1.3rem] leading-[22px] tracking-wide text-slate-500',
      'dark:text-slate-500',
      'max-sm:pb-6 sm:pl-0 sm:pr-1.5 sm:text-base lg:pr-2.5',
    )}
  >
    <span>{getYearsExperience()} years of experience</span>
    <span className="max-md:hidden"> in big tech and startups</span>
  </p>
);
