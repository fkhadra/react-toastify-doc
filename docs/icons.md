---
id: icons
title: Icons
sidebar_label: Icons
---

## Built-in icons

Notifications of different types (`toast.info`, `toast.error`, `toast.success`, `toast.warning`) display an icon associated with the selected type.

<img width="200" alt="v8-icons-light" src="https://user-images.githubusercontent.com/5574267/130860515-c9cf2b64-88b4-4711-971f-9149ec497152.png"/>
<img width="200" alt="v8-icons-dark" src="https://user-images.githubusercontent.com/5574267/130860512-3a165ce6-7af3-4c24-8e81-f3f5a4561841.png"/>
<img width="200" alt="v8-icons-colored" src="https://user-images.githubusercontent.com/5574267/130860506-750d2799-fb73-45cf-971a-7f4f3f8f48ce.png"/>

```tsx
toast.info("Lorem ipsum dolor"); // same as toast(message, {type: "info"});
toast.error("Lorem ipsum dolor")
toast.success("Lorem ipsum dolor")
toast.success("Lorem ipsum dolor", {
  theme: "colored"
})
toast.warn("Lorem ipsum dolor")
toast.warn("Lorem ipsum dolor", {
  theme: "dark"
})
```

## Disable icons

- Disable the icon individually
```tsx
toast.error("Without icon", {
  icon: false
});
```

- Disable the icon globally
```tsx
<ToastContainer icon={false} />
```

## Custom icons

You can provide a custom icon of your choice. Any renderable element is valid.

```tsx
// With a string
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
```

:::info If you provide a component, the current `theme` and `type` are passed as props
:::
