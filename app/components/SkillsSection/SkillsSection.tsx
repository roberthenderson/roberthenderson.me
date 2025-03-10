import { FC } from 'react';
import { Grid } from '../base/Grid/Grid';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { SkillCard } from './SkillCard';
import { SkillTag } from './SkillTag';
import { useSkills } from './useSkills';

export const SkillsSection: FC = () => {
  const { skillTags, skillCards } = useSkills();

  return (
    <SectionContainer>
      <SectionContent layout="row">
        <div className="flex w-full flex-col gap-6 md:w-2/5">
          <SectionHeading className="sm:text-left">
            Skills & Technologies
          </SectionHeading>
          <p className="text-center sm:text-left">
            I take pride in building clean and usable interfaces on the web for
            all screen sizes. I've worked on small projects to large scalable
            consumer and enterprise applications with millions of monthly users.
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm sm:justify-start">
            {skillTags.map((skill) => (
              <SkillTag key={skill.label} skill={skill} />
            ))}
          </div>
        </div>
        <Grid className="items-stretch text-left md:w-3/5 md:pt-2 lg:gap-5 xl:grid-cols-3">
          {skillCards.map((skill) => (
            <SkillCard key={skill.label} skill={skill} />
          ))}
        </Grid>
      </SectionContent>
    </SectionContainer>
  );
};
