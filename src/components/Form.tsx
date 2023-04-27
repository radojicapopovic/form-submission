import React, { createContext, useState, FormEvent } from "react";

interface FormContextProps {
  values: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);

interface FormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({
  initialValues,
  onSubmit,
  children,
}) => {
  const [values, setValues] = useState(initialValues || {});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues: any) => {
      const newValue = { ...prevValues };
      name.split(".").reduce((prev, curr, idx, arr) => {
        if (idx === arr.length - 1) {
          prev[curr] = value;
        } else if (!prev[curr]) {
          prev[curr] = {};
        }
        return prev[curr];
      }, newValue);
      return newValue;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <FormContext.Provider value={{ values, handleChange }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};
