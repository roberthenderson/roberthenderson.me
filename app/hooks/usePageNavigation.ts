'use client';

import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { PageSection, useAppContext } from '../AppContextProvider';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';
import { usePrevious } from './usePrevious';

interface UsePageNavigationProps {
  pageSections: PageSection[];
}

export const usePageNavigation = ({ pageSections }: UsePageNavigationProps) => {
  const {
    router,
    activeSection,
    setActiveSection,
    headerRef,
    pageSectionLinks,
  } = useAppContext();

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
    const scrollWithHeaderHeight = Math.ceil(
      scrollPosition + headerRef.current.offsetHeight,
    );

    // If we're at the top, show the root route
    if (
      pageSections[0].ref.current?.offsetTop &&
      scrollWithHeaderHeight < pageSections[0].ref.current.offsetTop &&
      router.asPath !== '/' &&
      prevScrollPosition
    ) {
      router
        .push('', '/', { shallow: true })
        .then(() => setActiveSection(null));
      return;
    }

    // If we're below the last section, show the root route
    const lastSection = pageSections[pageSections.length - 1].ref.current;
    if (
      lastSection?.offsetTop &&
      lastSection?.offsetHeight &&
      scrollWithHeaderHeight >
        lastSection.offsetTop + lastSection.offsetHeight &&
      router.asPath !== '/'
    ) {
      router
        .push('', '/', { shallow: true })
        .then(() => setActiveSection(null));
      setActiveSection(null);
      return;
    }

    pageSections.forEach(async (pageSection) => {
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
        await router.push('', pageSectionLinks[pageSection.id], {
          shallow: true,
        });
        setActiveSection(pageSection.id);
      }
    });
  }, [
    router,
    pageSections,
    scrollPosition,
    prevScrollPosition,
    headerRef,
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
        const pageSectionFromRoute = pageSections.find(
          (section) => section.link === router.asPath,
        );
        if (
          pageSectionFromRoute &&
          pageSection.id === pageSectionFromRoute.id
        ) {
          scrollElementIntoView(pageSection.ref.current);
          setActiveSection(pageSection.id);
        }
      });
    }
    // Don't react to activeSection changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, scrollPosition, setActiveSection]);
};
