'use client';

import { motion, useAnimate } from 'motion/react';
import {
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  useCallback,
  useEffect,
} from 'react';
import { IoClose } from 'react-icons/io5';
import { clsxMerge } from '@/app/utils/clsxMerge';

interface ModalProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  className?: string;
  label?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  onClose,
  className,
  label = 'Work experience',
  children,
}) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const handleCloseModal = useCallback(async () => {
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
  }, [animate, scope, onClose]);

  // Close on Escape, the expected way out of a modal for keyboard users.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleCloseModal]);

  return (
    <motion.div
      ref={scope}
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
      {/*
       * The backdrop is a real button so clicking outside to dismiss is
       * exposed to assistive tech instead of being a click-only affordance.
       */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={handleCloseModal}
        className="absolute inset-0 h-full w-full cursor-default"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={clsxMerge(
          'my-16 flex flex-col [@media(min-height:200px)]:my-0 [@media(min-height:600px)]:my-8',
          'relative bg-violet-50 dark:bg-slate-800',
          '[@media(min-height:200px)]:rounded-none [@media(min-height:600px)]:rounded-3xl',
          'mx-auto w-full overflow-hidden shadow-xl sm:max-w-4xl sm:rounded-3xl',
          'md:h-[800px]',
        )}
      >
        <button
          type="button"
          aria-label="Close dialog"
          onClick={handleCloseModal}
          className="absolute top-0 right-0 z-10 p-4 text-foreground opacity-50 transition-opacity hover:opacity-100 sm:top-2 sm:right-2 sm:p-3"
        >
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </motion.div>
  );
};
