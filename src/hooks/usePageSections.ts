import { capitalize } from 'lodash';
import { useEffect, useRef } from 'react';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../app/AppContextProvider';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';

export const usePageSections = () => {
  const { router, setPageSectionsList } = useAppContext();
  const aboutSection = useRef<HTMLElement | null>(null);
  const skillsSection = useRef<HTMLElement | null>(null);
  const projectsSection = useRef<HTMLElement | null>(null);
  const contactSection = useRef<HTMLElement | null>(null);

  const pageSections: PageSection[] = [
    {
      label: PageSectionsEnum.About,
      ref: aboutSection,
      link: `/${PageSectionsEnum.About.toLowerCase()}`,
    },
    {
      label: PageSectionsEnum.Skills,
      ref: skillsSection,
      link: `/${PageSectionsEnum.Skills.toLowerCase()}`,
    },
    {
      label: PageSectionsEnum.Projects,
      ref: projectsSection,
      link: `/${PageSectionsEnum.Projects.toLowerCase()}`,
    },
    {
      label: PageSectionsEnum.Contact,
      ref: contactSection,
      link: `/${PageSectionsEnum.Contact.toLowerCase()}`,
    },
  ];

  /**
   * If a user comes directly to a page section with the URL,
   * scroll to that section
   */
  useEffect(() => {
    const { pathname } = router;
    if (pathname !== '/') {
      const pageSection = capitalize(pathname.slice(1)) as PageSectionsEnum;
      switch (pageSection) {
        case PageSectionsEnum.About:
          scrollElementIntoView(aboutSection.current);
          break;
        case PageSectionsEnum.Skills:
          scrollElementIntoView(skillsSection.current);
          break;
        case PageSectionsEnum.Projects:
          scrollElementIntoView(projectsSection.current);
          break;
        case PageSectionsEnum.Contact:
          scrollElementIntoView(contactSection.current);
          break;
        default:
          router.push('/', undefined, { shallow: true });
      }
    }
  }, [router]);

  /**
   * On first page load, set the page sections in context
   */
  useEffect(() => {
    setPageSectionsList(pageSections);
  }, []);

  return { pageSections };
};
