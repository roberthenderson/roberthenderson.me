import { clsxMerge } from '@/app/utils/clsxMerge';
import { Label } from '@headlessui/react';
import { FC, PropsWithChildren } from 'react';

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
        'block pb-0.5 text-sm font-500 text-slate-500',
        'dark:text-slate-400',
        focused && 'text-violet-700 dark:text-indigo-400',
        className,
      )}
    >
      {children}
    </Label>
  );
};
