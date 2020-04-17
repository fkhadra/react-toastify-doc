import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent) => void;
}

const Label = styled.label`
  cursor: pointer;
`

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  id,
  checked,
}) => (
  <Label htmlFor={id}>
    <input
      id={id}
      type="checkbox"
      name={id}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </Label>
);
