import { SECTION_CLASSNAME } from '@/app/constants/classNames';
import { clsxMerge } from '@/app/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import Robert from '../../../public/robert.webp';
import { EmailButton } from '../EmailButton/EmailButton';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { Links } from './Links';
import { TagLine } from './TagLine';

export const HeroSection: FC = () => {
  return (
    <section
      className={clsxMerge(
        'relative overflow-hidden transition-colors',
        SECTION_CLASSNAME,
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-xl justify-between px-8 lg:px-12 2xl:px-0">
        <Image
          priority
          src={Robert}
          alt="Robert Henderson, Frontend Engineer"
          className={clsxMerge(
            'absolute -bottom-2 -left-14 z-10 w-[65%] opacity-90 hue-rotate-15 max-sm:hidden',
            'sm:-left-26 sm:-top-2 sm:w-[63%] md:-left-28 md:w-[55%] lg:w-[50%]',
            'dark:opacity-70',
          )}
        />
        <div
          className={clsxMerge(
            'flex w-full flex-col pb-12 pt-13',
            'md:pt-22 sm:pb-14 md:pb-16',
          )}
        >
          <H3 />
          <H1 />
          <H2 />
          <div
            className={clsxMerge(
              'md:gap4 flex flex-col-reverse items-center justify-end gap-3 sm:pt-6 md:pt-1',
              'sm:flex-row lg:gap-6',
            )}
          >
            <Links />
            <EmailButton location="hero" />
            <TagLine />
          </div>
        </div>
      </div>
    </section>
  );
};
