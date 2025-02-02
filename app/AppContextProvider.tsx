'use client';

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { useDarkMode } from './hooks/useDarkMode';

export enum PageSectionsEnum {
  Skills = '/skills',
  Work = '/work',
  About = '/about',
  Contact = '/contact',
}

export interface PageSection {
  id: PageSectionsEnum;
  label: ReactNode;
  ref: RefObject<HTMLElement | null>;
  isMainNavigation: boolean;
  children: ReactNode;
}

type HeaderRef = RefObject<HTMLElement | null> | null;
type PageSections = PageSection[] | null;

interface AppContextType {
  headerRef: HeaderRef;
  setHeaderRef: Dispatch<SetStateAction<HeaderRef>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  pageSectionsList: PageSections;
  setPageSectionsList: Dispatch<SetStateAction<PageSections>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [headerRef, setHeaderRef] = useState<HeaderRef>(null);
  const [pageSectionsList, setPageSectionsList] = useState<PageSections>(null);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <AppContext.Provider
      value={{
        headerRef,
        setHeaderRef,
        darkMode,
        setDarkMode,
        pageSectionsList,
        setPageSectionsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a LayoutProvider');
  }
  return context;
};
