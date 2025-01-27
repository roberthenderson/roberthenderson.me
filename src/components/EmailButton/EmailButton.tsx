import { useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { scrollElementIntoView } from '@/src/utils/scrollElementIntoView';
import { FC } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';
import { Button } from '../base/Button/Button';

interface EmailButtonProps {
  location: 'header' | 'hero' | 'footer';
  className?: string;
}

export const EmailButton: FC<EmailButtonProps> = ({ location, className }) => {
  const { contactSectionRef } = useAppContext();
  const handleClick = () => scrollElementIntoView(contactSectionRef?.current);

  return (
    <Button
      className={clsxMerge(
        'flex items-center gap-2 pr-2.5',
        {
          'px-4 text-sm lg:text-base': location === 'footer',
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
