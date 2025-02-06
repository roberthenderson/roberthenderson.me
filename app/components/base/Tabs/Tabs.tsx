'use client';

import { usePrevious } from '@/app/hooks/usePrevious';
import { useScreenSize } from '@/app/hooks/useScreenSize';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { motion } from 'motion/react';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

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
  const activeIndex = tabs.findIndex((tab) => selectedId === tab.id);
  return (
    <div
      className={clsxMerge(
        'flex w-full items-center justify-center gap-3',
        variant === 'vertical' && 'flex-col gap-4',
        className,
      )}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab.id}
          tab={tab}
          index={index}
          activeIndex={activeIndex}
          isActive={selectedId === tab.id}
          onClick={setSelectedId}
        />
      ))}
    </div>
  );
};

interface TabProps {
  tab: TabItem;
  index: number;
  activeIndex: number;
  isActive: boolean;
  onClick: (id: string) => void;
}

const Tab: FC<TabProps> = ({ tab, index, activeIndex, isActive, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isSm, isMd, isLg } = useScreenSize();
  const [y, setY] = useState<number | undefined>();
  const [marginTop, setMarginTop] = useState<number | undefined>();
  const prevActiveIndex = usePrevious(activeIndex);

  useEffect(() => {
    if (!tab.image || activeIndex === prevActiveIndex) {
      return;
    }

    const button = buttonRef.current;
    const totalElementHeightWithGap =
      button && button.parentElement
        ? parseInt(getComputedStyle(button.parentElement).gap) +
          button.offsetHeight
        : 0;
    if (isActive && button?.offsetTop) {
      const containerPaddingTop = isLg ? 26 : isMd ? 20 : isSm ? 22 : 18;
      const extra =
        prevActiveIndex !== null && index > prevActiveIndex
          ? -totalElementHeightWithGap
          : 0;
      setY(-button.offsetTop + extra + containerPaddingTop);
      setMarginTop(undefined);
    } else if (index - 1 === activeIndex) {
      setY(0);
      setMarginTop(-totalElementHeightWithGap);
    } else if (!isActive && index - 1 !== activeIndex) {
      setY(0);
      setMarginTop(undefined);
    }
  }, [y, isSm, isMd, isLg, isActive, tab, index, activeIndex, prevActiveIndex]);

  const handleClick = () => {
    onClick(tab.id);
    setY(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      animate={{ y, marginTop }}
      transition={{ duration: 0.2 }}
      className={clsxMerge(
        'text-sm md:text-base',
        'rounded-full bg-violet-200 px-2 py-1 text-slate-500 dark:bg-slate-900 dark:text-slate-400',
        'hover:bg-violet-300/80 hover:text-slate-700 hover:dark:bg-slate-950/80 hover:dark:text-slate-200',
        isActive &&
          'bg-violet-300 text-foreground dark:bg-slate-950 dark:text-foreground',
        tab.image &&
          'flex aspect-square w-12 items-center justify-center p-0 md:w-16',
        tab.image &&
          'border-1 border-violet-100 bg-violet-50 opacity-70 hover:bg-violet-50 hover:opacity-100 md:border-3 dark:border-slate-900 dark:bg-slate-500/30 hover:dark:bg-slate-500/35',
        tab.image &&
          isActive &&
          'border-violet-300/30 bg-white/80 opacity-100 hover:bg-violet-50 dark:border-slate-300/10 dark:bg-slate-500/40 hover:dark:bg-slate-500/35',
      )}
      onClick={handleClick}
    >
      {tab.image ? tab.image : tab.label}
    </motion.button>
  );
};
