import { sendGAEvent } from '@next/third-parties/google';
import { usePathname, useRouter } from 'next/navigation';
import { RefObject, useCallback } from 'react';
import { PageSectionsEnum } from '../types';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';

interface UseNavigateToSectionProps {
  navigateToPathname?: PageSectionsEnum | '/';
  ref?: RefObject<HTMLElement | null>;
}

export const useNavigateToSection = ({
  navigateToPathname,
  ref,
}: UseNavigateToSectionProps) => {
  const currentPathname = usePathname();
  const router = useRouter();

  return useCallback(
    ({ trackingLabel }: { trackingLabel: string }) => {
      console.log({ currentPathname, navigateToPathname });
      if (currentPathname.split('/').length > 2 && navigateToPathname) {
        return router.push(navigateToPathname);
      }
      window.history.pushState(null, '', navigateToPathname);
      if (ref?.current) {
        scrollElementIntoView(ref?.current);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      sendGAEvent('event', trackingLabel);
    },
    [currentPathname, router, navigateToPathname, ref],
  );
};
