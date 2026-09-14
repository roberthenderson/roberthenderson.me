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

/**
 * Groups the work history into the rows of the work-section grid, ordered by
 * `gridRow`. Companies keep their order within a row.
 */
export const useCompanies = () => {
  const companyRows = useMemo(() => {
    const byRow = new Map<number, ICompany[]>();

    for (const company of COMPANIES) {
      const row = byRow.get(company.gridRow) ?? [];
      row.push(toGridCompany(company));
      byRow.set(company.gridRow, row);
    }

    return [...byRow.entries()]
      .sort(([a], [b]) => a - b)
      .map(([, companies]) => companies);
  }, []);

  return { companyRows };
};
