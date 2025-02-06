'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { FC, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  image?: ReactNode;
}

interface TabsProps {
  variant: 'vertical' | 'horizontal';
  tabs: TabItem[];
  selectedId?: string;
  setSelectedId: (id: string) => void;
  className?: string;
}

export const Tabs: FC<TabsProps> = ({
  variant,
  tabs,
  selectedId,
  setSelectedId,
  className,
}) => {
  return (
    <div
      className={clsxMerge(
        'flex w-full items-center justify-center gap-3',
        variant === 'vertical' && 'flex-col gap-4',
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
        'rounded-full bg-violet-200 px-4 py-2 text-slate-500 dark:bg-slate-900 dark:text-slate-400',
        'hover:bg-violet-300/80 hover:text-slate-700 hover:dark:bg-slate-950/80 hover:dark:text-slate-200',
        isActive &&
          'bg-violet-300 text-foreground dark:bg-slate-950 dark:text-foreground',
        tab.image && 'flex aspect-square w-16 items-center justify-center p-0',
        tab.image &&
          'border-3 border-violet-100 bg-violet-50 opacity-70 hover:bg-violet-50 hover:opacity-100 dark:border-slate-900 dark:bg-slate-500/30 hover:dark:bg-slate-500/35',
        tab.image &&
          isActive &&
          'border-violet-300/30 bg-white/80 opacity-100 hover:bg-violet-50 dark:border-slate-300/10 dark:bg-slate-500/40 hover:dark:bg-slate-500/35',
      )}
      onClick={handleClick}
    >
      {tab.image ? tab.image : tab.label}
    </button>
  );
};
