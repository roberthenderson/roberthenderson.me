'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { Button } from '@/app/components/base/Button/Button';
import { PageSectionsEnum } from '@/app/types';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { navigateToSection } from '@/app/utils/navigateToSection';
import { FC, useMemo } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

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
  const handleClick = () =>
    contactSection
      ? navigateToSection(
          contactSection.id,
          contactSection.ref,
          `email_button_click__${location}`,
        )
      : null;

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
