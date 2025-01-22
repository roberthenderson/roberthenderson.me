import { useEffect, useMemo, useRef } from 'react';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../app/AppContextProvider';

export type PageSectionLinks = Record<PageSectionsEnum, string>;

export const usePageSections = () => {
  const { setPageSectionsList } = useAppContext();

  const skillsSection = useRef<HTMLElement | null>(null);
  const projectsSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  const contactSection = useRef<HTMLElement | null>(null);

  const pageSectionLinks: PageSectionLinks = useMemo(
    () => ({
      [PageSectionsEnum.Skills]: `/${PageSectionsEnum.Skills.toLowerCase()}`,
      [PageSectionsEnum.Projects]: `/${PageSectionsEnum.Projects.toLowerCase()}`,
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
      },
      {
        id: PageSectionsEnum.Projects,
        label: PageSectionsEnum.Projects,
        ref: projectsSection,
        link: pageSectionLinks[PageSectionsEnum.Projects],
      },
      {
        id: PageSectionsEnum.About,
        label: PageSectionsEnum.About,
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
      },
      {
        id: PageSectionsEnum.Contact,
        label: PageSectionsEnum.Contact,
        ref: contactSection,
        link: pageSectionLinks[PageSectionsEnum.Contact],
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
