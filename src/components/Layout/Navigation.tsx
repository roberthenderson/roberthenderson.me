import { PageSection, useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { scrollElementIntoView } from '@/src/utils/scrollElementIntoView';
import { Transition } from '@headlessui/react';
import { Dispatch, FC, SetStateAction, useState } from 'react';

export const Navigation: FC = () => {
  const { pageSectionsList } = useAppContext();
  const [prevIndex, setPrevIndex] = useState(0);

  return (
    <nav className={clsxMerge('flex gap-3 text-sm', 'sm:gap-6 md:gap-8')}>
      {pageSectionsList?.map((section, index) => (
        <NavigationItem
          key={section.label}
          index={index}
          prevIndex={prevIndex}
          section={section}
          setPrevIndex={setPrevIndex}
        />
      ))}
    </nav>
  );
};

interface NavigationItemProps {
  section: PageSection;
  index: number;
  prevIndex: number;
  setPrevIndex: Dispatch<SetStateAction<number>>;
}

const NavigationItem: FC<NavigationItemProps> = ({
  section,
  index,
  prevIndex,
  setPrevIndex,
}) => {
  const { activeSection, setActiveSection } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);
  const [touched, setTouched] = useState(false);

  const isActive = section.id === activeSection;
  // So the transition below moves the underline from right
  // to left when the user's previous hover is coming from
  // the right and moving left.
  const isMovingLeft = index < prevIndex;

  const handleNavLinkClick = () => {
    setActiveSection(null);
    scrollElementIntoView(section.ref.current);
  };
  const handleTouchStart = () => {
    setTouched(true);
    setPrevIndex(index);
  };
  const handleMouseEnter = () => {
    if (!touched) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (!touched) {
      setIsHovered(false);
      setPrevIndex(index);
    }
  };

  return (
    <button
      onClick={handleNavLinkClick}
      className={clsxMerge(
        'group relative text-sm font-500 text-violet-950 transition-all',
        'h-8',
        'hover:text-violet-600 dark:text-slate-200 dark:hover:text-slate-300',
        'sm:text-base',
      )}
      onTouchStart={handleTouchStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {section.label}
      <Transition show={isActive || isHovered}>
        <div
          className={clsxMerge(
            // Base styles
            'absolute h-0.5 w-full rounded-sm bg-violet-950/50 transition ease-in-out',
            'dark:bg-slate-200/50',
            // Shared closed styles
            'data-[closed]:opacity-0',
            // Entering styles
            'data-[enter]:data-[closed]:-translate-x-full data-[enter]:duration-200',
            isMovingLeft && 'data-[enter]:data-[closed]:translate-x-full',
          )}
        />
      </Transition>
    </button>
  );
};
