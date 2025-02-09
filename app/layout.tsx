import { AppContextProvider } from '@/app/AppContextProvider';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, ReactNode } from 'react';
import { METADATA, NAME } from './constants/metadata';
import { BASE_URL } from './constants/urls';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(color-scheme: dark)', color: '#1e293b' },
    { media: '(color-scheme: light)', color: '#c7d2fe' },
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

interface LayoutProps {
  modal: ReactNode | null;
}

export default function Layout({
  children,
  modal,
}: PropsWithChildren<LayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
