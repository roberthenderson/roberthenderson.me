import { clsxMerge } from '@/app/utils/clsxMerge';
import Link from 'next/link';
import { FC } from 'react';
import { ICompany } from './useCompanies';

interface CompanyProps {
  company: ICompany;
}

export const Company: FC<CompanyProps> = ({ company }) => {
  return (
    <Link
      href={`/work/${company.id}`}
      scroll={false}
      suppressHydrationWarning
      className={clsxMerge(
        'mx-auto px-4 opacity-100 transition-opacity duration-200 min-[480px]:px-10 sm:px-4 md:px-8',
        'hover:opacity-70',
        company.className,
      )}
    >
      {company.logo}
    </Link>
  );
};
