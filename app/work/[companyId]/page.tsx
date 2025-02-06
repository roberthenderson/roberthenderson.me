import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';
import { SectionContainer } from '@/app/components/SectionContainer/SectionContainer';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;
  return (
    <SectionContainer>
      <CompaniesContent companyId={companyId} />
    </SectionContainer>
  );
}
