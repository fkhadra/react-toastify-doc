---
id: 'timer'
title: 'Play or pause the notification timer programmatically'
sidebar_label: 'Play or pause the notification timer programmatically'
---

By default, when you hover the notification or the window loses focus, the timer to dismiss the notification is paused. There are many more cases where you might want to pause the timer as well. 

For example, imagine you would like to toggle the notification timer based on the document visibility. It was not possible to do it before, but, with the new API, it's quite trivial.

```tsx
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    toast.play({ id: "123" });
  } else {
    toast.pause({ id: "123" });
  }
});
```

More usages:

- Play/pause all toasts
```tsx
toast.play()
toast.pause()
```

- Play/pause all toasts for a given container
```tsx
toast.play({ containerId: "123" })
toast.pause({ containerId: "123" })
```

- Play/pause toast that has a given id regardless the container
```tsx
toast.play({ id: "123" })
toast.pause({ id: "123" })
```

- Play/pause toast that has a given id for a specific container
```tsx
toast.play({ id: "123", containerId: "12" })
toast.pause({ id: "123", containerId: "12" })
```
