---
id: 'define-callback'
title: 'Define callback'
sidebar_label: 'Define callback'
---

You can define two callbacks. Their names are self-explanatory:

- `onOpen`
- `onClose`

```jsx
  import React from 'react';
  import { toast } from 'react-toastify';

  class Hook extends Component {
    notify = () => toast(<MyComponent foo="bar" />, {
      onOpen: ({ foo }) => window.alert('I counted to infinity once then..'),
      onClose: ({ foo }) => window.alert('I counted to infinity twice')
    });

    render(){
      return <button onClick={this.notify}>Notify</button>;
    }
  }
```