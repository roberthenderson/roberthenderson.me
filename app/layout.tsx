import { clsxMerge } from '@/app/utils/clsxMerge';
import { GoogleAnalytics } from '@next/third-parties/google';
import { FC, PropsWithChildren } from 'react';
import { AppContextProvider } from './AppContextProvider';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <div
            className={clsxMerge(
              'flex h-full w-full flex-col',
              'transition-colors',
              'bg-violet-50 text-slate-950 dark:bg-slate-800 dark:text-slate-200',
            )}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </AppContextProvider>
        {typeof window !== 'undefined' &&
          window.location.hostname !== 'localhost' && (
            <GoogleAnalytics gaId="G-GML2L3HCRN" />
          )}
      </body>
    </html>
  );
};
