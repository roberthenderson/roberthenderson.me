import { FC, useMemo } from 'react';
import { TabItem, Tabs } from '../base/Tabs';

interface WorkSectionModalContentProps {
  tabs?: unknown;
}

export const WorkSectionModalContent: FC<WorkSectionModalContentProps> = () => {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        label: 'Magic Eden',
        content: 'Magic Eden content.',
      },
      {
        label: 'Metaplex',
        content: 'Metaplex content.',
      },
      {
        label: 'Salesforce',
        content: 'Salesforce content.',
      },
      {
        label: 'Vlocity',
        content: 'Vlocity content.',
      },
      {
        label: 'Blue Acorn',
        content: 'Blue Acorn content.',
      },
    ],
    [],
  );

  return (
    <div className="flex flex-col">
      <Tabs tabs={tabs} />
    </div>
  );
};
