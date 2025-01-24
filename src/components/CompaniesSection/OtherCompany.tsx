import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { Company } from './useCompanies';

interface OtherCompanyProps {
  company: Company;
}

export const OtherCompany: FC<OtherCompanyProps> = ({ company }) => {
  return (
    <div className={clsxMerge('px-8', company.className)}>{company.logo}</div>
  );
};
