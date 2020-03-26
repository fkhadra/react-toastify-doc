---
id: toastContainer
title: One component to rule them all
sidebar_label: One component to rule them all
---

## One ToastContainer to render them

The toasts inherit ToastContainer's props. **Props defined on toast supersede ToastContainer's props.**

```jsx
  import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

  class App extends Component {
    notify = () => toast("Wow so easy !");

    render(){
      return (
        <div>
          <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
        </div>
      );
    }
  }
```

:::important Important
Remember to render the `ToastContainer` *once* in your application tree. 
If you can't figure out where to put it, rendering it in the application root would be the best bet.

:::

## What if I told you that the ToastContainer is optional

```js
  import React, { Component } from 'react';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  // Call it once in your app. At the root of your app is the best place
  toast.configure()

  const App = () => {
    const notify = () => toast("Wow so easy !");
    
    return <button onClick={notify}>Notify !</button>;
  }
```

The library will mount a `ToastContainer` for you if none is mounted. 


## Configure the ToastContainer when it is mounted on demand

The configure function accepts the same props as the ToastContainer. As soon as the container is
rendered, the call to configure will have no effect.

```js
toast.configure({
  autoClose: 8000,
  draggable: false,
  //etc you get the idea
});
```


## Multi container support

To enable multiple container support, you have to pass `enableMultiContainer` and specify a `containerId` and use it in
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
