import Link from 'next/link';
import { FC } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const ICON_CLASSNAME =
  'text-amber-800 dark:text-slate-50 opacity-80 transition-opacity hover:opacity-100';

export const Links: FC = () => {
  return (
    <div className="flex cursor-pointer gap-4 text-2xl max-sm:pt-6 lg:gap-5">
      <Link href="https://github.com/roberthenderson" target="_blank">
        <FaGithub className={ICON_CLASSNAME} />
      </Link>
      <Link href="https://www.linkedin.com/in/rhahenderson" target="_blank">
        <FaLinkedin className={ICON_CLASSNAME} />
      </Link>
      <Link href="/pdf/Robert_Henderson_Resume.pdf" target="_blank" download>
        <FaFileDownload className={ICON_CLASSNAME} />
      </Link>
    </div>
  );
};
