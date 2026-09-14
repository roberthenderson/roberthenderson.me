import Link, { type LinkProps } from 'next/link';
import type { FC, HTMLProps } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

type TextLinkProps = LinkProps & HTMLProps<HTMLAnchorElement>;

export const TextLink: FC<TextLinkProps> = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className={clsxMerge(
        'text-violet-700 transition-all dark:text-teal-200/70',
        'hover:text-indigo-600 hover:dark:text-yellow-500',
      )}
    >
      {children}
    </Link>
  );
};
