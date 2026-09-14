import Link from 'next/link';
import type { FC } from 'react';
import { ROUTES } from '@/app/constants/routes';
import { PageSectionIdEnum } from '@/app/types';
import { clsxMerge } from '@/app/utils/clsxMerge';
import type { ICompany } from './useCompanies';

interface CompanyProps {
  company: ICompany;
}

export const Company: FC<CompanyProps> = ({ company }) => {
  return (
    <Link
      href={`${ROUTES[PageSectionIdEnum.Work].route}/${company.id}`}
      prefetch
      scroll={false}
      suppressHydrationWarning
      className={clsxMerge(
        'mx-auto px-6 opacity-100 transition-opacity duration-200 sm:px-0 md:px-4 min-[480px]:px-10',
        'hover:opacity-70',
        company.className,
      )}
    >
      {company.logo}
    </Link>
  );
};
