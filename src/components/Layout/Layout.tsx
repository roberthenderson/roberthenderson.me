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
  const { ready, darkMode } = useAppContext();

  if (!ready) {
    return null;
  }

  return (
    <div className={clsxMerge(darkMode ? 'dark' : 'light', 'h-screen')}>
      <Metadata />
      <div
        className={clsxMerge(
          'flex h-full w-full flex-col',
          'transition-colors',
          'bg-slate-200 text-slate-950 dark:bg-slate-950 dark:text-slate-200',
        )}
      >
        <Header />
        <main>{children}</main>
        <footer>This is the footer</footer>
      </div>
    </div>
  );
};
