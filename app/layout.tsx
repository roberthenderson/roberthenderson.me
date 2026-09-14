import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, DM_Serif_Text, League_Spartan } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren, ReactNode } from 'react';
import { AppContextProvider } from '@/app/AppContextProvider';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { METADATA, NAME } from './constants/metadata';
import { BASE_URL } from './constants/urls';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-dm-serif-text',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan',
});

export const viewport: Viewport = {
  themeColor: '#c7d2fe',
  userScalable: false,
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

interface LayoutProps {
  modal: ReactNode | null;
}

export default function Layout({
  children,
  modal,
}: PropsWithChildren<LayoutProps>) {
  return (
    <html
      lang="en"
      className={clsxMerge(
        dmSans.variable,
        dmSerifText.variable,
        leagueSpartan.variable,
      )}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" enableColorScheme>
          <AppContextProvider>
            <div
              className={clsxMerge(
                'flex h-full w-full flex-col',
                'bg-violet-50 text-slate-950 dark:bg-slate-800 dark:text-slate-200',
              )}
            >
              <Header />
              <main>
                {children}
                {modal}
              </main>
              <Footer />
            </div>
          </AppContextProvider>
        </ThemeProvider>
        <GoogleAnalytics
          gaId="G-GML2L3HCRN"
          debugMode={process.env.NODE_ENV !== 'production'}
        />
      </body>
    </html>
  );
}
