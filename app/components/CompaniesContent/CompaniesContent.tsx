'use client';

import { SECTION_CLASSNAME } from '@/app/constants/classNames';
import { useScreenSize } from '@/app/hooks/useScreenSize';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { Tabs } from '../base/Tabs/Tabs';
import { ContactSection } from '../ContactSection/ContactSection';
import { ResumeButton } from '../ResumeButton/ResumeButton';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CompanyContent } from './CompanyContent';
import { useCompaniesContent } from './useCompaniesContent';

interface CompaniesContentProps {
  companyId: string;
  isModal?: boolean;
}

export const CompaniesContent: FC<CompaniesContentProps> = ({
  companyId,
  isModal,
}) => {
  const router = useRouter();
  const companies = useCompaniesContent();
  const { isSm, isMd } = useScreenSize();
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId);

  const handleCompanyChange = (id: string) => {
    if (id === selectedCompanyId) {
      return;
    }
    history.replaceState(null, '', `/work/${id}`);
    setSelectedCompanyId(id);
  };

  const handleEmailButtonClick = () => {
    // router.back();
    history.pushState(null, '', '/contact');
  };

  return (
    <>
      <section
        className={clsxMerge('flex h-full', !isModal && SECTION_CLASSNAME)}
      >
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
                'bg-violet-50 dark:bg-slate-800',
                'md:h-screen',
                isModal && 'md:h-[900px] md:max-h-full',
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
                  'bg-violet-150 dark:bg-slate-850 md:h-full',
                )}
              >
                <div
                  className={clsxMerge(
                    'pb-16 pl-6 pt-5 md:px-10 md:pt-8',
                    'border-l-3 border-t-3 border-violet-300/30 dark:border-slate-700/60',
                    'rounded-tl-2xl md:h-full md:overflow-hidden',
                    'bg-violet-50 dark:bg-slate-700/50',
                    isModal && 'max-sm:mb-10',
                  )}
                >
                  <CompanyContent contentItems={company.content} />
                  {/* <EmailButton
                  className="mx-auto mt-6 max-sm:mb-10 md:ml-auto md:mr-8"
                  onClick={handleEmailButtonClick}
                /> */}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {!isModal && <ContactSection />}
    </>
  );
};
