'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { SECTION_CLASSNAME } from '@/app/constants/classNames';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, useEffect, useRef, useState } from 'react';
import { Tabs } from '../base/Tabs/Tabs';
import { ContactSection } from '../ContactSection/ContactSection';
import { ResumeButton } from '../ResumeButton/ResumeButton';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CompanyContent } from './CompanyContent';
import { CompanyYears } from './CompanyYears';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({ companyId }) => {
  const { dialogTypeOpen } = useAppContext();
  const isDialog = dialogTypeOpen !== null;
  const companies = useCompaniesContent();
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId);
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingHeight, setHeadingHeight] = useState(
    headingRef.current?.offsetHeight,
  );

  useEffect(() => {
    setHeadingHeight(headingRef.current?.offsetHeight);
  }, []);

  const handleCompanyChange = (id: string) => {
    if (id === selectedCompanyId) {
      return;
    }
    history.replaceState(null, '', `/work/${id}`);
    setSelectedCompanyId(id);
  };

  return (
    <>
      <section
        className={clsxMerge('flex h-full', !isDialog && SECTION_CLASSNAME)}
      >
        <div
          className={clsxMerge(
            'relative max-w-[93px]',
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
                'text-left',
                'bg-violet-50 dark:bg-slate-800',
                'w-full',
              )}
            >
              <div ref={headingRef}>
                <SectionHeading
                  className={clsxMerge(
                    'flex-row justify-between text-left',
                    'w-full px-6 py-5 md:px-10 md:py-6',
                    'border-violet-300/20 dark:border-slate-700/40',
                    'dark:bg-slate-850 bg-violet-150',
                  )}
                >
                  <span>{company.label}</span>
                  <ResumeButton className="gap-0 p-3 pr-[13px] sm:gap-2 sm:px-6 md:mr-6" />
                </SectionHeading>
              </div>

              <div
                className={clsxMerge(
                  'flex flex-col',
                  'bg-violet-150 dark:bg-slate-850 md:max-h-screen',
                )}
                style={
                  headingRef.current && isDialog
                    ? {
                        height: `calc(100% - ${headingHeight}px)`,
                      }
                    : undefined
                }
              >
                <div
                  className={clsxMerge(
                    'flex flex-col',
                    'border-l-3 border-t-3 border-violet-300/30 dark:border-slate-700/60',
                    'h-full rounded-tl-2xl',
                    'bg-violet-50 dark:bg-slate-700/50',
                    !isDialog && 'min-h-[500px] md:min-h-[700px]',
                  )}
                >
                  <div
                    className={clsxMerge(
                      'flex-auto overflow-y-auto',
                      'px-6 pb-10 pt-5 md:px-10 md:pt-8',
                    )}
                  >
                    {company.years && (
                      <CompanyYears
                        years={company.years}
                        color="sky"
                        className="mb-7 text-xs md:text-sm"
                      />
                    )}
                    <CompanyContent contentItems={company.content} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {!isDialog && <ContactSection />}
    </>
  );
};
