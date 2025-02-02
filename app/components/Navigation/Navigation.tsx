'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { PAGE_SECTIONS } from '@/app/constants/pageSections';
import { FC, useState } from 'react';
import { NavigationItem } from './NavigationItem';

export const Navigation: FC = () => {
  const { pageSectionsList } = useAppContext();
  const [prevIndex, setPrevIndex] = useState(0);

  return (
    <nav className="flex text-sm">
      {pageSectionsList === null
        ? // Prior to the list being set in context with its refs,
          // we can use a constant that has the basic info to show
          // the nav immediately
          Object.values(PAGE_SECTIONS).map((section, index) => {
            if (!section.isMainNavigation) {
              return null;
            }
            return (
              <NavigationItem
                key={section.id}
                id={section.id}
                label={section.label}
                index={index}
                prevIndex={prevIndex}
                setPrevIndex={setPrevIndex}
              />
            );
          })
        : pageSectionsList.map((section, index) => {
            if (!section.isMainNavigation) {
              return null;
            }
            return (
              <NavigationItem
                key={section.id}
                id={section.id}
                label={section.label}
                index={index}
                prevIndex={prevIndex}
                ref={section.ref}
                setPrevIndex={setPrevIndex}
              />
            );
          })}
    </nav>
  );
};
