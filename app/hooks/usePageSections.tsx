'use client';

import { useEffect, useMemo, useRef } from 'react';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../AppContextProvider';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { ContactSection } from '../components/ContactSection/ContactSection';
import { SkillsSection } from '../components/SkillsSection/SkillsSection';
import { WorkSection } from '../components/WorkSection/WorkSection';

export const usePageSections = () => {
  const { setPageSectionsList, pageSectionLinks } = useAppContext();

  const skillsSection = useRef<HTMLElement | null>(null);
  const workSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  const contactSection = useRef<HTMLElement | null>(null);

  const pageSections: PageSection[] = useMemo(
    () => [
      {
        id: PageSectionsEnum.Skills,
        label: 'Skills',
        ref: skillsSection,
        link: pageSectionLinks[PageSectionsEnum.Skills],
        isMainNavigation: true,
        children: <SkillsSection />,
      },
      {
        id: PageSectionsEnum.Work,
        label: 'Work',
        ref: workSection,
        link: pageSectionLinks[PageSectionsEnum.Work],
        isMainNavigation: true,
        children: <WorkSection />,
      },
      {
        id: PageSectionsEnum.About,
        label: 'About',
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
        isMainNavigation: true,
        children: <AboutSection />,
      },
      {
        id: PageSectionsEnum.Contact,
        label: 'Contact',
        ref: contactSection,
        isMainNavigation: false,
        children: <ContactSection />,
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
