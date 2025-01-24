import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { Company } from './useCompanies';

interface FeaturedCompanyProps {
  company: Company;
}

export const FeaturedCompany: FC<FeaturedCompanyProps> = ({ company }) => {
  return (
    <div
      key={company.id}
      className={clsxMerge(
        'border-border-card flex h-64 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 bg-indigo-50',
        'dark:border-border-dark-card dark:bg-slate-800',
        {
          'bg-[url(/companies/me_profile.png)] bg-cover': company.id === 'me',
        },
        {
          'bg-[url(/companies/salesforce_service_catalog.png)] bg-cover':
            company.id === 'salesforce',
        },
      )}
    >
      <div
        className={clsxMerge(
          'h-full w-full bg-gradient-to-t from-violet-100 from-15% via-violet-100/90 via-30% to-violet-400/35',
          'dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-600/35',
          'flex items-end justify-center p-6',
        )}
      >
        <div className={company.className}>{company.logo}</div>
      </div>
    </div>
  );
};
