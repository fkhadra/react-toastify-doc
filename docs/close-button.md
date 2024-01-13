---
id: 'use-a-custom-close-button-or-remove-it'
title: 'Use a custom close button or remove it'
sidebar_label: 'Use a custom close button or remove it'
---

<iframe src="https://codesandbox.io/embed/toastify-use-a-custom-close-button-or-remove-it-forked-fmc0ho?fontsize=14&hidenavigation=1&theme=dark"
     style={{
      width:'100%', height:'500px', border:0, borderRadius: '4px', overflow:'hidden'
     }}
     title="Toastify - Use a custom close button or remove it (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Override the default one

You can pass a custom close button to the `ToastContainer` to replace the default one.

:::important Important
  When you use a custom close button, your button will receive a ```closeToast``` function.
  You need to use it to close the toast.
:::


```jsx
  import { toast, ToastContainer } from 'react-toastify';

  const CloseButton = ({ closeToast }) => (
    <i
      className="material-icons"
      onClick={closeToast}
    >
    delete
    </i>
  );

function App() {
  const notify = () => {
    toast("The close button change when Chuck Norris display a toast");
  };

  return (
    <div>
      <button onClick={notify}>Notify</button>;
      <ToastContainer closeButton={CloseButton} />
    </div>
  );
}
```

## Define it per toast

```jsx
toast("Hello", {
  closeButton: CloseButton
})
```

## Remove it

Sometimes you don't want to display a close button. It can be removed globally or per toast. Pass
`false` to `closeButton` props:

- remove it by default

```jsx
  <ToastContainer closeButton={false} />
```

- remove it per toast

```jsx
  toast("hello", {
    closeButton: false
  })
```

:::important Important
  if you removed it globally, you can still choose to display it for a specific toast  
  ```jsx
  toast("hello", {
    closeButton: true // or MyCustomCloseButton
  })
```
:::
 
