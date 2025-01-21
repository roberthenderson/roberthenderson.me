import { PageSection, useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { scrollElementIntoView } from '@/src/utils/scrollElementIntoView';
import { FC } from 'react';

export const Navigation: FC = () => {
  const { pageSectionsList } = useAppContext();
  return (
    <nav className="flex gap-8 text-sm">
      {pageSectionsList?.map((section) => (
        <NavigationItem key={section.label} section={section} />
      ))}
    </nav>
  );
};

interface NavigationItemProps {
  section: PageSection;
}

const NavigationItem: FC<NavigationItemProps> = ({ section }) => {
  const { router } = useAppContext();
  const handleNavLinkClick = () => {
    router.push('', section.link, { shallow: true });
    scrollElementIntoView(section.ref.current);
  };

  return (
    <button
      onClick={handleNavLinkClick}
      className={clsxMerge(
        'font-500 text-violet-600 transition-all dark:text-violet-400',
        'hover:text-violet-950 dark:hover:text-violet-200',
      )}
    >
      {section.label}
    </button>
  );
};
