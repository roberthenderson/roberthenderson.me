import { NextRouter, useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type AppTheme = 'light' | 'dark';

export enum PageSectionsEnum {
  About = 'About',
  Skills = 'Skills',
  Projects = 'Projects',
  Contact = 'Contact',
}

export interface PageSection {
  label: PageSectionsEnum;
  ref: RefObject<HTMLElement | null>;
  link: string;
}

type PageSections = PageSection[] | null;

interface AppContextType {
  router: NextRouter;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  pageSectionsList: PageSections;
  setPageSectionsList: Dispatch<SetStateAction<PageSections>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [theme, setTheme] = useState<AppTheme>('light');
  const isDarkTheme = theme === 'dark';

  const [pageSectionsList, setPageSectionsList] = useState<PageSections>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        router,
        isDarkTheme,
        toggleTheme,
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
