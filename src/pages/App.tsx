import React, { useState } from 'react';

import {
  ToastContainer,
  toast,
  Bounce,
  Slide,
  Flip,
  Zoom
} from 'react-toastify';

const transitions = {
  bounce: Bounce,
  slide: Slide,
  zoom: Zoom,
  flip: Flip
};

function getDefaultState() {
  return {
    ...ToastContainer.defaultProps,
    transition: 'bounce',
    type: 'default',
    progress: '',
    disableAutoClose: false,
    limit: 0
  };
}
// toast.configure();

window.toast = toast;

export function App() {
  const [state, setState] = useState(() => getDefaultState());

  return (
    <main>
      <ToastContainer 
        {...state}
        transition={transitions[state.transition]}
        autoClose={state.disableAutoClose ? false : state.autoClose}
      />
      FOOBAR
    </main>
  );
}
