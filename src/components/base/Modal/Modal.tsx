import { useAppContext } from '@/src/app/AppContextProvider';
import { clsxMerge } from '@/src/utils/clsxMerge';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { FC, ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';
import { Button, ButtonProps } from '../Button/Button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  showBackdrop?: boolean;
  title?: ReactNode;
  content: ReactNode;
  buttons?: ButtonProps[];
}

export const Modal: FC<ModalProps> = ({
  open,
  onClose,
  showBackdrop = true,
  title,
  content,
  buttons,
}) => {
  const { darkMode } = useAppContext();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={clsxMerge('relative z-50', darkMode && 'dark')}
    >
      {showBackdrop && (
        <DialogBackdrop
          transition
          className={clsxMerge(
            'fixed inset-0 bg-slate-500/85 backdrop-blur-sm',
            'transition-opacity data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in',
          )}
        />
      )}

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center sm:p-6">
          <DialogPanel
            transition
            className={clsxMerge(
              'relative overflow-hidden bg-violet-100 dark:bg-slate-800',
              'w-full p-8 shadow-xl sm:my-12 sm:max-w-4xl sm:rounded-lg sm:px-8 sm:py-10',
              'transform transition-all data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in',
            )}
          >
            <button
              onClick={onClose}
              className="absolute right-0 top-0 p-4 text-foreground opacity-50 transition-opacity hover:opacity-100 sm:right-2 sm:top-2 sm:p-3"
            >
              <IoClose size={24} />
            </button>
            <DialogTitle
              as="h3"
              className="font-dmSerif text-4xl font-semibold text-indigo-950 sm:pb-6 sm:text-5xl dark:text-slate-100"
            >
              {title}
            </DialogTitle>
            <div className="text-foreground">{content}</div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              {buttons?.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
