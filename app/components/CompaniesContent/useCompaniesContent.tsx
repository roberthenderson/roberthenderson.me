import type { ReactNode } from 'react';
import { COMPANIES } from '@/app/constants/companies';
import type { CompanyContentItem } from '@/app/types';

export interface Company {
  id: string;
  label: string;
  image?: ReactNode;
  years?: number[];
  content: CompanyContentItem[];
}

export const useCompaniesContent = (): Company[] => COMPANIES;
