import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { ISkillCard } from './useSkills';

interface SkillCardProps {
  skill: ISkillCard;
}

export const SkillCard: FC<SkillCardProps> = ({ skill }) => {
  return (
    <div
      className={clsxMerge(
        'relative flex min-h-44 flex-col justify-between gap-10 overflow-hidden rounded-md border-[4px] border-violet-300 bg-violet-300/40 p-5',
        'dark:border-slate-700 dark:bg-slate-900/60',
        'md:px-4 md:py-3 xl:aspect-square xl:gap-0',
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{skill.label}</p>
        <div className="text-amber-700 opacity-80 dark:text-yellow-700">
          {skill.icon}
        </div>
      </div>
      <p className="text-base leading-5 sm:text-sm">{skill.description}</p>
      <div
        className={clsxMerge(
          'absolute bottom-6 right-10 z-10 scale-[4] overflow-hidden rounded-sm text-violet-900 opacity-10',
          'dark:text-slate-200',
          'xl:bottom-10 xl:right-14 xl:scale-[5]',
        )}
      >
        {skill.icon}
      </div>
    </div>
  );
};
