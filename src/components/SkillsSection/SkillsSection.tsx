import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { SkillCard } from './SkillCard';
import { SkillTag } from './SkillTag';
import { useSkills } from './useSkills';

export const SkillsSection: FC = () => {
  const { skillTags, skillCards } = useSkills();

  return (
    <div
      className={clsxMerge(
        'mx-auto flex max-w-screen-2xl flex-col justify-center gap-8 px-6 md:gap-6',
        'sm:px-8 md:flex-row md:px-12 lg:gap-8',
      )}
    >
      <div className={clsxMerge('flex w-full flex-col gap-8', 'md:w-2/5')}>
        <h3
          className={clsxMerge(
            'font-dmSerif text-5xl font-semibold text-violet-950 dark:text-slate-300',
            'lg:text-6xl',
          )}
        >
          Skills & Experience
        </h3>
        <p>
          I take pride in building clean and usable interfaces on the web for
          all screen sizes. I've worked on small projects to large scalable
          consumer and enterprise applications with millions of monthly users.
        </p>
        <div className="flex flex-wrap gap-1.5 text-sm">
          {skillTags.map((skill) => (
            <SkillTag skill={skill} />
          ))}
        </div>
      </div>
      <div
        className={clsxMerge(
          'grid w-full grid-cols-1 gap-4',
          'sm:grid-cols-2 md:w-3/5 xl:grid-cols-3 xl:gap-8',
        )}
      >
        {skillCards.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
};
