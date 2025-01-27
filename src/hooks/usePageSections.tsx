import { useEffect, useMemo, useRef } from 'react';
import {
  PageSection,
  PageSectionsEnum,
  useAppContext,
} from '../app/AppContextProvider';
import { CompaniesSection } from '../components/CompaniesSection/CompaniesSection';
import { SkillsSection } from '../components/SkillsSection/SkillsSection';
import { INDIGO_GRADIENT_BG } from '../constants';
import { clsxMerge } from '../utils/clsxMerge';

export const usePageSections = () => {
  const { setPageSectionsList, pageSectionLinks } = useAppContext();

  const skillsSection = useRef<HTMLElement | null>(null);
  const companiesSection = useRef<HTMLElement | null>(null);
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
        ref: companiesSection,
        link: pageSectionLinks[PageSectionsEnum.Work],
        children: <CompaniesSection />,
        className: clsxMerge(
          INDIGO_GRADIENT_BG,
          'border-t-2 border-b-12 border-t-violet-500 border-b-violet-600 dark:bg-none dark:bg-slate-900 dark:border-b-12 dark:border-slate-700 md:py-12',
        ),
      },
      {
        id: PageSectionsEnum.About,
        label: 'About',
        ref: aboutSection,
        link: pageSectionLinks[PageSectionsEnum.About],
        children: <div className="h-[1000px]"></div>,
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
