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
            width="300"
            height="260"
            patternUnits="userSpaceOnUse"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M150 0v18" />
              <rect x="95" y="18" width="110" height="44" rx="18" />
              <path d="M150 62v18a6 6 0 0 1-6 6H66a6 6 0 0 0-6 6v20" />
              <path d="M150 62v18a6 6 0 0 0 6 6h78a6 6 0 0 1 6 6v20" />
              <rect
                x="14"
                y="112"
                width="92"
                height="40"
                rx="16"
                fill="currentColor"
                fillOpacity="0.07"
              />
              <rect x="194" y="112" width="92" height="40" rx="16" />
              <path d="M60 152v18a6 6 0 0 0 6 6h78a6 6 0 0 1 6 6v18" />
              <path d="M240 152v18a6 6 0 0 1-6 6h-78a6 6 0 0 0-6 6v18" />
              <rect
                x="110"
                y="200"
                width="80"
                height="36"
                rx="15"
                fill="currentColor"
                fillOpacity="0.07"
              />
              <path d="M150 236v24" />
            </g>
            <g fill="currentColor">
              <circle cx="150" cy="86" r="3" />
              <circle cx="150" cy="176" r="3" />
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
