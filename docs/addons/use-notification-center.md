---
id: use-notification-center
title: useNotificationCenter
sidebar_label: useNotificationCenter
---


`useNotificationCenter` is a headless hook to build your notification center on top of react-toastify. In short, every time you call `toast` or any other variants like `toast.update`, `toast.promise`, `toast.info`, etc, the notification will be added to the toast center.

It offers a lot of flexibility out of the box like `sorting`, `filtering`, etc... 

Check the example below.

<iframe src="https://codesandbox.io/embed/notification-center-framer-vddoj5?fontsize=14&hidenavigation=1&hidedevtools=1&view=preview&codemirror=1&theme=dark"
     style={
       {
            width:"100%",
            height: "700px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }}
     title="notification-center-framer"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />

Another example using MUI.

<iframe src="https://codesandbox.io/embed/mui-notification-center-zvxod3?fontsize=14&hidenavigation=1&hidedevtools=1&view=preview&codemirror=1&theme=dark"
     style={
       {
            width:"100%",
            height: "700px",
            border:0,
          borderRadius: "4px",
          overflow:"hidden"
       }}
     title="mui-notification-center"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   />

## Import

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"
```

## Initial parameters

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

interface Data {
  exclude: boolean
}

function App(){
  const { notifications } = useNotificationCenter<Data>({
    data: [
      {id: "anId", createdAt: Date.now(), data: { exclude: false }},
      {id: "anotherId", createdAt: Date.now(), data: { exclude: true }}
      ],
    sort: (l, r) => l.createdAt - r.createdAt,
    filter: (item) => item.data.exclude === false
  })
}

```

| Parameter                                                                           | Description                                                                                                                                |
|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `data?: NotificationCenterItem<Data>[]`                                             | Initial data to rehydrate the notification center. Useful if you want to persist the content of the notification center                    |
| `sort?: (l: NotificationCenterItem<Data>, r: NotificationCenterItem<Data>): number` | By default, the notifications are sorted from the newest to the oldest using the `createdAt` field. Use this to provide your sort function |
| `filter?: (item: NotificationCenterItem<Data>): boolean`                            | Keep the toast that meets the condition specified in the callback function.                                                                |

:::info
 All parameters are optional
:::



## API

The hook gives you access to several values and functions. Let's view them one by one.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

const {
    notifications,
    clear,
    markAllAsRead,
    markAsRead,
    add,
    update,
    remove,
    find,
    sort,
    unreadCount
} = useNotificationCenter()
```

### `notifications`

Contains an array of `NotificationItem`. The `NotificationItem` has the following interface

```ts
interface NotificationCenter <Data = {}> {
  id: Id
  read: boolean;
  createdAt: number;
  data: Data;
  content?: React.ReactNode
  theme?: Theme
  type?: TypeOptions;
  isLoading?: boolean;
  containerId?: Id;
  icon?: React.ReactNode | false;
}
```

Most of the properties are populated when you display a notification on the screen using the `toast` function. A typical usage would look like this.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications } = useNotificationCenter()

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <span>id: {notification.id}</span>
          <span>createdAt: {notification.createdAt}</span>
          <p>content: {notification.content}</p>
          {/* you get the idea, you are free to use the properties the way that best suits your needs */}
        </li>
      ))}
    </ul>
  )
}
```

:::tip
The `content` contains the value that is displayed when calling the toast function. Use `data` if you want more control.
:::

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

interface Data {
  title: string
  text: string
}

// somewhere in your app
toast("Hello", {
  data: {
    title: "Hello",
    text: "Lorem ipsum dolor..."
  }
})

function App(){
  const { notifications } = useNotificationCenter<Data>()

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <span>id: {notification.id}</span>
          <span>createdAt: {notification.createdAt}</span>
          <p>title: {notification.data.title}</p>
          <p>text: {notification.data.text}</p>
        </li>
      ))}
    </ul>
  )
}
```

### `clear`

Remove all notifications from the notification center.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications, clear } = useNotificationCenter()

  return (
    <div>
      <button onClick={clear}>clear</button>
      <div>{notifications.length}</div>
    </div>
  )
}
```


### `markAllAsRead`

Mark all notifications as read.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications, markAllAsRead } = useNotificationCenter()

  return (
    <div>
      <button onClick={markAllAsRead}>Mark all as read</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <span>read: {notification.read}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

`markAllAsRead` accepts an optional boolean argument. It's only useful to mark all notifications as not read.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications, markAllAsRead } = useNotificationCenter()

  return (
    <div>
      <button onClick={() => markAllAsRead(false)}>Mark all as not read</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <span>read: {notification.read}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

:::info
Calling `markAllasRead()` is equivalent to `markAllAsRead(true)`
:::

```ts
// function signature
markAllAsRead(read?: boolean): void
```

### `markAsRead`

Mark one or more notifications as read.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications, markAsRead } = useNotificationCenter()

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <span>read: {notification.read}</span>
          <button onClick={() => markAsRead(notification.id)}>mark as read</button>
        </li>
      ))}
    </ul>
  )
}
```

You can also provide an array of ids to mark multiple notifications as read.

```tsx
markAsRead(["a","list", "of", "id"])
```

Similar to `markAllAsRead`, this function accepts an optional boolean argument. It's only useful to mark the notifications as not read.

```tsx
markAsRead(notification.id, false)

// works for an array of ids as well
markAsRead(["a","list", "of", "id"], false)
```

### `unreadCount`

Contains the number of unread notifications.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { unreadCount } = useNotificationCenter()

  return (
    <div>{unreadCount}</div>
  )
}
```

### `remove`

Remove one or more notifications.

```tsx
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications, remove } = useNotificationCenter()

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <button onClick={() => remove(notification.id)}>remove</button>
        </li>
      ))}
    </ul>
  )
}
```

To remove multiple notifications at once, you can pass an array of ids.

```tsx
remove(["a","list", "of", "id"])
```

### `sort`

By default, the notifications are sorted from the newest to the oldest using the `createdAt` field. This can be changed anytime and you are free to use whatever field you want.

```tsx
import { useNotificationCenter, NotificationCenterItem } from "react-toastify/addons/useNotificationCenter"

function App(){
  const { notifications, sort } = useNotificationCenter()

  const sortAsc = () => {
    sort((l: NotificationCenterItem, r: NotificationCenterItem) => l.createdAt - r.createdAt)
  }

  return (
    <div>
      <button onClick={sortAsc}>Oldest to newest</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <span>{notification.id}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

Another example, using a field different from `createdAt`. We can imagine that the notification contains an `order` field under `data`.

```tsx
// somewhere in your app
toast("hello", {
  data: {
    order: 1
  }
})
```

```tsx
import { useNotificationCenter, NotificationCenterItem } from "react-toastify/addons/useNotificationCenter"

interface Data {
  order: number
}

function App(){
  const { notifications, sort } = useNotificationCenter<Data>()

  const sortAsc = () => {
    sort((l: NotificationCenterItem, r: NotificationCenterItem) => l.data.order - r.data.order)
  }

  return (
    <div>
      <button onClick={sortAsc}>Oldest to newest</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <span>{notification.id}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

### `add`

Let you add a notification without calling `toast`. This can be useful in many cases, job listener, global store, etc...

```tsx
import { useEffect } from "react"
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"
import { jobListener } from "my-job-listener"

function App(){
  const { notifications, add } = useNotificationCenter()

  useEffect(() => {
    const unsub = jobListener.on("jobCreate",(job) => {
      add({ id: job.id, content: job.notification.content })
    })
  // although the reference of `add` changes for every render
  // you can safely omit it from the dependency array 
  }, [])

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <span>{notification.id}</span>
        </li>
      ))}
    </ul>
  )
}
```

- If the id is already in use, the function will return `null` and nothing will happens. 
```tsx
add({ id: "an existing id" }) // return null
```

- If you omit the `id`, one is generated for you.
```tsx
add({ content: "hello" }) // return generated id
```

- You can also override the default values for `createdAt` and `read`
```tsx
add({ 
  // same as default value 😆
  createdAt: Date.now(),
  read: true
})
```

### `update`

Let you update a notification without calling `toast.update`. This can be useful in many cases, job listener, global store, etc...

```tsx
import { useEffect } from "react"
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"
import { jobListener } from "my-job-listener"

function App(){
  const { notifications, update } = useNotificationCenter()

  useEffect(() => {
    const unsub = jobListener.on("jobUpdate", (job) => {
      update(job.id, { content: job.notification.content, data: { jobType: job.type } })
    })
  // although the reference of `update` changes for every render
  // you can safely omit it from the dependency array 
  }, [])

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <span>{notification.id}</span>
        </li>
      ))}
    </ul>
  )
}
```

- if the given id does not exist, null is returned
```tsx
update("nonExistingId", {content: "hello"}) // return null
```


### `find`

Let you retrieve one or more notifications. This can be useful in many cases, job listener, global store, etc...

```tsx
import { useEffect } from "react"
import { useNotificationCenter } from "react-toastify/addons/useNotificationCenter"
import { jobListener } from "my-job-listener"

function App(){
  const { notifications, find } = useNotificationCenter()

  useEffect(() => {
    const unsub = jobListener.onChange((job) => {
      const notification = find(job.id);

      if(notification) {
        // do something if it already exist, for example update it
      } else {
        // do something if it does not exist, for example add it
      }
    })
  // although the reference of `find` changes for every render
  // you can safely omit it from the dependency array 
  }, [])

  return (
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
          <span>{notification.id}</span>
        </li>
      ))}
    </ul>
  )
}
