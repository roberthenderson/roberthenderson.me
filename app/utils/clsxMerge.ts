import clsx, { ClassArray } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxMerge = (...classNames: ClassArray | string[]) =>
  twMerge(clsx(classNames));
