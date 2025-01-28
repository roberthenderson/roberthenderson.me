import { clsxMerge } from '@/src/utils/clsxMerge';
import { validateEmail } from '@/src/utils/validateEmail';
import { useCallback, useMemo, useReducer } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FormData } from '../base/Form/Form';
import { FormError, useFormState } from '../base/Form/useFormState';

interface ContactFormState {
  name: string;
  email: string;
  content: string;
}

type ContactFormAction =
  | { type: 'setName'; payload: string }
  | { type: 'setEmail'; payload: string }
  | { type: 'setContent'; payload: string };

const reducer = (state: ContactFormState, action: ContactFormAction) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setContent':
      return { ...state, content: action.payload };
  }
};

const EMAIL_INVALID_MESSAGE = 'Please enter a valid email address.';

export const useContactForm = () => {
  const { formState, dispatchFormState } = useFormState();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    content: '',
  });

  const handleChange = useCallback(
    (action: ContactFormAction) => {
      dispatchFormState({ type: 'setErrors', payload: [] });
      dispatchFormState({
        type: 'setDisabled',
        payload: false,
      });
      dispatch(action);
    },
    [dispatchFormState],
  );

  const onSend = useCallback(async () => {
    const errors: FormError[] = [];
    if (!state.name) {
      errors.push({ message: 'Please enter your name.', name: 'name' });
    }
    if (!state.email) {
      errors.push({ message: 'Please enter your email.', name: 'email' });
    }
    if (state.email.length > 0 && !validateEmail(state.email)) {
      errors.push({ message: EMAIL_INVALID_MESSAGE, name: 'email' });
    }
    if (!state.content) {
      errors.push({ message: 'Please enter some text.', name: 'content' });
    }
    if (errors.length > 0) {
      dispatchFormState({
        type: 'setErrors',
        payload: errors,
      });
      dispatchFormState({
        type: 'setDisabled',
        payload: true,
      });
      return;
    }
    const body = JSON.stringify({
      name: state.name.trim(),
      email: state.email.trim(),
      content: state.content,
    });
    const confirmationEmail = await fetch('/api/sendContactConfirmation', {
      method: 'POST',
      body,
    });
    const submissionEmail = await fetch('/api/sendContactSubmission', {
      method: 'POST',
      body,
    });
    if (confirmationEmail.status === 200 && submissionEmail.status === 200) {
      dispatchFormState({ type: 'setStatus', payload: 200 });
      console.log('both successful');
    } else {
      console.error('there was an error sending', {
        confirmationEmail,
        submissionEmail,
      });
    }
  }, [state, dispatchFormState]);

  const contactFormData: FormData = useMemo(
    () => ({
      legend:
        "Please send information on your job opening or project. I'll respond promptly, thank you.",
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          placeholder: "What's your name?",
          onChange: (payload: string) =>
            handleChange({ type: 'setName', payload }),
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          placeholder: "What's your email?",
          onChange: (payload: string) => {
            if (payload && !validateEmail(payload)) {
              dispatchFormState({
                type: 'setErrors',
                payload: [
                  {
                    message: EMAIL_INVALID_MESSAGE,
                    name: 'email',
                  },
                ],
              });
              return;
            }
            handleChange({ type: 'setEmail', payload });
          },
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          props: {
            rows: 4,
          },
          onChange: (payload: string) =>
            handleChange({ type: 'setContent', payload }),
        },
      ],
      button: {
        label: (
          <div className="flex items-center gap-2">
            <span>Send</span>
            <BiMailSend
              size={18}
              className={clsxMerge(
                'text-slate-400 transition-colors',
                !formState.disabled && 'group-hover:text-slate-300',
              )}
            />
          </div>
        ),
        variant: 'secondary',
        className: 'md:pl-10 md:pr-9 group',
        onClick: onSend,
      },
    }),
    [onSend, handleChange, dispatchFormState, formState],
  );

  return { formState, contactFormData };
};
