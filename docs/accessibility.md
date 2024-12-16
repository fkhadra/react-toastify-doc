---
id: 'accessibility'
title: 'Accessibility'
sidebar_label: 'Accessibility ✨'
---

By default, all toasts are displayed with the ARIA role `alert`. This can be changed globally or per toast.

- Globally
```jsx
<ToastContainer role="alert" />
```

- Per toast
```jsx
toast("hello", {
  role: "alert"
})
```

`ToastContainer` and `toast` accept an `ariaLabel` prop as well. This is quite helpful for screen readers and also for testing.
For example, in cypress you could do `cy.findByRole("alert", {name: "the aria label you specified"})`.

```tsx
toast("hello", {
  ariaLabel: "something"
})
```

If a notification is visible and the user presses `alt+t` it will focus on the first notification allowing the user to use `Tab` to navigate through the different elements within the notification.

The `hotKeys` can be changed of course.

```tsx
// focus when user presses ⌘ + F
const matchShortcut = (e: KeyboardEvent) => e.metaKey && e.key === 'f'

<ToastContainer hotKeys={matchShortcut} ariaLabel="Notifications ⌘ + F" />
```
