'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { Transition } from '@headlessui/react';
import { FC, ReactNode, useEffect } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

export interface ToastProps {
  type?: 'success' | 'error';
  container?: 'page' | 'local';
  position?: 'top' | 'bottom';
  open?: boolean;
  message?: ReactNode;
  onClose?: () => void;
  closeAfterMs?: number;
  classNames?: {
    container?: string;
    panel?: string;
  };
}

export const Toast: FC<ToastProps> = ({
  type,
  container = 'page',
  position = 'bottom',
  message,
  closeAfterMs,
  classNames,
  open,
  onClose,
}) => {
  useEffect(() => {
    if (closeAfterMs && open) {
      setTimeout(() => onClose?.(), closeAfterMs);
    }
  }, [closeAfterMs, open, onClose]);

  return (
    <Transition show={open}>
      <div
        role="alertdialog"
        className={clsxMerge(
          'pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-end sm:px-10 sm:pb-10 lg:px-8',
          position === 'top' && 'top-0',
          container === 'local' && 'absolute',
          'transition duration-200 ease-in-out',
          'data-[closed]:opacity-0',
          classNames?.container,
        )}
      >
        <div
          className={clsxMerge(
            'pointer-events-auto flex items-center justify-between gap-x-6 bg-slate-300 py-2.5 pl-6 pr-5 sm:rounded-xl sm:py-3',
            'dark:bg-slate-500',
            type === 'success' &&
              'bg-emerald-600 text-emerald-50 dark:bg-emerald-600',
            type === 'error' && 'bg-red-600 text-red-50 dark:bg-red-600',
            classNames?.panel,
          )}
        >
          <div className="flex items-center gap-2">
            {type === 'success' && <FaRegCircleCheck className="opacity-85" />}
            {type === 'error' && <BsExclamationCircle className="opacity-85" />}
            <span>{message}</span>
          </div>
          <button onClick={onClose}>
            <IoClose />
          </button>
        </div>
      </div>
    </Transition>
  );
};
