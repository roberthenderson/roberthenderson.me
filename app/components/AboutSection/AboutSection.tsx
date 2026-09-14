import Image from 'next/image';
import type { FC } from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { getYearsExperience } from '@/app/utils/getYearsExperience';
import { Grid } from '../base/Grid/Grid';
import { SectionBanner } from '../SectionBanner/SectionBanner';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';

const ABOUT_SECTIONS = [
  {
    title: 'Understand the Problem',
    text: 'I start with the workflow and the people stuck inside it, not the framework. At Sphere I designed an internal operations platform where teams like banking, crypto vaults, and liquidity management create their own org and build dashboard pages out of configurable components wired to their own APIs. That shape only became obvious once I understood the bottleneck was engineering time rather than missing features. Those teams now ship their own pages without me in the loop.',
  },
  {
    title: 'Structure for Change',
    text: "Structure decides whether a project stays cheap to work in after the first month. I created and own @sphere/ui, the company design system built on shadcn and Tailwind, published through GitHub Packages with an automated release workflow and used by every production frontend we run. I also replaced Storybook with a custom Vite component explorer that renders each story inside the system's own layout components, so the documentation matches how the product really looks. One accessibility fix in the library now lands in every app at once.",
  },
  {
    title: 'Fast and Accessible',
    text: 'Performance and accessibility cost far less built in than bolted on, and most of the time they are the same work. I architected and led the Employee Service Catalog Builder at Salesforce, a web-component application with a custom drag-and-drop library and async data loading to meet page-time SLAs, built accessible from the ground up instead of audited later. Before that, on Employee Services Search, I used a custom state manager, debouncing, and stencils to make filtering feel instant across a large record set. Neither one needed a cleanup project afterward.',
  },
  {
    title: 'Ship, Then Keep Shipping',
    text: "Getting to production is part of the engineering, not something that happens after it. I founded Loftery LLC and took Eider from an empty repository to public listings on the App Store and Google Play in under five months as the only engineer, clearing Apple App Review and Google Play's closed testing gate myself. It runs on a promotion pipeline with nightly end-to-end tests, 160 Playwright specs, 69 Maestro flows, and over-the-air updates. That is why I can still ship it weekly alongside a full-time job.",
  },
];

export const AboutSection: FC = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionHeading>My Approach</SectionHeading>
      </SectionContent>
      <SectionBanner>
        Every project I start answers the same four questions before I write a
        component. Who is blocked and why, what the tenth change will cost, what
        the product needs to feel like, and how it gets to production every
        week. {getYearsExperience()} years of shipping taught me they get
        answered either way, and answering them first is cheaper.
      </SectionBanner>
      <SectionContent>
        <Grid className="items-start">
          {ABOUT_SECTIONS.map((section) => (
            <div key={section.title} className="text-left">
              <p className="font-dmSerif font-semibold text-[22px]/12 text-violet-700 sm:text-[26px]/12 dark:text-slate-200">
                {section.title}
              </p>
              <p className="dark:text-slate-400">{section.text}</p>
            </div>
          ))}
        </Grid>
      </SectionContent>
      <SectionBanner>
        <p className="text-center font-dmSerif text-2xl italic sm:text-4xl">
          A cat's work is never done.
        </p>
        <ImQuotesRight
          size={120}
          className="absolute -top-8 right-10 opacity-10 lg:right-16 xl:right-40"
        />
      </SectionBanner>
      <Image
        src="/about/kitties.jpg"
        alt="Kitties"
        width="2000"
        height="433"
        className="object-contain"
      />
    </SectionContainer>
  );
};
