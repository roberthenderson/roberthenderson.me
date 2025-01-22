import { FC } from 'react';
import { SkillCard } from './SkillCard';
import { SkillTag } from './SkillTag';
import { useSkills } from './useSkills';

export const SkillsSection: FC = () => {
  const { skillTags, skillCards } = useSkills();

  return (
    <div className="mx-auto flex max-w-screen-2xl justify-center gap-8 px-12">
      <div className="flex w-2/5 flex-col gap-8">
        <h3 className="font-dmSerif text-6xl font-semibold text-violet-950 dark:text-slate-300">
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
      <div className="grid w-3/5 grid-cols-3 gap-8">
        {skillCards.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </div>
  );
};
