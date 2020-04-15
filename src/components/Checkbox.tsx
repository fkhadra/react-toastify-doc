import React from "react";

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  id,
  checked,
}) => (
  <label htmlFor={id}>
    <input
      id={id}
      type="checkbox"
      name={id}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);
