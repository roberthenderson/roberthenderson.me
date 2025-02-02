import {
  Button as HeadlessButton,
  ButtonProps as HeadlessButtonProps,
} from '@headlessui/react';
import { FC } from 'react';
import { getButtonStyles } from './getButtonStyles';

export interface ButtonProps extends HeadlessButtonProps {
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  disabled,
  ...rest
}) => {
  return (
    <HeadlessButton
      className={getButtonStyles({ variant, disabled, className })}
      {...rest}
    >
      {children}
    </HeadlessButton>
  );
};
