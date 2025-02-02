import Link, { LinkProps } from 'next/link';
import { FC, HTMLProps } from 'react';

type TextLinkProps = LinkProps & HTMLProps<HTMLAnchorElement>;

export const TextLink: FC<TextLinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest} className="hover:underline">
      {children}
    </Link>
  );
};
