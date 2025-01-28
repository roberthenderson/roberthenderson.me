import { clsxMerge } from '@/src/utils/clsxMerge';
import Image from 'next/image';
import { FC, ReactNode } from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { SectionContent } from '../SectionContent/SectionContent';

const ABOUT_SECTIONS = [
  {
    title: 'Always Learning',
    text: "I have a degree in Business Administration, but decided to pursue web development when I graduated. I started as an intern designing email marking emails, and learning SEO. I've continuously needed to learn new coding languages, paradigms, and frameworks.",
  },
  {
    title: 'Take Risks',
    text: 'My experience includes working on eCommerce websites, enterprise software, and web3/crypto consumer applications. I enjoy a challenge, and am eager take risks if it means learning more. I started working and did most of my work in crypto during the last bear market.',
  },
  {
    title: 'Team Player',
    text: 'Working on teams is what I do. I started my career at a small startup as the 6th employee and have worked at Salesforce with tens of thousands of employees. I have been the technical lead of several teams, and the project lead on many. I know how to collaborate in person and remotely and believe constant communication is the key to staying on track.',
  },
  {
    title: 'Have Fun',
    text: "There's not much point to all of this if you're not trying to have fun. It's important to me to surround myself with a diverse group of people who challenge me personally and professionally, but also know how to have a great time. My interests beyond coding include cooking, hiking, tricking my house out with IOT, gardening, and most importantly being my daughter's dad.",
  },
];

export const AboutSection: FC = () => {
  return (
    <SectionContent alwaysColumn className="max-w-full gap-0 px-0 pb-0 md:p-0">
      <div className="flex flex-col gap-8">
        <AboutSectionBanner>
          <p className="mx-auto max-w-screen-xl py-4 text-left md:py-0">
            My interests are pretty diverse. I grew up rooting for the Miami
            Dolphins and playing football in the fall. I drew and painted in the
            winter, and performed in musicals in the spring. My creativity is
            what led me to web design and ultimately my career as a UI/UX
            Engineer.
          </p>
        </AboutSectionBanner>
        <div
          className={clsxMerge(
            'mx-auto max-w-screen-xl',
            'grid grid-cols-1 justify-center gap-6',
            'px-8 sm:grid-cols-2 md:px-12 lg:gap-10 lg:px-16 xl:px-0',
          )}
        >
          {ABOUT_SECTIONS.map((section, index) => (
            <div key={index} className="text-left">
              <p className="font-dmSerif text-[26px]/12 font-semibold text-violet-700 dark:text-slate-200">
                {section.title}
              </p>
              <p className="dark:text-slate-400">{section.text}</p>
            </div>
          ))}
        </div>

        <AboutSectionBanner>
          <p className="font-dmSerif text-2xl italic sm:text-4xl">
            A cat's work is never done.
          </p>
          <ImQuotesRight
            size={120}
            className="absolute -top-8 right-10 opacity-10 lg:right-16 xl:right-40"
          />
        </AboutSectionBanner>
      </div>
      <Image
        src="/about/kitties.jpg"
        alt="Kitties"
        width="2000"
        height="433"
        className="object-contain"
      />
    </SectionContent>
  );
};

const AboutSectionBanner: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative overflow-hidden bg-violet-200 px-8 py-5 md:px-12 md:py-8 lg:px-16 dark:bg-slate-700">
    {children}
  </div>
);
