import React from "react";
import styled from "styled-components";

import { PlaygroundState } from "./App";
import { transitions, containerOptions } from "../utils";
import { Checkbox } from "./Checkbox";

interface OptionsProps extends PlaygroundState {
  handleInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleAutoCloseDelay: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  & ul {
    list-style: none;
    padding: 0;
  }
`;

export const Options: React.FC<OptionsProps> = ({
  autoClose,
  disableAutoClose,
  handleAutoCloseDelay,
  handleInput,
  transition,
  limit,
  progress,
  handleCheckbox,
  ...rest
}) => {
  const options = {
    left: [],
    right: [],
  };

  containerOptions.forEach(({ id, label }, index) => {
    index % 2 === 1
      ? options.left.push(
          <li key={id}>
            <Checkbox
              id={id}
              label={label}
              onChange={handleCheckbox}
              checked={rest[id]}
            />
          </li>
        )
      : options.right.push(
          <li key={id}>
            <Checkbox
              id={id}
              label={label}
              onChange={handleCheckbox}
              checked={rest[id]}
            />
          </li>
        );
  });

  return (
    <Container>
      <h3>Options</h3>
      <div>
        <label htmlFor="autoClose">
          Autoclose Delay
          <input
            type="number"
            name="autoClose"
            id="autoClose"
            value={autoClose as number}
            onChange={handleAutoCloseDelay}
            disabled={disableAutoClose}
          />
          ms
        </label>
        <label htmlFor="transition">
          Transition
          <select
            name="transition"
            id="transition"
            onChange={handleInput}
            value={transition}
          >
            {Object.keys(transitions).map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="progress">
          Progress
          <input
            type="number"
            name="progress"
            id="progress"
            value={progress}
            onChange={handleInput}
            placeholder="0..1"
            min="0"
            max="1"
          />
        </label>
        <label htmlFor="limit">
          Limit
          <input
            type="number"
            name="limit"
            id="limit"
            value={limit}
            onChange={handleInput}
          />
        </label>
      </div>
      <OptionsContainer>
        <ul>{options.left}</ul>
        <ul>{options.right}</ul>
      </OptionsContainer>
    </Container>
  );
};
