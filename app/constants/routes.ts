import { COMPANIES } from '@/app/constants/companies';
import {
  type AppRouteType,
  type CompanyIdEnum,
  PageSectionIdEnum,
  type RoutesObject,
} from '../types';

const PAGE_SECTION_ROUTES = {
  '/': {
    route: '/',
    label: '',
  },
  [PageSectionIdEnum.Skills]: {
    route: `/${PageSectionIdEnum.Skills}`,
    label: 'Skills',
  },
  [PageSectionIdEnum.Work]: {
    route: `/${PageSectionIdEnum.Work}`,
    label: 'Work',
  },
  [PageSectionIdEnum.About]: {
    route: `/${PageSectionIdEnum.About}`,
    label: 'About',
  },
  [PageSectionIdEnum.Contact]: {
    route: `/${PageSectionIdEnum.Contact}`,
    label: 'Contact',
  },
};

/** `/work/<id>` for a company. Kept here so the segment is defined once. */
export const getCompanyRoute = (id: CompanyIdEnum | string) =>
  `/${PageSectionIdEnum.Work}/${id}`;

const COMPANY_ROUTES = Object.fromEntries(
  COMPANIES.map((company) => [
    company.id,
    { route: getCompanyRoute(company.id), label: company.label },
  ]),
);

export const ROUTES: RoutesObject = {
  ...PAGE_SECTION_ROUTES,
  ...COMPANY_ROUTES,
} as RoutesObject;

/** Valid `/work/[companyId]` segments, used for static params and 404s. */
export const COMPANY_IDS = COMPANIES.map((company) => company.id);

export const isValidCompanyId = (id: string): id is CompanyIdEnum =>
  COMPANY_IDS.includes(id as CompanyIdEnum);

export type { AppRouteType };
