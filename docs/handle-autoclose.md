---
id: autoClose
title: Handling autoClose
sidebar_label: Handling autoClose
---

The `autoClose` prop accept a duration in milliseconds or `false`.

## Change the default delay

```jsx
import { ToastContainer } from 'react-toastify';

// close toast after 8 seconds
const App = () => (
  <ToastContainer autoClose={8000} />
);
```

## Change the delay per toast for more control

```jsx
import { ToastContainer, toast } from 'react-toastify';

function Example() {
  const closeAfter = (duration) => toast(`Will close after ${duration}s`, { autoClose: duration });

  return (
    <div>
      <button onClick={() => closeAfter(15)}>Close after 15 seconds</button>
      <button onClick={() => closeAfter(7)}>Close after 7 seconds</button>
      <ToastContainer autoClose={8000} />
    </div>
  );
}
```

## Prevent the toast from closing by default

```jsx
<ToastContainer autoClose={false} />
```

## Prevent the toast from closing per toast

```jsx
toast("hello", {
  autoClose: false
})
```
