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
  open?: boolean;
  onClose?: () => void;
  className?: string;
}

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  open,
  onClose,
  className,
  children,
}) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });
    const yStart = typeof y.get() === 'number' ? y.get() : 0;
    await animate('#drawer', {
      y: [yStart, height],
    });
    onClose?.();
  };

  return (
    open && (
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
            className={clsxMerge('flex w-full cursor-grab justify-center py-3')}
          >
            <div className="h-2 w-16 touch-none rounded-full bg-violet-300 active:cursor-grabbing dark:bg-slate-700"></div>
          </button>
          <div className="relative z-0 h-full">{children}</div>
        </motion.div>
      </motion.div>
    )
  );
};
