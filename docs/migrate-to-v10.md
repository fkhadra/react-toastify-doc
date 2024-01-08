---
id: 'migration-v10'
title: 'Migrate to v10'
sidebar_label: '🚀 Migrate to v10'
---

## What is new in v10

The code for this release has been sitting on my computer for almost a year but with so many things going on it was hard for me to release it but it's finally here! A good chunk of the code has been rewritten, a bunch of bugs have been fixed. I've also addressed the oldest open feature request (Jan 10, 2020) 😆.

![stacked](https://github.com/fkhadra/react-toastify/assets/5574267/975c7c01-b95e-43cf-9100-256fa8ef2760)

<img width="347" alt="Screenshot 2023-12-17 at 14 53 50" src="https://github.com/fkhadra/react-toastify/assets/5574267/676689c7-64e4-4e74-aff8-b44b30088de5" />

## Features

### Play or pause the timer programmatically

By default, when the notification is hovered or the window loses focus, the timer for dismissing the notification is paused. There are many other situations where you might want to pause the timer as well. For instance, consider wanting to toggle the notification timer based on the document's visibility. This wasn't possible to do previously, but with the new API, it's a breeze.

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

### Remove notification from a given container

This feature was the oldest one in the backlog (Jan 10, 2020). I don't know if the user who requested this feature is still using the library but I bet thanks to her/him, a bunch of user will be happy.

- Remove all toasts that belongs to a given container
```tsx
toast.dismiss({ container: "123" })
```
- Remove toast that has a given id for a specific container
```tsx
toast.dismiss({ id: "123", containerId: "12" })
```

The method is backward compatible. `toast.dismis()` and `toast.dismiss("123")` work as usual. 

### Check if a notification is active for a given container

You can limit the call to `toast.isActive` to a specific container.

```tsx
  toast.isActive(toastId, containerId)
```

### Better typescript inference when using data

When providing data to the notification, the content of data is correctly infered by typescript.

```tsx
toast((props) => {
  return <div>{props.data.foo}</div>
},{
  data: {
    foo: "bar"
  }
})
```


### IconProps now receives isLoading

When providing your own logic to display the icon, you now have access to the `isLoading` field.


```tsx
const CustomIcon = props => {
  if (props.isLoading) return <Spinner />;

  switch (props.type) {
    case 'info':
      return <Info color={iconColor} />;
    case 'success':
      return <Success color={iconColor} />;
    case 'error':
      return <Error color={iconColor} />;
    case 'warning':
      return <Warning color={iconColor} />;
    default:
      return undefined;
  }
};


<ToastContainer icon={CustomIcon} />
```

### Stacked Notifications

The initial release for this feature was planned right after the release of the v9. The code was their but things happen in life and I wasn't able to focus on the project that much.

That being said, I'm glad to finally release it.


![stacked](https://github.com/fkhadra/react-toastify/assets/5574267/975c7c01-b95e-43cf-9100-256fa8ef2760)


To enable it, add the `stacked` prop to the `ToastContainer`. I also suggest to disable the progress bar :).

```tsx
<ToastContainer stacked />
```


### Progress bar background trail

The progress bar leaves a background trail by default. 

<img width="347" alt="Screenshot 2023-12-17 at 14 53 50" src="https://github.com/fkhadra/react-toastify/assets/5574267/676689c7-64e4-4e74-aff8-b44b30088de5" />

The opacity of the trail can be customized by overriding the css variable `--toastify-color-progress-bgo`.

```css
  // disable the trail
  --toastify-color-progress-bgo: 0;

  // increase the opacity
  --toastify-color-progress-bgo: .8;
```


## Breaking Changes

### React 18 is the minimum required version, but...

The minimun version of react required is now `18`. This version has been released for more than a year. Nextjs, react-query already did this move as well, so I believe it's a good time for the library as well.

That being said, I know that not all code base have the chance to be running on the latest version of react, so I'm considering to have a package for `v17` if the demand is high enough.

### The enableMultiContainer prop has been removed

The `enableMultiContainer` props is not needed anymore and has been removed. As long as your container has an `id` assigned then you are good to go.
```tsx
// before
<ToastContainer id="myContainer" enableMultiContainer />

// now 🎉
<ToastContainer id="myContainer"  />
```

### The toast.position and toast.type constants have been removed

The `toast.POSITION` and `toast.TYPE` constants have been removed. Typescript came a long way since the initial release of the library. The ecosystem has matured to a point where such constants are not needed anymore.

### Change for some defaults

The `closeOnClick` prop is now `false` by default instead of `true`. When using the library I keep on turning this feature off which make me realize that it was not a good default in the first place. To turn it on do as follow
```tsx
<ToastContainer closeOnClick />
```

The `draggable` prop is set to `touch` by default instead of `true`. Which means that, by default, notifications are only draggable on touch devices (most likely mobiles and tablets). While swipping a notification on mobile feels natural, dragging on desktop is not. If you want your notification to be draggable regardless of the device type just set draggable to `true`.
```tsx
<ToastContainer draggable />
```
  
## Bug Fixes and Chore


- Remove defaultProps on ToastContainer as it's deprecated [#970](https://github.com/fkhadra/react-toastify/issues/970)
- Fix className from ToastOptions overrides the toastClassName in ToastContainer props instead of appending [#956](https://github.com/fkhadra/react-toastify/issues/956)
- Rewrite tests using component testing [#923](https://github.com/fkhadra/react-toastify/issues/923)
- Memory leak while using multiple containers are goes on in v9.1.1 [#910](https://github.com/fkhadra/react-toastify/issues/910)
- React toast is showing multiple time.  [#744](https://github.com/fkhadra/react-toastify/issues/744)
- onClose event trigger 2 times.  [#741](https://github.com/fkhadra/react-toastify/issues/741)





