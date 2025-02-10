import { AppRouteType } from '../types';
import { getPageSectionMetadata } from './getPageSectionMetadata';

export const updatePageSectionMetadata = (pageSectionId: AppRouteType) => {
  const pageSectionMetadata = getPageSectionMetadata(pageSectionId);
  const { title, alternates, openGraph } = pageSectionMetadata;
  const { canonical } = alternates ?? {};
  const { url: ogUrl } = openGraph ?? {};

  if (title && document.title !== title) {
    document.title = title as string;
  }

  const canonicalElement = document.querySelector('link[rel="canonical"]');
  if (canonical && canonicalElement?.getAttribute('href') !== canonical) {
    canonicalElement?.setAttribute('href', canonical as string);
  }

  const ogUrlElement = document.querySelector('meta[property="og:url"]');
  if (ogUrl && ogUrlElement?.getAttribute('content') !== ogUrl) {
    ogUrlElement?.setAttribute('content', ogUrl as string);
  }
};
