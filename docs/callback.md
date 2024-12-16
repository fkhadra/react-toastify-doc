---
id: 'define-callback'
title: 'Callbacks and closure reason'
sidebar_label: 'Callbacks and closure reason ✨'
---

You can define two callbacks. Their names are self-explanatory:

- `onOpen`
- `onClose`

```tsx
import { toast } from 'react-toastify';

function Example(){

  const notify = () => {
    toast("Hello there", {
      onOpen: () => window.alert('Called when I open'),
      onClose: (reason?: boolean | string) => window.alert('Called when I close')
    });
  }

  return <button onClick={notify}>Notify</button>;
}
```

Additionally `onClose` receives a closure reason as the first argument. When the user closes the notification, the `reason` argument is equal to `true`. 

In the example below, I've named my argument
`removedByUser` to make the intent clear.

```tsx
toast("hello", {
  onClose(removedByUser){
    if(removedByUser) {
      // do something
      return
    }

    // auto close do something else
  }
})
```

If you are using a custom component for your notification, you might want more control over the reason, especially if it contains
multiple call to actions. `closeToast` let you specify a closure reason of your choice.

```tsx
import { ToastContentProps } from "react-toastify";

function CustomNotification({ closeToast }: ToastContentProps) {
  return ( 
    <div>
      You received a new message
      <button onClick={() => closeToast("reply")}>Reply</button>
      <button onClick={() => closeToast("ignore")}>Ignore</button>
    </div>
  )
}

toast(CustomNotification, {
  onClose(reason){
    switch (reason) {
      case "reply":
        // navigate to reply page for example or open a dialog
      case "ignore":
        // tell the other user that she/he was ghosted xD
      default:
        // 🤷‍♂️
    }
  }
})
```
