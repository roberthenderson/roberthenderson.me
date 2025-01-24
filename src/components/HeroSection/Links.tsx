import { GITHUB_URL, LINKEDIN_URL } from '@/src/constants';
import { clsxMerge } from '@/src/utils/clsxMerge';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

interface LinksProps {
  variant?: 'hero' | 'footer';
}

export const Links: FC<LinksProps> = ({ variant = 'hero' }) => {
  const iconClassName = useMemo(
    () =>
      clsxMerge(
        'text-amber-700 opacity-80 transition-opacity',
        'dark:text-slate-50',
        'hover:opacity-100',
        {
          'text-slate-50': variant === 'footer',
        },
      ),
    [variant],
  );
  const iconSize = useMemo(() => (variant === 'footer' ? 32 : 24), [variant]);

  return (
    <div className="flex cursor-pointer gap-4 text-2xl max-sm:pt-6 lg:gap-5">
      <Link href={GITHUB_URL} target="_blank">
        <FaGithub className={iconClassName} size={iconSize} />
      </Link>
      <Link href={LINKEDIN_URL} target="_blank">
        <FaLinkedin className={iconClassName} size={iconSize} />
      </Link>
      <Link href="/pdf/Robert_Henderson_Resume.pdf" target="_blank" download>
        <FaFileDownload className={iconClassName} size={iconSize} />
      </Link>
    </div>
  );
};
