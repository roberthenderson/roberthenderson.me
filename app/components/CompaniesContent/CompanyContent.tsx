import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, ReactNode } from 'react';
import { CompanyYears } from './CompanyYears';

export interface Bullet {
  icon: ReactNode;
  text: string;
}

export interface CompanyContentItem {
  description: string;
  bullets: Bullet[];
  years?: number[];
}

export const CompanyContent: FC<{ contentItems: CompanyContentItem[] }> = ({
  contentItems,
}) => {
  return contentItems.map((contentItem, index) => (
    <div
      key={index}
      className={clsxMerge('flex flex-col gap-3 md:max-w-screen-lg')}
    >
      <div className="flex flex-col gap-3 pb-5 text-lg/6 font-500 tracking-wide text-slate-600 md:text-xl/7 dark:text-slate-300">
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
        {contentItem.bullets.map((bullet, bulletIndex) => (
          <div
            key={bulletIndex}
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
