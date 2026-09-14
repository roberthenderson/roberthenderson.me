import type { ReactNode, RefObject } from 'react';

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

export type AppRouteType = PageSectionIdEnum | CompanyIdEnum | '/';

export type RoutesObject = Record<
  AppRouteType,
  {
    route: string;
    label: string;
  }
>;

export interface PageSection {
  id: PageSectionIdEnum;
  label: ReactNode;
  ref: RefObject<HTMLElement | null>;
  isMainNavigation: boolean;
  children: ReactNode;
}

export interface Bullet {
  icon: ReactNode;
  text: string;
}

export interface CompanyContentItem {
  description: string;
  bullets: Bullet[];
  years?: number[];
}

/**
 * One entry in the work history. Drives the work-section grid, the company
 * tab rail, the detail content, ROUTES, the sitemap, and static params.
 */
export interface CompanyDefinition {
  id: CompanyIdEnum;
  label: string;
  /** Renders large in the top row of the work grid. */
  featured: boolean;
  years?: number[];
  /** Small logo shown in the company tab rail. */
  image?: ReactNode;
  /** Large logo shown in the work-section grid. */
  gridLogo: ReactNode;
  gridClassName?: string;
  content: CompanyContentItem[];
}
