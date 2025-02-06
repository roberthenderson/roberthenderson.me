'use client';

import { useScreenSize } from '@/app/hooks/useScreenSize';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, useState } from 'react';
import { Tabs } from '../base/Tabs/Tabs';
import { ResumeButton } from '../ResumeButton/ResumeButton';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({ companyId }) => {
  const companies = useCompaniesContent();
  const { isSm, isMd } = useScreenSize();
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId);

  const handleCompanyChange = (id: string) => {
    history.replaceState(null, '', `/work/${id}`);
    setSelectedCompanyId(id);
  };

  return (
    <div className="flex overflow-hidden">
      <div
        className={clsxMerge(
          'border-r-5 border-violet-300/20 bg-violet-100 px-3 py-8',
          'dark:border-slate-400/20 dark:bg-slate-900',
        )}
      >
        <Tabs
          variant="vertical"
          tabs={companies}
          selectedId={selectedCompanyId}
          setSelectedId={handleCompanyChange}
        />
      </div>
      {companies.map((company) => {
        if (company.id !== selectedCompanyId) {
          return null;
        }
        return (
          <div
            key={company.id}
            className={clsxMerge(
              'scroller my-auto flex max-w-screen-xl flex-col gap-6 overflow-y-auto',
              'mx-auto px-6 pb-10 pt-12 md:px-10 md:pt-10',
              'text-left',
            )}
          >
            <SectionHeading className="flex-row justify-between text-left md:items-start">
              <span>{company.label}</span>
              <ResumeButton
                className="gap-0 p-3 pr-[13px] sm:gap-2 sm:px-6 md:mr-6"
                label={isMd ? 'Download Resume' : isSm ? 'Resume' : ''}
              />
            </SectionHeading>

            {company.content}
          </div>
        );
      })}
    </div>
  );
};
