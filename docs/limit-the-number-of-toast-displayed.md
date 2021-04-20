---
id: 'limit-the-number-of-toast-displayed'
title: 'Limit the number of toast displayed'
sidebar_label: 'Limit the number of toast displayed'
---

Notifications are useful to get the attention of the user. But displaying too many of them can also be counterproductive.
The `ToastContainer` expose a `limit` prop to meet your needs.

:::tip What happens to the notifications that are not displayed ? 🧐
  They are added to a queue. They will be displayed as soon as a slot is free.
:::

```jsx
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// Display a maximum of 3 notifications at the same time
function App(){
  const notify = () => {
    toast("lorem ipsum");
  }

  return (
    <div>
      <button onClick={notify}>Click on me a lot!</button>
      <ToastContainer limit={3}>
    </div>
  )
}
```

## How to clear the waiting queue

You may need to clear the waiting queue in some cases. This is really easy to do.

```jsx
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App(){

  const clearWaitingQueue = () => {
    // Easy, right 😎
    toast.clearWaitingQueue();
  }


  const notify = () => {
    toast("lorem ipsum");
  }

  return (
    <div>
      <button onClick={notify}>Click on me a lot!</button>
      <ToastContainer limit={3}>
    </div>
  )
}
```

You can also decide which queue to empty while working with multiple container.

```jsx
toast.clearWaitingQueue({ containerId: "an Id" });
```


