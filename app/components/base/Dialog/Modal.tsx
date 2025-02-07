'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { motion, useAnimate } from 'motion/react';
import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
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
          'my-16 flex flex-col [@media(min-height:200px)]:my-0 [@media(min-height:600px)]:my-8',
          'relative bg-violet-50 dark:bg-slate-800',
          '[@media(min-height:200px)]:rounded-none [@media(min-height:600px)]:rounded-3xl',
          'mx-auto w-full overflow-hidden shadow-xl sm:max-w-4xl sm:rounded-3xl',
          'md:h-[800px]',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleCloseModal}
          className="absolute right-0 top-0 z-10 p-4 text-foreground opacity-50 transition-opacity hover:opacity-100 sm:right-2 sm:top-2 sm:p-3"
        >
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </motion.div>
  );
};
