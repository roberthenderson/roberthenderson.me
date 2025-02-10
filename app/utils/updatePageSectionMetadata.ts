import { AppRouteType } from '../types';
import { getPageSectionMetadata } from './getPageSectionMetadata';

export const updatePageSectionMetadata = (pageSectionId: AppRouteType) => {
  const pageSectionMetadata = getPageSectionMetadata(pageSectionId);

  if (pageSectionMetadata.title) {
    document.title = pageSectionMetadata.title as string;
  }
  if (pageSectionMetadata.alternates?.canonical) {
    const canonicalElement = document.querySelector('link[rel="canonical"]');
    canonicalElement?.setAttribute(
      'href',
      pageSectionMetadata.alternates.canonical as string,
    );
  }
  if (pageSectionMetadata.openGraph?.url) {
    const ogUrlElement = document.querySelector('meta[property="og:url"]');
    ogUrlElement?.setAttribute(
      'content',
      pageSectionMetadata.openGraph.url as string,
    );
  }
};
