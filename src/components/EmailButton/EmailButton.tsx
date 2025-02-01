import { PageSectionsEnum, useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { scrollElementIntoView } from '@/src/utils/scrollElementIntoView';
import { sendGAEvent } from '@next/third-parties/google';
import { FC, useMemo } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';
import { Button } from '../base/Button/Button';

interface EmailButtonProps {
  location: 'header' | 'hero';
  className?: string;
}

export const EmailButton: FC<EmailButtonProps> = ({ location, className }) => {
  const { pageSectionsList } = useAppContext();
  const contactSection = useMemo(
    () =>
      pageSectionsList?.find(
        (section) => section.id === PageSectionsEnum.Contact,
      ),
    [pageSectionsList],
  );
  const handleClick = () => {
    scrollElementIntoView(contactSection?.ref?.current);
    sendGAEvent('event', `email_button_click__${location}`);
  };

  return (
    <Button
      className={clsxMerge(
        'flex items-center gap-2',
        {
          'max-sm:py-2 max-sm:pl-2 max-sm:pr-2.5': location === 'header',
          'ml-1 px-16 sm:hidden': location === 'hero',
        },
        className,
      )}
      onClick={handleClick}
    >
      <span className={clsxMerge(location === 'header' && 'max-sm:hidden')}>
        Let's Talk
      </span>
      <RiSendPlaneLine size={18} />
    </Button>
  );
};
