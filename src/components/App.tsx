import React, { useState, useRef } from "react";
import { RadioList } from "./RadioList";
import { Checkbox } from "./Checkbox";
import { ContainerCode } from "./ContainerCode";
import { ToastCode } from "./ToastCode";
import { ToastContainer, toast, Id } from "react-toastify";
import { Options } from "./Options";
import { Actions } from "./Actions";

import styled from "styled-components";

import { containerOptions, transitions } from "../utils";

function getDefaultState() {
  return {
    ...ToastContainer.defaultProps,
    transition: "bounce",
    type: "default",
    progress: undefined,
    disableAutoClose: false,
    limit: 0,
  };
}

export type PlaygroundState = ReturnType<typeof getDefaultState>;

export function App() {
  const [state, setState] = useState(() => getDefaultState());
  const toastId = useRef<Id>();

  const isDefaultProps = () => {
    return (
      state.position === "top-right" &&
      state.autoClose === 5000 &&
      !state.disableAutoClose &&
      !state.hideProgressBar &&
      !state.newestOnTop &&
      !state.rtl &&
      state.pauseOnFocusLoss &&
      state.pauseOnHover &&
      state.closeOnClick &&
      state.draggable
    );
  };

  const handleReset = () => {
    setState(getDefaultState());
  };

  const clearAll = () => toast.dismiss();

  const showToast = () => {
    toastId.current =
      state.type === "default"
        ? toast("🦄 Wow so easy !", { progress: state.progress })
        : toast[state.type]("🚀 Wow so easy !", { progress: state.progress });
  };

  const updateToast = () =>
    toast.update(toastId.current, { progress: state.progress });

  const handleAutoCloseDelay = (e) => {
    setState({
      ...state,
      autoClose: e.target.value > 0 ? parseInt(e.target.value, 10) : 1,
    });
  };

  const handleInput = (e) =>
    setState({
      ...state,
      [e.target.name]:
        e.target.name === "limit"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    });

  const toggleCheckbox = (e) =>
    setState({
      ...state,
      [e.target.name]: !state[e.target.name],
    });

  const renderFlags = () => {
    return containerOptions.map(({ id, label }) => (
      <li key={id}>
        <Checkbox
          id={id}
          label={label}
          onChange={toggleCheckbox}
          checked={state[id]}
        />
      </li>
    ));
  };

  return (
    <>
    <main>
      <section>
        <h3>Position</h3>
        <RadioList
          options={toast.POSITION}
          name="position"
          checked={state.position}
          onChange={handleInput}
        />
        <h3>Type</h3>
        <RadioList
          options={toast.TYPE}
          name="type"
          checked={state.type}
          onChange={handleInput}
        />
        
      </section>
      <section>
        <ContainerCode {...state} isDefaultProps={isDefaultProps()} />
        <ToastCode {...state} />
      </section>
      
    </main>
    <section>
    <Options
          {...state}
          handleAutoCloseDelay={handleAutoCloseDelay}
          handleInput={handleInput}
        />

        <ul>{renderFlags()}</ul>
    </section>
    <section>
        <Actions
          clearAll={clearAll}
          handleReset={handleReset}
          showToast={showToast}
          updateToast={updateToast}
        />
        <ToastContainer
          {...state}
          transition={transitions[state.transition]}
          autoClose={state.disableAutoClose ? false : state.autoClose}
        />
      </section>
    </>
  );
}
