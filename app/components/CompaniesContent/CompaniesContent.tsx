'use client';

import { FC } from 'react';
import { Tabs } from '../base/Tabs';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({ companyId }) => {
  const companies = useCompaniesContent();
  const handleTabChange = (tabId: string) => {
    history.replaceState(null, '', `/work/${tabId}`);
  };

  return (
    <Tabs
      tabs={companies}
      activeTabId={companyId}
      handleTabChange={handleTabChange}
    />
  );
};
