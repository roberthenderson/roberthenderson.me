import { clsxMerge } from '@/src/utils/clsxMerge';
import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from '@headlessui/react';
import { FC } from 'react';

export interface ButtonProps extends HeadlessButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  disabled,
  ...rest
}) => {
  return (
    <HeadlessButton
      className={clsxMerge(
        'rounded-full p-2 font-semibold transition-all',
        'px-6 py-1.5',
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
      )}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};
