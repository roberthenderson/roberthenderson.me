import { useAppContext } from '@/src/app/AppContextProvider';
import { GITHUB_REPO_URL } from '@/src/constants';
import { clsxMerge } from '@/src/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { EmailButton } from '../EmailButton/EmailButton';
import { Links } from '../HeroSection/Links';
import { TextLink } from '../TextLink/TextLink';

export const Footer: FC = () => {
  const { darkMode } = useAppContext();
  const year = new Date().getFullYear();

  return (
    <footer className="flex h-[350px] w-full flex-col overflow-hidden border-t-2 border-violet-700 bg-[#78a2cc] sm:h-[600px] dark:border-slate-600">
      <div className="relative flex h-full w-full flex-col justify-between">
        <section className="relative z-10 w-full bg-indigo-200 dark:bg-slate-700">
          <div
            className={clsxMerge(
              'flex flex-col items-center justify-between gap-2 px-4 py-4 text-violet-950 dark:text-slate-50',
              'md:flex-row md:px-6 lg:px-16',
            )}
          >
            <div className="flex items-center gap-4 text-sm max-md:w-full max-md:justify-between md:gap-1 lg:text-base">
              <EmailButton variant="footer" className="md:hidden" />
              <div className="flex items-center gap-1 max-sm:hidden lg:gap-2">
                <FaRegCopyright />
                <span>{year} Robert Henderson.</span>
              </div>
              <div className="flex items-center justify-between gap-2 max-md:hidden">
                <span className="flex items-center gap-1">
                  <TextLink href={GITHUB_REPO_URL} target="_blank">
                    Built
                  </TextLink>{' '}
                  with
                  <SiNextdotjs size={20} className="lg:mx-0.5" />
                  NextJS in
                </span>
                <Image
                  src={darkMode ? '/fortcollins.png' : '/fortcollins_dark.png'}
                  alt="Fort Collins, Colorado"
                  width="90"
                  height="23"
                  className="relative -left-3 top-[5px]"
                />
              </div>
              <Links variant="footer" className="md:hidden" />
            </div>
            <div className="flex items-center gap-4 max-md:hidden lg:gap-6">
              <EmailButton variant="footer" />
              <Links variant="footer" />
            </div>
          </div>
        </section>
        <div
          className={clsxMerge(
            'absolute -left-[5%] top-10 h-[270px] w-[110%] opacity-[0.96] blur-lg',
            'bg-gradient-to-r from-[#8bb3d7] from-[41%] via-[#77a1cb] via-[61%] to-[#5b8ab8] to-[93%]',
            'hidden sm:block',
          )}
        ></div>
        <div className="h-[350px] w-full bg-[url(/joshua-sukoff-rocky-mountains.jpg)] bg-cover bg-center"></div>
      </div>
    </footer>
  );
};
