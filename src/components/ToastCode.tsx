import React from "react";
import { PlaygroundState } from "./App";

import { Code, Element } from "./Code.styles";

function getType(type: string) {
  switch (type) {
    case "default":
    default:
      return "toast";
    case "success":
      return "toast.success";
    case "error":
      return "toast.error";
    case "info":
      return "toast.info";
    case "warning":
      return "toast.warn";
    case "dark":
      return "toast.dark";
  }
}

export const ToastCode: React.FC<PlaygroundState> = ({
  position,
  disableAutoClose,
  autoClose,
  hideProgressBar,
  closeOnClick,
  pauseOnHover,
  type,
  draggable,
  progress,
}) => (
  <div>
    <h3>Toast Emitter</h3>
    <Code>
      <div>
        <Element kind={0}>{getType(type)}</Element>
        {`('🦄 Wow so easy!', { `}
      </div>
      <div>
        <Element kind={1}>position</Element>
        {`: "${position}"`},
      </div>
      <div>
        <Element kind={1}>autoClose</Element>
        {`: ${disableAutoClose ? false : autoClose}`},
      </div>
      <div>
        <Element kind={1}>hideProgressBar</Element>
        {`: ${hideProgressBar ? "true" : "false"}`},
      </div>
      <div>
        <Element kind={1}>closeOnClick</Element>
        {`: ${closeOnClick ? "true" : "false"}`},
      </div>
      <div>
        <Element kind={1}>pauseOnHover</Element>
        {`: ${pauseOnHover ? "true" : "false"}`},
      </div>
      <div>
        <Element kind={1}>draggable</Element>
        {`: ${draggable ? "true" : "false"}`},
      </div>
      {!Number.isNaN(progress) && (
        <div>
          <Element kind={1}>progress</Element>
          {`: ${progress}`},
        </div>
      )}
      <div>{`});`}</div>
    </Code>
  </div>
);
