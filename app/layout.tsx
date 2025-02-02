import { AppContextProvider } from '@/app/AppContextProvider';
import { Footer } from '@/app/components/Footer/Footer';
import { Header } from '@/app/components/Header/Header';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import './globals.css';

const METADATA = {
  title: 'Robert Henderson | Senior Frontend Engineer',
  description:
    'Robert Henderson is an accomplished Senior Frontend Engineer with Javascript, React, Typescript, NextJS, and UX Web Design experience.',
  keywords:
    'robert henderson,javascript,typescript,frontend,engineer,developer,senior,react,reactjs,nextjs,web design,vercel,html,css,sass,ux,design,web',
};

export const metadata: Metadata = {
  ...METADATA,
  openGraph: { ...METADATA },
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
        {typeof window !== 'undefined' &&
          window.location.hostname !== 'localhost' && (
            <GoogleAnalytics gaId="G-GML2L3HCRN" />
          )}
      </body>
    </html>
  );
}
