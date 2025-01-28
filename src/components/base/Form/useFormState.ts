import { useReducer } from 'react';

export type FormError = { message: string; name?: string };

export interface FormState {
  status: number | null;
  errors: FormError[];
  disabled: boolean;
}

export enum FormActionType {
  setStatus = 'setStatus',
  setErrors = 'setErrors',
  setDisabled = 'setDisabled',
}

type FormAction =
  | { type: FormActionType.setStatus; payload: FormState['status'] }
  | { type: FormActionType.setErrors; payload: FormState['errors'] }
  | { type: FormActionType.setDisabled; payload: FormState['disabled'] };

const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case FormActionType.setStatus:
      return { ...state, status: action.payload };
    case FormActionType.setErrors:
      return { ...state, errors: action.payload };
    case FormActionType.setDisabled:
      return { ...state, disabled: action.payload };
  }
};

export const useFormState = () => {
  const [state, dispatch] = useReducer(reducer, {
    status: null,
    errors: [],
    disabled: false,
  });

  return { formState: state, dispatchFormState: dispatch };
};
