import { sendGAEvent } from '@next/third-parties/google';
import { usePathname, useRouter } from 'next/navigation';
import { RefObject, useEffect } from 'react';
import { useAppContext } from '../AppContextProvider';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';

interface UseNavigateToSectionProps {
  navigateToPathname?: string;
  ref?: RefObject<HTMLElement | null>;
}

export const useNavigateToSection = ({
  navigateToPathname,
  ref,
}: UseNavigateToSectionProps) => {
  const { navItemClicked, setNavItemClicked } = useAppContext();
  const currentPathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScrollEnd = () => {
      if (navItemClicked) {
        setNavItemClicked(false);
      }
    };
    window.addEventListener('scrollend', handleScrollEnd);
    return () => window.removeEventListener('scrollend', handleScrollEnd);
  });

  return ({ trackingLabel }: { trackingLabel: string }) => {
    if (currentPathname.split('/').length > 2 && navigateToPathname) {
      sendGAEvent('event', trackingLabel);
      return router.push(navigateToPathname);
    }
    setNavItemClicked(true);
    window.history.replaceState(null, '', navigateToPathname);
    if (ref?.current) {
      scrollElementIntoView(ref?.current);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    sendGAEvent('event', trackingLabel);
  };
};
