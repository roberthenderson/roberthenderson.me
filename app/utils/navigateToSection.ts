import { sendGAEvent } from '@next/third-parties/google';
import { RefObject } from 'react';
import { PageSectionsEnum } from '../types';
import { scrollElementIntoView } from './scrollElementIntoView';

export const navigateToSection = (
  pathname: PageSectionsEnum | '/',
  ref: RefObject<HTMLElement | null> | null,
  trackingLabel: string,
) => {
  window.history.pushState(null, '', pathname);
  if (ref?.current) {
    scrollElementIntoView(ref?.current);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  sendGAEvent('event', trackingLabel);
};
