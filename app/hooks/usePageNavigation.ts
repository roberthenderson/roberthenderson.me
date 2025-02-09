'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useAppContext } from '../AppContextProvider';
import { ROUTES } from '../constants/routes';
import { PageSection } from '../types';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';
import { usePrevious } from './usePrevious';

interface UsePageNavigationProps {
  pageSections: PageSection[];
}

export const usePageNavigation = ({ pageSections }: UsePageNavigationProps) => {
  const pathname = usePathname();
  const isHomePathname = pathname.split('/').length === 2;
  const prevPathname = usePrevious(pathname);
  const { headerRef } = useAppContext();

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
    if (!headerRef?.current?.offsetHeight || !isHomePathname) {
      return;
    }

    const scrollWithHeaderHeight = Math.ceil(
      scrollPosition + headerRef.current.offsetHeight,
    );
    // If we're at the top, show the root route
    if (
      pageSections[0].ref.current?.offsetTop &&
      scrollWithHeaderHeight < pageSections[0].ref.current.offsetTop &&
      pathname !== '/' &&
      prevScrollPosition
    ) {
      window.history.pushState(null, '', '/');
      return;
    }

    // If we're below the last section, show the root route
    const lastSection = pageSections[pageSections.length - 1].ref.current;
    if (
      lastSection?.offsetTop &&
      lastSection?.offsetHeight &&
      scrollWithHeaderHeight >
        lastSection.offsetTop + lastSection.offsetHeight &&
      pathname !== '/'
    ) {
      window.history.pushState(null, '', '/');
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
        pathname !== pageSection.id &&
        pageSection.id !== prevPathname
      ) {
        window.history.pushState(null, '', ROUTES[pageSection.id].route);
      }
    });
  }, [
    pathname,
    isHomePathname,
    prevPathname,
    pageSections,
    scrollPosition,
    prevScrollPosition,
    headerRef,
  ]);

  /**
   * If a user comes directly to a page section from a URL,
   * scroll to that section
   */
  useEffect(() => {
    // If the user has come directly to the page, the base state
    // will have a `scrollPosition` of 0 and won't have a prevPathname
    if (scrollPosition > 0 || prevPathname || !isHomePathname) {
      return;
    }

    if (pathname !== '/') {
      pageSections.forEach((pageSection) => {
        const pageSectionFromRoute = pageSections.find(
          (section) => ROUTES[section.id].route === pathname,
        );
        if (
          pageSectionFromRoute &&
          pageSection.id === pageSectionFromRoute.id
        ) {
          scrollElementIntoView(pageSection.ref.current);
        }
      });
    }
  }, [pageSections, pathname, isHomePathname, prevPathname, scrollPosition]);
};
