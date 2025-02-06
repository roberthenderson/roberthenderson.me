import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;
  return (
    <section>
      <CompaniesContent companyId={companyId} />
    </section>
  );
}
