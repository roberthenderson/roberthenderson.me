import { clsxMerge } from '@/src/utils/clsxMerge';
import { Label } from '@headlessui/react';
import { FC, ReactNode } from 'react';

interface FieldLabelProps {
  children: ReactNode;
  focused?: boolean;
  className?: string;
}

export const FieldLabel: FC<FieldLabelProps> = ({
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
