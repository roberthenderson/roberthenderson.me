import { Fieldset, Legend } from '@headlessui/react';
import { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { InputField } from '../Input/Input';
import { TextareaField } from '../Textarea/Textarea';

type FormFieldProp = { [key: string]: string | number };
interface FormField {
  name: string;
  type: 'text' | 'email' | 'textarea';
  label: string;
  placeholder?: string;
  props?: FormFieldProp | FormFieldProp[];
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
}

export const Form: FC<FormProps> = ({ data }) => {
  const { legend, button, fields } = data;

  return (
    <div className="flex flex-col items-end gap-3">
      <Fieldset className="mx-auto flex flex-col gap-4">
        {legend && <Legend className="pb-4">{legend}</Legend>}
        {fields.map((field, index) =>
          field.type === 'text' ? (
            <InputField
              key={index}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              {...field.props}
            />
          ) : field.type === 'email' ? (
            <InputField
              key={index}
              type="email"
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              {...field.props}
            />
          ) : field.type === 'textarea' ? (
            <TextareaField
              key={index}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              {...field.props}
            />
          ) : null,
        )}
      </Fieldset>
      <Button
        variant={button.variant}
        onClick={button.onClick}
        className={button.className}
      >
        {button.label}
      </Button>
    </div>
  );
};
