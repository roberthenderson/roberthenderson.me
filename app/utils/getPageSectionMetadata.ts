import { Metadata } from 'next';
import { NAME, TITLE_SUFFIX } from '../constants/metadata';
import { ROUTES } from '../constants/routes';
import { BASE_URL } from '../constants/urls';
import { AppRouteType } from '../types';

export const getPageSectionMetadata = (
  pageSectionId: AppRouteType,
): Metadata => {
  const canonical = `${BASE_URL}${ROUTES[pageSectionId].route}`;
  const title = `${NAME} ${TITLE_SUFFIX}`;

  return {
    title:
      pageSectionId === '/'
        ? title
        : `${ROUTES[pageSectionId].label} - ${title}`,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
    },
  };
};
