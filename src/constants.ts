import { clsxMerge } from './utils/clsxMerge';

// URLS
export const BASE_URL = 'https://roberthenderson.me';
export const GITHUB_URL = 'https://github.com/roberthenderson';
export const GITHUB_REPO_URL =
  'https://github.com/roberthenderson/roberthenderson.me';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rhahenderson';
export const RESUME_URI = '/pdf/Robert_Henderson_Resume.pdf';

export const RESUME_FILENAME = 'Robert Henderson Resume';

// ClassNames
export const SECTION_CLASSNAME = clsxMerge(
  'border-t-2 border-b-12 border-t-violet-500 border-b-violet-600 dark:border-b-12 dark:border-slate-600',
  'bg-violet-100 dark:bg-slate-900',
);
export const INDIGO_GRADIENT_BG_CLASSNAME =
  'bg-gradient-to-t from-indigo-100 from-15% via-indigo-100/90 via-30% to-indigo-400/35';
export const FIELD_CLASSNAME = clsxMerge(
  'block overflow-x-hidden w-full rounded-lg px-2.5 py-1.5 text-sm/6 text-slate-900 transition-all',
  'bg-violet-50 dark:bg-slate-300 outline outline-1 -outline-offset-1 outline-violet-300',
  'placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:dark:placeholder:text-slate-400',
  'focus:dark:bg-slate-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600',
  'dark:outline-slate-300 dark:focus:outline-indigo-500',
);
