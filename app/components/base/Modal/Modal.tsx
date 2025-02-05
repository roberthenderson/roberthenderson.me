'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { Button, ButtonProps } from '../Button/Button';

interface ModalProps {
  onClose?: () => void;
  title?: ReactNode;
  content: ReactNode;
  buttons?: ButtonProps[];
}

export const Modal: FC<ModalProps> = ({ onClose, title, content, buttons }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { modalOpen, setModalOpen } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      // Allows for dialog escape key
      modalRef.current?.showModal();
      setModalOpen(true);
    }
  }, [setModalOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      router.back();
      onClose?.();
    }, 300);
  };

  return (
    <dialog
      ref={modalRef}
      onClose={handleCloseModal}
      className={clsxMerge(
        // Because next intercepting routes re-render the modal component on each route
        // switch, this code prevents the animation from happening each time the route
        // might be changed to another dynamic route within the @modal slot
        'backdrop:duration-400 backdrop:bg-slate-500/85 backdrop:opacity-100 backdrop:backdrop-blur-sm backdrop:transition-opacity',
        modalOpen ? 'backdrop:opacity-100' : 'backdrop:opacity-0',
      )}
    >
      <motion.div
        className={clsxMerge(
          'fixed inset-0 z-10 w-screen opacity-100 transition-opacity sm:my-12',
          modalOpen ? 'opacity-100' : 'opacity-0',
        )}
        // Same thing here. If we allow a scaling animation all the time,
        // every time the dynamic route is changed within the @modal slot, the
        // re-render will perform the animation.
        initial={!modalOpen ? { scale: 0.75 } : { scale: 1 }}
        animate={
          !modalOpen
            ? {
                scale: 1,
                transition: { duration: 0.2 },
              }
            : undefined
        }
      >
        <div
          className={clsxMerge(
            'flex flex-col sm:p-6',
            'relative bg-violet-100 dark:bg-slate-800',
            'mx-auto max-h-full w-full p-8 shadow-xl sm:max-w-4xl sm:rounded-lg sm:px-8 sm:py-10',
          )}
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
          {content}
          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
            {buttons?.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        </div>
      </motion.div>
    </dialog>
  );
};
