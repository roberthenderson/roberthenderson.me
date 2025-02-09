import { ROUTES } from '@/app/constants/routes';
import { CompanyIdEnum } from '@/app/types';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { BsCreditCard, BsDatabase, BsWallet2 } from 'react-icons/bs';
import { FaJava, FaReact } from 'react-icons/fa6';
import { GiGearStickPattern } from 'react-icons/gi';
import { GoGear } from 'react-icons/go';
import { GrDocumentTest, GrSelect } from 'react-icons/gr';
import { IoCodeSlashSharp, IoDocumentsOutline } from 'react-icons/io5';
import { LuBug } from 'react-icons/lu';
import { MdOutlineWeb } from 'react-icons/md';
import {
  PiFlowArrow,
  PiLightning,
  PiNumberCircleOne,
  PiParachuteLight,
} from 'react-icons/pi';
import {
  RiLayoutMasonryLine,
  RiNftLine,
  RiShieldFlashLine,
} from 'react-icons/ri';
import {
  SiCodementor,
  SiFigma,
  SiGrunt,
  SiJquery,
  SiWeb3Dotjs,
} from 'react-icons/si';
import { SlChart } from 'react-icons/sl';
import { VscDebugAltSmall } from 'react-icons/vsc';
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
  years?: number[];
  content: CompanyContentItem[];
}

export const useCompaniesContent = (): Company[] => {
  return useMemo(
    () => [
      {
        id: CompanyIdEnum.MagicEden,
        label: ROUTES[CompanyIdEnum.MagicEden].label,
        years: [2023, 2024],
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
        id: CompanyIdEnum.Metaplex,
        label: ROUTES[CompanyIdEnum.Metaplex].label,
        years: [2022, 2023],
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
        id: CompanyIdEnum.Salesforce,
        label: ROUTES[CompanyIdEnum.Salesforce].label,
        years: [2018, 2019, 2020, 2021, 2022],
        image: (
          <div className="w-9 md:w-11">
            <SalesforceLogo />
          </div>
        ),
        content: [
          {
            description:
              'Architected and led the technical implementation of an Employee Service Catalog Builder application built using web components that includes a custom drag and drop library, lifted state management, and asynchronously loaded data to meet experienced page time SLAs. The application is designed to be performant and completely accessible from the ground up.',
            years: [2021, 2022],
            bullets: [
              {
                icon: <GoGear size={20} />,
                text: 'Actively worked with Architects to design our data model as the Frontend Lead',
              },
              {
                icon: <PiLightning size={20} />,
                text: 'Designed and built Lightning Web Components with Clean Code principles and modern coding patterns',
              },
              {
                icon: <FaJava size={20} />,
                text: 'Built Java services for the frontend components to fetch data in the API layer',
              },
              {
                icon: <GiGearStickPattern size={20} />,
                text: 'Used the Builder Design Pattern in both JavaScript and Java to make code more readable and testing easier',
              },
              {
                icon: <GrDocumentTest size={20} />,
                text: 'Created unit and functional tests using the Jest framework, Java unit testing, and Selenium end to end tests',
              },
              {
                icon: <AiOutlineProduct size={20} />,
                text: 'Met with Product Managers to understand product requirements while researching and spiking on new features',
              },
              {
                icon: <SiFigma size={19} />,
                text: 'Collaborated with Product Managers and UX Designers to ensure mocks are focused on usability and performance',
              },
              {
                icon: <SiCodementor size={20} />,
                text: 'Mentored and coached junior and senior engineers through pair programming and code reviews',
              },
            ],
          },
          {
            description:
              'Prior to the Service Catalog Builder, I led a team building the Employee Services Search using a web component stack to build a custom search engine to present Salesforce records according to UX mocks.',
            years: [2020, 2021],
            bullets: [
              {
                icon: <SlChart size={20} />,
                text: 'Focused on both technical and UX performance with frontend techniques like debounce and use of stencils',
              },
              {
                icon: <IoCodeSlashSharp size={21} />,
                text: 'Developed a custom state manager so results could be filtered and scoped',
              },
            ],
          },
          {
            description:
              'Contributed to UX, performance and security improvements for the global Salesforce CRM Search product that is used by millions of users every day.',
            years: [2018, 2019, 2020],
            bullets: [
              {
                icon: <VscDebugAltSmall size={20} />,
                text: 'Debugged and patched high-priority customer performance and security issues',
              },
              {
                icon: <PiNumberCircleOne size={20} />,
                text: 'Led a project to reveal result counts per entity in a left vertical navigation',
              },
              {
                icon: <LuBug size={21} />,
                text: 'Triaged and fixed bugs and test failures',
              },
            ],
          },
        ],
      },
      {
        id: CompanyIdEnum.Vlocity,
        label: ROUTES[CompanyIdEnum.Vlocity].label,
        years: [2015, 2016, 2017, 2018],
        image: (
          <Image
            src={VlocityLogo}
            alt={ROUTES[CompanyIdEnum.Vlocity].label}
            className="mx-auto w-9 pt-1 md:w-11 dark:brightness-125"
          />
        ),
        content: [
          {
            description:
              'Developed industry-specific customizable cloud software on the Salesforce platform as the Senior UI Engineer on the Insurance team which builds product for the Insurance and Health Insurance verticals. Below are notable products built at Vlocity.',
            bullets: [
              {
                icon: <RiShieldFlashLine size={20} />,
                text: "Vella: A consumer Insurance umbrella app that allows you to add coverages, update/pay policies, and view live IoT usage data using Salesforce's IoT Cloud. The app was built using the Ionic Frame-work and works on both iOS and Android.",
              },
              {
                icon: <PiFlowArrow size={20} />,
                text: 'Insurance Attribute Rule definition and evaluator: Insurance Admins can define rules on a specific attribute or attribute value in order to Hide, Set Value, or show a Message. These rule definitions then get parsed on the client-side as users move through a Quoting flow.',
              },
              {
                icon: <IoDocumentsOutline size={20} />,
                text: 'Insurance Required Documents: Underwriters can add and review documents needed to complete the policy. Features: drag and drop interface with collapsable sections. I use a Visual Force page wrapped in a Salesforce Lightning Component.',
              },
              {
                icon: <GrSelect size={20} />,
                text: 'Product Selection that works in many environments: Features include responsive web design, compare plans, view plan details, lazy loading, and filterable products',
              },
            ],
          },
        ],
      },
      {
        id: CompanyIdEnum.BlueAcorn,
        label: ROUTES[CompanyIdEnum.BlueAcorn].label,
        years: [2010, 2011, 2012, 2013, 2014, 2015],
        image: (
          <Image
            src={BlueAcornLogo}
            alt={ROUTES[CompanyIdEnum.BlueAcorn].label}
            className="mx-auto w-9 md:w-11 dark:brightness-125"
          />
        ),
        content: [
          {
            description:
              'Implemented enterprise-scale responsive eCommerce projects using advanced CSS3 and SASS, object oriented JavaScript (jQuery), PHP, and XML (used in Magento to define the layout) from detailed Photoshop and Sketch files',
            bullets: [
              {
                icon: <SiGrunt size={20} />,
                text: 'Coded all implementations using a customized Grunt workflow',
              },
              {
                icon: <SiJquery size={20} />,
                text: 'Developed completely in organized SASS Partials and pre-compiled jQuery classes',
              },
              {
                icon: <IoCodeSlashSharp size={21} />,
                text: 'Architected and Developed client feature requests and fixed existing bugs',
              },
              {
                icon: <SiCodementor size={20} />,
                text: 'Trained new frontend developers on Magento, SASS, JS, and PHP',
              },
              {
                icon: <MdOutlineWeb size={20} />,
                text: 'Utilized latest web standards and cross-browser compatibility',
              },
              {
                icon: <GrDocumentTest size={20} />,
                text: 'Helped Build official Magento modules for Optimizely.com & Convert.com',
              },
            ],
          },
        ],
      },
    ],
    [],
  );
};
