import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { ICompany } from './useCompanies';

interface CompanyProps {
  company: ICompany;
}

export const Company: FC<CompanyProps> = ({ company }) => {
  return (
    <div
      className={clsxMerge(
        'mx-auto px-4 min-[480px]:px-10 sm:px-4 md:px-8',
        company.className,
      )}
    >
      {company.logo}
    </div>
  );
};
