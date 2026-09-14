import type { FC } from 'react';
import type { CompanyContentItem } from '@/app/types';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { CompanyYears } from './CompanyYears';

export type { Bullet, CompanyContentItem } from '@/app/types';

export const CompanyContent: FC<{ contentItems: CompanyContentItem[] }> = ({
  contentItems,
}) => {
  return contentItems.map((contentItem) => (
    <div
      key={contentItem.description}
      className={clsxMerge('flex flex-col gap-3 md:max-w-screen-lg')}
    >
      <div className="flex flex-col gap-3 pb-5 font-500 text-lg/6 text-slate-600 tracking-wide md:text-xl/7 dark:text-slate-300">
        {contentItem.description}
        {contentItem.years && (
          <CompanyYears
            years={contentItem.years}
            color="slate"
            className="text-xs"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 pb-10 tracking-tight">
        {contentItem.bullets.map((bullet) => (
          <div
            key={bullet.text}
            className="flex items-center gap-5 text-violet-400 dark:text-slate-500"
          >
            <div className="flex-none">{bullet.icon}</div>
            <div className="text-slate-950 dark:text-slate-300">
              {bullet.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
};
