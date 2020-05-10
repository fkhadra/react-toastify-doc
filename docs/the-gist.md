---
id: the-gist-of-react-toastify
title: The gist of react-toastify
sidebar_label: The gist of react-toastify
---

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
