'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { COMPANIES } from '@/app/constants/companies';
import type { CompanyDefinition, CompanyIdEnum } from '@/app/types';

export interface ICompany {
  id: CompanyIdEnum;
  label: string;
  logo: ReactNode;
  className?: string;
}

const toGridCompany = (company: CompanyDefinition): ICompany => ({
  id: company.id,
  label: company.label,
  logo: company.gridLogo,
  className: company.gridClassName,
});

export const useCompanies = () => {
  const featuredCompanies = useMemo(
    () => COMPANIES.filter((c) => c.featured).map(toGridCompany),
    [],
  );

  const otherCompanies = useMemo(
    () => COMPANIES.filter((c) => !c.featured).map(toGridCompany),
    [],
  );

  return { featuredCompanies, otherCompanies };
};
