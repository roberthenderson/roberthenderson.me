import { clsxMerge } from '@/app/utils/clsxMerge';
import { ButtonProps as HeadlessButtonProps } from '@headlessui/react';
import { ButtonProps } from './Button';

export const getButtonStyles = ({
  variant,
  disabled,
  className,
}: {
  variant: ButtonProps['variant'];
  disabled?: boolean;
  className?: HeadlessButtonProps['className'];
}) => {
  return clsxMerge(
    'rounded-full font-semibold transition-all',
    'px-6 py-2',
    {
      'bg-emerald-600 text-emerald-100 dark:bg-teal-600 dark:text-teal-100':
        variant === 'primary',
      'hover:bg-emerald-600/90 hover:text-emerald-50 dark:hover:bg-teal-600/90 hover:dark:text-teal-50':
        variant === 'primary',
      'bg-violet-600 text-violet-100 dark:bg-indigo-800 dark:text-indigo-100':
        variant === 'secondary',
      'dark:hover:bg-indigo-900 hover:dark:text-teal-50':
        variant === 'secondary',
    },
    disabled && 'cursor-not-allowed disabled:opacity-70',
    !disabled && 'hover:bg-opacity-95',
    className,
  );
};
