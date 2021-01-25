---
id: 'custom-animation'
title: 'Define a custom enter and exit animation'
sidebar_label: 'Define a custom enter and exit animation'
---

When it comes to animation the possibility are endless and it doesn't need to be complicated! Starting v7, css animations just works out of the box! 
You can write your own using the power of css or use any css animation library like [animate.css](https://animate.style/) or even copy paste from [animista](https://animista.net/).

All you need to do is to import the `cssTransition` and define your `enter` and `exit` classes.

```js
const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck"
});
```

The codesanbox below demonstrate how easy it is.

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



### Handle transition based on the toast position

Some transitions are based on the toast position. This is the case for the default one. If you set `appendPosition` to `true`, the current position will be appended to the `enter` and `exit` class name:

```jsx
const Zoom = cssTransition({
  // zoomIn will become zoomIn--top-right or zoomIn--top-left and so on
  enter: 'zoomIn',
  // zoomIn will become zoomOut--top-right or zoomOut--top-left and so on
  exit: 'zoomOut',
  // default to false
  appendPosition: true
});
```

:::important Important
Don't forget to add the position as well when you write your css animations. If you pass multiple classes, the position will
be appended only to the last one.
:::

### Prevent the toast from collapsing after the exit animation

By default, the remaining toast will collapse smoothly

<iframe width="100%" height="365" src="https://www.youtube.com/embed/Hui3GZKRDpM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

This can be disabled as well:

```js
const Zoom = cssTransition({
  collapse: false,
  enter: 'zoomIn', 
  exit: 'zoomOut', 
});
```

### Tweak collapse duration

The default duration is 300ms. This is also easy to change 💪

```js
const Zoom = cssTransition({
  collapseDuration: 500,
  enter: 'zoomIn', 
  exit: 'zoomOut', 
});
```
