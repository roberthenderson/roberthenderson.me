import { FC } from 'react';
import { SectionContent } from '../SectionContent/SectionContent';

/**
 * 2-3 cards with logo, description and screenshot of work
 * then the rest of the company logos below that
 * clicking anything opens modal with bullet points from resume
 * @returns
 */

export const CompaniesSection: FC = () => {
  return (
    <SectionContent>
      <div className="grid grid-cols-2"></div>
      <div className="grid grid-cols-3"></div>
    </SectionContent>
  );
};
