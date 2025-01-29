import { PageSection, useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { scrollElementIntoView } from '@/src/utils/scrollElementIntoView';
import { Transition } from '@headlessui/react';
import { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';

export const Navigation: FC = () => {
  const { pageSectionsList } = useAppContext();
  const [prevIndex, setPrevIndex] = useState(0);

  return (
    <nav className={clsxMerge('flex gap-3 text-sm', 'sm:gap-6 md:gap-8')}>
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
  const {
    pageSectionsList,
    activeSection,
    setActiveSection,
    prevActiveSection,
  } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const isActive = section.id === activeSection;
  // So the transition below moves the underline from right
  // to left when the user's previous hover/scroll is coming from
  // the right/bottom.
  const shouldTransitionToLeft = useMemo(() => {
    if (
      prevActiveSection !== null &&
      activeSection !== null &&
      prevActiveSection > activeSection
    ) {
      return true;
    }
    return prevIndex === pageSectionsList?.length || index < prevIndex;
  }, [prevActiveSection, activeSection, prevIndex, index, pageSectionsList]);

  const handleNavLinkClick = () => {
    setActiveSection(section.id);
    scrollElementIntoView(section.ref.current);
  };
  const handleTouchEnd = () => setIsTouched(true);
  const handleMouseEnter = () => {
    // Checking for isTouched prevents the underline from sticking
    // on the previous active section link on touch screens
    setIsHovered(!isTouched);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPrevIndex(index);
  };

  return (
    <button
      onClick={handleNavLinkClick}
      className={clsxMerge(
        'group relative text-base font-500 text-violet-950 transition-all',
        'h-8',
        'dark:text-slate-200 dark:hover:text-slate-300',
        'md:text-lg',
      )}
      onTouchEnd={handleTouchEnd}
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
            shouldTransitionToLeft &&
              'data-[enter]:data-[closed]:translate-x-full',
          )}
        />
      </Transition>
    </button>
  );
};
