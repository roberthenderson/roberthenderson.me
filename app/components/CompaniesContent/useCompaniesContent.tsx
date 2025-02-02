import { useMemo } from 'react';
import { TabItem } from '../base/Tabs';

export const useCompaniesContent = (): TabItem[] => {
  return useMemo(
    () => [
      {
        id: 'magic-eden',
        label: 'Magic Eden',
        content: 'Magic Eden content.',
      },
      {
        id: 'metalex',
        label: 'Metaplex',
        content: 'Metaplex content.',
      },
      {
        id: 'salesforce',
        label: 'Salesforce',
        content: 'Salesforce content.',
      },
      {
        id: 'vlocity',
        label: 'Vlocity',
        content: 'Vlocity content.',
      },
      {
        id: 'blue-acorn',
        label: 'Blue Acorn',
        content: 'Blue Acorn content.',
      },
    ],
    [],
  );
};
