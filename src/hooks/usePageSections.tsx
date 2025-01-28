import { useEffect, useMemo, useRef } from 'react';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../app/AppContextProvider';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { CompaniesSection } from '../components/CompaniesSection/CompaniesSection';
import { SkillsSection } from '../components/SkillsSection/SkillsSection';
import { ALTERNATE_SECTION_CLASSNAME } from '../constants';
import { clsxMerge } from '../utils/clsxMerge';

export const usePageSections = () => {
  const { setPageSectionsList, pageSectionLinks } = useAppContext();

  const skillsSection = useRef<HTMLElement | null>(null);
  const workSection = useRef<HTMLElement | null>(null);
  const aboutSection = useRef<HTMLElement | null>(null);

  const pageSections: PageSection[] = useMemo(
    () => [
      {
        id: PageSectionsEnum.Skills,
        label: 'Skills',
        ref: skillsSection,
        link: pageSectionLinks[PageSectionsEnum.Skills],
        children: <SkillsSection />,
      },
      {
        id: PageSectionsEnum.Work,
        label: 'Work',
        ref: workSection,
        link: pageSectionLinks[PageSectionsEnum.Work],
        children: <CompaniesSection />,
        className: clsxMerge(ALTERNATE_SECTION_CLASSNAME),
      },
      {
        id: PageSectionsEnum.About,
        label: 'About',
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
        children: <AboutSection />,
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
