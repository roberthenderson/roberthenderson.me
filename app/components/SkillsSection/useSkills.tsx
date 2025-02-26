import { shuffle } from 'lodash';
import { ReactNode, useMemo } from 'react';
import { FaReact } from 'react-icons/fa';
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

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
          label: 'CI',
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
          label: 'prisma',
          type: 'code',
        },
        {
          label: 'shadui/cn',
          type: 'design',
        },
        {
          label: 'React Query',
          type: 'framework',
        },
        {
          label: 'Serverless Functions',
          type: 'code',
        },
      ]),
    [],
  );
  const skillCards: ISkillCard[] = useMemo(
    () => [
      {
        label: 'React',
        icon: <FaReact size={ICON_SIZE} />,
        description:
          'Expert in React building components, hooks, and performance optimization.',
      },
      {
        label: 'Typescript',
        icon: <SiTypescript size={ICON_SIZE} />,
        description:
          '5+ years experience creating strongly typed applications using Typescript.',
      },
      {
        label: 'Javascript',
        icon: <SiJavascript size={ICON_SIZE} />,
        description:
          '15 years of Javascript experience from vanilla through and React.',
      },
      {
        label: 'NextJS',
        icon: <SiNextdotjs size={ICON_SIZE} />,
        description: '5+ years of building NextJS apps.',
      },
      {
        label: 'TailwindCSS',
        icon: <SiTailwindcss size={ICON_SIZE} />,
        description:
          '20+ years of using CSS, SASS, and Less. Now an expert in TailwindCSS.',
      },
      {
        label: 'Git',
        icon: <SiGit size={ICON_SIZE} />,
        description:
          'For my whole career, I have been using Git for version control.',
      },
    ],
    [],
  );

  return { skillTags, skillCards };
};
