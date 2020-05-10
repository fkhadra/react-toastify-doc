---
id: collapse-toast
title: collapseToast
sidebar_label: collapseToast
---

| Parameter | Type                      | Required | Default | Description                                                              |
|-----------|---------------------------|----------|---------|--------------------------------------------------------------------------|
| node      | HTMLElement               | ✓        | -       | The html node that reference the toast. Accessible via `nodeRef.current` |
| done      | () => void                | ✓        | -       | Need to be called to remove the toast.                                   |
| duration  | number \| [number,number] | ✘        | 300     | The duration of the collapse transition                                  |

```js
import { collapseToast } from 'react-toastify';

collapse(node, done);
```

:::tip Tips
This function is useful when you build your own transition with the `Transition` component from react-transition-group.
:::