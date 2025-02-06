'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { motion, useAnimate } from 'motion/react';
import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  open,
  onClose,
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
          'flex flex-col items-center justify-center',
          'fixed inset-0 z-50 bg-violet-400/70 backdrop-blur-sm dark:bg-slate-500/85',
          className,
        )}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.3 },
        }}
      >
        <div
          className={clsxMerge(
            'flex max-h-[800px] flex-col',
            'relative bg-violet-50 dark:bg-slate-800',
            'mx-auto w-full overflow-hidden shadow-xl sm:max-w-4xl sm:rounded-3xl',
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleCloseModal}
            className="absolute right-0 top-0 p-4 text-foreground opacity-50 transition-opacity hover:opacity-100 sm:right-2 sm:top-2 sm:p-3"
          >
            <IoClose size={24} />
          </button>
          {children}
        </div>
      </motion.div>
    )
  );
};
