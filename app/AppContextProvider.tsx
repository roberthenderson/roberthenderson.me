'use client';

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { DialogType } from './components/base/Dialog/Dialog';
import { PageSection } from './types';

type HeaderRef = RefObject<HTMLElement | null> | null;
type PageSections = PageSection[] | null;

interface AppContextType {
  headerRef: HeaderRef;
  setHeaderRef: Dispatch<SetStateAction<HeaderRef>>;
  pageSectionsList: PageSections;
  setPageSectionsList: Dispatch<SetStateAction<PageSections>>;
  dialogTypeOpen: DialogType | null;
  setDialogTypeOpen: Dispatch<SetStateAction<DialogType | null>>;
  navItemClicked: boolean;
  setNavItemClicked: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [headerRef, setHeaderRef] = useState<HeaderRef>(null);
  const [pageSectionsList, setPageSectionsList] = useState<PageSections>(null);
  const [dialogTypeOpen, setDialogTypeOpen] = useState<DialogType | null>(null);
  const [navItemClicked, setNavItemClicked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        headerRef,
        setHeaderRef,
        pageSectionsList,
        setPageSectionsList,
        dialogTypeOpen,
        setDialogTypeOpen,
        navItemClicked,
        setNavItemClicked,
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
