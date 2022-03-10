---
id: 'listen-for-changes'
title: 'Listen for changes'
sidebar_label: 'Listen for changes'
---

If you want to know when a toast is added or removed, `toast` expose a `onChange` method. When called a function to unsubscribe is returned:

```jsx
const unsubscribe = toast.onChange(({toasts, added, removed}) => {
  console.log(toasts) 
  console.log(added) 
  console.log(removed) 
});

unsubscribe();
```

| Parameter             | Description                                                  |
|-----------------------|--------------------------------------------------------------|
| `toasts: ToastItem[]` | contains the list of toasts                                  |
| `added?: ToastItem`   | when not undefined, contains the toast that has been added   |
| `removed?: ToastItem` | when not undefined, contains the toast that has been removed |

```tsx
export interface ToastItem<Data = {}> {
    id: Id;
    content: React.ReactNode;
    theme?: Theme;
    type?: TypeOptions;
    isLoading?: boolean;
    containerId?: Id;
    data: Data;
    icon?: React.ReactNode | false;
}

import type { ToastItem } from "react-toastify";
```

For example, if you only care about removed toast.

```jsx
const unsubscribe = toast.onChange(({removed}) => {
  if(removed) {
    // do something with the removed toast
    console.log(removed.id)
    console.log(removed.containerId)
    //etc... 
  } 
});
```
