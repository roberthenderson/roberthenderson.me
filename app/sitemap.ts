import type { MetadataRoute } from 'next';
import { ROUTES } from './constants/routes';
import { BASE_URL } from './constants/urls';
import { CompanyIdEnum, PageSectionIdEnum } from './types';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}${ROUTES[PageSectionIdEnum.Skills].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${ROUTES[PageSectionIdEnum.Work].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${ROUTES[PageSectionIdEnum.About].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}${ROUTES[PageSectionIdEnum.Contact].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}${ROUTES[CompanyIdEnum.MagicEden].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}${ROUTES[CompanyIdEnum.Metaplex].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}${ROUTES[CompanyIdEnum.Salesforce].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}${ROUTES[CompanyIdEnum.Vlocity].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}${ROUTES[CompanyIdEnum.BlueAcorn].route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
