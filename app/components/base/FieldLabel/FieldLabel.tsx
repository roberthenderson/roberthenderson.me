import { Label } from '@headlessui/react';
import type { FC, PropsWithChildren } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

interface FieldLabelProps {
  focused?: boolean;
  className?: string;
}

export const FieldLabel: FC<PropsWithChildren<FieldLabelProps>> = ({
  children,
  focused,
  className,
}) => {
  return (
    <Label
      className={clsxMerge(
        'transition-colors',
        'block pb-0.5 font-500 text-slate-500 text-sm',
        'dark:text-slate-400',
        focused && 'text-violet-700 dark:text-indigo-400',
        className,
      )}
    >
      {children}
    </Label>
  );
};
