import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formValues, setFormValues] = useState(initialForm);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialForm);
  };

  return {
    ...formValues,
    formValues,
    onInputChange,
    resetForm,
  };
};
