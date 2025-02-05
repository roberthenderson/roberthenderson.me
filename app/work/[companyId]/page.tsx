import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';
import { SectionContainer } from '@/app/components/SectionContainer/SectionContainer';
import { SectionContent } from '@/app/components/SectionContent/SectionContent';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;
  return (
    <SectionContainer>
      <SectionContent className="text-left md:py-8">
        <CompaniesContent companyId={companyId} variant="page" />
      </SectionContent>
    </SectionContainer>
  );
}
