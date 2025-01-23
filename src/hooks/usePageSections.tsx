import { useEffect, useMemo, useRef } from 'react';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../app/AppContextProvider';
import { CompaniesSection } from '../components/CompaniesSection/CompaniesSection';
import { SkillsSection } from '../components/SkillsSection/SkillsSection';

export type PageSectionLinks = Record<PageSectionsEnum, string>;

export const usePageSections = () => {
  const { setPageSectionsList } = useAppContext();

  const skillsSection = useRef<HTMLElement | null>(null);
  const companiesSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  const contactSection = useRef<HTMLElement | null>(null);

  const pageSectionLinks: PageSectionLinks = useMemo(
    () => ({
      [PageSectionsEnum.Skills]: `/${PageSectionsEnum.Skills.toLowerCase()}`,
      [PageSectionsEnum.Companies]: `/${PageSectionsEnum.Companies.toLowerCase()}`,
      [PageSectionsEnum.About]: `/${PageSectionsEnum.About.toLowerCase()}`,
      [PageSectionsEnum.Contact]: `/${PageSectionsEnum.Contact.toLowerCase()}`,
    }),
    [],
  );

  const pageSections: PageSection[] = useMemo(
    () => [
      {
        id: PageSectionsEnum.Skills,
        label: PageSectionsEnum.Skills,
        ref: skillsSection,
        link: pageSectionLinks[PageSectionsEnum.Skills],
        children: <SkillsSection />,
      },
      {
        id: PageSectionsEnum.Companies,
        label: PageSectionsEnum.Companies,
        ref: companiesSection,
        link: pageSectionLinks[PageSectionsEnum.Companies],
        children: <CompaniesSection />,
        className:
          'bg-violet-100 border-t-2 border-b-[5px] border-t-violet-500 border-b-violet-600 dark:bg-slate-900 dark:border-0 md:py-12',
      },
      {
        id: PageSectionsEnum.About,
        label: PageSectionsEnum.About,
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
        children: <div></div>,
      },
      {
        id: PageSectionsEnum.Contact,
        label: PageSectionsEnum.Contact,
        ref: contactSection,
        link: pageSectionLinks[PageSectionsEnum.Contact],
        children: <div></div>,
      },
    ],
    [pageSectionLinks],
  );

  /**
   * On first page load, set the page sections in context
   */
  useEffect(() => {
    setPageSectionsList(pageSections);
  }, [setPageSectionsList, pageSections]);

  return { pageSectionLinks, pageSections };
};
