---
id: 'custom-transition'
title: 'Define a custom enter and exit transition'
sidebar_label: 'Define a custom enter and exit transition'
---

The toast relies on `react-transition-group` for the enter and exit transition. Any transition built with react-transition-group should work!

I'll use the zoom animation from animate.css to build a custom transition

![toastify_custom_trans](https://user-images.githubusercontent.com/5574267/31049179-0d52e14c-a62e-11e7-9abd-b0d169a0fadc.gif)

```css
/* style.css*/
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}
```

## Using the cssTransition helper

The easiest way to roll your own transition is by using the `cssTransition` helper. Doing so you don't need to deal with `react-transition-group`. You only need to provide the `enter` and the `exit` class name, the transition `duration` is set
to `750ms` by default but it can be overridden.
The `cssTransition` will also take care to collapse the toast when they exited.

```jsx
import React from 'react';
import { toast, cssTransition } from 'react-toastify';
import './style.css';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
});

function App(){
  const notify = () => {
    toast("ZoomIn and ZoomOut", {
      transition: Zoom,
    });
  };

  return <button onClick={notify}>Notify</button>;
}
```

### Different duration for enter and exit

If you want the transition duration to be different between the enter and exit transition pass an array:

```jsx
const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: 500 // both transition duration will be 500ms
});

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  duration: [500, 800] // zoomIn will last 500ms while zoomOut will last 800ms
});
```

### Handle transition based on the toast position

Some transitions are based on the toast position. This is the case for the default one. If you pass `appendPosition` to the `cssTransition` helper as shown below, the current position will be appended to the `enter` and `exit` class name:

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
Don't forget to add the position as well when you write your css animations
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

## Create a transition with the Transition component 

You can also use the `Transition` component from react-transition-group if you want more control.

When you create your own transition the following props are passed:
- in: this tell if the component is visible or not (same as react-transition-group)
- appear: this tell to animate the component when it's visible (same as react-transition-group)
- nodeRef: the node ref.(same as react-transition-group)
- done: this callback should be called at the end of your transition
- position: the toast position
- preventExitTransition: this will be true if the toast has been closed by a drag event

In the example below we will reimplement the `cssTransition` helper.

```jsx
import React from 'react';
import { toast, collapseToast } from 'react-toastify';
import { Transition } from 'react-transition-group';


const ZoomInAndOut = ({ children, position, done, nodeRef ...props }) => {
  const node = nodeRef.current;

  const onEnter = () => {
      node.classList.add("the class used on enter");
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = '800ms';
  }

  // let's clean a bit 🤣
  const onEntered = () => {
    node.classList.remove("the class used on enter");
    node.style.cssText = '';
  }

  const onExit = () => {
      node.classList.add(exitClassName);
      node.style.animationFillMode = 'forwards';
      node.style.animationDuration = '800ms';
      // listen for our exit animation to finish and trigger collapseStart
      node.addEventListener('animationend', onCollapseStart)
  };

  const onCollapseStart = () => {
    collapseToast(node, done, 300);
    // clean the listener
    node.removeEventListener('animationend', onCollapseStart);
  };

  // specify the duration of the animation. For the exit, we add collapse duration as well
  const timeout = {
    enter: 800, 
    exit: 800 + 300 
  }

  return (
    <Transition
      {/* spread remaining props: in, appear */}
      {...props}
      unmountOnExit
      nodeRef={nodeRef}
      {/* toast has been closed by drag, no animation need */}
      timeout={ preventExitTransition ? 0 : timeout}
      onEnter={onEnter}
      onEntered={onEntered}
      {/* if toast has been closed by drag don't animate */}
      onExit={preventExitTransition ? done : onExit}
  >
    {children}
  </Transition>    
  )
};
```

This can seem intimidating but if you know react-transition-group, this is really straightforward.

Of course, you could also the CSSTransition component if you wish.
