import { GITHUB_REPO_URL } from '@/app/constants/urls';
import { clsxMerge } from '@/app/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { SiGithub } from 'react-icons/si';
import VsCode from '../../../public/companies/vscode.png';
import { LinkButton } from '../base/Button/LinkButton';
import { TextLink } from '../base/TextLink/TextLink';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const ThisProject: FC = () => {
  return (
    <SectionContainer>
      <div
        className={clsxMerge(
          'w-full border-t-3 border-violet-300 dark:border-slate-700',
          'dark:bg-slate-750 relative bg-violet-200',
        )}
      >
        <div className="mx-auto flex max-w-screen-xl flex-col md:flex-row">
          <div
            className={clsxMerge(
              'flex w-full flex-col gap-8 md:w-1/2 md:gap-6',
              'dark:bg-slate-750 relative overflow-y-hidden bg-violet-200',
              'p-10 sm:px-12 md:px-12 md:py-8 md:pr-0',
              'text-center md:text-left',
            )}
          >
            <h4 className="text-semibold text-center font-dmSerif text-5xl md:text-left">
              This Project
            </h4>
            <LinkButton
              href={GITHUB_REPO_URL}
              target="_blank"
              variant="primary"
              className="flex items-center gap-2.5 self-center px-8 md:self-start"
            >
              <SiGithub />
              <span>GitHub Repo</span>
              <RxOpenInNewWindow />
            </LinkButton>
            <p>
              After 15 years of working, I decided to take my first meaningful
              time off from working in December, 2024 in order to spend more
              quality time with my daughter and explore my own interests. This{' '}
              <TextLink href="/">project (roberthenderson.me)</TextLink> is what
              I've been working on.
            </p>
            <p>
              I've always wanted to create a personal website, but life just
              gets in the way and there's never enough time to focus on it along
              with everything else. Please check out the{' '}
              <TextLink href={GITHUB_REPO_URL} target="_blank">
                GitHub repository
              </TextLink>
              , clone it, and check out the code. It's a great insight into my
              ability.
            </p>
            <p>
              Not only is the site coded all by me, but I also designed it.
              There is no "template", no UX designer figma files, just me
              designing with code, and I'm proud of it.
            </p>
          </div>
        </div>
        <div
          className={clsxMerge(
            'absolute right-0 top-0 hidden h-full w-1/2 overflow-hidden md:block',
          )}
        >
          <div
            className={clsxMerge(
              'absolute right-0 z-10 h-full w-full',
              'dark:from-slate-750 bg-gradient-to-r from-violet-200 to-transparent',
              'from-5% to-50% lg:to-60%',
            )}
          />
          <Image
            src={VsCode}
            alt="Code Screenshot"
            className={clsxMerge(
              'absolute right-40 top-60 scale-[3.75] blur-[0.01em] lg:top-36 lg:scale-[2.25] xl:top-16 xl:scale-[1.7]',
            )}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
