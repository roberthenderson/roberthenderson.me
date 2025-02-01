'use client';

import { FIELD_CLASSNAME } from '@/app/constants';
import { useFieldFocus } from '@/app/hooks/useFieldFocus';
import { clsxMerge } from '@/app/utils/clsxMerge';
import {
  Field,
  Input as HeadlessInput,
  InputProps as HeadlessInputProps,
} from '@headlessui/react';
import { FC } from 'react';
import { FieldLabel } from '../FieldLabel/FieldLabel';

export const Input: FC<HeadlessInputProps> = ({ className, type, ...rest }) => {
  return (
    <HeadlessInput
      className={clsxMerge(FIELD_CLASSNAME, className)}
      type={type ?? 'text'}
      {...rest}
    />
  );
};

interface InputFieldProps extends Omit<HeadlessInputProps, 'className'> {
  label?: string;
  classNames?: {
    label?: string;
    field?: string;
    input?: string;
  };
}

export const InputField: FC<InputFieldProps> = ({
  label,
  classNames,
  ...rest
}) => {
  const { focused, handleFocus, handleBlur } = useFieldFocus();

  return (
    <Field className={clsxMerge('text-left', classNames?.field)}>
      {label && (
        <FieldLabel focused={focused} className={classNames?.label}>
          {label}
        </FieldLabel>
      )}
      <Input
        className={classNames?.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </Field>
  );
};
