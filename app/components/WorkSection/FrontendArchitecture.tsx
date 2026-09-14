import type { FC, ReactNode } from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { SiGithub } from 'react-icons/si';
import { EIDER_URL, GITHUB_REPO_URL } from '@/app/constants/urls';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { LinkButton } from '../base/Button/LinkButton';
import { TextLink } from '../base/TextLink/TextLink';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { ArchitectureBackdrop } from './ArchitectureBackdrop';

interface ArchitecturePrinciple {
  title: string;
  text: ReactNode;
}

const ARCHITECTURE_PRINCIPLES: ArchitecturePrinciple[] = [
  {
    title: 'One source, every surface',
    text: (
      <>
        One list should drive everything derived from it. On this site a single
        companies file feeds the work grid, the detail pages, the sitemap, and
        the static params, so adding a job is a one-line edit. At{' '}
        <TextLink href={EIDER_URL} target="_blank">
          Eider
        </TextLink>{' '}
        the same rule puts about 290 paired web and native components and 3,700
        localized strings behind one definition, which means a change cannot
        land on half the product.
      </>
    ),
  },
  {
    title: 'No loaders, no layout shift',
    text: 'Speed is something I design for on day one, not a pass I make at the end. Eider paints its final layout on the first frame from a warm cache, writes apply immediately and roll back if the server disagrees, and balances push to every signed-in device over an event bus. Loading placeholders match the real layout, so nothing jumps when the data arrives.',
  },
  {
    title: 'The gate is the guardrail',
    text: 'I would rather a machine catch a mistake than a reviewer. Eider runs format, lint, typecheck, unit tests, and Postgres integration tests before a push can leave my machine, and work moves from development to staging to production behind nightly end-to-end runs. A failing gate is the signal to stop and fix the problem, never to route around it.',
  },
  {
    title: 'Reasoning belongs in history',
    text: 'Source files carry what the code does. The reasoning goes in the commit message and the code review, where it is dated, attributable, and cannot rot next to code that moved on without it. Anyone who wants the why has git blame, and anyone who wants the what has the code in front of them.',
  },
  {
    title: 'Portable core, thin adapters',
    text: 'Domain logic should not know which framework it is running under. Eider keeps its 144 API routes as thin adapters over portable functions, and those same functions serve the web app, the iOS and Android apps, and the realtime service. When a framework changes I rewrite an adapter instead of a product.',
  },
];

export const FrontendArchitecture: FC = () => {
  return (
    <SectionContainer>
      <div
        className={clsxMerge(
          'w-full border-violet-400 border-t-5 dark:border-slate-600',
          'relative bg-violet-200 dark:bg-slate-750',
        )}
      >
        <div className="mx-auto flex max-w-screen-xl flex-col bg-violet-200 md:flex-row dark:bg-slate-750">
          <div
            className={clsxMerge(
              'flex w-full flex-col gap-8 md:w-[70%] md:gap-6 lg:w-[65%]',
              'relative z-20 overflow-y-hidden',
              'px-8 pt-8 pb-16 sm:px-12 md:px-12 md:pt-10 md:pr-0 md:pb-12',
              'text-center md:text-left',
            )}
          >
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
              <h4
                className={clsxMerge(
                  'text-center font-dmSerif font-semibold md:text-left',
                  'text-[40px]',
                )}
              >
                Frontend Architecture
              </h4>
              <LinkButton
                href={GITHUB_REPO_URL}
                target="_blank"
                variant="primary"
                className="flex items-center gap-2.5 px-8"
              >
                <SiGithub />
                <span>GitHub Repo</span>
                <RxOpenInNewWindow />
              </LinkButton>
            </div>
            <p>
              Most of the frontend problems I have been given to fix turned out
              to be structural. These are the rules I build by now, and what
              each one bought me. The code for this site is public, and the
              single source rule and the commit history are both easy to check
              in it.
            </p>
            <ul className="flex flex-col gap-6 text-left">
              {ARCHITECTURE_PRINCIPLES.map((principle) => (
                <li key={principle.title}>
                  <p className="font-dmSerif font-semibold text-[22px]/8 text-violet-700 dark:text-slate-200">
                    {principle.title}
                  </p>
                  <p className="dark:text-slate-400">{principle.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={clsxMerge(
            'absolute top-0 right-0 hidden h-full overflow-hidden md:block',
            'md:w-[30%] lg:w-[35%]',
          )}
        >
          <div
            className={clsxMerge(
              'absolute right-0 z-10 h-full w-full',
              'bg-gradient-to-r from-violet-200 to-transparent dark:from-slate-750',
              'via-violet-200/90 to-100% md:from-10% md:via-30% lg:from-0% lg:via-20% dark:to-100% lg:dark:from-20% lg:dark:to-80% md:dark:from-40%',
            )}
          />
          <ArchitectureBackdrop />
        </div>
      </div>
    </SectionContainer>
  );
};
