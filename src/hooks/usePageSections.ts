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
  const {
    router,
    setPageSectionsList,
    activeSection,
    setActiveSection,
    headerRef,
  } = useAppContext();

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
        id: PageSectionsEnum.About,
        label: PageSectionsEnum.About,
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
      },
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
      !headerRef?.current?.offsetHeight ||
      !aboutSection.current?.offsetTop ||
      !skillsSection.current?.offsetTop ||
      !projectsSection.current?.offsetTop ||
      !contactSection.current?.offsetTop
    ) {
      return;
    }

    const scrollWithHeaderHeight =
      scrollPosition + headerRef.current.offsetHeight;

    // If we're at the top, show the root route
    if (
      scrollWithHeaderHeight < aboutSection.current.offsetTop &&
      router.asPath !== '/'
    ) {
      router.push('', '/', { shallow: true });
      setActiveSection(null);
    } else if (
      scrollWithHeaderHeight >= aboutSection.current.offsetTop &&
      scrollWithHeaderHeight < skillsSection.current.offsetTop &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.About]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.About], {
        shallow: true,
      });
      setActiveSection(PageSectionsEnum.About);
    } else if (
      scrollWithHeaderHeight >= skillsSection.current.offsetTop &&
      scrollWithHeaderHeight < projectsSection.current.offsetTop &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.Skills]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.Skills], {
        shallow: true,
      });
      setActiveSection(PageSectionsEnum.Skills);
    } else if (
      scrollWithHeaderHeight >= projectsSection.current.offsetTop &&
      scrollWithHeaderHeight < contactSection.current.offsetTop &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.Projects]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.Projects], {
        shallow: true,
      });
      setActiveSection(PageSectionsEnum.Projects);
    } else if (
      scrollWithHeaderHeight >= contactSection.current.offsetTop &&
      scrollWithHeaderHeight <
        scrollWithHeaderHeight + contactSection.current.offsetHeight &&
      router.asPath !== pageSectionLinks[PageSectionsEnum.Contact]
    ) {
      router.push('', pageSectionLinks[PageSectionsEnum.Contact], {
        shallow: true,
      });
      setActiveSection(PageSectionsEnum.Contact);
    }
  }, [scrollPosition, headerRef, router, pageSectionLinks, setActiveSection]);

  /**
   * If a user comes directly to a page section from a URL,
   * scroll to that section
   */
  useEffect(() => {
    // If the user has come directly to the page, the base state
    // will have a `scrollPosition` of 0 and `activeSection` of
    // null.
    if (scrollPosition > 0 || activeSection !== null) {
      return;
    }

    const { asPath } = router;
    if (asPath !== '/') {
      const pageSection = capitalize(asPath.slice(1)) as PageSectionsEnum;
      switch (pageSection) {
        case PageSectionsEnum.About:
          scrollElementIntoView(aboutSection.current);
          setActiveSection(PageSectionsEnum.About);
          break;
        case PageSectionsEnum.Skills:
          scrollElementIntoView(skillsSection.current);
          setActiveSection(PageSectionsEnum.Skills);
          break;
        case PageSectionsEnum.Projects:
          scrollElementIntoView(projectsSection.current);
          setActiveSection(PageSectionsEnum.Projects);
          break;
        case PageSectionsEnum.Contact:
          scrollElementIntoView(contactSection.current);
          setActiveSection(PageSectionsEnum.Contact);
          break;
        default:
          router.push('/', undefined, { shallow: true });
          setActiveSection(null);
      }
    } else {
      setActiveSection(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, scrollPosition, setActiveSection]);

  return { pageSections };
};
