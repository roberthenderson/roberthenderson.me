import { GITHUB_URL, LINKEDIN_URL, RESUME_URI } from '@/src/constants';
import { clsxMerge } from '@/src/utils/clsxMerge';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

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
  const iconSize = useMemo(() => (variant === 'footer' ? 32 : 24), [variant]);

  return (
    <div
      className={clsxMerge(
        'flex cursor-pointer gap-3 text-2xl',
        'lg:gap-5',
        {
          'gap-4 max-sm:pt-0': variant === 'hero',
        },
        className,
      )}
    >
      <Link href={GITHUB_URL} target="_blank">
        <FaGithub className={iconClassName} size={iconSize} />
      </Link>
      <Link href={LINKEDIN_URL} target="_blank">
        <FaLinkedin className={iconClassName} size={iconSize} />
      </Link>
      <Link href={RESUME_URI} target="_blank" download>
        <FaFileDownload className={iconClassName} size={iconSize} />
      </Link>
    </div>
  );
};
