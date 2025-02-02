'use client';

import { SECTION_CLASSNAME } from '@/app/constants/classNames';
import { usePageNavigation } from '@/app/hooks/usePageNavigation';
import { usePageSections } from '@/app/hooks/usePageSections';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC } from 'react';
import { HeroSection } from '../HeroSection/HeroSection';

export const Home: FC = () => {
  const { pageSections } = usePageSections();
  usePageNavigation({ pageSections });

  return (
    <div className="flex flex-col">
      <HeroSection />
      {pageSections.map((section, index) => (
        <section
          key={section.id}
          ref={section.ref}
          className={clsxMerge(
            'scroll-mt-16',
            index % 2 === 1 ? SECTION_CLASSNAME : '',
          )}
        >
          {section.children}
        </section>
      ))}
    </div>
  );
};
