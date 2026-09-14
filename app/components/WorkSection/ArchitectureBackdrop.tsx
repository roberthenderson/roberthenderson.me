import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

/**
 * Decorative texture for the frontend architecture panel, in the footprint the
 * editor screenshot used to occupy. A full-bleed diagonal hatch carries the
 * whole column so the space reads as filled at any panel height, with stacked
 * isometric planes centered over it. Deliberately unlike the hero's dot field
 * and concentric rings. Pure vector, so it costs no image request and has no
 * intrinsic size to shift the layout while it loads.
 */
export const ArchitectureBackdrop: FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsxMerge(
          'absolute inset-0 h-full w-full',
          'text-violet-600/35 dark:text-indigo-300/20',
        )}
        role="presentation"
      >
        <defs>
          <pattern
            id="architecture-hatch"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1 1 l2 -2 M0 18 l18 -18 M17 19 l2 -2"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architecture-hatch)" />
      </svg>
      <svg
        viewBox="0 0 520 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsxMerge(
          'absolute top-1/2 right-0 w-[118%] max-w-none -translate-y-1/2',
          'text-violet-700/45 dark:text-indigo-200/30',
        )}
        role="presentation"
      >
        <g stroke="currentColor" strokeLinejoin="round">
          <path
            d="M260 34 408 80 260 126 112 80Z"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.07"
          />
          <path d="M260 174 408 220 260 266 112 220Z" strokeWidth="1.75" />
          <path
            d="M260 314 408 360 260 406 112 360Z"
            strokeWidth="1"
            fill="currentColor"
            fillOpacity="0.07"
          />
          <path d="M260 454 408 500 260 546 112 500Z" strokeWidth="1" />
          <path
            d="M260 126v48M260 266v48M260 406v48"
            strokeWidth="1"
            strokeDasharray="5 7"
          />
        </g>
        <g fill="currentColor">
          <circle cx="260" cy="126" r="4.5" />
          <circle cx="260" cy="266" r="4.5" />
          <circle cx="260" cy="406" r="4.5" />
        </g>
      </svg>
      <div
        className={clsxMerge(
          'absolute inset-x-0 top-0 h-40',
          'bg-gradient-to-b from-violet-200 to-transparent dark:from-slate-750',
        )}
      />
      <div
        className={clsxMerge(
          'absolute inset-x-0 bottom-0 h-40',
          'bg-gradient-to-t from-violet-200 to-transparent dark:from-slate-750',
        )}
      />
    </div>
  );
};
