import { sendGAEvent } from '@next/third-parties/google';
import { usePathname, useRouter } from 'next/navigation';
import { RefObject } from 'react';
import { scrollElementIntoView } from '../utils/scrollElementIntoView';

interface UseNavigateToSectionProps {
  navigateToPathname?: string;
  ref?: RefObject<HTMLElement | null>;
}

export const useNavigateToSection = ({
  navigateToPathname,
  ref,
}: UseNavigateToSectionProps) => {
  const currentPathname = usePathname();
  const router = useRouter();

  return ({ trackingLabel }: { trackingLabel: string }) => {
    if (currentPathname.split('/').length > 2 && navigateToPathname) {
      sendGAEvent('event', trackingLabel);
      return router.push(navigateToPathname);
    }
    window.history.pushState(null, '', navigateToPathname);
    if (ref?.current) {
      scrollElementIntoView(ref?.current);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    sendGAEvent('event', trackingLabel);
  };
};
