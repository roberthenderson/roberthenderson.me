import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import BlueAcornLogo from '../../../public/companies/blueacorn_small.png';
import VlocityLogo from '../../../public/companies/vlocity_small.png';
import { MagicEdenLogo } from '../MagicEdenLogo/MagicEdenLogo';
import { MetaplexLogo } from '../MetaplexLogo/MetaplexLogo';
import { SalesforceLogo } from '../SalesforceLogo/SalesforceLogo';
import { BlueAcornContent } from './BlueAcornContent';
import { MagicEdenContent } from './MagicEdenContent';
import { MetaplexContent } from './MetaplexContent';
import { SalesforceContent } from './SalesforceContent';
import { VlocityContent } from './VlocityContent';

export interface Company {
  id: string;
  label: string;
  image?: ReactNode;
  content: ReactNode;
}

export const useCompaniesContent = (): Company[] => {
  return useMemo(
    () => [
      {
        id: 'magic-eden',
        label: 'Magic Eden',
        image: (
          <div className="w-8 md:w-10">
            <MagicEdenLogo variant="small" />
          </div>
        ),
        content: <MagicEdenContent />,
      },
      {
        id: 'metaplex',
        label: 'Metaplex',
        image: (
          <div className="text-black-900 w-9 pl-1 md:w-11 dark:text-white">
            <MetaplexLogo variant="small" />
          </div>
        ),
        content: <MetaplexContent />,
      },
      {
        id: 'salesforce',
        label: 'Salesforce',
        image: (
          <div className="w-9 md:w-11">
            <SalesforceLogo />
          </div>
        ),
        content: <SalesforceContent />,
      },
      {
        id: 'vlocity',
        label: 'Vlocity',
        image: (
          <Image
            src={VlocityLogo}
            alt="Vlocity"
            className="mx-auto w-9 pt-1 md:w-11 dark:brightness-125"
          />
        ),
        content: <VlocityContent />,
      },
      {
        id: 'blue-acorn',
        label: 'Blue Acorn',
        image: (
          <Image
            src={BlueAcornLogo}
            alt="Blue Acorn"
            className="mx-auto w-9 md:w-11 dark:brightness-125"
          />
        ),
        content: <BlueAcornContent />,
      },
    ],
    [],
  );
};
