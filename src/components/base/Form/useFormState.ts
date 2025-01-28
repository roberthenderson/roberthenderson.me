import { useReducer } from 'react';

export type FormError = { message: string; name?: string };

export interface FormState {
  status: number | null;
  errors: FormError[];
  disabled: boolean;
  loading: boolean;
}

export enum FormActionType {
  setStatus = 'setStatus',
  setErrors = 'setErrors',
  setDisabled = 'setDisabled',
  setLoading = 'setLoading',
}

type FormAction =
  | { type: FormActionType.setStatus; payload: FormState['status'] }
  | { type: FormActionType.setErrors; payload: FormState['errors'] }
  | { type: FormActionType.setDisabled; payload: FormState['disabled'] }
  | { type: FormActionType.setLoading; payload: FormState['loading'] };

const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case FormActionType.setStatus:
      return { ...state, status: action.payload };
    case FormActionType.setErrors:
      return { ...state, errors: action.payload };
    case FormActionType.setDisabled:
      return { ...state, disabled: action.payload };
    case FormActionType.setLoading:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const useFormState = () => {
  const [state, dispatch] = useReducer(reducer, {
    status: null,
    errors: [],
    disabled: false,
    loading: false,
  });

  const toggleLoading = (loading: boolean, disable?: boolean) => {
    dispatch({ type: FormActionType.setLoading, payload: loading });
    if (disable) {
      dispatch({ type: FormActionType.setDisabled, payload: disable });
    }
  };

  return { formState: state, dispatchFormState: dispatch, toggleLoading };
};
