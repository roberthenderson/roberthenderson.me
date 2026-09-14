// URLS
export const BASE_URL = 'https://roberthenderson.me';
/**
 * Share card URL. Social scrapers cache by URL and never refetch an unchanged
 * one, so bump the version whenever the /api/og design changes or the old card
 * keeps showing up in link previews.
 */
export const OG_IMAGE_URL = `${BASE_URL}/api/og?v=2`;
export const EIDER_URL = 'https://eider.app';
export const GITHUB_URL = 'https://github.com/roberthenderson';
export const GITHUB_REPO_URL =
  'https://github.com/roberthenderson/roberthenderson.me';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rhahenderson';
export const RESUME_URI = '/pdf/Robert_Henderson_Resume.pdf';
