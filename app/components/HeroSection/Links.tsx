'use client';

import { RESUME_FILENAME } from '@/app/constants/labels';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URI } from '@/app/constants/urls';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';
import { FC, HTMLProps, PropsWithChildren, useMemo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

interface LinksProps {
  variant?: 'hero' | 'footer';
  className?: string;
}

export const Links: FC<LinksProps> = ({ variant = 'hero', className }) => {
  const iconClassName = useMemo(
    () =>
      clsxMerge(
        'text-indigo-950 opacity-80 transition-opacity',
        'dark:text-slate-50',
        'hover:opacity-100',
        {
          'text-violet-950': variant === 'footer',
        },
      ),
    [variant],
  );
  const iconSize = useMemo(() => (variant === 'footer' ? 32 : 30), [variant]);

  const linkItems = useMemo(
    () => [
      {
        name: 'github',
        href: GITHUB_URL,
        icon: <FaGithub className={iconClassName} size={iconSize} />,
      },
      {
        name: 'linkedin',
        href: LINKEDIN_URL,
        icon: (
          <FaLinkedin
            className={clsxMerge(iconClassName, 'pl-1')}
            size={iconSize}
          />
        ),
      },
      {
        name: 'resume_download',
        href: RESUME_URI,
        icon: (
          <HiOutlineDocumentDownload
            className={clsxMerge(iconClassName, 'scale-x-[-1] transform')}
            size={iconSize + 3}
          />
        ),
        otherProps: {
          download: RESUME_FILENAME,
          prefetch: false,
        },
      },
    ],
    [iconClassName, iconSize],
  );

  return (
    <div
      className={clsxMerge(
        'flex cursor-pointer items-center gap-3 text-2xl',
        'lg:gap-5',
        {
          'max-sm:pt-0': variant === 'hero',
        },
        className,
      )}
    >
      {linkItems.map((item) => (
        <LinkItem
          key={item.name}
          href={item.href}
          name={item.name}
          otherProps={item.otherProps}
        >
          {item.icon}
        </LinkItem>
      ))}
    </div>
  );
};

interface LinkItemProps {
  href: string;
  name: string;
  otherProps?: Omit<HTMLProps<HTMLAnchorElement>, 'href' | 'name'>;
}

const LinkItem: FC<PropsWithChildren<LinkItemProps>> = ({
  href,
  name,
  otherProps,
  children,
}) => {
  const handleClick = () => sendGAEvent('event', `link_icon_click__${name}`);

  return (
    <Link href={href} target="_blank" onClick={handleClick} {...otherProps}>
      {children}
    </Link>
  );
};
