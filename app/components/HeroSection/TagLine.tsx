import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { getYearsExperience } from '@/app/utils/getYearsExperience';

export const TagLine: FC = () => (
  <p
    className={clsxMerge(
      'pl-1 text-right text-[1.3rem] text-slate-500 leading-[22px] tracking-wide',
      'dark:text-slate-500',
      'max-sm:pb-7 sm:pr-1.5 sm:pl-0 sm:text-base lg:pr-2.5',
    )}
  >
    <span>{getYearsExperience()} years of experience</span>
    <span className="max-md:hidden"> in big tech and startups</span>
  </p>
);
