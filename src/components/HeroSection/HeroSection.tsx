import { clsxMerge } from '@/src/utils/clsxMerge';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import Robert from '../../../public/robert.webp';

const ICON_CLASSNAME =
  'text-amber-800 dark:text-slate-50 opacity-80 transition-opacity hover:opacity-100';

export const HeroSection: FC = () => {
  return (
    <section
      className={clsxMerge(
        'flex w-full justify-between',
        'border-b-[1rem] border-yellow-600 bg-violet-100 transition-colors',
        'dark:border-yellow-700 dark:bg-slate-900',
        'relative overflow-hidden',
      )}
    >
      <Image
        src={Robert}
        alt="Robert Henderson, Frontend Engineer"
        className={clsxMerge(
          'absolute -bottom-2 -left-14 z-10 w-[65%] opacity-90 hue-rotate-15 max-sm:hidden',
          'sm:-left-24 sm:-top-2 sm:w-[60%] md:-left-28 md:w-[50%]',
          'dark:opacity-70',
        )}
      />
      <div
        className={clsxMerge(
          'flex w-full flex-col px-10 pb-14 pt-12',
          'md:pt-22 md:pb-16 lg:px-28',
        )}
      >
        <h2
          className={clsxMerge(
            'pb-6 text-center font-dmSerif font-semibold text-amber-900 transition-colors',
            'dark:text-yellow-600',
            'sm:text-right',
          )}
        >
          <span
            className={clsxMerge(
              'leading-16 relative text-8xl',
              'max-sm:tracking-wider sm:-right-5 sm:text-7xl sm:text-[5rem] md:-right-6 md:text-8xl lg:-right-8 lg:text-9xl',
            )}
          >
            <span className="max-sm:ml-2.5 sm:mr-3">Hello</span>
            <span className="max-sm:hidden">world.</span>
          </span>
        </h2>
        <div className="flex justify-center gap-2 sm:justify-end">
          <h1
            className={clsxMerge(
              'flex flex-col pl-2 pr-1 text-center leading-10',
              'sm:text-right',
            )}
          >
            <p
              className={clsxMerge(
                'font-leagueSpartan pb-1 pl-0.5 text-left text-[28px] tracking-tight text-yellow-600 transition-colors',
                'sm:pl-0 sm:text-2xl sm:tracking-wide lg:pl-0.5 lg:text-[28px] lg:tracking-tight',
              )}
            >
              I'm an Experienced
            </p>
            <p
              className={clsxMerge(
                'font-leagueSpartan text-left text-6xl text-violet-800 transition-colors',
                'dark:text-violet-200',
                'sm:text-[53px] sm:tracking-tight lg:text-6xl lg:tracking-normal',
              )}
            >
              <span className="block leading-10">Frontend</span>
              <span className="leading-10">Engineer</span>
            </p>
          </h1>
        </div>
        <div
          className={clsxMerge(
            'flex flex-col-reverse items-center justify-end gap-4 pt-1 sm:pt-6 md:pt-1',
            'sm:flex-row lg:gap-6',
          )}
        >
          <div className="flex cursor-pointer gap-4 text-2xl max-sm:pt-6 lg:gap-5">
            <Link href="https://github.com/roberthenderson" target="_blank">
              <FaGithub className={ICON_CLASSNAME} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rhahenderson"
              target="_blank"
            >
              <FaLinkedin className={ICON_CLASSNAME} />
            </Link>
            <Link
              href="/pdf/Robert_Henderson_Resume.pdf"
              target="_blank"
              download
            >
              <FaFileDownload className={ICON_CLASSNAME} />
            </Link>
          </div>
          <p
            className={clsxMerge(
              'pl-1 text-right text-[1.3rem] leading-[22px] tracking-wide text-slate-500',
              'dark:text-slate-500',
              'sm:pl-0 sm:pr-0.5 sm:text-base',
            )}
          >
            <span>15 years of experience</span>
            <span className="max-md:hidden"> in big tech and startups</span>
          </p>
        </div>
      </div>
    </section>
  );
};
