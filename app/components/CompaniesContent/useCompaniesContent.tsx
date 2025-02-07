import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import { BsCreditCard, BsDatabase, BsWallet2 } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa6';
import { GoGear } from 'react-icons/go';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { LuBug } from 'react-icons/lu';
import { PiParachuteLight } from 'react-icons/pi';
import { RiLayoutMasonryLine, RiNftLine } from 'react-icons/ri';
import { SiFigma, SiWeb3Dotjs } from 'react-icons/si';
import { SlChart } from 'react-icons/sl';
import BlueAcornLogo from '../../../public/companies/blueacorn_small.png';
import VlocityLogo from '../../../public/companies/vlocity_small.png';
import { MagicEdenLogo } from '../MagicEdenLogo/MagicEdenLogo';
import { MetaplexLogo } from '../MetaplexLogo/MetaplexLogo';
import { SalesforceLogo } from '../SalesforceLogo/SalesforceLogo';
import { CompanyContentItem } from './CompanyContent';

export interface Company {
  id: string;
  label: string;
  image?: ReactNode;
  content: CompanyContentItem[];
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
        content: [
          {
            description:
              'Worked as a Senior Frontend Software Engineer building the client-side application of Magic Eden, a digital asset (NFT) Marketplace. Magic Eden is a large React/NextJS/TailwindCSS application with millions of visitors each month.',
            bullets: [
              {
                icon: <BsCreditCard size={18} />,
                text: 'Led and built the ability to mint and buy secondary market digital assets with a credit card',
              },
              {
                icon: <RiLayoutMasonryLine size={18} />,
                text: 'Led a profile redesign which included selecting digital assets from multiple blockchains to showcase in one group',
              },
              {
                icon: <BsWallet2 size={18} />,
                text: 'Added a widget for users to use a credit/debit card to buy crypto on the Magic Eden app to top up their wallet',
              },
              {
                icon: <SiFigma size={19} />,
                text: 'Worked with UX Designers to create a crypto wallet with only your email address within the Magic Eden application, considering security, privacy, and UX',
              },
              {
                icon: <SlChart size={20} />,
                text: 'Refined performance of repeated, complex grid cards on collection pages with infinite scrolling',
              },
              {
                icon: <LuBug size={21} />,
                text: 'Triaged and fixed production bugs that were deployed at least 4 times per day, focusing on customer obsession',
              },
              {
                icon: <IoCodeSlashSharp size={21} />,
                text: 'Interviewed candidates frequently with live coding exercises',
              },
            ],
          },
        ],
      },
      {
        id: 'metaplex',
        label: 'Metaplex',
        image: (
          <div className="text-black-900 w-9 pl-1 md:w-11 dark:text-white">
            <MetaplexLogo variant="small" />
          </div>
        ),
        content: [
          {
            description:
              'Built Creator Studio, a Solana 1st party application in a high-paced startup environment on top of various Metaplex protocols in the rapidly evolving Crypto sector. Creator Studio is a no-code solution for NFT creators to remove most of the friction of dropping art or an NFT collection on the Solana blockchain, namely hiring a developer.',
            bullets: [
              {
                icon: <IoCodeSlashSharp size={21} />,
                text: 'Coded the app using a React/Typescript/AWS/Amplify stack and Chakra UI for base components and styling',
              },
              {
                icon: <FaReact size={20} />,
                text: 'Adhered to React best practices to ensure and improve client-side performance and rendering',
              },
              {
                icon: <SiFigma size={19} />,
                text: 'Collaborated with UX Designers to ensure the implementation matches UX designs and expectations',
              },
              {
                icon: <BsDatabase size={20} />,
                text: 'Designed and created GraphQL APIs through AWS Amplify for web2 database CRUD operations',
              },
              {
                icon: <RiNftLine size={21} />,
                text: 'Utilized the Metaplex SDK for web3 interactions including NFT & Candy Machine creation, Candy Guards (freeze/thaw, etc), minting, and NFT data delegation (art reveal)',
              },
              {
                icon: <SiWeb3Dotjs size={21} />,
                text: 'Improved web3 UX through the use of a derived signer and combining transactions where possible',
              },
              {
                icon: <PiParachuteLight size={21} />,
                text: 'Responsible for the Airdrop creation flow and Edition mint page creation in Creator Studio, amongst other projects',
              },
            ],
          },
        ],
      },
      {
        id: 'salesforce',
        label: 'Salesforce',
        image: (
          <div className="w-9 md:w-11">
            <SalesforceLogo />
          </div>
        ),
        content: [
          {
            description:
              'Architected and led the technical implementation of an Employee Service Catalog Builder application built using web components that includes a custom drag and drop library, lifted state management, and asynchronously loaded data to meet experienced page time SLAs. The application is designed to be performant and completely accessible from the ground up.',
            bullets: [
              {
                icon: <GoGear size={20} />,
                text: 'Actively worked with Architects to design our data model as the Frontend Lead',
              },
            ],
          },
        ],
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
        content: [
          {
            description: '',
            bullets: [],
          },
        ],
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
        content: [
          {
            description: '',
            bullets: [],
          },
        ],
      },
    ],
    [],
  );
};
