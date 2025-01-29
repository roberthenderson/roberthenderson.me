import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, PropsWithChildren } from 'react';
import { useAppContext } from '../../app/AppContextProvider';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { ready, darkMode } = useAppContext();

  if (!ready) {
    return null;
  }

  return (
    <div
      className={clsxMerge(
        darkMode ? 'dark' : 'light',
        'flex h-full w-full flex-col',
        'transition-colors',
        'bg-violet-50 text-slate-950 dark:bg-slate-800 dark:text-slate-200',
      )}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
