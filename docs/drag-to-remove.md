---
id: 'drag-to-remove'
title: 'Drag to remove'
sidebar_label: 'Drag to remove'
---

You can drag the toast to remove it. By default, the notifications are only draggable on touch devices.

![drag](https://user-images.githubusercontent.com/5574267/38770523-9438ff7c-4014-11e8-93a5-acd7dbdae52b.gif)

## Define the width percentage to remove the toast

You need to drag 80% of the toast width to remove it. This can be changed to fit your need:

- Replace the default one:

```jsx
<ToastContainer draggablePercent={60} />
```

- Replace per toast:

```jsx
toast('Hello', {
  draggablePercent: 60
});
```

## Enable only on desktop

- Globally

```jsx
<ToastContainer draggable="mouse" />
```

- Per toast:

```jsx
toast('Hello', {
  draggable: "mouse"
});
```

## Enable on all devices

- Globally

```jsx
<ToastContainer draggable />
```

- per toast:

```jsx
toast('Hello', {
  draggable: true
});
```


## Disable it

- Globally

```jsx
<ToastContainer draggable={false} />
```

- Per toast:

```jsx
toast('Hello', {
  draggable: false
});
```


## Drag vertically

If you want the notification to be draggable vertically instead of horizontally this is possible as well

<iframe src="https://codesandbox.io/embed/react-toastify-drag-y-lh88i?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={
       {
            width:"100%",
            height: "500px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }
     }
     title="react-toastify-drag-y"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
