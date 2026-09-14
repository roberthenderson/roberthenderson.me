import { describe, expect, it } from 'vitest';
import { COMPANIES } from '@/app/constants/companies';
import { getCompanyRoute } from '@/app/constants/routes';
import { BASE_URL } from '@/app/constants/urls';
import sitemap from '@/app/sitemap';
import { PageSectionIdEnum } from '@/app/types';

describe('sitemap', () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  it('lists the home page, every section, and every company', () => {
    expect(urls).toStrictEqual([
      BASE_URL,
      ...Object.values(PageSectionIdEnum).map((id) => `${BASE_URL}/${id}`),
      ...COMPANIES.map(
        (company) => `${BASE_URL}${getCompanyRoute(company.id)}`,
      ),
    ]);
  });

  it('lists every url exactly once', () => {
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('ranks the home page above the sections and the companies', () => {
    const [home, ...rest] = entries;

    expect(home.priority).toBe(1);
    for (const entry of rest) {
      expect(entry.priority).toBeLessThan(1);
    }
  });

  it('gives contact a lower priority than the other sections', () => {
    const priorityFor = (id: PageSectionIdEnum) =>
      entries.find((entry) => entry.url === `${BASE_URL}/${id}`)?.priority;

    expect(priorityFor(PageSectionIdEnum.Contact)).toBe(0.5);
    expect(priorityFor(PageSectionIdEnum.Work)).toBe(0.8);
  });
});
