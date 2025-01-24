import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { Company } from './useCompanies';

interface OtherCompanyProps {
  company: Company;
}

export const OtherCompany: FC<OtherCompanyProps> = ({ company }) => {
  return (
    <div
      className={clsxMerge(
        'px-4 min-[380px]:px-10 min-[430px]:px-16 min-[530px]:px-28 sm:px-4 md:px-8',
        company.className,
      )}
    >
      {company.logo}
    </div>
  );
};
