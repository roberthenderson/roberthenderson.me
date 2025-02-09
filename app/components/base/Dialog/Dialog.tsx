'use client';

import { useAppContext } from '@/app/AppContextProvider';
import { useScreenSize } from '@/app/hooks/useScreenSize';
import { shouldLockPageScroll } from '@/app/utils/shouldLockPageScroll';
import { useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useEffect } from 'react';
import { Drawer } from './Drawer';
import { Modal } from './Modal';

export type DialogType = 'drawer' | 'modal';
interface DialogProps {
  onClose?: () => void;
}

export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  onClose,
  children,
}) => {
  const router = useRouter();
  const { dialogTypeOpen, setDialogTypeOpen } = useAppContext();
  const { isMd } = useScreenSize();

  useEffect(
    () => setDialogTypeOpen(isMd ? 'modal' : 'drawer'),
    [setDialogTypeOpen, isMd],
  );

  useEffect(() => {
    if (dialogTypeOpen) {
      shouldLockPageScroll(true);
    } else {
      shouldLockPageScroll(false);
    }
    return () => shouldLockPageScroll(false);
  }, [dialogTypeOpen]);

  const handleClose = () => {
    setDialogTypeOpen?.(null);
    if (dialogTypeOpen) {
      router.back();
    }
    shouldLockPageScroll(false);
    onClose?.();
  };

  return dialogTypeOpen === 'modal' ? (
    <Modal onClose={handleClose}>{children}</Modal>
  ) : (
    <Drawer onClose={handleClose}>{children}</Drawer>
  );
};
