import { AppContextProvider } from '@/app/AppContextProvider';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { BASE_URL } from './constants/urls';
import './globals.css';

const NAME = 'Robert Henderson';
const METADATA = {
  title: `${NAME} | Senior Frontend Engineer`,
  description: `${NAME} is an accomplished Senior Frontend Engineer with Javascript, React, Typescript, NextJS, and UX Web Design experience.`,
  keywords: [
    NAME.toLowerCase(),
    'javascript',
    'typescript',
    'frontend',
    'engineer',
    'developer',
    'senior',
    'react',
    'reactjs',
    'nextjs',
    'web design',
    'vercel',
    'html',
    'css',
    'sass',
    'ux',
    'design',
    'web',
  ],
};

export const metadata: Metadata = {
  ...METADATA,
  alternates: {
    canonical: BASE_URL,
  },
  applicationName: NAME,
  authors: [
    {
      name: NAME,
      url: BASE_URL,
    },
  ],
  creator: NAME,
  referrer: 'origin',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: METADATA.title,
    description: METADATA.description,
    siteName: METADATA.title,
    images: [
      {
        url: `${BASE_URL}/api/og`,
      },
    ],
  },
  twitter: {
    title: METADATA.title,
    description: METADATA.description,
    card: 'summary_large_image',
    site: '@site',
    creator: '@roberthenderson',
    images: `${BASE_URL}/api/og`,
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <AppContextProvider>
            <div
              className={clsxMerge(
                'flex h-full w-full flex-col',
                'bg-violet-50 text-slate-950 dark:bg-slate-800 dark:text-slate-200',
              )}
            >
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </AppContextProvider>
        </ThemeProvider>
        <GoogleAnalytics
          gaId="G-GML2L3HCRN"
          debugMode={process.env.NODE_ENV === 'development'}
        />
      </body>
    </html>
  );
}
