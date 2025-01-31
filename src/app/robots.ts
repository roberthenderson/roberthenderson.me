import type { MetadataRoute } from 'next';
import { BASE_URL } from '../constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/og'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
