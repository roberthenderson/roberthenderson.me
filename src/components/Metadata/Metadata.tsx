import { useAppContext } from '@/src/app/AppContextProvider';
import Head from 'next/head';

export const Metadata = () => {
  const { activeSection, pageSectionsList } = useAppContext();

  return (
    <Head>
      <title>{`${activeSection ? pageSectionsList?.find((section) => section.id === activeSection)?.label + ' | ' : ''}Robert Henderson | Senior Frontend Engineer`}</title>
      <meta name="author" content="Robert Henderson" />
      <meta
        name="description"
        content="Robert Henderson is a skilled Senior Frontend Engineer. He is an experienced Javascript developer with deep knowledge of ReactJS, Typescript, NextJS, CSS, HTML, and UX Design. He has worked in Big Tech companies like Salesforce as well as successful Startups."
      />
      <meta
        name="keywords"
        content="javascript,typescript,frontend,engineer,developer,senior,react,reactjs,nextjs,vercel,html,css,sass,ux,design,web"
      />
      <link
        rel="canonical"
        href={`https://roberthenderson.me${
          activeSection
            ? pageSectionsList?.find(
                (pageSection) => pageSection.id === activeSection,
              )?.link
            : ''
        }`}
      ></link>
    </Head>
  );
};
