import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, PropsWithChildren } from 'react';

export interface TagProps {
  color?: 'purple' | 'amber' | 'teal' | 'fuchsia' | 'sky' | 'slate';
  className?: string;
}

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  color = 'purple',
  className,
  children,
}) => {
  return (
    <div
      className={clsxMerge(
        'rounded-lg border border-violet-700 bg-violet-300/50 px-2 py-0.5 text-violet-800',
        'dark:border-purple-800 dark:bg-purple-700/30 dark:text-slate-100',
        'lg:px-3',
        {
          'border-amber-800 bg-amber-50/50 text-amber-800 dark:border-yellow-800 dark:bg-yellow-700/30':
            color === 'amber',
          'border-teal-800 bg-teal-100/50 text-teal-800 dark:border-teal-800 dark:bg-teal-700/30':
            color === 'teal',
          'border-fuchsia-800 bg-fuchsia-100 text-fuchsia-800 dark:border-fuchsia-800 dark:bg-fuchsia-700/30':
            color === 'fuchsia',
          'border-sky-800 bg-sky-100 text-sky-800 dark:border-sky-800 dark:bg-sky-700/30':
            color === 'sky',
          'border-slate-400 bg-slate-200/50 text-slate-600 dark:border-slate-600 dark:bg-slate-700/60 dark:text-slate-400':
            color === 'slate',
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
