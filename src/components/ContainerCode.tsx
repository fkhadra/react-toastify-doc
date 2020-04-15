import React from "react";

import { PlaygroundState } from "./App";

import { Code, Element } from "./Code.styles";

function getProp<L, R>(prop: L, value: R) {
  return value ? (
    <div>
      <Element kind={1}>{prop}</Element>
    </div>
  ) : (
    <div>
      <Element kind={1}>{prop}</Element>
      {`={false}`}
    </div>
  );
}

interface ContainerCodeProps extends PlaygroundState {
  isDefaultProps: boolean;
}

export const ContainerCode: React.FC<ContainerCodeProps> = ({
  position,
  disableAutoClose,
  autoClose,
  hideProgressBar,
  newestOnTop,
  closeOnClick,
  pauseOnHover,
  rtl,
  pauseOnFocusLoss,
  isDefaultProps,
  draggable,
}) => (
  <div>
    <h3>Toast Container</h3>
    <Code>
      <div>
        <span>{`<`}</span>
        <Element kind={0}>ToastContainer</Element>
      </div>
      <div>
        <Element kind={1}>position</Element>
        {`="${position}"`}
      </div>
      <div>
        <Element kind={1}>autoClose</Element>
        {`={${disableAutoClose ? false : autoClose}}`}
      </div>
      {!disableAutoClose ? getProp("hideProgressBar", hideProgressBar) : ""}
      {getProp("newestOnTop", newestOnTop)}
      {getProp("closeOnClick", closeOnClick)}
      {getProp("rtl", rtl)}
      {getProp("pauseOnFocusLoss", pauseOnFocusLoss)}
      {getProp("draggable", draggable)}
      {!disableAutoClose ? getProp("pauseOnHover", pauseOnHover) : ""}
      <div>
        <span>{`/>`}</span>
      </div>
      {isDefaultProps && (
        <div>
          <div>{`{/* Same as */}`}</div>
          <span>{`<`}</span>
          <Element kind={0}>ToastContainer</Element>
          <span> /></span>
        </div>
      )}
    </Code>
  </div>
);
