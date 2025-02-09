'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { Button } from '@/app/components/base/Button/Button';
import { ROUTES } from '@/app/constants/routes';
import { useNavigateToSection } from '@/app/hooks/useNavigateToSection';
import { PageSectionIdEnum } from '@/app/types';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, useMemo } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

interface EmailButtonProps {
  location?: 'header' | 'hero';
  className?: string;
  onClick?: () => void;
}

export const EmailButton: FC<EmailButtonProps> = ({
  location,
  className,
  onClick,
}) => {
  const { pageSectionsList } = useAppContext();
  const contactSection = useMemo(
    () =>
      pageSectionsList?.find(
        (section) => section.id === PageSectionIdEnum.Contact,
      ),
    [pageSectionsList],
  );
  const navigateToSection = useNavigateToSection({
    navigateToPathname: ROUTES[PageSectionIdEnum.Contact].route,
    ref: contactSection?.ref,
  });
  const handleClick = () => {
    onClick?.();
    navigateToSection?.({ trackingLabel: `email_button_click__${location}` });
  };

  return (
    <Button
      className={clsxMerge(
        'flex items-center gap-2 px-14',
        {
          'px-6 py-2 max-sm:gap-0 max-sm:p-3 max-sm:pr-[13px]':
            location === 'header',
          'ml-1 px-16 py-2.5 sm:hidden': location === 'hero',
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
