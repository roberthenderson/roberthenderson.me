import { clsxMerge } from '@/src/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import Robert from '../../../public/robert.webp';

export const HeroSection: FC = () => {
  return (
    <section
      className={clsxMerge(
        'flex w-full justify-between',
        'border-b-[1rem] border-yellow-600 bg-indigo-50 transition-colors',
        'dark:border-yellow-700 dark:bg-slate-900',
        'relative overflow-hidden',
      )}
    >
      <Image
        src={Robert}
        alt="Robert Henderson, Frontend Engineer"
        className={clsxMerge(
          'absolute -bottom-2 -left-14 z-10 w-[65%] opacity-90 hue-rotate-15 max-sm:hidden',
          'sm:-top-2 sm:w-[50%] lg:-left-28',
          'dark:opacity-70',
        )}
      />
      <div
        className={clsxMerge(
          'flex w-full flex-col gap-4 px-10 pb-16 pt-12',
          'md:pb-20 md:pt-24 lg:px-28',
        )}
      >
        <h2
          className={clsxMerge(
            'text-center font-dmSerif font-semibold text-amber-800 transition-colors',
            'dark:text-yellow-600',
            'sm:text-right',
          )}
        >
          <span
            className={clsxMerge(
              'leading-16 text-6xl',
              'md:text-7xl lg:text-8xl',
            )}
          >
            Hello world.
          </span>
        </h2>
        <h1
          className={clsxMerge(
            'flex flex-col px-2 text-center leading-10',
            'sm:text-right',
          )}
        >
          <p className="text-[23px] text-yellow-700 transition-colors">
            I'm an Experienced
          </p>
          <p
            className={clsxMerge(
              'leading-12 text-violet-800 transition-colors',
              'dark:text-violet-200',
            )}
          >
            <div className="text-[49px]">Frontend</div>
            <div className="text-[50px]">Engineer</div>
          </p>
        </h1>
      </div>
    </section>
  );
};
