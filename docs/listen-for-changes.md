---
id: 'listen-for-changes'
title: 'Listen for changes'
sidebar_label: 'Listen for changes'
---

If you want to know when a toast is added, updated or removed, `toast` expose a `onChange` method. When called a function to unsubscribe is returned. The callback will receive a `ToastItem`. The item provides a bunch of useful properties `status`, `content`, `id`, `data`, etc...

```jsx
// import type { ToastItem } from "react-toastify";

interface ToastItem<Data = {}> {
    id: Id;
    content: React.ReactNode;
    theme?: Theme;
    type?: TypeOptions;
    isLoading?: boolean;
    containerId?: Id;
    data: Data;
    icon?: React.ReactNode | false;
    status: "added" | "removed" | "updated" 
}

const unsubscribe = toast.onChange((payload: ToastItem) => {
  switch (payload.status) {
    case "added":
      // new toast added
      break;
    case "updated":
      // toast updated
      break;
    case "removed":
      // toast has been removed
      break;
  }
});
unsubscribe();
```

For example, if I want to log something everytime there is a new error notification, with the new API it's trivial

```tsx
toast.onChange(payload => {
  if(payload.status === "added" && payload.type === toast.TYPE.ERROR) {
    logger.error({
      createdAt: Date.now(),
      content: payload.content,
      data: payload.data
    })
  }
})
```
