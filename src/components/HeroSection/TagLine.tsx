import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';

export const TagLine: FC = () => {
  const startYear = 2010;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;

  return (
    <p
      className={clsxMerge(
        'pl-1 text-right text-[1.3rem] leading-[22px] tracking-wide text-slate-500',
        'dark:text-slate-500',
        'max-sm:pb-6 sm:pl-0 sm:pr-1.5 sm:text-base lg:pr-2.5',
      )}
    >
      <span>{yearsExperience} years of experience</span>
      <span className="max-md:hidden"> in big tech and startups</span>
    </p>
  );
};
