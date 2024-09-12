---
id: toast
title: toast
sidebar_label: toast
---

## Props

:::info Info
  When displaying a toast, the options are inherited from the container. Toast options supersede ToastContainer props
:::

| Options            | Type              | Description                                                                                         |
|--------------------|-------------------|-----------------------------------------------------------------------------------------------------|
| toastId            | string \| number  | Provide a custom id                                                                                 |
| type               | string            | One of info, success, warning, error                                                                |
| position           | string            | One of top-right, top-center, top-left, bottom-right, bottom-center, bottom-left                    |
| onOpen             | function          | Called when the notification appear                                                                 |
| onClose            | function          | Called when the notification disappear                                                              |
| autoClose          | bool \| number    | Delay in ms to close the toast. If set to false, the notification needs to be closed manually       |
| closeButton        | ReactNode \| bool | A React Component to replace the default close button or `false` to hide the button                 |
| transition         | ReactNode         | A reference to a valid react-transition-group/Transition component                                  |
| hideProgressBar    | bool              | Display or not the progress bar below the toast(remaining time)                                     |
| pauseOnHover       | bool              | Keep the timer running or not on hover                                                              |
| pauseOnFocusLoss   | bool              | Pause the timer when the window loses focus                                                         |
| closeOnClick       | bool              | Dismiss toast on click                                                                              |
| className          | string            | Add optional classes to the container                                                               |
| bodyClassName      | string            | Add optional classes to the TransitionGroup container                                               |
| style              | object            | Add optional inline style to the container                                                          |
| progressClassName  | string            | Add optional classes to the progress bar                                                            |
| progressStyle      | object            | Add optional inline style to the progress bar                                                       |
| draggable          | bool              | Allow toast to be draggable                                                                         |
| draggablePercent   | number            | The percentage of the toast's width it takes for a drag to dismiss a toast(value between 0 and 100) |
| draggableDirection | "x" \| "y"        | Specify the drag direction. Default is `x`                                                          |
| containerId        | string \| number  | Used to match a specific Toast container                                                            |
| role               | string            | Define the ARIA role for the toasts                                                                 |
| delay              | number            | Let you delay the toast appearance. Pass a value in ms                                              |
| onClick            | function          | Called when click inside Toast notification                                                         |
| render             | ReactNode         | Only available when using `toast.update`                                                            |
| isLoading          | bool              | Only available when using `toast.loading'                                                           |
| data               | any               | any additional data you want to pass `toast("hello", { data: {key: value} })`                       |


## Usages

All the toast methods return a **toastId** except `dismiss` and `isActive`.
The **toastId** can be used to remove a toast programmatically or to check if the toast is displayed.

```jsx
const options = {
    onOpen: props => console.log(props.foo),
    onClose: props => console.log(props.foo),
    autoClose: 6000,
    closeButton: FontAwesomeCloseButton,
    type: 'info',
    hideProgressBar: false,
    position: "top-left",
    pauseOnHover: true,
    transition: MyCustomTransition,
    progress: 0.2
    // and so on ...
};

// display toasts
const toastId = toast("Hello", options);
toast(MyComponent, options); 
toast(<MyComponent foo={bar}/>, options); 
toast(({ closeToast }) => <div>Render props like</div>, options);

//shortcut to different types
toast.success("Hello", options); 
toast.info("World", options); 
toast.warn(MyComponent, options); 
toast.error("Error", options);

// Remove all toasts !
toast.dismiss();

// Remove given toast
toast.dismiss(toastId); 

// Remove toast that has a given id for a specific container
toast.dismiss({ id: "123", containerId: "12" })

//Check if a toast is displayed or not
toast.isActive(toastId); 

// update a toast
toast.update(toastId, {
  type: type: 'info',
  render: <Img foo={bar}/>
});

// Clear waiting queue when working with limit
toast.clearWaitingQueue();

// Clear waiting queue for a specific container when working with multiple container
toast.clearWaitingQueue({ containerId: "anId" });


// completes the controlled progress bar
toast.done(toastId);

// play/pause the timer programmatically
toast.play({ id: "123" });
toast.pause({ id: "123" });
```

