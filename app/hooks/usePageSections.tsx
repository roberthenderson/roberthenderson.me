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
import { PAGE_SECTIONS } from '../constants/pageSections';

export const usePageSections = () => {
  const { setPageSectionsList } = useAppContext();

  const skillsSection = useRef<HTMLElement | null>(null);
  const workSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);
  const contactSection = useRef<HTMLElement | null>(null);

  const pageSections: PageSection[] = useMemo(
    () => [
      {
        ref: skillsSection,
        children: <SkillsSection />,
        ...PAGE_SECTIONS[PageSectionsEnum.Skills],
      },
      {
        ref: workSection,
        children: <WorkSection />,
        ...PAGE_SECTIONS[PageSectionsEnum.Work],
      },
      {
        ref: aboutSection,
        children: <AboutSection />,
        ...PAGE_SECTIONS[PageSectionsEnum.About],
      },
      {
        ref: contactSection,
        children: <ContactSection />,
        ...PAGE_SECTIONS[PageSectionsEnum.Contact],
      },
    ],
    [],
  );

  /**
   * On first page load, set the page sections in context
   */
  useEffect(() => {
    setPageSectionsList(pageSections);
  }, [setPageSectionsList, pageSections]);

  return { pageSections };
};
