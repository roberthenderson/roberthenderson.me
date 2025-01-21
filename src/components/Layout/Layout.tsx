import { clsxMerge } from '@/src/utils/clsxMerge';
import { ReactNode } from 'react';
import { useAppContext } from '../../app/AppContextProvider';
import { Metadata } from '../Metadata/Metadata';
import { Header } from './Header';

export const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const { isDarkTheme } = useAppContext();

  return (
    <>
      <Metadata />
      <div
        className={clsxMerge('flex flex-col', 'w-full', isDarkTheme && 'dark')}
      >
        <Header />
        <main className="max-w-7xl px-8">{children}</main>
        <footer>This is the footer</footer>
      </div>
    </>
  );
};
