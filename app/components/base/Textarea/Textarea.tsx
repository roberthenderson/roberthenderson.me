import { FIELD_CLASSNAME } from '@/app/constants/classNames';
import { useFieldFocus } from '@/app/hooks/useFieldFocus';
import { clsxMerge } from '@/app/utils/clsxMerge';
import {
  Field,
  Textarea as HeadlessTextarea,
  TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react';
import { FC } from 'react';
import { FieldLabel } from '../FieldLabel/FieldLabel';

export const Textarea: FC<HeadlessTextareaProps> = ({ className, ...rest }) => {
  return (
    <HeadlessTextarea
      className={clsxMerge(
        FIELD_CLASSNAME,
        'whitespace-pre-wrap py-2 leading-5',
        className,
      )}
      {...rest}
    />
  );
};

interface TextareaFieldProps extends Omit<HeadlessTextareaProps, 'className'> {
  label?: string;
  classNames?: {
    label?: string;
    field?: string;
    textarea?: string;
  };
}

export const TextareaField: FC<TextareaFieldProps> = ({
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
      <Textarea
        className={classNames?.textarea}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </Field>
  );
};
