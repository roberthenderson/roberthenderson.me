import { BASE_URL } from '@/src/constants';
import Head from 'next/head';

const METADATA = {
  title: 'Robert Henderson | Senior Frontend Engineer',
  description:
    'Robert Henderson is an accomplished Senior Frontend Engineer with Javascript, React, Typescript, NextJS, and UX Web Design experience.',
  keywords:
    'robert henderson,javascript,typescript,frontend,engineer,developer,senior,react,reactjs,nextjs,web design,vercel,html,css,sass,ux,design,web',
};

export const Metadata = () => (
  <Head>
    <title>{METADATA.title}</title>
    <link rel="canonical" href={BASE_URL}></link>
    <meta name="author" content="Robert Henderson" />
    <meta name="description" content={METADATA.description} />
    <meta name="keywords" content={METADATA.keywords} />
    {/* og: meta tags */}
    <meta name="og:title" content={METADATA.title} />
    <meta name="og:type" content="website" />
    <meta name="og:description" content={METADATA.description} />
    <meta name="og:url" content={BASE_URL} />
    <meta name="og:image" content={`${BASE_URL}/api/og`} />
    {/* Twitter meta tags */}
    <meta name="twitter:title" content={METADATA.title} />
    <meta name="twitter:description" content={METADATA.description} />
    <meta name="twitter:site" content="@roberthenderson" />
    <meta name="twitter:image" content={`${BASE_URL}/api/og`} />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);
