import { PageSection, useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { scrollElementIntoView } from '@/src/utils/scrollElementIntoView';
import { Transition } from '@headlessui/react';
import { sendGAEvent } from '@next/third-parties/google';
import { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';

interface NavigationItemProps {
  section: PageSection;
  index: number;
  prevIndex: number;
  setPrevIndex: Dispatch<SetStateAction<number>>;
}

export const NavigationItem: FC<NavigationItemProps> = ({
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
  const mainNavigationLength = useMemo(
    () =>
      pageSectionsList?.filter((section) => section.isMainNavigation)?.length ??
      0,
    [pageSectionsList],
  );
  const shouldTransitionToLeft = useMemo(() => {
    if (
      !isHovered &&
      prevActiveSection !== null &&
      activeSection !== null &&
      prevActiveSection > activeSection
    ) {
      return true;
    }
    if (isHovered) {
      return (
        (index === mainNavigationLength - 1 && index === prevIndex) ||
        index < prevIndex
      );
    }
    return false;
  }, [
    isHovered,
    prevActiveSection,
    activeSection,
    prevIndex,
    index,
    mainNavigationLength,
  ]);

  const handleNavLinkClick = () => {
    setActiveSection(section.id);
    scrollElementIntoView(section.ref.current);
    sendGAEvent('event', `nav_item_click__${section.label}`);
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
        'px-1.5 sm:px-3 md:px-4',
      )}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>
        <span>{section.label}</span>
        <Transition show={isActive || isHovered}>
          <div
            className={clsxMerge(
              // Base styles
              'ml-1.5 sm:ml-3 md:ml-4',
              'w-[calc(100%-12px)] sm:w-[calc(100%-24px)] md:w-[calc(100%-32px)]',
              'absolute bottom-0 left-0 h-0.5 rounded-sm bg-violet-950/50 transition ease-in-out',
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
      </span>
    </button>
  );
};
