---
id: installation
title: Installation
sidebar_label: Installation
---

## Requirements

- [React](https://reactjs.org) version >= 16.8 or above 

## Installation

With npm:
```sh
npm install --save react-toastify
```

With yarn:
```
yarn add react-toastify
```

## Setup

- Add `import 'react-toastify/dist/ReactToastify.css';` on your main page or layout
- Add `<ToastContainer />` to your application tree

## The gist

```jsx
  import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

  function App(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
```

:::important Important
Remember to render the `ToastContainer` *once* in your application tree. 
If you can't figure out where to put it, rendering it in the application root would be the best bet.
:::
