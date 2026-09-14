import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

/**
 * Decorative texture behind the hero copy, in the footprint the portrait used
 * to occupy. Pure vector and gradient, so it costs no image request and has no
 * intrinsic size to shift the layout while it loads.
 */
export const HeroBackdrop: FC = () => {
  return (
    <div
      aria-hidden="true"
      className={clsxMerge(
        'pointer-events-none absolute -bottom-10 -left-20 z-0 w-[70%] select-none max-sm:hidden',
        'sm:-top-10 sm:-left-28 sm:w-[66%] md:-left-32 md:w-[58%] lg:w-[52%] xl:w-[44%] 2xl:-left-16 2xl:w-[38%]',
      )}
    >
      <div
        className={clsxMerge(
          'absolute inset-0 rounded-full blur-3xl',
          'bg-violet-400/30 dark:bg-indigo-500/20',
        )}
      />
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsxMerge(
          'relative h-auto w-full',
          'text-indigo-500/45 dark:text-indigo-300/30',
        )}
        role="presentation"
      >
        <defs>
          <pattern
            id="hero-backdrop-dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.6" fill="currentColor" />
          </pattern>
          <radialGradient id="hero-backdrop-fade">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="55%" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-backdrop-mask">
            <rect width="600" height="600" fill="url(#hero-backdrop-fade)" />
          </mask>
        </defs>
        <g mask="url(#hero-backdrop-mask)">
          <rect width="600" height="600" fill="url(#hero-backdrop-dots)" />
          <g stroke="currentColor" fill="none">
            <circle cx="300" cy="300" r="118" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="186" strokeWidth="1" />
            <circle cx="300" cy="300" r="254" strokeWidth="0.75" />
          </g>
          <g fill="currentColor">
            <circle cx="300" cy="182" r="5" />
            <circle cx="486" cy="300" r="4" />
            <circle cx="223" cy="542" r="3.5" />
          </g>
        </g>
      </svg>
    </div>
  );
};
