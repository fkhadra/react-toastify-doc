import React, { useState, useRef, useEffect } from "react";
import { RadioList } from "./RadioList";
import { ContainerCode } from "./ContainerCode";
import { ToastCode } from "./ToastCode";
import { ToastContainer, toast, Id } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { Options } from "./Options";
import { Actions } from "./Actions";
import styled from "styled-components";

import { transitions } from "../utils";

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

const FlexSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: "row";
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Main = styled.main`
  margin-top: 1rem;
`;

const theme = { light: "light", dark: "dark", colored: "colored" };
let resolvePromise = true;

export function App() {
  const [state, setState] = useState(() => getDefaultState());
  const toastId = useRef<Id>();

  useEffect(() => {
    injectStyle();
  }, []);

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
      state.draggable &&
      state.theme === "light" &&
      state.limit === 0
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
        : toast[state.type]("Wow so easy !", { progress: state.progress });
  };

  const showPromise = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(resolvePromise ? resolve : reject, 3000);
        resolvePromise = !resolvePromise;
      }),
      {
        error: "Promise rejected",
        success: "Promise resolved",
        pending: "Promise is pending...",
      }
    );
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

  return (
    <Main>
      <FlexSection>
        <ContainerCode {...state} isDefaultProps={isDefaultProps()} />
        <ToastCode {...state} />
      </FlexSection>
      <div>
        <h3>Position</h3>
        <RadioList
          options={toast.POSITION}
          name="position"
          checked={state.position}
          onChange={handleInput}
        />
      </div>
      <div>
        <h3>Type</h3>
        <RadioList
          options={toast.TYPE}
          name="type"
          checked={state.type}
          onChange={handleInput}
        />
      </div>
      <div>
        <h3>Theme</h3>
        <RadioList
          options={theme}
          name="theme"
          checked={state.theme}
          onChange={handleInput}
        />
      </div>
      <Options
        {...state}
        handleAutoCloseDelay={handleAutoCloseDelay}
        handleInput={handleInput}
        handleCheckbox={toggleCheckbox}
      />
      <Actions
        clearAll={clearAll}
        handleReset={handleReset}
        showToast={showToast}
        showPromise={showPromise}
        updateToast={updateToast}
      />
      <ToastContainer
        {...state}
        transition={transitions[state.transition]}
        autoClose={state.disableAutoClose ? false : state.autoClose}
      />
    </Main>
  );
}
