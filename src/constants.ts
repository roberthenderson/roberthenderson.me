import { clsxMerge } from './utils/clsxMerge';

// URLS
export const GITHUB_URL = 'https://github.com/roberthenderson';
export const GITHUB_REPO_URL =
  'https://github.com/roberthenderson/roberthenderson.me';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rhahenderson';

// ClassNames
export const INDIGO_GRADIENT_BG =
  'bg-gradient-to-t from-indigo-100 from-15% via-indigo-100/90 via-30% to-indigo-400/35';
export const FIELD_CLASSNAME = clsxMerge(
  'block overflow-x-hidden w-full rounded-lg px-2.5 py-1.5 text-sm/6 text-slate-800 transition-all',
  'bg-slate-50 outline outline-1 -outline-offset-1 outline-violet-300',
  'placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600',
  'dark:outline-slate-300 dark:focus:outline-yellow-500',
);
