import type { FC } from 'react';
import { SECTION_CLASSNAME } from '@/app/constants/classNames';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { EmailButton } from '../EmailButton/EmailButton';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { HeroBackdrop } from './HeroBackdrop';
import { Links } from './Links';
import { TagLine } from './TagLine';

export const HeroSection: FC = () => {
  return (
    <section
      className={clsxMerge('relative overflow-hidden', SECTION_CLASSNAME)}
    >
      <div className="mx-auto flex w-full max-w-screen-xl justify-between px-8 lg:px-12 2xl:px-0">
        <HeroBackdrop />
        <div
          className={clsxMerge(
            'flex w-full flex-col pt-13 pb-12',
            'sm:pb-14 md:pt-22 md:pb-16',
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
