'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      // Allows for dialog escape key
      dialogRef.current?.showModal();
    }
  }, []);

  const handleCloseModal = () => {
    router.back();
    onClose?.();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleCloseModal}
      className={clsxMerge(
        'backdrop:bg-slate-500/85 backdrop:backdrop-blur-sm',
      )}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center sm:p-6">
          <div
            className={clsxMerge(
              'relative overflow-hidden bg-violet-100 dark:bg-slate-800',
              'w-full p-8 shadow-xl sm:my-12 sm:max-w-4xl sm:rounded-lg sm:px-8 sm:py-10',
              'transform transition-all data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in',
            )}
          >
            <button
              onClick={handleCloseModal}
              className="absolute right-0 top-0 p-4 text-foreground opacity-50 transition-opacity hover:opacity-100 sm:right-2 sm:top-2 sm:p-3"
            >
              <IoClose size={24} />
            </button>
            <h3 className="font-dmSerif text-4xl font-semibold text-indigo-950 sm:pb-6 sm:text-5xl dark:text-slate-100">
              {title}
            </h3>
            <div className="text-foreground">{content}</div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              {buttons?.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
