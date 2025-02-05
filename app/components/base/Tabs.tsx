'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { FC, ReactNode, useState } from 'react';

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTabId?: string;
  handleTabChange?: (tabId: string) => void;
}

export const Tabs: FC<TabsProps> = ({ tabs, activeTabId, handleTabChange }) => {
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTabId) ?? 0;
  const [selectedIndex, setSelectedIndex] = useState(activeTabIndex);

  const handleChange = (index: number) => {
    setSelectedIndex(index);
    handleTabChange?.(`${tabs[index].id}`);
  };

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={handleChange}>
      <TabList className="mb-8">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            className={clsxMerge(
              'transition-all',
              'mx-2 rounded-full bg-violet-200 px-4 py-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400',
              'hover:bg-violet-300/80 hover:text-slate-700 hover:dark:bg-slate-950/80 hover:dark:text-slate-200',
              selectedIndex === index &&
                'bg-violet-300 text-foreground dark:bg-slate-950 dark:text-foreground',
            )}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.id}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
