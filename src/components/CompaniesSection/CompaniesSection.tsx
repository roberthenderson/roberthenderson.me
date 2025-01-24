import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { FeaturedCompany } from './FeaturedCompany';
import { OtherCompany } from './OtherCompany';
import { useCompanies } from './useCompanies';

export const CompaniesSection: FC = () => {
  const { featuredCompanies, otherCompanies } = useCompanies();

  return (
    <SectionContent className="md:flex-col md:gap-16">
      <SectionHeading>Work Experience</SectionHeading>
      <div
        className={clsxMerge(
          'grid grid-cols-1 justify-center gap-6',
          'sm:grid-cols-2 lg:gap-10 lg:px-16',
        )}
      >
        {featuredCompanies.map((company) => (
          <FeaturedCompany company={company} />
        ))}
      </div>
      <div className="grid grid-cols-3 items-center gap-16 px-10">
        {otherCompanies.map((company) => (
          <OtherCompany company={company} />
        ))}
      </div>
    </SectionContent>
  );
};
