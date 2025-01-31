import { useAppContext } from '@/src/app/AppContextProvider';
import { FC, useState } from 'react';
import { NavigationItem } from './NavigationItem';

export const Navigation: FC = () => {
  const { pageSectionsList } = useAppContext();
  const [prevIndex, setPrevIndex] = useState(0);

  return (
    <nav className="flex text-sm">
      {pageSectionsList?.map((section, index) => {
        if (!section.isMainNavigation) {
          return null;
        }
        return (
          <NavigationItem
            key={section.id}
            index={index}
            prevIndex={prevIndex}
            section={section}
            setPrevIndex={setPrevIndex}
          />
        );
      })}
    </nav>
  );
};
