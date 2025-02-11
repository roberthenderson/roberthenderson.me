import { THIS_PROJECT_SCREENSHOT_CLASSNAME } from '@/app/constants/classNames';
import { GITHUB_REPO_URL } from '@/app/constants/urls';
import { clsxMerge } from '@/app/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { SiGithub } from 'react-icons/si';
import VsCode from '../../../public/companies/vscode.png';
import VsCodeLight from '../../../public/companies/vscode_light.png';
import { LinkButton } from '../base/Button/LinkButton';
import { TextLink } from '../base/TextLink/TextLink';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const ThisProject: FC = () => {
  return (
    <SectionContainer>
      <div
        className={clsxMerge(
          'w-full border-t-5 border-violet-400 dark:border-slate-600',
          'dark:bg-slate-750 relative bg-violet-200',
        )}
      >
        <div className="dark:bg-slate-750 mx-auto flex max-w-screen-xl flex-col bg-violet-200 md:flex-row">
          <div
            className={clsxMerge(
              'flex w-full flex-col gap-8 md:w-[70%] md:gap-6 lg:w-[65%]',
              'relative z-20 overflow-y-hidden',
              'px-8 pb-16 pt-8 sm:px-12 md:px-12 md:pb-12 md:pr-0 md:pt-10',
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
                This Project
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
              After 15 years of working, I decided to take my first meaningful
              time off from working in December, 2024 in order to spend more
              quality time with my daughter and explore my own interests. This
              project, <TextLink href="/">roberthenderson.me</TextLink>, is what
              I've been working on.
            </p>
            <p>
              I've always wanted to create a personal website, but life just
              gets in the way and there's never enough time to focus on it along
              with everything else. Please check out the GitHub{' '}
              <TextLink href={GITHUB_REPO_URL} target="_blank">
                repository
              </TextLink>
              , clone it, and check out the code. It's a great insight into my
              ability.
            </p>
            <p>
              Not only is the site coded all by me, but I also designed it.
              There is no "template", no UX designer figma files, just me
              designing with code.
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
              'via-violet-200/90 to-100% md:from-10% md:via-30% lg:from-0% lg:via-20% dark:to-100% md:dark:from-40% lg:dark:from-20% lg:dark:to-80%',
            )}
          />
          <Image
            src={VsCode}
            alt="Code Screenshot"
            className={clsxMerge(
              'hidden dark:block',
              THIS_PROJECT_SCREENSHOT_CLASSNAME,
            )}
          />
          <Image
            src={VsCodeLight}
            alt="Code Screenshot"
            className={clsxMerge(
              'dark:hidden',
              THIS_PROJECT_SCREENSHOT_CLASSNAME,
            )}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
