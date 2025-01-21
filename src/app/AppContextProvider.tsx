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
  id: PageSectionsEnum;
  label: PageSectionsEnum;
  ref: RefObject<HTMLElement | null>;
  link: string;
}

type HeaderRef = RefObject<HTMLElement> | null;
type PageSections = PageSection[] | null;

interface AppContextType {
  router: NextRouter;
  headerRef: HeaderRef;
  setHeaderRef: Dispatch<SetStateAction<HeaderRef>>;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  pageSectionsList: PageSections;
  setPageSectionsList: Dispatch<SetStateAction<PageSections>>;
  activeSection: PageSectionsEnum | null;
  setActiveSection: Dispatch<SetStateAction<PageSectionsEnum | null>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [headerRef, setHeaderRef] = useState<HeaderRef>(null);

  const [theme, setTheme] = useState<AppTheme>('light');
  const isDarkTheme = theme === 'dark';

  const [pageSectionsList, setPageSectionsList] = useState<PageSections>(null);
  const [activeSection, setActiveSection] = useState<PageSectionsEnum | null>(
    null,
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        router,
        headerRef,
        setHeaderRef,
        isDarkTheme,
        toggleTheme,
        pageSectionsList,
        setPageSectionsList,
        activeSection,
        setActiveSection,
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
