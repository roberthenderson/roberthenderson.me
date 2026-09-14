import { describe, expect, it } from 'vitest';
import { COMPANIES } from '@/app/constants/companies';
import {
  COMPANY_IDS,
  getCompanyRoute,
  isValidCompanyId,
  LEAD_COMPANY_ID,
  ROUTES,
} from '@/app/constants/routes';
import { PageSectionIdEnum } from '@/app/types';

describe('routes derived from COMPANIES', () => {
  it('derives COMPANY_IDS from the list, in list order', () => {
    expect(COMPANY_IDS).toStrictEqual(COMPANIES.map((company) => company.id));
  });

  it('points LEAD_COMPANY_ID at the first company rather than naming one', () => {
    expect(LEAD_COMPANY_ID).toBe(COMPANIES[0].id);
  });

  it('gives every company a route and carries its label through', () => {
    for (const company of COMPANIES) {
      expect(ROUTES[company.id]).toStrictEqual({
        route: `/${PageSectionIdEnum.Work}/${company.id}`,
        label: company.label,
      });
    }
  });

  it('keeps a route for the home page and every page section', () => {
    expect(ROUTES['/'].route).toBe('/');

    for (const id of Object.values(PageSectionIdEnum)) {
      expect(ROUTES[id].route).toBe(`/${id}`);
    }
  });

  it('builds a company route from the work segment', () => {
    expect(getCompanyRoute(COMPANIES[0].id)).toBe(
      `/${PageSectionIdEnum.Work}/${COMPANIES[0].id}`,
    );
  });

  it('accepts every real company id and rejects anything else', () => {
    for (const company of COMPANIES) {
      expect(isValidCompanyId(company.id)).toBe(true);
    }

    for (const id of ['', 'nope', 'Sphere-Labs', '../admin']) {
      expect(isValidCompanyId(id)).toBe(false);
    }
  });
});
