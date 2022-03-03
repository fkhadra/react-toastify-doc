---
id: use-notification-center
title: useNotificationCenter (v9)
sidebar_label: useNotificationCenter (v9)
---


`useNotificationCenter` is a headless hook to build your notification center on top of react-toastify. It offers a lot of capabilities out of the box like `sorting`, `filtering` etc... Check the API for more details.

Check the example below.

<iframe src="https://codesandbox.io/embed/notification-center-framer-vddoj5?fontsize=14&hidenavigation=1&theme=dark"
     style={
       {
            width:"100%",
            height: "700px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }}
     title="notification-center-framer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />

## API

### Clear all notifications from your notification cenrter

```tsx
const { clear } = useNotificationCenter();

clear()
```

### Mark notifications as read

#### Mark one or more notifications as read

Usage:
```tsx
markAsRead("anId")
markAsRead(["a","list", "of", "id"])
```

## Remove notifications

You can remove one or more notifications

```tsx
const { remove } = useNotificationCenter();

remove("anId")
// or pass an array of ids to remove multiple notifications
remove(["a","list", "of", "id"])
```
