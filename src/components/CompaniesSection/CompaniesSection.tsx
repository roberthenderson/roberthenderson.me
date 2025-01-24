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
    <SectionContent className="gap-12 sm:gap-8 md:flex-col md:gap-14">
      <SectionHeading>Work Experience</SectionHeading>
      <div
        className={clsxMerge(
          'grid grid-cols-1 justify-center gap-6',
          'sm:grid-cols-2 lg:gap-10 lg:px-16',
        )}
      >
        {featuredCompanies.map((company) => (
          <FeaturedCompany key={company.id} company={company} />
        ))}
      </div>
      <div
        className={clsxMerge(
          'grid grid-cols-1 items-center gap-8',
          'sm:grid-cols-3 sm:gap-2 lg:px-10 xl:gap-12',
        )}
      >
        {otherCompanies.map((company) => (
          <OtherCompany key={company.id} company={company} />
        ))}
      </div>
    </SectionContent>
  );
};
