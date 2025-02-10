import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';
import { NAME, TITLE_SUFFIX } from '@/app/constants/metadata';
import { ROUTES } from '@/app/constants/routes';
import { BASE_URL } from '@/app/constants/urls';
import { CompanyIdEnum } from '@/app/types';
import { Metadata } from 'next';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const companyId = (await params).companyId as CompanyIdEnum;

  return {
    title: `${NAME}, ${ROUTES[companyId]?.label} ${TITLE_SUFFIX}`,
    alternates: {
      canonical: `${BASE_URL}${ROUTES[companyId]?.route}`,
    },
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;
  return <CompaniesContent companyId={companyId} />;
}
