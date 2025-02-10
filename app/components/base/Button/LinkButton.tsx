import { clsxMerge } from '@/app/utils/clsxMerge';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';
import { getButtonStyles } from './getButtonStyles';

type LinkProps = NextLinkProps & HTMLProps<HTMLAnchorElement>;

export interface LinkButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary';
}

export const LinkButton: FC<LinkButtonProps> = ({
  children,
  className,
  variant = 'primary',
  disabled,
  ...rest
}) => {
  return (
    <Link
      className={clsxMerge(
        'flex items-center gap-2.5 self-center px-8',
        getButtonStyles({ variant, disabled, className }),
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
