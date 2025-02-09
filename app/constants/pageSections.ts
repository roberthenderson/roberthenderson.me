import { PageSection, PageSectionIdEnum } from '../types';

export const PAGE_SECTIONS: Record<
  PageSectionIdEnum,
  Omit<PageSection, 'ref' | 'children'>
> = {
  [PageSectionIdEnum.Skills]: {
    id: PageSectionIdEnum.Skills,
    label: 'Skills',
    isMainNavigation: true,
  },
  [PageSectionIdEnum.Work]: {
    id: PageSectionIdEnum.Work,
    label: 'Work',
    isMainNavigation: true,
  },
  [PageSectionIdEnum.About]: {
    id: PageSectionIdEnum.About,
    label: 'About',
    isMainNavigation: true,
  },
  [PageSectionIdEnum.Contact]: {
    id: PageSectionIdEnum.Contact,
    label: 'Contact',
    isMainNavigation: false,
  },
};
