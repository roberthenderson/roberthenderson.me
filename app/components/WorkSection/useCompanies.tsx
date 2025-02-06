'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import BlueAcornLogo from '../../../public/companies/blueacorn.png';
import VlocityLogo from '../../../public/companies/vlocity.png';
import { MagicEdenLogo } from '../MagicEdenLogo/MagicEdenLogo';
import { MetaplexLogo } from '../MetaplexLogo/MetaplexLogo';
import { SalesforceLogo } from '../SalesforceLogo/SalesforceLogo';

export interface ICompany {
  id: string;
  label: string;
  logo: ReactNode;
  className?: string;
}

export const useCompanies = () => {
  const featuredCompanies: ICompany[] = useMemo(
    () => [
      {
        id: 'magic-eden',
        label: 'Magic Eden',
        logo: <MagicEdenLogo />,
        className: 'w-72 md:w-96 mb-4',
      },
      {
        id: 'salesforce',
        label: 'Salesforce',
        logo: <SalesforceLogo />,
        className: 'w-60 md:w-64',
      },
    ],
    [],
  );

  const otherCompanies: ICompany[] = useMemo(
    () => [
      {
        id: 'metaplex',
        label: 'Metaplex',
        logo: <MetaplexLogo />,
        className: clsxMerge(
          'w-5/6 sm:w-full min-[500px]:px-20',
          'text-black-900 dark:text-slate-50',
        ),
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
        className: 'dark:brightness-125',
      },
      {
        id: 'blue-acorn',
        label: 'Blue Acorn',
        logo: (
          <Image
            src={BlueAcornLogo}
            alt="Blue Acorn"
            className="mx-auto w-2/3 pt-2 sm:w-[95%] sm:pb-1.5 sm:pt-0"
          />
        ),
        className: 'dark:brightness-125',
      },
    ],
    [],
  );

  return { featuredCompanies, otherCompanies };
};
