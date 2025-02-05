import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

/** TODO: complete layout/design */
export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;
  return <CompaniesContent companyId={companyId} />;
}
