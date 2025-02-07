import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, ReactNode } from 'react';

export interface Bullet {
  icon: ReactNode;
  text: string;
}

export interface CompanyContentItem {
  description: string;
  bullets: Bullet[];
}

export const CompanyContent: FC<{ contentItems: CompanyContentItem[] }> = ({
  contentItems,
}) => {
  return contentItems.map((contentItem, index) => (
    <div className="flex-auto overflow-y-auto">
      <div
        key={index}
        className={clsxMerge(
          'flex max-w-screen-lg flex-col gap-6 md:gap-10',
          'px-6 pb-10 pt-5 md:px-10 md:pt-8',
        )}
      >
        <p className="text-lg/6 font-500 tracking-wide md:text-xl/7">
          {contentItem.description}
        </p>
        <div className="flex flex-col gap-4 tracking-tight">
          {contentItem.bullets.map((bullet, bulletIndex) => (
            <div
              key={bulletIndex}
              className="flex items-center gap-5 text-violet-400 dark:text-slate-400"
            >
              <div className="flex-none">{bullet.icon}</div>
              <div className="text-slate-950 dark:text-slate-100">
                {bullet.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};
