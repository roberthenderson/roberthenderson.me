import Image from 'next/image';
import { AiOutlineProduct } from 'react-icons/ai';
import { BsCreditCard, BsDatabase, BsWallet2 } from 'react-icons/bs';
import { FaJava, FaReact } from 'react-icons/fa6';
import { GiGearStickPattern } from 'react-icons/gi';
import { GoGear } from 'react-icons/go';
import { GrDocumentTest, GrSelect } from 'react-icons/gr';
import { IoCodeSlashSharp, IoDocumentsOutline } from 'react-icons/io5';
import { LuBug, LuComponent, LuLayoutDashboard, LuStore } from 'react-icons/lu';
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
  SiPrisma,
  SiStripe,
  SiTurborepo,
  SiVite,
  SiWeb3Dotjs,
} from 'react-icons/si';
import { SlChart } from 'react-icons/sl';
import { VscDebugAltSmall } from 'react-icons/vsc';
import { MagicEdenLogo } from '@/app/components/MagicEdenLogo/MagicEdenLogo';
import { MetaplexLogo } from '@/app/components/MetaplexLogo/MetaplexLogo';
import { SalesforceLogo } from '@/app/components/SalesforceLogo/SalesforceLogo';
import { SphereLogo } from '@/app/components/SphereLogo/SphereLogo';
import { UmbrellxLogo } from '@/app/components/UmbrellxLogo/UmbrellxLogo';
import { type CompanyDefinition, CompanyIdEnum } from '@/app/types';
import { clsxMerge } from '@/app/utils/clsxMerge';
import BlueAcornLogoLarge from '../../public/companies/blueacorn.png';
import BlueAcornLogo from '../../public/companies/blueacorn_small.png';
import EiderLogoLarge from '../../public/companies/eider.png';
import EiderLogo from '../../public/companies/eider_small.png';
import UmbrellxLogo512 from '../../public/companies/umbrellx_small.png';
import VlocityLogoLarge from '../../public/companies/vlocity.png';
import VlocityLogo from '../../public/companies/vlocity_small.png';

/**
 * Single source of truth for work history.
 *
 * Everything else is derived from this list: the work-section grid, the
 * company tab rail and detail content, ROUTES, the sitemap, and the
 * statically generated /work/[companyId] params. Adding a company means
 * adding one entry here (plus its id on CompanyIdEnum).
 *
 * Order is reverse-chronological and drives display order.
 */
export const COMPANIES: CompanyDefinition[] = [
  {
    id: CompanyIdEnum.SphereLabs,
    gridRow: 1,
    gridLogo: <SphereLogo />,
    gridClassName: 'mb-3 w-56 sm:w-44 md:w-52 lg:w-60',
    label: 'Sphere Labs',
    years: [2025, 2026],
    image: (
      <div className="w-7 md:w-9">
        <SphereLogo variant="small" />
      </div>
    ),
    content: [
      {
        description:
          'Frontend and full-stack engineering across three products for a global money-transfer platform: a shared design system, an internal operations platform, and the customer-facing enterprise dashboard.',
        bullets: [
          {
            icon: <SlChart size={19} />,
            text: 'Led the ground-up redesign of spherepay.co, the enterprise dashboard for global money transfers, rebuilt on the company design system from new product designs and shipped in 2026',
          },
          {
            icon: <RiLayoutMasonryLine size={20} />,
            text: 'Led implementation and UX direction for integrator (B2B2C) customer support: a CRM-style model of the dashboard with entity list views and record detail pages, drawing on enterprise platform patterns from prior Salesforce work',
          },
          {
            icon: <LuComponent size={19} />,
            text: 'Created and own @sphere/ui, the company design system built on shadcn/ui and Tailwind v4, published through GitHub Packages with an automated release workflow and consumed by every production frontend to enforce consistent, accessible UI patterns',
          },
          {
            icon: <SiVite size={19} />,
            text: "Built a custom Vite-based component explorer in place of Storybook, rendering stories inside the system's own layout components so the documentation mirrors real product usage",
          },
          {
            icon: <LuLayoutDashboard size={19} />,
            text: 'Designed the full architecture of an internal ops platform where teams such as banking, crypto vaults, and liquidity management create their own org and compose dashboard pages from configurable components wired to their own APIs, with no engineering involvement',
          },
          {
            icon: <SiFigma size={19} />,
            text: 'Led the end-to-end UX redesign of the ops platform as sole design owner, improving layout consistency and usability on a product without dedicated design support',
          },
          {
            icon: <PiLightning size={20} />,
            text: 'Rebuilt spherepay.co authentication to run server-side, moved key views to SSR, and introduced optimistic updates where they improve perceived speed without risking data integrity',
          },
        ],
      },
    ],
  },
  {
    id: CompanyIdEnum.Eider,
    gridRow: 1,
    gridLogo: (
      <Image
        src={EiderLogoLarge}
        alt="Eider"
        className="mx-auto w-40 md:w-48 lg:w-52"
      />
    ),
    gridClassName: 'mb-3',
    label: 'Eider',
    years: [2026],
    image: (
      <Image
        src={EiderLogo}
        alt="Eider"
        className="mx-auto w-8 rounded-md md:w-10"
      />
    ),
    content: [
      {
        description:
          'Founded Loftery LLC and solo-built Eider, a cross-platform expense-splitting app live on the App Store and Google Play. Sole owner of product, design, engineering, release, store compliance, and marketing, run alongside full-time work.',
        bullets: [
          {
            icon: <LuStore size={19} />,
            text: "Shipped from an empty repository to public listings on both stores in under five months, clearing Apple App Review (Sign in with Apple, privacy labels, EU trader verification) and Google Play's closed-testing gate, Data Safety declarations, content rating, and account-deletion requirements",
          },
          {
            icon: <SiTurborepo size={18} />,
            text: 'Architected a Turborepo monorepo shipping one product to three surfaces: a NextJS 16 / React 19 web app, an Expo / React Native iOS and Android app, and a Cloudflare Durable Objects realtime service, sharing ~290 paired web and native components and 3,700+ localized strings from a single source',
          },
          {
            icon: <PiLightning size={20} />,
            text: 'Built a no-loader, no-layout-shift client: reads paint their final layout on the first frame from a warm TanStack Query cache, writes are optimistic with rollback, and live balances push to every signed-in device over a Durable Object event bus',
          },
          {
            icon: <SiPrisma size={18} />,
            text: 'Designed the data layer: a 48-model Prisma schema on Neon Postgres with 125 versioned migrations, field-level encryption for financial tokens, and 144 API routes as thin adapters over portable domain functions',
          },
          {
            icon: <SiStripe size={19} />,
            text: 'Integrated Plaid for bank import, and Stripe, Apple In-App Purchase, and Google Play Billing behind one cross-platform entitlement layer',
          },
          {
            icon: <GrDocumentTest size={19} />,
            text: 'Own quality and release operations: 1,700+ test files, 160 Playwright end-to-end specs, 69 Maestro mobile flows, a pre-push gate (format, lint, typecheck, unit, Postgres integration), a dev to staging to production promotion pipeline with nightly e2e, and EAS over-the-air updates, shipping weekly',
          },
        ],
      },
    ],
  },
  {
    id: CompanyIdEnum.Umbrellx,
    gridRow: 3,
    gridLogo: <UmbrellxLogo />,
    gridClassName: 'w-11/12 sm:w-full min-[500px]:px-12 pt-4 sm:pt-0',
    label: 'Umbrellx',
    years: [2025],
    image: (
      <Image
        src={UmbrellxLogo512}
        alt="Umbrellx"
        className="mx-auto w-8 md:w-10"
      />
    ),
    content: [
      {
        description:
          'Designed and built an LGBTQ+-focused social media app to pre-alpha, owning product, branding, and UX end to end on a NextJS, React, Typescript, and Supabase stack with MUX for video.',
        bullets: [
          {
            icon: <AiOutlineProduct size={20} />,
            text: 'Owned product, branding, and UX end to end, shipping as a responsive PWA with service-worker notifications',
          },
          {
            icon: <PiLightning size={20} />,
            text: 'Built viewport-aware prefetching of routes and data, treating performance as the primary UX lever rather than a later optimization',
          },
          {
            icon: <RiLayoutMasonryLine size={20} />,
            text: 'Built a custom aspect-ratio post grid so mixed-media posts keep their composition across breakpoints',
          },
          {
            icon: <BsDatabase size={19} />,
            text: 'Modeled and secured the data in Supabase with row-level security, and served video through MUX',
          },
        ],
      },
    ],
  },
  {
    id: CompanyIdEnum.MagicEden,
    gridRow: 2,
    gridLogo: <MagicEdenLogo />,
    gridClassName: 'w-72 md:w-88 lg:w-96 mb-4',
    label: 'Magic Eden',
    years: [2023, 2024],
    image: (
      <div className="w-8 md:w-10">
        <MagicEdenLogo variant="small" />
      </div>
    ),
    content: [
      {
        description:
          'Worked as a L5 Senior Software Engineer (Frontend) building the client-side application of Magic Eden, a digital asset (NFT) Marketplace. Magic Eden is a large React/NextJS/TailwindCSS application with millions of visitors each month.',

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
    gridRow: 2,
    gridLogo: <MetaplexLogo />,
    gridClassName: clsxMerge(
      'w-5/6 sm:w-full min-[500px]:px-20',
      'text-black-900 dark:text-slate-50',
    ),
    label: 'Metaplex',
    years: [2022, 2023],
    image: (
      <div className="w-9 pl-1 text-black-900 md:w-11 dark:text-white">
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
    gridRow: 1,
    gridLogo: <SalesforceLogo />,
    gridClassName: 'w-64 mb-3 sm:w-48 md:w-56 lg:w-64',
    label: 'Salesforce',
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
    gridRow: 3,
    gridLogo: (
      <Image
        src={VlocityLogoLarge}
        alt="Vlocity"
        className="mx-auto w-4/5 pt-7 sm:pt-1"
      />
    ),
    gridClassName: 'dark:brightness-125',
    label: 'Vlocity',
    years: [2015, 2016, 2017, 2018],
    image: (
      <Image
        src={VlocityLogo}
        alt="Vlocity"
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
    gridRow: 3,
    gridLogo: (
      <Image
        src={BlueAcornLogoLarge}
        alt="Blue Acorn"
        className="mx-auto w-2/3 pt-3 sm:w-[95%] sm:pt-0 sm:pb-1.5"
      />
    ),
    gridClassName: 'dark:brightness-125',
    label: 'Blue Acorn',
    years: [2010, 2011, 2012, 2013, 2014, 2015],
    image: (
      <Image
        src={BlueAcornLogo}
        alt="Blue Acorn"
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
];
