import { PageSection, PageSectionsEnum } from '../types';

export const PAGE_SECTIONS: Record<
  PageSectionsEnum,
  Omit<PageSection, 'ref' | 'children'>
> = {
  [PageSectionsEnum.Skills]: {
    id: PageSectionsEnum.Skills,
    label: 'Skills',
    isMainNavigation: true,
  },
  [PageSectionsEnum.Work]: {
    id: PageSectionsEnum.Work,
    label: 'Work',
    isMainNavigation: true,
  },
  [PageSectionsEnum.About]: {
    id: PageSectionsEnum.About,
    label: 'About',
    isMainNavigation: true,
  },
  [PageSectionsEnum.Contact]: {
    id: PageSectionsEnum.Contact,
    label: 'Contact',
    isMainNavigation: false,
  },
};
