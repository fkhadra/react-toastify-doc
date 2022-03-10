---
id: 'migration-v9'
title: 'Migrate to v9'
sidebar_label: '🚀 Migrate to v9'
---

## What is new in v9

Say hello to addons! What are addons? So, addons are like DLCs in video games but for react-toastify 😆. More seriously, you can think of it as utilities built around react-toastify. For example, custom theme, hooks, components etc...

The first addon that I would like to introduce is the `useNotificationCenter` headless hook! As the name suggest, it let you build your notification center on top of react-toastify. See for yourself 👇

<iframe width="100%" height="415" src="https://youtu.be/Y59-U9NaIYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

Another example using MUI.

<iframe src="https://codesandbox.io/embed/mui-notification-center-zvxod3?fontsize=14&hidenavigation=1&theme=dark"
     style={
       {
            width:"100%",
            height: "700px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }}
     title="mui-notification-center"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />

:::tip
Addons only impact your bundle size if you use them 🎉!
:::


## Breaking changes

There are 2 breaking changes. The API change for `toast.onChange` and the removal of `toast.configure`.

### `toast.onChange`

The previous API was returning the `numberOfToastDisplayed` and the `containerId`. Honestly, this API seems to be incomplete. 

For example, with the old API, if I wanted to do some logging this would be very difficult because I don't have enough data to log.

```tsx
toast.onChange((numberOfToastDisplayed, containerId) => {
  logger.info("nothing useful to log, ...")
})
```

The new API offers more possibilities. The callback will receive a `ToastItem`. The item is loaded with a bunch of useful properties `status`, `content`, `id`, `data`, etc...


```jsx
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
```

For example, if I want to log something everytime there is an error notification, with the new API it's trivial

```tsx
toast.onChange(payload => {
  if(payload.status === "added" && payload.type === toast.TYPE.ERROR) {
    logger.error({
      createdAt: Date.now(),
      content,
      data
    })
  }
})
```

### `toast.configure`

`toast.configure` works fine for most cases but the current implementation has one main issue. It does not work with react context because it was creating a new react tree.
