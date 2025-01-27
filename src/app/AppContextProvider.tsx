import { NextRouter, useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { usePrevious } from '../hooks/usePrevious';

export enum PageSectionsEnum {
  Skills,
  Work,
  About,
}

export type PageSectionLinks = Record<PageSectionsEnum, string>;

export interface PageSection {
  id: PageSectionsEnum;
  label: string;
  ref: RefObject<HTMLElement | null>;
  link: string;
  children: ReactNode;
  className?: string;
}

type HeaderRef = RefObject<HTMLElement | null> | null;
type PageSections = PageSection[] | null;

interface AppContextType {
  ready: boolean;
  router: NextRouter;
  headerRef: HeaderRef;
  setHeaderRef: Dispatch<SetStateAction<HeaderRef>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  pageSectionsList: PageSections;
  setPageSectionsList: Dispatch<SetStateAction<PageSections>>;
  activeSection: PageSectionsEnum | null;
  setActiveSection: Dispatch<SetStateAction<PageSectionsEnum | null>>;
  prevActiveSection: PageSectionsEnum | null;
  pageSectionLinks: PageSectionLinks;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [headerRef, setHeaderRef] = useState<HeaderRef>(null);
  const [pageSectionsList, setPageSectionsList] = useState<PageSections>(null);
  const [activeSection, setActiveSection] = useState<PageSectionsEnum | null>(
    null,
  );
  const prevActiveSection = usePrevious(activeSection);
  const { ready, darkMode, setDarkMode } = useDarkMode();

  const pageSectionLinks: PageSectionLinks = useMemo(
    () => ({
      [PageSectionsEnum.Skills]: `/skills`,
      [PageSectionsEnum.Work]: `/work-experience`,
      [PageSectionsEnum.About]: `/about`,
    }),
    [],
  );

  return (
    <AppContext.Provider
      value={{
        ready,
        router,
        headerRef,
        setHeaderRef,
        darkMode,
        setDarkMode,
        pageSectionsList,
        setPageSectionsList,
        activeSection,
        setActiveSection,
        prevActiveSection,
        pageSectionLinks,
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
