import { clsxMerge } from '../utils/clsxMerge';

// ClassNames
export const SECTION_CLASSNAME = clsxMerge(
  'border-t-2 border-t-violet-500 border-b-12 border-b-violet-600 dark:border-slate-600 dark:border-b-12',
  'bg-violet-100 dark:bg-slate-900',
);
export const INDIGO_GRADIENT_BG_CLASSNAME =
  'bg-gradient-to-t from-indigo-100 from-15% via-indigo-100/90 via-30% to-indigo-400/35';
export const FIELD_CLASSNAME = clsxMerge(
  'block w-full overflow-x-hidden rounded-lg px-2.5 py-1.5 text-slate-900 text-sm/6 transition-all',
  'bg-violet-50 outline outline-1 outline-violet-300 -outline-offset-1 dark:bg-slate-300',
  'placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:dark:placeholder:text-slate-400',
  'focus:outline focus:outline-2 focus:outline-violet-600 focus:-outline-offset-2 focus:dark:bg-slate-200',
  'dark:outline-slate-300 dark:focus:outline-indigo-500',
);
export const DARK_MODE_CLASSNAME = 'dark';
export const THIS_PROJECT_SCREENSHOT_CLASSNAME =
  'absolute right-40 top-60 scale-[3.75] blur-[0.01em] lg:top-36 lg:scale-[2.25] xl:top-16 xl:scale-[1.7]';
