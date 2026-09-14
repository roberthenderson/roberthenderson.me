import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

/**
 * Decorative texture for the frontend architecture panel, in the footprint the
 * editor screenshot used to occupy. An unlabeled flow chart of rounded nodes
 * that branch and merge, drawn at radii in the same family as the site's
 * buttons and cards. The tile enters top center and exits bottom center, so it
 * repeats into one continuous chart at any panel height. Pure vector, so it
 * costs no image request and has no intrinsic size to shift the layout while it
 * loads.
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
            id="architecture-flow"
            width="375"
            height="325"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M187.5 0v22.5" />
              <rect x="118.75" y="22.5" width="137.5" height="55" rx="22.5" />
              <path d="M187.5 77.5V100a7.5 7.5 0 0 1-7.5 7.5H82.5a7.5 7.5 0 0 0-7.5 7.5v25" />
              <path d="M187.5 77.5V100a7.5 7.5 0 0 0 7.5 7.5h97.5a7.5 7.5 0 0 1 7.5 7.5v25" />
              <rect
                x="17.5"
                y="140"
                width="115"
                height="50"
                rx="20"
                fill="currentColor"
                fillOpacity="0.07"
              />
              <rect x="242.5" y="140" width="115" height="50" rx="20" />
              <path d="M75 190v22.5a7.5 7.5 0 0 0 7.5 7.5H180a7.5 7.5 0 0 1 7.5 7.5V250" />
              <path d="M300 190v22.5a7.5 7.5 0 0 1-7.5 7.5H195a7.5 7.5 0 0 0-7.5 7.5V250" />
              <rect
                x="137.5"
                y="250"
                width="100"
                height="45"
                rx="18.75"
                fill="currentColor"
                fillOpacity="0.07"
              />
              <path d="M187.5 295v30" />
            </g>
            <g fill="currentColor">
              <circle cx="187.5" cy="107.5" r="3.75" />
              <circle cx="187.5" cy="220" r="3.75" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architecture-flow)" />
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
