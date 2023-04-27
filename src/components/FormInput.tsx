// src/components/FormInput.tsx
import React, { useContext } from "react";
import { FormContext } from "./Form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

export const FormInput: React.FC<FormInputProps> = ({ name, ...inputProps }) => {
  const { values, handleChange } = useContext(FormContext);
  const value = name ? name.split(".").reduce((prev, curr) => prev && prev[curr], values) : '';

  return (
    <input {...inputProps} name={name} value={value} onChange={handleChange} />
  );
};
