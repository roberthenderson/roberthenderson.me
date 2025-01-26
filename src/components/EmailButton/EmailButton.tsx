import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

interface EmailButtonProps {
  variant: 'header' | 'hero' | 'footer';
  className?: string;
}

export const EmailButton: FC<EmailButtonProps> = ({ variant, className }) => {
  return (
    <button
      className={clsxMerge(
        'flex items-center gap-2 rounded-full bg-emerald-600 p-2 pr-2.5 pt-[9px] font-semibold text-emerald-100 transition-all',
        'sm:px-6 sm:py-1.5',
        'dark:bg-teal-600 dark:text-teal-100',
        'hover:bg-emerald-600/90 hover:text-emerald-50 dark:hover:bg-teal-600/90 hover:dark:text-teal-50',
        {
          'px-4 text-sm lg:text-base': variant === 'footer',
          'ml-1 px-16 sm:hidden': variant === 'hero',
        },
        className,
      )}
    >
      <span className={clsxMerge(variant === 'header' && 'max-sm:hidden')}>
        Let's Talk
      </span>
      <RiSendPlaneLine size={18} />
    </button>
  );
};
