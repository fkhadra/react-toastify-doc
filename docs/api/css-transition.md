---
id: css-transition
title: cssTransition
sidebar_label: cssTransition
---

| Parameter        | Type                      | Required | Default | Description                                                                                                |
|------------------|---------------------------|----------|---------|------------------------------------------------------------------------------------------------------------|
| enter            | string                    | ✓        | -       | The class name that will be used when the toast enter                                                      |
| exit             | string                    | ✓        | -       | The class name that will be used when the toast exit                                                       |
| appendPosition   | bool                      | ✘        | false   | Append or not the position  to the class name: `yourClassName--top-right`, `yourClassName--bottom-left`... |
| collapse         | bool                      | ✘        | true    | Collapse toast after exit animation                                                                        |
| collapseDuration | number                    | ✘        | 300     | The collapse duration                                                                                      |


## Usage

```js
import { cssTransition } from 'react-toastify';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  appendPosition: false,
  collapse: true,
  collapseDuration: 300
});

```


<iframe src="https://codesandbox.io/embed/react-toastify-animatecss-jxrx9?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={
       {
            width:"100%",
            height: "500px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }
     }
     title="react-toastify-animate.css"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />


