import { RESUME_URI } from '@/src/constants';
import { FC } from 'react';
import { FiDownload } from 'react-icons/fi';
import { LinkButton } from '../base/Button/LinkButton';
import { SectionBanner } from '../SectionBanner/SectionBanner';
import {
  SectionContent,
  SectionInnerContent,
} from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Company } from './Company';
import { useCompanies } from './useCompanies';

export const CompaniesSection: FC = () => {
  const { featuredCompanies, otherCompanies } = useCompanies();

  return (
    <SectionContent
      className="items-center gap-6 py-10 pb-10 md:py-16"
      alwaysColumn
      showPadding={false}
    >
      <div className="my-auto flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-6">
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
      <SectionBanner>
        In 1998, I started teaching myself to code by building a Miami Dolphins
        fan site using Angelfire in unformatted HTML
        <code className="text-sm"> {'<textarea />'}</code> blocks. I crashed
        that Windows '95 desktop a ton and had to rewrite a lot of code. After
        graduating from college with a Business degree when the market crashed
        in 2009, I went back to school to refine my web design skills. I landed
        an internship, and then full-time position at Blue Acorn and worked
        there and for 4 other companies over the next 15 years, from startup to
        big tech.
      </SectionBanner>
      <SectionInnerContent className="py-4">
        {featuredCompanies.map((company) => (
          <Company key={company.id} company={company} />
        ))}
      </SectionInnerContent>
      <SectionInnerContent columns={3}>
        {otherCompanies.map((company) => (
          <Company key={company.id} company={company} />
        ))}
      </SectionInnerContent>
    </SectionContent>
  );
};
