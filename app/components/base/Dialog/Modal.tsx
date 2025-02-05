'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { motion, useAnimate } from 'motion/react';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  title?: ReactNode;
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open,
  onClose,
  title,
  className,
  children,
}) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const handleCloseModal = async () => {
    await animate(
      scope.current,
      {
        opacity: [1, 0],
      },
      {
        duration: 0.3,
      },
    );
    onClose?.();
  };

  return (
    open && (
      <motion.div
        ref={scope}
        role="dialog"
        onClick={handleCloseModal}
        className={clsxMerge(
          'fixed inset-0 z-50 bg-slate-500/85 backdrop-blur-sm',
          className,
        )}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3 },
        }}
      >
        <div className="fixed inset-0 z-10 w-screen sm:my-12">
          <div
            className={clsxMerge(
              'flex flex-col sm:p-6',
              'relative bg-violet-100 dark:bg-slate-800',
              'mx-auto max-h-full w-full p-8 shadow-xl sm:max-w-4xl sm:rounded-lg sm:px-8 sm:py-10',
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute right-0 top-0 p-4 text-foreground opacity-50 transition-opacity hover:opacity-100 sm:right-2 sm:top-2 sm:p-3"
            >
              <IoClose size={24} />
            </button>
            <h3 className="text-center font-dmSerif text-4xl font-semibold text-indigo-950 sm:pb-6 sm:text-5xl dark:text-slate-100">
              {title}
            </h3>
            {children}
          </div>
        </div>
      </motion.div>
    )
  );
};
