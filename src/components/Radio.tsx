import React from 'react';
import styled from 'styled-components';

const RadioInput = styled.input<{ color: string }>`
  position: absolute;
  opacity: 0;
  z-index: -1;
  & + label::before {
    border-radius: 1em;
  }
  &:checked + label {
    padding-left: 1em;
    color: #fff;
  }
  &:checked + label:before {
    top: 0;
    width: 100%;
    height: 2em;
    background: ${props => props.color};
  }
`;

const Label = styled.label<{ color: string }>`
  font-weight: 300;
  .group {
    display: flex;
    align-items: center;
    margin-bottom: 2em;
  }

  position: relative;
  margin-right: 1em;
  padding-left: 2em;
  padding-right: 1em;
  line-height: 2;
  cursor: pointer;
  &:before {
    box-sizing: border-box;
    content: ' ';
    position: absolute;
    top: 0.3em;
    left: 0;
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 2px solid ${props => props.color};
    border-radius: 0.25em;
    z-index: -1;
  }

  &,
  &::before {
    transition: 0.25s all ease;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

export interface RadioProps {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value: string;
  label?: string;
  color?: string;
}

export const Radio: React.FC<RadioProps> = props => {
  const color = props.color || '#e91e63';
  return (
    <>
      <RadioInput type="radio" {...props} color={color} />
      <Label htmlFor={props.id} color={color}>
        {props.label || props.value}
      </Label>
    </>
  );
};
