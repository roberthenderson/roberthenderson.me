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
      className={getButtonStyles({ variant, disabled, className })}
      {...rest}
    >
      {children}
    </Link>
  );
};
