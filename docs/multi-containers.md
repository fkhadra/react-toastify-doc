---
id: 'multi-containers'
title: 'Multi containers'
sidebar_label: 'Multi containers'
---

:::warning
Think twice before reaching out to multiple containers. I personally advise against it, it leads to brittle code, and it's very error-prone.
:::

To enable multiple containers support, you have to specify a `containerId` and use it in
each toast, to do so add `containerId` to the toast's options object.

A simple example to demonstrate multi toast container capability.

- Notify A button will show a toast on the bottom left.
- Notify B button will show a toast on the top right.
   
```js
 import { ToastContainer, toast } from 'react-toastify';

 function App() {
    const notifyA = () => toast('Wow so easy !', {containerId: 'A'});
    const notifyB = () => toast('Wow so easy !', {containerId: 'B'});

    return (
      <div>
          <ToastContainer containerId="A" position="bottom-left" />
          <ToastContainer containerId="B" position="top-right" />
    
          <button onClick={notifyA}>Notify A !</button>
          <button onClick={notifyB}>Notify B !</button>          
      </div>
    );
  }
```

The same can be achieved with a single container.

```tsx
 import { ToastContainer, toast } from 'react-toastify';

 function App() {
    const notifyA = () => toast('Wow so easy !', {position: "bottom-left"});
    const notifyB = () => toast('Wow so easy !', {position: "top-right"});

    return (
      <div>
          <ToastContainer />
          <button onClick={notifyA}>Notify bottom-left !</button>
          <button onClick={notifyB}>Notify top-right !</button>          
      </div>
    );
  }
```
