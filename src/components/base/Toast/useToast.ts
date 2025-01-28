import { useState } from 'react';
import { ToastProps } from './Toast';

type UseToastProps = Omit<ToastProps, 'open'>;

export const useToast = (props?: UseToastProps) => {
  const [toast, setToast] = useState<ToastProps | undefined>({
    open: false,
    ...props,
  });
  const openToast = (props: UseToastProps) =>
    setToast((prev) => ({ ...prev, open: true, ...props }));
  const closeToast = () => setToast((prev) => ({ ...prev, open: false }));

  return { toast, openToast, closeToast };
};
