'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
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
  const [selectedTabId, setSelectedTabId] = useState(activeTabId);

  const handleChange = (tabId: string) => {
    setSelectedTabId(tabId);
    handleTabChange?.(tabId);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-8 flex w-full items-center justify-center">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            isActive={selectedTabId === tab.id}
            onClick={handleChange}
          />
        ))}
      </div>
      {tabs.map((tab) => {
        if (tab.id !== selectedTabId) {
          return null;
        }
        return (
          <div key={tab.id} className="flex h-auto flex-col overflow-y-auto">
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};

interface TabProps {
  tab: TabItem;
  isActive: boolean;
  onClick: (index: string) => void;
}

const Tab: FC<TabProps> = ({ tab, isActive, onClick }) => {
  const handleClick = () => onClick(tab.id);

  return (
    <button
      className={clsxMerge(
        'transition-all',
        'mx-2 rounded-full bg-violet-200 px-4 py-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400',
        'hover:bg-violet-300/80 hover:text-slate-700 hover:dark:bg-slate-950/80 hover:dark:text-slate-200',
        isActive &&
          'bg-violet-300 text-foreground dark:bg-slate-950 dark:text-foreground',
      )}
      onClick={handleClick}
    >
      {tab.label}
    </button>
  );
};
