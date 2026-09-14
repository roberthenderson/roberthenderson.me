import type { MetadataRoute } from 'next';
import { COMPANIES } from './constants/companies';
import { getCompanyRoute, ROUTES } from './constants/routes';
import { BASE_URL } from './constants/urls';
import { PageSectionIdEnum } from './types';

const SECTION_PRIORITY: Partial<Record<PageSectionIdEnum, number>> = {
  [PageSectionIdEnum.Contact]: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...Object.values(PageSectionIdEnum).map((id) => ({
      url: `${BASE_URL}${ROUTES[id].route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: SECTION_PRIORITY[id] ?? 0.8,
    })),
    ...COMPANIES.map((company) => ({
      url: `${BASE_URL}${getCompanyRoute(company.id)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
