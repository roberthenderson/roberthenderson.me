import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';
import { COMPANIES } from '@/app/constants/companies';
import { NAME, TITLE_SUFFIX } from '@/app/constants/metadata';
import {
  getCompanyRoute,
  isValidCompanyId,
  ROUTES,
} from '@/app/constants/routes';
import { BASE_URL } from '@/app/constants/urls';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

/** Prerender every known company; anything else 404s. */
export function generateStaticParams() {
  return COMPANIES.map((company) => ({ companyId: company.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { companyId } = await params;

  if (!isValidCompanyId(companyId)) {
    return {};
  }

  const canonical = `${BASE_URL}${getCompanyRoute(companyId)}`;

  return {
    title: `${NAME} - ${ROUTES[companyId].label} ${TITLE_SUFFIX}`,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
    },
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { companyId } = await params;

  if (!isValidCompanyId(companyId)) {
    notFound();
  }

  return <CompaniesContent companyId={companyId} />;
}
