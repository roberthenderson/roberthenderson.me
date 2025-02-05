import { Modal } from '@/app/components/base/Modal/Modal';
import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;

  return (
    <Modal
      title="Work Experience"
      content={<CompaniesContent companyId={companyId} />}
    />
  );
}
