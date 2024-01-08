---
id: positioning-toast
title: Positioning toast
sidebar_label: Positioning toast
---

By default, all the toasts will be positioned on the top right of your browser. If a position is set on a `toast`, the one defined on ToastContainer will be replaced.

The following values are allowed: **top-right, top-center, top-left, bottom-right, bottom-center, bottom-left**

```jsx
  import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


  function Example() {
    const notify = () => {
      toast("Default Notification !");

      toast.success("Success Notification !", {
        position: "top-center"
      });

      toast.error("Error Notification !", {
        position: "top-left"
      });

      toast.warn("Warning Notification !", {
        position: "bottom-left"
      });

      toast.info("Info Notification !", {
        position: "bottom-center"
      });

      toast("Custom Style Notification with css class!", {
        position: "bottom-right",
        className: 'foo-bar'
      });
    };

     return (
        <>
          <button onClick={notify}>Notify</button>;
          <ToastContainer />
        </>
      );
  }
```
