import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';

export const TagLine: FC = () => {
  return (
    <p
      className={clsxMerge(
        'pl-1 text-right text-[1.3rem] leading-[22px] tracking-wide text-slate-500',
        'dark:text-slate-500',
        'sm:pl-0 sm:pr-0.5 sm:text-base',
      )}
    >
      <span>15 years of experience</span>
      <span className="max-md:hidden"> in big tech and startups</span>
    </p>
  );
};
