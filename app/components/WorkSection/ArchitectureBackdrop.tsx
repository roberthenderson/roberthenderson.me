import type { FC } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';

/**
 * Decorative texture for the frontend architecture panel, in the footprint the
 * editor screenshot used to occupy. Pure vector and gradient, so it costs no
 * image request and has no intrinsic size to shift the layout while it loads.
 */
export const ArchitectureBackdrop: FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none"
    >
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsxMerge(
          'absolute top-1/2 right-0 w-[128%] max-w-none -translate-y-1/2',
          'text-violet-500/45 dark:text-indigo-300/25',
        )}
        role="presentation"
      >
        <defs>
          <pattern
            id="architecture-backdrop-dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.6" fill="currentColor" />
          </pattern>
          <radialGradient id="architecture-backdrop-fade">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="architecture-backdrop-mask">
            <rect
              width="520"
              height="520"
              fill="url(#architecture-backdrop-fade)"
            />
          </mask>
        </defs>
        <g mask="url(#architecture-backdrop-mask)">
          <rect
            width="520"
            height="520"
            fill="url(#architecture-backdrop-dots)"
          />
          <g stroke="currentColor" fill="none">
            <rect
              x="150"
              y="322"
              width="220"
              height="64"
              rx="10"
              strokeWidth="1.75"
            />
            <rect
              x="176"
              y="232"
              width="168"
              height="58"
              rx="10"
              strokeWidth="1.25"
            />
            <rect
              x="120"
              y="132"
              width="126"
              height="52"
              rx="10"
              strokeWidth="1"
            />
            <rect
              x="274"
              y="132"
              width="126"
              height="52"
              rx="10"
              strokeWidth="1"
            />
            <path d="M183 184v48M337 184v48M260 290v32" strokeWidth="1" />
          </g>
          <g fill="currentColor">
            <circle cx="183" cy="184" r="4" />
            <circle cx="337" cy="184" r="4" />
            <circle cx="260" cy="290" r="4" />
            <circle cx="260" cy="322" r="4" />
          </g>
        </g>
      </svg>
    </div>
  );
};
