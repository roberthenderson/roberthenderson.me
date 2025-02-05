'use client';

import { useScreenSize } from '@/app/hooks/useScreenSize';
import { useRouter } from 'next/navigation';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
} from 'react';
import { Drawer } from './Drawer';
import { Modal } from './Modal';

interface DialogProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  title?: ReactNode;
  className?: string;
  isInterceptingRoute?: boolean;
}

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  open,
  setOpen,
  onClose,
  isInterceptingRoute,
  children,
  ...rest
}) => {
  const router = useRouter();
  const isOpen = open ?? isInterceptingRoute;
  const { isMd } = useScreenSize();

  const handleClose = () => {
    if (isInterceptingRoute) {
      router.back();
    }
    setOpen?.(false);
    onClose?.();
  };

  return isMd ? (
    <Modal onClose={handleClose} open={isOpen} {...rest}>
      {children}
    </Modal>
  ) : (
    <Drawer onClose={handleClose} open={isOpen} {...rest}>
      {children}
    </Drawer>
  );
};
