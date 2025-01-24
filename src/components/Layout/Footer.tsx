import { GITHUB_REPO_URL } from '@/src/constants';
import { clsxMerge } from '@/src/utils/clsxMerge';
import Image from 'next/image';
import { FC } from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { Links } from '../HeroSection/Links';
import { TextLink } from '../TextLink/TextLink';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-5 flex h-[600px] w-full flex-col overflow-hidden border-violet-700 bg-[#78a2cc] dark:border-slate-950">
      <div className="relative flex h-full w-full flex-col justify-between">
        <section className="relative z-10 w-full bg-violet-500/20 dark:bg-slate-700">
          <div
            className={clsxMerge(
              'flex flex-col items-center justify-between gap-2 px-4 py-4 text-slate-50',
              'md:flex-row md:px-8 lg:px-16',
            )}
          >
            <div className="flex flex-col items-center gap-1 md:flex-row">
              <div className="flex items-center gap-2">
                <FaRegCopyright className="text-slate-100" />
                <span>{year} Robert Henderson.</span>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1">
                  <TextLink href={GITHUB_REPO_URL} target="_blank">
                    Built
                  </TextLink>{' '}
                  with
                  <SiNextdotjs size={20} className="mx-0.5 text-slate-100" />
                  NextJS in
                </span>
                <Image
                  src={'/fortcollins.png'}
                  alt="Fort Collins, Colorado"
                  width="90"
                  height="23"
                  className="relative -left-3 top-[5px]"
                />
              </div>
            </div>
            <Links variant="footer" />
          </div>
        </section>
        <div
          className={clsxMerge(
            'absolute -left-[5%] top-10 h-[270px] w-[110%] opacity-[0.96] blur-lg',
            'bg-gradient-to-r from-[#8bb3d7] from-[41%] via-[#77a1cb] via-[61%] to-[#5b8ab8] to-[93%]',
          )}
        ></div>
        <div className="h-[350px] w-full bg-[url(/joshua-sukoff-rocky-mountains.jpg)] bg-cover bg-center"></div>
      </div>
    </footer>
  );
};
