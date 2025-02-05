'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC } from 'react';

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  selectedId?: string;
  setSelectedId: (id: string) => void;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  selectedId,
  setSelectedId,
  className,
}) => {
  return (
    <div
      className={clsxMerge(
        'flex w-full items-center justify-center gap-3',
        className,
      )}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          isActive={selectedId === tab.id}
          onClick={setSelectedId}
        />
      ))}
    </div>
  );
};

interface TabProps {
  tab: TabItem;
  isActive: boolean;
  onClick: (id: string) => void;
}

const Tab: FC<TabProps> = ({ tab, isActive, onClick }) => {
  const handleClick = () => onClick(tab.id);

  return (
    <button
      className={clsxMerge(
        'transition-all',
        'text-sm md:text-base',
        'bg-violet-200 px-4 py-2 text-slate-500 md:rounded-full dark:bg-slate-900 dark:text-slate-400',
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
