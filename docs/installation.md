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

## Video tutorial

Awesome video tutorial from [Codevolution](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw/featured).

<iframe width="100%" height="515" src="https://www.youtube.com/embed/nX_xDBR_gqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />