import Image from 'next/image';
import { FC } from 'react';
import meLogo from '../../../public/companies/me.svg';
import salesforceLogo from '../../../public/companies/salesforce.svg';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';

/**
 * 2-3 cards with logo, description and screenshot of work
 * then the rest of the company logos below that
 * clicking anything opens modal with bullet points from resume
 * @returns
 */

const featuredCompanies = [
  {
    id: 'Magic Eden',
    image: meLogo,
  },
  {
    id: 'Salesforce',
    image: salesforceLogo,
  },
];

export const CompaniesSection: FC = () => {
  return (
    <SectionContent className="md:flex-col">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="grid grid-cols-2 justify-center gap-8 px-16">
        {featuredCompanies.map((company) => (
          <div
            key={company.id}
            className="border-border-card flex flex-col items-center justify-center rounded-2xl border-2 bg-indigo-50 p-8"
          >
            <Image src={company.image} alt="Magic Eden Logo" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3"></div>
    </SectionContent>
  );
};
