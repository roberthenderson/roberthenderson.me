'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Tabs } from '../base/Tabs';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({ companyId }) => {
  const router = useRouter();
  const companies = useCompaniesContent();

  const handleTabChange = (tabId: string) => {
    if (tabId) {
      router.replace(`/work/${tabId}`, { scroll: false });
    }
  };

  return (
    <div className="flex flex-col">
      <Tabs
        tabs={companies}
        activeTabId={companyId}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};
