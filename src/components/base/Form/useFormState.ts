import { useReducer } from 'react';

export type FormError = { message: string; name?: string };

export interface FormState {
  status: number | null;
  errors: FormError[];
  disabled: boolean;
}

type FormAction =
  | { type: 'setStatus'; payload: FormState['status'] }
  | { type: 'setErrors'; payload: FormState['errors'] }
  | { type: 'setDisabled'; payload: FormState['disabled'] };

const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'setStatus':
      return { ...state, status: action.payload };
    case 'setErrors':
      return { ...state, errors: action.payload };
    case 'setDisabled':
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
