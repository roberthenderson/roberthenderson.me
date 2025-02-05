import { Dialog } from '@/app/components/base/Dialog/Dialog';
import { CompaniesContent } from '@/app/components/CompaniesContent/CompaniesContent';

interface CompanyPageProps {
  params: Promise<{ companyId: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const companyId = (await params).companyId;

  return (
    <Dialog isInterceptingRoute title="Work Experience">
      <CompaniesContent companyId={companyId} variant="dialog" />
    </Dialog>
  );
}
