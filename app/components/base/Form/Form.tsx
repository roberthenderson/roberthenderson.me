import { Fieldset, Legend } from '@headlessui/react';
import { type ChangeEvent, type FC, type ReactNode, useMemo } from 'react';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { Button, type ButtonProps } from '../Button/Button';
import { InputField } from '../Input/Input';
import { TextareaField } from '../Textarea/Textarea';
import type { FormState } from './useFormState';

interface FormField {
  type: 'text' | 'email' | 'textarea';
  label: string;
  props: {
    value: string;
    name: string;
    placeholder?: string;
    onChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    [key: string]: unknown;
  };
}

interface FormButton {
  label: ReactNode;
  variant?: ButtonProps['variant'];
  className?: string;
  onClick: () => void;
}

export interface FormData {
  legend?: string;
  fields: FormField[];
  button: FormButton;
}

interface FormProps {
  data: FormData;
  state: FormState;
}

export const Form: FC<FormProps> = ({ data, state }) => {
  const { legend, button, fields } = data;

  return (
    <div className="flex flex-col items-end">
      <Fieldset className="mx-auto flex flex-col gap-6">
        {legend && <Legend>{legend}</Legend>}
        {fields.map((field) => {
          return (
            <FormField key={field.props.name} field={field} state={state} />
          );
        })}
      </Fieldset>
      <Button
        variant={button.variant}
        onClick={button.onClick}
        className={clsxMerge('mt-4 mb-1', button.className)}
        disabled={state.disabled}
      >
        {button.label}
      </Button>
    </div>
  );
};

const FormField: FC<{ field: FormField; state: FormState }> = ({
  field,
  state,
}) => {
  const fieldError = state.errors.find(
    (error) => error.name === field.props.name,
  );
  const classNames = useMemo(() => {
    if (!fieldError) {
      return undefined;
    }
    return {
      label: 'text-red-400',
      input: 'outline-red-400 text-red-700',
    };
  }, [fieldError]);

  return (
    <div className="flex flex-col gap-1">
      {field.type === 'text' ? (
        <InputField
          label={field.label}
          classNames={classNames}
          {...field.props}
        />
      ) : field.type === 'email' ? (
        <InputField
          type="email"
          label={field.label}
          classNames={classNames}
          {...field.props}
        />
      ) : field.type === 'textarea' ? (
        <TextareaField
          label={field.label}
          classNames={classNames}
          {...field.props}
        />
      ) : null}
      {fieldError !== undefined && <ErrorMessage error={fieldError} />}
    </div>
  );
};

interface ErrorMessageProps {
  error: Error;
  className?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error, className }) => (
  <span
    className={clsxMerge(
      'self-start font-500 text-red-400 text-sm dark:text-red-300',
      className,
    )}
  >
    {error?.message}
  </span>
);
