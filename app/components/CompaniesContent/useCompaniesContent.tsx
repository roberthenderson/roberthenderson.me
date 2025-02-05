import { ReactNode, useMemo } from 'react';
import { BlueAcornContent } from './BlueAcornContent';
import { MagicEdenContent } from './MagicEdenContent';
import { MetaplexContent } from './MetaplexContent';
import { SalesforceContent } from './SalesforceContent';
import { VlocityContent } from './VlocityContent';

export interface Company {
  id: string;
  label: string;
  content: ReactNode;
}

export const useCompaniesContent = (): Company[] => {
  return useMemo(
    () => [
      {
        id: 'magic-eden',
        label: 'Magic Eden',
        content: <MagicEdenContent />,
      },
      {
        id: 'metaplex',
        label: 'Metaplex',
        content: <MetaplexContent />,
      },
      {
        id: 'salesforce',
        label: 'Salesforce',
        content: <SalesforceContent />,
      },
      {
        id: 'vlocity',
        label: 'Vlocity',
        content: <VlocityContent />,
      },
      {
        id: 'blue-acorn',
        label: 'Blue Acorn',
        content: <BlueAcornContent />,
      },
    ],
    [],
  );
};
