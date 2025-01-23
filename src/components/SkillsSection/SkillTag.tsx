import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { ISkillTag } from './useSkills';

interface SkillTagProps {
  skill: ISkillTag;
}

export const SkillTag: FC<SkillTagProps> = ({ skill }) => {
  return (
    <div
      className={clsxMerge(
        'rounded-lg border border-violet-700 bg-violet-300/50 px-2 py-0.5 text-violet-800',
        'dark:border-purple-800 dark:bg-purple-700 dark:text-slate-100',
        'lg:px-3',
        {
          'border-amber-800 bg-amber-50/50 text-amber-800 dark:border-yellow-800 dark:bg-yellow-700/70':
            skill.type === 'code',
          'border-teal-800 bg-teal-100/50 text-teal-800 dark:border-teal-800 dark:bg-teal-700/70':
            skill.type === 'framework',
          'border-fuchsia-800 bg-fuchsia-100 text-fuchsia-800 dark:border-fuchsia-800 dark:bg-fuchsia-700/70':
            skill.type === 'design',
          'border-sky-800 bg-sky-100 text-sky-800 dark:border-sky-800 dark:bg-sky-700/70':
            skill.type === 'devops',
        },
      )}
    >
      {skill.label}
    </div>
  );
};
