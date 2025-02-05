'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from 'motion/react';
import { FC, PropsWithChildren, ReactNode } from 'react';
import useMeasure from 'react-use-measure';

interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  className?: string;
}

export const Drawer: FC<PropsWithChildren<DrawerProps>> = ({
  open,
  onClose,
  title,
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
            'absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl',
            'bg-violet-100 dark:bg-slate-800',
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
          <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
            <button
              onPointerDown={(e) => {
                controls.start(e);
              }}
              className="h-2 w-14 cursor-grab touch-none rounded-full bg-violet-300 active:cursor-grabbing dark:bg-slate-600"
            ></button>
          </div>
          <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
            <h3 className="text-center font-dmSerif text-4xl font-semibold text-indigo-950 sm:pb-6 sm:text-5xl dark:text-slate-100">
              {title}
            </h3>
            {children}
          </div>
        </motion.div>
      </motion.div>
    )
  );
};
