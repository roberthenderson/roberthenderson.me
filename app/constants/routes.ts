import { CompanyIdEnum, PageSectionIdEnum } from '../types';

export const ROUTES = {
  [PageSectionIdEnum.Skills]: {
    route: `/${PageSectionIdEnum.Skills}`,
    label: 'Skills',
  },
  [PageSectionIdEnum.Work]: {
    route: `/${PageSectionIdEnum.Work}`,
    label: 'Work',
  },
  [PageSectionIdEnum.About]: {
    route: `/${PageSectionIdEnum.About}`,
    label: 'About',
  },
  [PageSectionIdEnum.Contact]: {
    route: `/${PageSectionIdEnum.Contact}`,
    label: 'Contact',
  },
  [CompanyIdEnum.MagicEden]: {
    route: `/${PageSectionIdEnum.Work}/${CompanyIdEnum.MagicEden}`,
    label: 'Magic Eden',
  },
  [CompanyIdEnum.Metaplex]: {
    route: `/${PageSectionIdEnum.Work}/${CompanyIdEnum.Metaplex}`,
    label: 'Metaplex',
  },
  [CompanyIdEnum.Salesforce]: {
    route: `/${PageSectionIdEnum.Work}/${CompanyIdEnum.Salesforce}`,
    label: 'Salesforce',
  },
  [CompanyIdEnum.Vlocity]: {
    route: `/${PageSectionIdEnum.Work}/${CompanyIdEnum.Vlocity}`,
    label: 'Vlocity',
  },
  [CompanyIdEnum.BlueAcorn]: {
    route: `/${PageSectionIdEnum.Work}/${CompanyIdEnum.BlueAcorn}`,
    label: 'Blue Acorn',
  },
};
