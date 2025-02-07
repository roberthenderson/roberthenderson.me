'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'motion/react';
import { FC, PropsWithChildren } from 'react';
import useMeasure from 'react-use-measure';

interface DrawerProps {
  onClose?: () => void;
  className?: string;
}

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  onClose,
  className,
  children,
}) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    const yStart = typeof y.get() === 'number' ? y.get() : 0;
    animate('#drawer', {
      y: [yStart, height],
    });
    // Need to await the backdrop fading out or the user
    // can quickly open the drawer again which messes up
    // the intercepting route navigation history
    await animate(scope.current, {
      opacity: [1, 0],
    });
    onClose?.();
  };

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleClose}
      className={clsxMerge(
        'fixed inset-0 z-50 bg-slate-500/85 backdrop-blur-sm',
        className,
      )}
    >
      <motion.div
        id="drawer"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{
          ease: 'easeInOut',
        }}
        className={clsxMerge(
          'absolute bottom-0 h-[83vh] w-full overflow-hidden rounded-t-3xl',
          'bg-violet-200 dark:bg-slate-950',
        )}
        style={{ y }}
        drag="y"
        dragControls={controls}
        onDragEnd={() => {
          if (y.get() >= 100) {
            handleClose();
          }
        }}
        dragListener={false}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={{
          top: 0,
          bottom: 0.5,
        }}
      >
        <button
          onPointerDown={(e) => controls.start(e)}
          className={clsxMerge(
            'flex h-10 w-full cursor-grab touch-none justify-center active:cursor-grabbing',
          )}
        >
          <div className="my-4 h-2 w-16 rounded-full bg-violet-300 dark:bg-slate-700" />
        </button>
        <div className="relative z-0 h-full">{children}</div>
      </motion.div>
    </motion.div>
  );
};
