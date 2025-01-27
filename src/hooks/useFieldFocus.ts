import { useState } from 'react';

export const useFieldFocus = () => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return { focused, handleFocus, handleBlur };
};
