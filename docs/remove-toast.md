---
id: removeToast
title: Remove toast programmatically 
sidebar_label: Remove toast programmatically
---

An id is returned each time you display a toast, use it to remove a given toast programmatically by calling `toast.dismiss(id)`

:::info Info
If you call `toast.dismiss` without argument, all the displayed toasts will be removed.
:::

```jsx
  import React, { Component } from 'react';
  import { toast } from 'react-toastify';

  class Example extends Component {
    toastId = null;

    notify = () => this.toastId = toast("Lorem ipsum dolor");

    dismiss = () =>  toast.dismiss(this.toastId);

    dismissAll = () =>  toast.dismiss();

    render(){
      return (
        <div>
          <button onClick={this.notify}>Notify</button>
          <button onClick={this.dismiss}>Dismiss</button>
          <button onClick={this.dismissAll}>Dismiss All</button>
        </div>
      );
    }
  }
```
