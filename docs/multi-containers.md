---
id: 'multi-containers'
title: 'Multi containers'
sidebar_label: 'Multi containers'
---

## Multi containers support

To enable multiple containers support, you have to pass `enableMultiContainer` and specify a `containerId` and use it in
each toast, to do so add `containerId` to the toast's options object.


Note: adding `enableMultiContainer` prop to the `<ToastContainer/ >` will:
- Check each toast to verify if its `containerId` match the container `containerId` so it can be rendered.
- Ensure not to render any `toast` that has `containerId`.
- Render any toast if both the `toast` and `<ToastContainer/ >`  does not include `containerId` and `containerId` respectively.

A simple example to demonstrate multi toast container capability.

- Notify A button will show a toast on the bottom left.
- Notify B button will show a toast on the top right.
   
```js
  import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


 class App extends Component {
    notifyA = () => toast('Wow so easy !', {containerId: 'A'});
    notifyB = () => toast('Wow so easy !', {containerId: 'B'});

    render(){
      return (
        <div>
            <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
            <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
     
            <button onClick={this.notifyA}>Notify A !</button>
            <button onClick={this.notifyB}>Notify B !</button>          
        </div>
      );
    }
  }

```
