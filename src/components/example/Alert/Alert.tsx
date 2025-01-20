import { clsxMerge } from '@/src/utils/clsxMerge';
import tailwindConfig from '@/tailwind.config';
import * as Headless from '@headlessui/react';
import type React from 'react';
import { FC, ReactNode, useCallback } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Text } from '../text';

export enum AlertSize {
  xs = 'sm:max-w-xs',
  sm = 'sm:max-w-sm',
  md = 'sm:max-w-md',
  lg = 'sm:max-w-lg',
  xl = 'sm:max-w-xl',
  '2xl' = 'sm:max-w-2xl',
  '3xl' = 'sm:max-w-3xl',
  '4xl' = 'sm:max-w-4xl',
  '5xl' = 'sm:max-w-5xl',
}

type AlertProps = {
  size?: AlertSize;
  showXIcon?: boolean;
  title: string;
  description?: string;
  buttons?: ReactNode[];
  className?: string;
} & Omit<Headless.DialogProps, 'as' | 'className'>;

export const Alert: FC<AlertProps> = ({
  size = AlertSize.md,
  showXIcon,
  title,
  description,
  buttons,
  className,
  ...props
}) => {
  const { onClose } = props;
  const handleClose = useCallback(() => onClose(true), [onClose]);

  return (
    <Headless.Dialog {...props}>
      <Headless.DialogBackdrop
        transition
        className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-teal-950/15 px-2 py-2 transition duration-100 focus:outline-0 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in sm:px-6 sm:py-8 lg:px-8 lg:py-16 dark:bg-teal-950/50"
      />

      <div className="fixed inset-0 w-screen overflow-y-auto pt-6 sm:pt-0">
        <div className="grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8 sm:grid-rows-[1fr_auto_3fr] sm:p-4">
          <Headless.DialogPanel
            transition
            className={clsxMerge(
              className,
              size,
              'row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-teal-950/10 sm:rounded-2xl sm:p-6 dark:bg-teal-900 dark:ring-white/10 forced-colors:outline',
              'transition duration-100 will-change-transform data-[closed]:data-[enter]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in',
            )}
          >
            {showXIcon && (
              <Headless.CloseButton
                onClick={handleClose}
                className={clsxMerge('absolute right-4 top-4', {
                  'top-1/2 transform -translate-y-1/2':
                    !description && (!buttons || buttons.length === 0),
                })}
              >
                <IoMdClose
                  color={tailwindConfig.theme.extend.colors.icon.base}
                />
              </Headless.CloseButton>
            )}
            <AlertTitle>{title}</AlertTitle>
            {description && <AlertDescription>{description}</AlertDescription>}
            {buttons && buttons.length > 0 && (
              <AlertActions>{...buttons}</AlertActions>
            )}
          </Headless.DialogPanel>
        </div>
      </div>
    </Headless.Dialog>
  );
};

type AlertTitleProps = { className?: string } & Omit<
  Headless.DialogTitleProps,
  'className'
>;

const AlertTitle: FC<AlertTitleProps> = ({ className, ...props }) => (
  <Headless.DialogTitle
    {...props}
    className={clsxMerge(
      'text-balance text-center text-base/6 font-semibold text-primary md:text-wrap md:text-left md:text-lg/6 dark:text-white',
      className,
    )}
  />
);

type AlertDescriptionProps = { className?: string } & Omit<
  Headless.DescriptionProps<typeof Text>,
  'as' | 'className'
>;

const AlertDescription: FC<AlertDescriptionProps> = ({
  className,
  ...props
}) => (
  <Headless.Description
    as={Text}
    {...props}
    className={clsxMerge(
      'mt-2 text-pretty text-center md:text-left',
      className,
    )}
  />
);

type AlertActionsProps = React.ComponentPropsWithoutRef<'div'>;

const AlertActions: FC<AlertActionsProps> = ({ className, ...props }) => (
  <div
    {...props}
    className={clsxMerge(
      'mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full md:mt-4 md:flex-row md:*:w-auto',
      className,
    )}
  />
);
