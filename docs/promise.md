---
id: 'promise'
title: 'Handling promises'
sidebar_label: 'Handling promise'
---

## toast.promise

<img width="400" alt="v8-promise" src="https://user-images.githubusercontent.com/5574267/130862557-8d13ddf0-c6bf-4f52-968a-1d91c62b6016.png" />
<img width="400" alt="v8-promise-resolved" src="https://user-images.githubusercontent.com/5574267/130862554-652397ed-1b1e-40d4-a250-c38734ec8e5d.png" />

The library exposes a `toast.promise` function. Supply a promise or a function that return a promise and the notification will be updated if it resolves or fails. When the promise is pending a spinner is displayed.


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

const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
toast.promise(
    functionThatReturnPromise,
    {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    }
)
```

:::info 
toast.promise return the provided promise so you can chain it
:::

```tsx
const response = await toast.promise(
    fetch("A_URL"),
    {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    }
);
console.log(response)
```

Displaying a simple message is what you would want to do in 90% of cases. But what if the message you want to display depends on the promise response, what if you want to change some options for the error notification? Rest assured, under the hood, the library uses `toast.update`. Thanks to this, you have full control over each notification.

```tsx
const resolveWithSomeData = new Promise(resolve => setTimeout(() => resolve("world"), 3000));
toast.promise(
    resolveAfter3Sec,
    {
      pending: {
        render(){
          return "I'm loading"
        },
        icon: false,
      },
      success: {
        render({data}){
          return `Hello ${data}`
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({data}){
          // When the promise reject, data will contains the error
          return <MyErrorComponent message={data.message} />
        }
      }
    }
)
```

:::info Because you have the full power of `toast.update`, you can even supply a custom transition if you want 🤯
<img width="300" alt="v8-promise-resolved" src="https://user-images.githubusercontent.com/5574267/130869645-586777a3-3326-4664-917e-a13aee367c43.gif" />
:::

## toast.loading

If you want to take care of each step yourself you can use `toast.loading` and update the notification yourself.

```tsx
const id = toast.loading("Please wait...")
//do something else
toast.update(id, { render: "All is good", type: "success" });
```
