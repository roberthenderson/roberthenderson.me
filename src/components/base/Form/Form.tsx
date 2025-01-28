import { clsxMerge } from '@/src/utils/clsxMerge';
import { Fieldset, Legend } from '@headlessui/react';
import { ChangeEvent, FC, ReactNode, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Button, ButtonProps } from '../Button/Button';
import { InputField } from '../Input/Input';
import { TextareaField } from '../Textarea/Textarea';
import { FormError, FormState } from './useFormState';

type FormFieldProp = { [key: string]: string | number };
interface FormField {
  name: string;
  type: 'text' | 'email' | 'textarea';
  label: string;
  placeholder?: string;
  props?: FormFieldProp | FormFieldProp[];
  onChange: (value: string) => void;
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
      <Fieldset className="mx-auto flex flex-col gap-4">
        {legend && <Legend className="pb-4">{legend}</Legend>}
        {fields.map((field, index) => {
          return <FormField key={index} field={field} state={state} />;
        })}
      </Fieldset>
      <Button
        variant={button.variant}
        onClick={button.onClick}
        className={clsxMerge('mb-1 mt-4', button.className)}
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
  const fieldError = state.errors.find((error) => error.name === field.name);
  const classNames = useMemo(() => {
    if (!fieldError) {
      return undefined;
    }
    return {
      label: 'text-red-400',
      input: 'outline-red-400 text-red-700',
    };
  }, [fieldError]);
  const handleChange = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      field.onChange(event.target.value);
    },
    500,
  );

  return (
    <div className="flex flex-col gap-1">
      {field.type === 'text' ? (
        <InputField
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          onChange={handleChange}
          classNames={classNames}
          {...field.props}
        />
      ) : field.type === 'email' ? (
        <InputField
          type="email"
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          onChange={handleChange}
          classNames={classNames}
          {...field.props}
        />
      ) : field.type === 'textarea' ? (
        <TextareaField
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          onChange={handleChange}
          classNames={classNames}
          {...field.props}
        />
      ) : null}
      {fieldError !== undefined && <ErrorMessage error={fieldError} />}
    </div>
  );
};

interface ErrorMessageProps {
  error: FormError;
  className?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error, className }) => (
  <span
    className={clsxMerge(
      'self-start text-sm font-500 text-red-400 dark:text-red-300',
      className,
    )}
  >
    {error?.message}
  </span>
);
