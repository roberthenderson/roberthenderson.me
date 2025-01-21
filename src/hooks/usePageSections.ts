import { capitalize } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
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

  const pageSectionLinks: Record<PageSectionsEnum, string> = useMemo(
    () => ({
      [PageSectionsEnum.About]: `/${PageSectionsEnum.About.toLowerCase()}`,
      [PageSectionsEnum.Skills]: `/${PageSectionsEnum.Skills.toLowerCase()}`,
      [PageSectionsEnum.Projects]: `/${PageSectionsEnum.Projects.toLowerCase()}`,
      [PageSectionsEnum.Contact]: `/${PageSectionsEnum.Contact.toLowerCase()}`,
    }),
    [],
  );

  const pageSections: PageSection[] = useMemo(
    () => [
      {
        label: PageSectionsEnum.About,
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
      },
      {
        label: PageSectionsEnum.Skills,
        ref: skillsSection,
        link: pageSectionLinks[PageSectionsEnum.Skills],
      },
      {
        label: PageSectionsEnum.Projects,
        ref: projectsSection,
        link: pageSectionLinks[PageSectionsEnum.Projects],
      },
      {
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

  /**
   * As a user scrolls, change the pathname as they reach each section
   */
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = useDebouncedCallback(() => {
    if (window.scrollY === scrollPosition) {
      return;
    }
    setScrollPosition(window.scrollY);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  /**
   * React to the scrollPosition and change the route based on the
   * user's location on the page
   */
  useEffect(() => {
    if (
      !aboutSection.current?.offsetTop ||
      !skillsSection.current?.offsetTop ||
      !projectsSection.current?.offsetTop ||
      !contactSection.current?.offsetTop
    ) {
      return;
    }

    // If we're at the top, show the root route
    if (scrollPosition === 0 && router.asPath !== '/') {
      router.push('', '/', { shallow: true });
    } else if (
      scrollPosition > 0 &&
      scrollPosition < skillsSection.current.offsetTop &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.About]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.About], {
        shallow: true,
      });
    } else if (
      scrollPosition >= skillsSection.current.offsetTop &&
      scrollPosition < projectsSection.current.offsetTop &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.Skills]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.Skills], {
        shallow: true,
      });
    } else if (
      scrollPosition >= projectsSection.current.offsetTop &&
      scrollPosition < contactSection.current.offsetTop &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.Projects]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.Projects], {
        shallow: true,
      });
    } else if (
      scrollPosition >= contactSection.current.offsetTop &&
      scrollPosition < scrollPosition + contactSection.current.offsetHeight &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.Contact]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.Contact], {
        shallow: true,
      });
    }
  }, [scrollPosition, router, pageSectionLinks]);

  /**
   * If a user comes directly to a page section from a URL,
   * scroll to that section
   */
  useEffect(() => {
    if (scrollPosition > 0) {
      return;
    }
    console.log('scroll element into view');

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
  }, [router, scrollPosition]);

  return { pageSections };
};
