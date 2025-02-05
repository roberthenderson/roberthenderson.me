'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Tabs } from '../base/Tabs';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({ companyId }) => {
  const router = useRouter();
  const { modalOpen } = useAppContext();
  const companies = useCompaniesContent();

  const handleTabChange = (tabId: string) => {
    const href = `/work/${tabId}`;
    const options = { scroll: false };
    if (modalOpen) {
      router.replace(href, options);
    } else {
      // When the modal isn't open, we don't
      // want the intercepting route to happen,
      // so use browser `history` instead of the
      // next app router
      history.replaceState(null, '', href);
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
