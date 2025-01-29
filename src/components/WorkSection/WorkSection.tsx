import { RESUME_URI } from '@/src/constants';
import { FC } from 'react';
import { FiDownload } from 'react-icons/fi';
import { LinkButton } from '../base/Button/LinkButton';
import { Grid } from '../base/Grid/Grid';
import { SectionBanner } from '../SectionBanner/SectionBanner';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Company } from './Company';
import { useCompanies } from './useCompanies';

export const WorkSection: FC = () => {
  const { featuredCompanies, otherCompanies } = useCompanies();

  return (
    <SectionContainer>
      <SectionContent>
        <div className="m-auto flex flex-col items-center gap-4 md:flex-row md:items-end md:gap-6">
          <SectionHeading>Work Experience</SectionHeading>
          <LinkButton
            variant="secondary"
            className="mb-1 flex items-center gap-2 py-2"
            href={RESUME_URI}
            target="_blank"
            download
          >
            <span>Download Resume</span>
            <FiDownload />
          </LinkButton>
        </div>
      </SectionContent>
      <SectionBanner>
        In 1998, I started teaching myself to code by building a Miami Dolphins
        fan site using Angelfire in unformatted HTML
        <code className="text-sm"> {'<textarea />'}</code> blocks. I crashed
        that Windows '95 desktop a ton and had to rewrite a lot of code. After
        graduating from college with a Business degree when the market crashed
        in 2009, I went back to school to refine my web design skills. I landed
        an internship, and then full-time position at Blue Acorn and worked
        there and for 4 other companies over the next 15 years.
      </SectionBanner>
      <SectionContent>
        <Grid>
          {featuredCompanies.map((company) => (
            <Company key={company.id} company={company} />
          ))}
        </Grid>
        <Grid columns={3}>
          {otherCompanies.map((company) => (
            <Company key={company.id} company={company} />
          ))}
        </Grid>
      </SectionContent>
    </SectionContainer>
  );
};
