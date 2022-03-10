---
id: 'migration-v8'
title: 'Migrate to v8'
sidebar_label: 'Migrate to v8'
---

React-toastify has been around for 5 years(will turn five the 8 November 🎂). Since the beginning, one of the goals was to provide a library that is highly customizable and also able to work out of the box. Every major release introduces breaking changes but this is for the best 👌.

## What is new in v8

A video is worth a thousand words.

<iframe width="100%" height="415" src="https://www.youtube.com/embed/cZ4Uj4ojTH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />


### Who doesn't like icons

Let's break down what is happening in the video above. Notifications of different types (`toast.info`, `toast.error`, `toast.success`, `toast.warning`) display an icon associated with the selected type. You can also notice that the progress bar color matches the type color.

<img width="200" alt="v8-icons-light" src="https://user-images.githubusercontent.com/5574267/130860515-c9cf2b64-88b4-4711-971f-9149ec497152.png"/>
<img width="200" alt="v8-icons-dark" src="https://user-images.githubusercontent.com/5574267/130860512-3a165ce6-7af3-4c24-8e81-f3f5a4561841.png"/>
<img width="200" alt="v8-icons-colored" src="https://user-images.githubusercontent.com/5574267/130860506-750d2799-fb73-45cf-971a-7f4f3f8f48ce.png"/>

Don't be afraid 😱, if you don't like those icons you can use your own or remove them. This is what it looks like in practice.

```tsx
toast("Default toast behavior is untouched, no icon to display");
toast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});
toast.error("Lorem ipsum dolor")
toast.success("Lorem ipsum dolor")
toast.warn("Lorem ipsum dolor")
toast.error("Without icon", {
  icon: false
});
toast.success("You can provide any string", {
  icon: "🚀"
});
// custom icons have access to the theme and the toast type
toast.success("And of course a component of your choice", {
  icon: MyIcon
});
toast.success("Even a function, given you return something that can be rendered", {
  icon: ({theme, type}) =>  <img src="url"/>
});
//Disable icons
<ToastContainer icon={false} />
```

### Clear separation between type and theme

Prior to v8, `toast.info`, `toast.error`, etc... Would display respectively a blue notification, a red notification, etc... This is not the case anymore. There are 3 distinct themes: `light`, `dark`, `colored`. The theme can be applied globally or per notification.

```tsx
//Set the theme globally 
<ToastContainer theme="dark" />

// define per toast
toast.info("Display a dark notification of type info");
toast.info("Display a light notification of type info", { theme: "light" });
toast.info("Display a blue notification of type info", { theme: "colored" });
```

This separation will benefit theming in the future.

### I promise this is new, I'll tell you if you await

<img width="400" alt="v8-promise" src="https://user-images.githubusercontent.com/5574267/130862557-8d13ddf0-c6bf-4f52-968a-1d91c62b6016.png" />
<img width="400" alt="v8-promise-resolved" src="https://user-images.githubusercontent.com/5574267/130862554-652397ed-1b1e-40d4-a250-c38734ec8e5d.png" />

The library exposes a `toast.promise` function. Supply a promise and the notification will be updated if it resolves or fails. When the promise is pending a spinner is displayed. Again you hide it, I bet you already know how to😆.


Let's start with a simple example
```tsx
const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    }
)
```
Displaying a simple message is what you would want to do in 90% of cases. But what if the message you want to display depends on the promise response, what if you want to change some options for the error notification? Rest assured, under the hood, the library uses `toast.update`. Thanks to this, you have full control over each notification.

```tsx
const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));
toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Promise is pending',
      success: {
        render({data}){
          return `Hello ${data}`
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({data}){
          // When the promise is rejected, data will contain the error
          return <MyErrorComponent message={data.message} />
        }
      }
    }
)
```

:::info Because you have the full power of `toast.update`, you can even supply a custom transition if you want 🤯
<img width="300" alt="v8-promise-resolved" src="https://user-images.githubusercontent.com/5574267/130869645-586777a3-3326-4664-917e-a13aee367c43.gif" />
:::

If you want to take care of each step yourself you can use `toast.loading` and update the notification yourself.

```tsx
const id = toast.loading("Please wait...")
//do something else
toast.update(id, { render: "All is good", type: "success" });
```

### Pass data even when you are not rendering a react component

One way to pass data to the notification was to use the context api or provide your own component. Starting v8 a `data` option is now available to make it easier.

```tsx
toast(({data}) => `Hello ${data}`, {
  data: "world"
})
```

### I just want to change few colors

Most of the time, users are ok with the default style, they just want to change some colors to match their brand. I think one way to improve the DX for all of us is to embrace CSS variables. That's why the library has switched to css variables! 
All you want is to change the color of the progress bar? No problem

```css
:root{
  // this is the default value below
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
}
```

You can find the list of all exposed variables [here](./how-to-style.md#override-css-variables)

## Breaking changes

There are few breaking changes. 

- The separation between theme and type. The type `dark` has been removed
```tsx
// before v8
toast("hello", {
  type: "dark"
})
// toast.TYPE.DARK is no longer available

// in v8
toast("hello", {
  theme: "dark"
})
// or
toast.dark("hello")
```

- Notifications of different types are not colored by default, but they look pretty by default now 😆. You can use the `colored` theme to get the same behavior as the previous version
```tsx
toast.info("hello", {
  theme: "colored"
})
// or apply the theme globally
<ToastContainer theme="colored" />
```

- An icon is displayed by default for the notificaiton of type `info`, `error`, `warning`, `success`
```tsx
// to opt-out gloablly from this behavior
<ToastContainer icon={false} />

// or per toast
toast.info("hello", {
  icon: false
});
```

- the following css classes has been removed
```css
.Toastify__toast--dark {
}
.Toastify__toast--default {
}
.Toastify__toast--info {
}
.Toastify__toast--success {
}
.Toastify__toast--warning {
}
.Toastify__toast--error {
}
```

That's it for this release. Thank you for using react-toastify and happy coding!
