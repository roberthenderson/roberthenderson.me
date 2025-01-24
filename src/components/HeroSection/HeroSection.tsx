import { clsxMerge } from '@/src/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import Robert from '../../../public/robert.webp';
import { H1 } from './H1';
import { H2 } from './H2';
import { Links } from './Links';
import { TagLine } from './TagLine';

export const HeroSection: FC = () => {
  return (
    <section
      className={clsxMerge(
        'border-b-[0.75rem] border-violet-700 bg-indigo-100 transition-colors',
        'dark:border-indigo-300 dark:bg-slate-950',
        'relative overflow-hidden',
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-xl justify-between px-8 lg:px-12 2xl:px-0">
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
            'flex w-full flex-col pb-14 pt-12',
            'md:pt-22 md:pb-16',
          )}
        >
          <H2 />
          <H1 />
          <div
            className={clsxMerge(
              'flex flex-col-reverse items-center justify-end gap-4 pt-1 sm:pt-6 md:pt-1',
              'sm:flex-row lg:gap-6',
            )}
          >
            <Links />
            <TagLine />
          </div>
        </div>
      </div>
    </section>
  );
};
