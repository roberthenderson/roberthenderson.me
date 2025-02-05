'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, useState } from 'react';
import { Select } from '../base/Select/Select';
import { Tabs } from '../base/Tabs/Tabs';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
  variant: 'dialog' | 'page';
}

export const CompaniesContent: FC<CompaniesContentProps> = ({
  companyId,
  variant,
}) => {
  const companies = useCompaniesContent();
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId);

  const handleCompanyChange = (id: string) => {
    history.replaceState(null, '', `/work/${id}`);
    setSelectedCompanyId(id);
  };

  return (
    <div
      className={clsxMerge({
        dialog: variant === 'dialog',
        page: variant === 'page',
      })}
    >
      <Tabs
        tabs={companies}
        selectedId={selectedCompanyId}
        setSelectedId={handleCompanyChange}
        className="hidden md:flex"
      />
      <Select
        options={companies}
        selectedOptionId={selectedCompanyId}
        setSelectedOptionId={handleCompanyChange}
        className="md:hidden"
      />
      {companies.map((company) => {
        if (company.id !== selectedCompanyId) {
          return null;
        }
        return (
          <div
            key={company.id}
            className="flex max-h-full flex-col overflow-y-auto"
          >
            {company.content}
          </div>
        );
      })}
    </div>
  );
};
