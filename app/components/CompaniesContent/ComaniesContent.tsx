import { FC } from 'react';
import { Tabs } from '../base/Tabs';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  activeTabId?: string;
}

/**
 * TODO:
 * 1. Make tabs link to routes
 * 2. Make modal work with intercepting routes
 * 3. Make sure header nav links back to home from company routes
 * 4. Styling
 * 5. add real content
 */
export const CompaniesContent: FC<CompaniesContentProps> = ({
  activeTabId,
}) => {
  const companies = useCompaniesContent();

  return (
    <div className="flex flex-col">
      <Tabs tabs={companies} activeTabId={activeTabId} />
    </div>
  );
};
