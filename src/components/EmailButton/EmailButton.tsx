import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';

export const EmailButton: FC = () => {
  return (
    <button
      className={clsxMerge(
        'flex items-center gap-2 rounded-full bg-emerald-600 p-2 pr-2.5 pt-[9px] font-semibold text-emerald-100 transition-all',
        'sm:px-6 sm:py-1.5',
        'dark:bg-teal-600 dark:text-teal-100',
        'hover:bg-emerald-600/90 hover:text-emerald-50 dark:hover:bg-teal-600/90 hover:dark:text-teal-50',
      )}
    >
      <span className="max-sm:hidden">Let's Talk</span>
      <RiSendPlaneLine size={18} />
    </button>
  );
};
