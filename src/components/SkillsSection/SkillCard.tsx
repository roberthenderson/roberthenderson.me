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
        'relative flex flex-col justify-between gap-8 overflow-hidden rounded-md border-2 border-purple-600 bg-violet-300/40 p-5 text-violet-900',
        'dark:border-yellow-600 dark:bg-slate-900/60 dark:text-slate-200',
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{skill.label}</p>
        <div className="text-amber-700 opacity-80 dark:text-yellow-700">
          {skill.icon}
        </div>
      </div>
      <p className="leading-5">{skill.description}</p>
      <div className="absolute bottom-10 right-14 z-10 scale-[5] overflow-hidden rounded-sm opacity-10">
        {skill.icon}
      </div>
    </div>
  );
};
