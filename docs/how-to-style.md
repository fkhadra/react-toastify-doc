---
id: "how-to-style"
title: "How to style"
sidebar_label: "How to style"
---

## Override css variables

Below the list of the css variables that are exposed by the library. You can accomplish a lot by overriding some of them.

```css
:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("**hello**")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}
```

## Override existing css classes

If overriding the css variables is not enough for you, you can override the existing CSS classes. Below, a list of the CSS classes used(classes used for animation and media query are omitted)

```css
/** Used to define container behavior: width, position: fixed etc... **/
.Toastify__toast-container {
}

/** Used to define the position of the ToastContainer **/
.Toastify__toast-container--top-left {
}
.Toastify__toast-container--top-center {
}
.Toastify__toast-container--top-right {
}
.Toastify__toast-container--bottom-left {
}
.Toastify__toast-container--bottom-center {
}
.Toastify__toast-container--bottom-right {
}

/** Classes for the displayed toast **/
.Toastify__toast {
}
.Toastify__toast--rtl {
}
.Toastify__toast-body {
}

/** Used to position the icon **/
.Toastify__toast-icon {
}

/** handle the notification color and the text color based on the theme **/
.Toastify__toast-theme--dark {
}
.Toastify__toast-theme--light {
}
.Toastify__toast-theme--colored.Toastify__toast--default {
}
.Toastify__toast-theme--colored.Toastify__toast--info {
}
.Toastify__toast-theme--colored.Toastify__toast--success {
}
.Toastify__toast-theme--colored.Toastify__toast--warning {
}
.Toastify__toast-theme--colored.Toastify__toast--error {
}

.Toastify__progress-bar {
}
.Toastify__progress-bar--rtl {
}
.Toastify__progress-bar-theme--light {
}
.Toastify__progress-bar-theme--dark {
}
.Toastify__progress-bar--info {
}
.Toastify__progress-bar--success {
}
.Toastify__progress-bar--warning {
}
.Toastify__progress-bar--error {
}
/** colored notifications share the same progress bar color **/
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
}

/** Classes for the close button. Better use your own closeButton **/
.Toastify__close-button {
}
.Toastify__close-button--default {
}
.Toastify__close-button > svg {
}
.Toastify__close-button:hover,
.Toastify__close-button:focus {
}
```

## Build your own style using the scss files

Grab the [scss directory](https://github.com/fkhadra/react-toastify/tree/master/scss) of the repository and build your own stylesheet. If you just want to change some colors, most of them are defined inside the `_variables.scss` file.

```
scss
├── _closeButton.scss
├── _progressBar.scss
├── _toast.scss
├── _toastContainer.scss
├── _variables.scss
├── 📁 animations
│  ├── _bounce.scss
│  ├── _flip.scss
│  ├── _slide.scss
│  └── _zoom.scss
├── main.scss
└── minimal.scss
```

:::info Info
You built an amazing theme and you want to share it with the community, please let me know. Contributions are welcome!
:::

## Passing css classes to component

The `ToastContainer` accept the following props for styling:

- className: applied to the container
- toastClassName: applied on the toast wrapper
- bodyClassName: applied on the toast body
- progressClassName: applied on the progress bar
- style: inline style applied to the container

```jsx
<ToastContainer className="foo" style={{ width: "2000px" }} />
```

When displaying a notification you can also set some css classes:

- className: applied on the toast wrapper (this override `toastClassName` is set by the container )
- bodyClassName: applied on the toast body (this override `bodyClassName` is set by the container )
- progressClassName: applied on the progress bar (this override `progressClassName` is set by the container )
- style: inline style applied to the toast

```jsx
toast("Custom style", {
  className: "black-background",
  bodyClassName: "grow-font-size",
  progressClassName: "fancy-progress-bar",
});
```

## Css classes as function

You can also provide a function. This is what it looks like with tailwind css

```jsx
const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const App = ()=> {
  return (
   <Main />
   <ToastContainer
      toastClassName={({ type }) => contextClass[type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-sm font-white font-med block p-3"}
      position="bottom-left"
      autoClose={3000}
    />
  )
}
```

## How to style with styled-components

### Extend existing css classes

You can override the css classes with `styled-components`. You can find the list of the css classes used [here](react-toastify/how-to-style#override-existing-css-classes). This is where you will also define the style for your notification.

```jsx
import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
```

### Pass css classes to props

```jsx
const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  width: 100%;

  /* .toast is passed to toastClassName */
  .toast {
    background-color: var(--color-black);
  }

  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
```

## Styling from scratch

If you want to style from scratch simply include the bare minimum style and you are good to go.

```jsx
import "react-toastify/dist/ReactToastify.minimal.css";
```

## Inject style on demand

If you don't have a css loader or you want to inject the style on demand(convenient with css module), the library provide a helper for that

```js
import { injectStyle } from "react-toastify/dist/inject-style";

// CALL IT ONCE IN YOUR APP
injectStyle();
```

<iframe src="https://codesandbox.io/embed/react-toastify-inject-style-qfg0l?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={
       {
            width:"100%",
            height: "500px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }
     }
     title="react-toastify-inject-style"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Mobile

On mobile, the toast will take all the available width.

![react toastiy mobile](https://user-images.githubusercontent.com/5574267/28754040-ae7195ea-753d-11e7-86e1-f23c5e6bc531.gif)
