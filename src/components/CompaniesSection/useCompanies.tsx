import { useAppContext } from '@/src/app/AppContextProvider';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import BlueAcornLogo from '../../../public/companies/blueacorn.png';
import VlocityLogo from '../../../public/companies/vlocity.png';
import { MagicEdenLogo } from '../MagicEdenLogo/MagicEdenLogo';
import { MetaplexLogo } from '../MetaplexLogo/MetaplexLogo';
import { SalesforceLogo } from '../SalesforceLogo/SalesforceLogo';

export interface Company {
  id: string;
  label: string;
  logo: ReactNode;
  className?: string;
}

export const useCompanies = () => {
  const { darkMode } = useAppContext();

  const featuredCompanies: Company[] = useMemo(
    () => [
      {
        id: 'me',
        label: 'Magic Eden',
        logo: darkMode ? (
          <MagicEdenLogo />
        ) : (
          <MagicEdenLogo textColor="#120c18" />
        ),
        className: 'w-80',
      },
      {
        id: 'salesforce',
        label: 'Salesforce',
        logo: <SalesforceLogo />,
        className: 'w-32',
      },
    ],
    [darkMode],
  );

  const otherCompanies: Company[] = useMemo(
    () => [
      {
        id: 'metaplex',
        label: 'Metaplex',
        logo: <MetaplexLogo />,
        className: darkMode ? 'text-slate-50' : 'text-black-900',
      },
      {
        id: 'vlocity',
        label: 'Vlocity',
        logo: (
          <Image
            src={VlocityLogo}
            alt="Vlocity"
            className="mx-auto w-4/5 pt-8 sm:pt-1"
          />
        ),
        className: darkMode ? 'grayscale brightness-200' : '',
      },
      {
        id: 'ba',
        label: 'Blue Acorn',
        logo: (
          <Image
            src={BlueAcornLogo}
            alt="Blue Acorn"
            className="w-[95%] pt-2 sm:pb-1.5 sm:pt-0"
          />
        ),
        className: darkMode ? 'grayscale brightness-200' : '',
      },
    ],
    [darkMode],
  );

  return { featuredCompanies, otherCompanies };
};
