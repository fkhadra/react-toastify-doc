import React from "react";

import { Radio, RadioContainer } from "./Radio";

interface RadioProps {
  options: Record<string, string>;
  name: string;
  onChange: (e: React.ChangeEvent) => void;
  checked: string | boolean;
}

export const RadioList: React.FC<RadioProps> = ({
  options,
  name,
  onChange,
  checked = false,
}) => (
  <RadioContainer>
    {Object.keys(options).map((k) => {
      const option = options[k];

      return (
        <Radio
          id={option}
          key={option}
          name={name}
          onChange={onChange}
          checked={option === checked}
          label={option}
          value={option}
        />
      );
    })}
  </RadioContainer>
);
