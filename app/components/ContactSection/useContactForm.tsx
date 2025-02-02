'use client';

import { clsxMerge } from '@/app/utils/clsxMerge';
import { formatGAErrorString } from '@/app/utils/formatGAErrorString';
import { validateEmail } from '@/app/utils/validateEmail';
import { sendGAEvent } from '@next/third-parties/google';
import { useCallback, useMemo, useReducer } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { useDebouncedCallback } from 'use-debounce';
import { FormData } from '../base/Form/Form';
import { FormActionType, useFormState } from '../base/Form/useFormState';
import { useToast } from '../base/Toast/useToast';

interface ContactFormState {
  name: string;
  email: string;
  content: string;
}

enum ContactFormActionType {
  setName = 'setName',
  setEmail = 'setEmail',
  setContent = 'setContent',
}

type ContactFormAction =
  | { type: ContactFormActionType.setName; payload: string }
  | { type: ContactFormActionType.setEmail; payload: string }
  | { type: ContactFormActionType.setContent; payload: string };

const reducer = (state: ContactFormState, action: ContactFormAction) => {
  switch (action.type) {
    case ContactFormActionType.setName:
      return { ...state, name: action.payload };
    case ContactFormActionType.setEmail:
      return { ...state, email: action.payload };
    case ContactFormActionType.setContent:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

const initialState: ContactFormState = {
  name: '',
  email: '',
  content: '',
};

const EMAIL_INVALID_MESSAGE = 'Please enter a valid email address.';

export const useContactForm = () => {
  const { formState, dispatchFormState, toggleLoading } = useFormState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const resetState = () => {
    const types = Object.values(ContactFormActionType);
    types.forEach((type) => dispatch({ type, payload: '' }));
  };
  const { toast, openToast, closeToast } = useToast();

  const handleError = useCallback(
    (error: Error) => {
      openToast({
        type: 'error',
        message: error.message,
        onClose: closeToast,
      });

      toggleLoading(false);
    },
    [openToast, closeToast, toggleLoading],
  );

  const onSend = useCallback(async () => {
    sendGAEvent('event', 'send_button_click');
    const errors: Error[] = [];
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
      sendGAEvent(
        'event',
        `send_button_click_errors__${errors.flatMap((error) => formatGAErrorString(error))}`,
      );
      dispatchFormState({
        type: FormActionType.setErrors,
        payload: errors,
      });
      dispatchFormState({
        type: FormActionType.setDisabled,
        payload: true,
      });
      return;
    }
    const body = JSON.stringify({
      name: state.name.trim(),
      email: state.email.trim(),
      content: state.content,
    });

    toggleLoading(true);
    try {
      const confirmationEmail = await fetch('/api/sendContactConfirmation', {
        method: 'POST',
        body,
      });
      if (confirmationEmail.status === 400) {
        const { message } = await confirmationEmail.json();
        throw Error(message);
      }
    } catch (error) {
      if (error instanceof Error) {
        handleError(error);
        sendGAEvent(
          'event',
          `sendContactConfirmation_api_error__${formatGAErrorString(error)}`,
        );
      }
      return;
    }

    try {
      const submissionEmail = await fetch('/api/sendContactSubmission', {
        method: 'POST',
        body,
      });
      if (submissionEmail.status === 400) {
        const { message } = await submissionEmail.json();
        throw Error(message);
      }
    } catch (error) {
      if (error instanceof Error) {
        handleError(error);
        sendGAEvent(
          'event',
          `sendContactSubmission_api_error__${formatGAErrorString(error)}`,
        );
      }
      return;
    }

    dispatchFormState({ type: FormActionType.setStatus, payload: 200 });
    openToast({
      type: 'success',
      message: 'Message sent successfully. Thank you!',
      onClose: closeToast,
      closeAfterMs: 5000,
    });
    toggleLoading(false);
    resetState();
    sendGAEvent('event', 'send_email_success');
  }, [
    state,
    dispatchFormState,
    closeToast,
    openToast,
    toggleLoading,
    handleError,
  ]);

  const handleValidateEmail = useDebouncedCallback((email: string) => {
    if (!validateEmail(email)) {
      dispatchFormState({
        type: FormActionType.setErrors,
        payload: [
          {
            message: EMAIL_INVALID_MESSAGE,
            name: 'email',
          },
        ],
      });
    }
  }, 1000);

  const handleChange = useCallback(
    (action: ContactFormAction) => {
      dispatchFormState({ type: FormActionType.setErrors, payload: [] });
      dispatchFormState({
        type: FormActionType.setDisabled,
        payload: false,
      });
      dispatch(action);
    },
    [dispatchFormState],
  );

  const contactFormData: FormData = useMemo(
    () => ({
      legend:
        "Please send information on your job opening or project. I'll respond promptly, thank you.",
      fields: [
        {
          type: 'text',
          label: 'Name',
          props: {
            name: 'name',
            value: state.name,
            placeholder: "What's your name?",
            onChange: (event) =>
              handleChange({
                type: ContactFormActionType.setName,
                payload: event.target.value,
              }),
          },
        },
        {
          type: 'email',
          label: 'Email',
          props: {
            name: 'email',
            value: state.email,
            placeholder: "What's your email?",
            onChange: (event) => {
              const payload = event.target.value;
              handleChange({ type: ContactFormActionType.setEmail, payload });
              handleValidateEmail(payload);
            },
          },
        },
        {
          type: 'textarea',
          label: 'Content',
          props: {
            name: 'content',
            value: state.content,
            onChange: (event) =>
              handleChange({
                type: ContactFormActionType.setContent,
                payload: event.target.value,
              }),
            rows: 4,
          },
        },
      ],
      button: {
        label: (
          <div className="flex items-center gap-2">
            <span>Send</span>
            <div
              className={clsxMerge(
                'text-slate-300 transition-colors',
                !formState.disabled && 'group-hover:text-slate-200',
              )}
            >
              {formState.loading ? (
                <CgSpinner size={18} className="animate-spin" />
              ) : (
                <BiMailSend size={18} />
              )}
            </div>
          </div>
        ),
        variant: 'secondary',
        className: 'md:pl-10 md:pr-9 group',
        onClick: onSend,
      },
    }),
    [state, formState, handleChange, handleValidateEmail, onSend],
  );

  return { formState, contactFormData, toast };
};
