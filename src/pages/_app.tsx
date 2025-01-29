import { GoogleAnalytics } from '@next/third-parties/google';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { AppContextProvider } from '../app/AppContextProvider';
import '../app/globals.css';
import { Layout } from '../components/Layout/Layout';
import { Metadata } from '../components/Metadata/Metadata';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <AppContextProvider>
      <Metadata />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalytics gaId="G-GML2L3HCRN" />
    </AppContextProvider>
  );
}
