import React from "react";

import { PlaygroundState } from "./App";
import { transitions } from "../utils";

interface OptionsProps extends PlaygroundState {
  handleInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleAutoCloseDelay: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Options: React.FC<OptionsProps> = ({
  autoClose,
  disableAutoClose,
  handleAutoCloseDelay,
  handleInput,
  transition,
  limit,
  progress,
}) => {
  return (
    <div>
      <h3>Options</h3>
      <div>
        <label htmlFor="autoClose">
          Delay
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
        <br />
        <label htmlFor="progress">
          Progress
          <input
            type="number"
            name="progress"
            id="progress"
            value={progress}
            onChange={handleInput}
            placeholder="Value between 0 and 1"
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
    </div>
  );
};
