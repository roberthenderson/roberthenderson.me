import Image from 'next/image';
import { FC } from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { Grid } from '../base/Grid/Grid';
import { SectionBanner } from '../SectionBanner/SectionBanner';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';

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
    <SectionContainer>
      <SectionContent>
        <SectionHeading>My Approach</SectionHeading>
      </SectionContent>
      <SectionBanner>
        My interests are pretty diverse. I grew up rooting for the Miami
        Dolphins and playing football in the fall. I drew and painted in the
        winter, and performed in musicals in the spring. My creativity is what
        led me to web design and ultimately my career as a UI/UX Engineer.
      </SectionBanner>
      <SectionContent>
        <Grid>
          {ABOUT_SECTIONS.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <p className="font-dmSerif text-[22px]/12 font-semibold text-violet-700 sm:text-[26px]/12 dark:text-slate-200">
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
