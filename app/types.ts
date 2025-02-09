import { ReactNode, RefObject } from 'react';

export enum PageSectionIdEnum {
  Skills = 'skills',
  Work = 'work',
  About = 'about',
  Contact = 'contact',
}

export enum CompanyIdEnum {
  MagicEden = 'magic-eden',
  Metaplex = 'metaplex',
  Salesforce = 'salesforce',
  Vlocity = 'vlocity',
  BlueAcorn = 'blue-acorn',
}

export interface PageSection {
  id: PageSectionIdEnum;
  label: ReactNode;
  ref: RefObject<HTMLElement | null>;
  isMainNavigation: boolean;
  children: ReactNode;
}
