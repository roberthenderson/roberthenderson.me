import { ReactNode, RefObject } from 'react';

export enum PageSectionsEnum {
  Skills = '/skills',
  Work = '/work',
  About = '/about',
  Contact = '/contact',
}

export interface PageSection {
  id: PageSectionsEnum;
  label: ReactNode;
  ref: RefObject<HTMLElement | null>;
  isMainNavigation: boolean;
  children: ReactNode;
}
