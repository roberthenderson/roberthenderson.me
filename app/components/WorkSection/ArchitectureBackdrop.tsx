import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

/**
 * Decorative texture for the frontend architecture panel, in the footprint the
 * editor screenshot used to occupy. A tiled field of rounded panels, matching
 * the pill and card radii the rest of the site is built from, over a soft
 * violet wash. The tile repeats in user space rather than scaling, so the
 * column stays filled at any panel height. Pure vector, so it costs no image
 * request and has no intrinsic size to shift the layout while it loads.
 */
export const ArchitectureBackdrop: FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none"
    >
      <div
        className={clsxMerge(
          'absolute top-1/2 right-[-20%] h-[70%] w-[90%] -translate-y-1/2',
          'rounded-full blur-3xl',
          'bg-violet-400/25 dark:bg-indigo-500/15',
        )}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsxMerge(
          'absolute inset-0 h-full w-full',
          'text-violet-600/35 dark:text-indigo-200/20',
        )}
        role="presentation"
      >
        <defs>
          <pattern
            id="architecture-panels"
            width="236"
            height="188"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              <rect x="18" y="16" width="148" height="70" rx="26" />
              <rect
                x="88"
                y="106"
                width="130"
                height="62"
                rx="24"
                fill="currentColor"
                fillOpacity="0.07"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architecture-panels)" />
      </svg>
      <div
        className={clsxMerge(
          'absolute inset-x-0 top-0 h-44',
          'bg-gradient-to-b from-violet-200 to-transparent dark:from-slate-750',
        )}
      />
      <div
        className={clsxMerge(
          'absolute inset-x-0 bottom-0 h-44',
          'bg-gradient-to-t from-violet-200 to-transparent dark:from-slate-750',
        )}
      />
    </div>
  );
};
