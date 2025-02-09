'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { AboutSection } from '@/app/components/AboutSection/AboutSection';
import { ContactSection } from '@/app/components/ContactSection/ContactSection';
import { SkillsSection } from '@/app/components/SkillsSection/SkillsSection';
import { WorkSection } from '@/app/components/WorkSection/WorkSection';
import { PAGE_SECTIONS } from '@/app/constants/pageSections';
import { useEffect, useMemo, useRef } from 'react';
import { PageSection, PageSectionIdEnum } from '../types';

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
        ...PAGE_SECTIONS[PageSectionIdEnum.Skills],
      },
      {
        ref: workSection,
        children: <WorkSection />,
        ...PAGE_SECTIONS[PageSectionIdEnum.Work],
      },
      {
        ref: aboutSection,
        children: <AboutSection />,
        ...PAGE_SECTIONS[PageSectionIdEnum.About],
      },
      {
        ref: contactSection,
        children: <ContactSection />,
        ...PAGE_SECTIONS[PageSectionIdEnum.Contact],
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
