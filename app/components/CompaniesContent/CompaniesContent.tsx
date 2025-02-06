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
  isModal?: boolean;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({
  companyId,
  isModal,
}) => {
  const companies = useCompaniesContent();
  const { isSm, isMd } = useScreenSize();
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId);

  const handleCompanyChange = (id: string) => {
    history.replaceState(null, '', `/work/${id}`);
    setSelectedCompanyId(id);
  };

  return (
    <div className="flex h-full overflow-hidden">
      <div
        className={clsxMerge(
          'sticky left-0 top-0 max-w-[93px] flex-[1_0_auto]',
          'md:pt-34 px-2.5 pt-26 md:px-3',
          'dark:bg-slate-850 bg-violet-150',
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
              'scroller relative flex flex-[0_0_100%] flex-shrink flex-col overflow-y-auto',
              'text-left',
              isModal && 'md:max-h-[800px]',
            )}
          >
            <SectionHeading
              className={clsxMerge(
                'sticky left-0 top-0 flex-row justify-between text-left',
                'w-full px-6 py-5 md:px-10 md:py-6',
                'border-violet-300/20 dark:border-slate-700/40',
                'dark:bg-slate-850 bg-violet-150',
              )}
            >
              <span>{company.label}</span>
              <ResumeButton
                className="gap-0 p-3 pr-[13px] sm:gap-2 sm:px-6 md:mr-6"
                label={isMd ? 'Download Resume' : isSm ? 'Resume' : ''}
              />
            </SectionHeading>

            <div
              className={clsxMerge(
                'max-w-screen-xl',
                'dark:bg-slate-850 bg-violet-150',
              )}
            >
              <div
                className={clsxMerge(
                  'px-6 pb-10 pt-5 md:px-10 md:pt-12',
                  'border-l-3 border-t-3 border-violet-300/30 dark:border-slate-700/30',
                  'bg-violet-50 dark:bg-slate-800',
                  'overflow-hidden rounded-tl-2xl',
                )}
              >
                {company.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
