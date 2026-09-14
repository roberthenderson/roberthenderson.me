import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';
import type { ISkillCard } from './useSkills';

interface SkillCardProps {
  skill: ISkillCard;
}

export const SkillCard: FC<SkillCardProps> = ({ skill }) => {
  return (
    <div
      className={clsxMerge(
        'relative flex min-h-44 w-full flex-col justify-between gap-10 overflow-hidden rounded-2xl border-2 border-border-card bg-indigo-200/40 p-5',
        'dark:border-border-dark-card dark:bg-slate-900/60',
        'md:gap-4 md:px-4 md:py-3 xl:gap-0',
      )}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{skill.label}</p>
        <div className="text-violet-700 opacity-80 dark:text-yellow-700">
          {skill.icon}
        </div>
      </div>
      <p className="text-base leading-5 sm:text-sm">{skill.description}</p>
      <div
        className={clsxMerge(
          'absolute right-10 bottom-6 z-10 scale-[4] overflow-hidden rounded-sm text-indigo-900 opacity-[0.08]',
          'dark:text-slate-200',
          'xl:right-14 xl:bottom-10 xl:scale-[5]',
        )}
      >
        {skill.icon}
      </div>
    </div>
  );
};
