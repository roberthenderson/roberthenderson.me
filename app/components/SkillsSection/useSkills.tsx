import { type ReactNode, useMemo } from 'react';
import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { shuffle } from '@/app/utils/shuffle';

const ICON_SIZE = 32;

export interface ISkillCard {
  label: string;
  icon: ReactNode;
  description: string;
}

export interface ISkillTag {
  label: string;
  type: 'framework' | 'code' | 'design' | 'devops' | 'industry';
}

export const useSkills = () => {
  const skillTags: ISkillTag[] = useMemo(
    () =>
      shuffle([
        {
          label: 'React',
          type: 'framework',
        },
        {
          label: 'Typescript',
          type: 'code',
        },
        {
          label: 'Javascript',
          type: 'code',
        },
        {
          label: 'NextJS',
          type: 'framework',
        },
        {
          label: 'TailwindCSS',
          type: 'framework',
        },
        {
          label: 'Git',
          type: 'devops',
        },
        {
          label: 'CSS',
          type: 'code',
        },
        {
          label: 'UX',
          type: 'design',
        },
        {
          label: 'SASS',
          type: 'framework',
        },
        {
          label: 'PHP',
          type: 'code',
        },
        {
          label: 'CI/CD',
          type: 'devops',
        },
        {
          label: 'Java',
          type: 'code',
        },
        {
          label: 'Figma',
          type: 'design',
        },
        {
          label: 'Chakra UI',
          type: 'framework',
        },
        {
          label: 'SEO',
          type: 'code',
        },
        {
          label: 'Responsive Web Design',
          type: 'design',
        },
        {
          label: 'ZSH',
          type: 'devops',
        },
        {
          label: 'E-Commerce',
          type: 'industry',
        },
        {
          label: 'Open Graph',
          type: 'code',
        },
        {
          label: 'Crypto',
          type: 'industry',
        },
        {
          label: 'Web3',
          type: 'industry',
        },
        {
          label: 'Vercel',
          type: 'framework',
        },
        {
          label: 'Enterprise Software',
          type: 'industry',
        },
        {
          label: 'Salesforce',
          type: 'framework',
        },
        {
          label: 'Web Components',
          type: 'framework',
        },
        {
          label: 'HTML',
          type: 'code',
        },
        {
          label: 'AWS',
          type: 'framework',
        },
        {
          label: 'GraphQL',
          type: 'framework',
        },
        {
          label: 'REST API',
          type: 'code',
        },
        {
          label: 'Postgres',
          type: 'code',
        },
        {
          label: 'Supabase',
          type: 'framework',
        },
        {
          label: 'Prisma',
          type: 'code',
        },
        {
          label: 'shadcn/ui',
          type: 'design',
        },
        {
          label: 'TanStack Query',
          type: 'framework',
        },
        {
          label: 'Serverless Functions',
          type: 'code',
        },
        {
          label: 'Firebase',
          type: 'framework',
        },
        {
          label: 'Datadog',
          type: 'framework',
        },
        {
          label: 'Storybook',
          type: 'design',
        },
        {
          label: 'Recoil',
          type: 'code',
        },
        {
          label: 'Zustand',
          type: 'code',
        },
        {
          label: 'Redux',
          type: 'code',
        },
        {
          label: 'React Native',
          type: 'framework',
        },
        {
          label: 'Expo',
          type: 'framework',
        },
        {
          label: 'Turborepo',
          type: 'devops',
        },
        {
          label: 'Cloudflare Workers',
          type: 'framework',
        },
        {
          label: 'Durable Objects',
          type: 'framework',
        },
        {
          label: 'Neon',
          type: 'framework',
        },
        {
          label: 'Playwright',
          type: 'devops',
        },
        {
          label: 'Maestro',
          type: 'devops',
        },
        {
          label: 'Design Systems',
          type: 'design',
        },
        {
          label: 'Stripe',
          type: 'framework',
        },
        {
          label: 'Plaid',
          type: 'framework',
        },
        {
          label: 'Sentry',
          type: 'devops',
        },
        {
          label: 'PostHog',
          type: 'devops',
        },
        {
          label: 'Fintech',
          type: 'industry',
        },
        {
          label: 'Accessibility',
          type: 'design',
        },
        {
          label: 'Monorepos',
          type: 'devops',
        },
      ]),
    [],
  );
  const skillCards: ISkillCard[] = useMemo(
    () => [
      {
        label: 'NextJS',
        icon: <SiNextdotjs size={ICON_SIZE} />,
        description:
          'App Router, server components, SSR, and static generation across six years of NextJS apps.',
      },
      {
        label: 'React',
        icon: <FaReact size={ICON_SIZE} />,
        description:
          'Expert in React components, hooks, state, and performance optimization.',
      },
      {
        label: 'Typescript',
        icon: <SiTypescript size={ICON_SIZE} />,
        description:
          'Strongly typed applications end to end, from shared domain models to API boundaries.',
      },
      {
        label: 'TailwindCSS',
        icon: <SiTailwindcss size={ICON_SIZE} />,
        description:
          '20+ years of CSS, SASS, and Less. Now build design systems on TailwindCSS.',
      },
      {
        label: 'Postgres',
        icon: <SiPostgresql size={ICON_SIZE} />,
        description:
          'Schema design, versioned migrations, and query tuning through Prisma on Postgres.',
      },
      {
        label: 'React Native',
        icon: <TbBrandReactNative size={ICON_SIZE} />,
        description:
          'Shipped an Expo / React Native app to both the App Store and Google Play.',
      },
    ],
    [],
  );

  return { skillTags, skillCards };
};
