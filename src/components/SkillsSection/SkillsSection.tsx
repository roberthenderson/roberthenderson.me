import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { SkillCard } from './SkillCard';
import { SkillTag } from './SkillTag';
import { useSkills } from './useSkills';

export const SkillsSection: FC = () => {
  const { skillTags, skillCards } = useSkills();

  return (
    <SectionContent>
      <div className={clsxMerge('flex w-full flex-col gap-6', 'md:w-2/5')}>
        <SectionHeading className="sm:text-left">
          Skills & Technologies
        </SectionHeading>
        <p className="text-center sm:text-left">
          I take pride in building clean and usable interfaces on the web for
          all screen sizes. I've worked on small projects to large scalable
          consumer and enterprise applications with millions of monthly users.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm sm:justify-start">
          {skillTags.map((skill) => (
            <SkillTag skill={skill} />
          ))}
        </div>
      </div>
      <div
        className={clsxMerge(
          'grid w-full grid-cols-1 justify-items-start gap-4',
          'sm:grid-cols-2 md:w-3/5 md:pt-2 xl:grid-cols-3 xl:gap-5',
        )}
      >
        {skillCards.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </SectionContent>
  );
};
