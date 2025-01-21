import { capitalize } from 'lodash';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../app/AppContextProvider';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';
import { PageSectionLinks } from './usePageSections';
import { usePrevious } from './usePrevious';

interface UsePageNavigationProps {
  pageSectionLinks: PageSectionLinks;
  pageSections: PageSection[];
}

export const usePageNavigation = ({
  pageSectionLinks,
  pageSections,
}: UsePageNavigationProps) => {
  const { router, activeSection, setActiveSection, headerRef } =
    useAppContext();

  /**
   * As a user scrolls, change the pathname as they reach each section
   */
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollPosition = usePrevious(scrollPosition);
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
    if (!headerRef?.current?.offsetHeight) {
      return;
    }
    const scrollWithHeaderHeight =
      scrollPosition + headerRef.current.offsetHeight;

    // If we're at the top, show the root route
    if (
      pageSections[0].ref.current?.offsetTop &&
      scrollWithHeaderHeight < pageSections[0].ref.current.offsetTop &&
      router.asPath !== '/' &&
      prevScrollPosition
    ) {
      router.push('', '/', { shallow: true });
      setActiveSection(null);
    }

    pageSections.forEach((pageSection) => {
      const currentSection = pageSection.ref.current;
      if (!currentSection?.offsetTop || !currentSection.offsetHeight) {
        return;
      }
      if (
        scrollWithHeaderHeight >= currentSection.offsetTop &&
        scrollWithHeaderHeight <
          currentSection.offsetTop + currentSection.offsetHeight &&
        router.asPath !== pageSectionLinks[pageSection.id]
      ) {
        router.push('', pageSectionLinks[pageSection.id], { shallow: true });
        setActiveSection(pageSection.id);
      }
    });
  }, [
    pageSections,
    scrollPosition,
    prevScrollPosition,
    headerRef,
    router,
    pageSectionLinks,
    setActiveSection,
  ]);

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
      pageSections.forEach((pageSection) => {
        const pageSectionFromRoute = capitalize(
          asPath.slice(1),
        ) as PageSectionsEnum;
        if (pageSection.id === pageSectionFromRoute) {
          scrollElementIntoView(pageSection.ref.current);
          setActiveSection(pageSection.id);
        }
      });
    }
    // Don't react to activeSection changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, scrollPosition, setActiveSection]);
};
