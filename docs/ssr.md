---
id: 'ssr'
title: 'SSR and CSP'
sidebar_label: 'SSR and CSP 👮‍♂️'
---

By default, when imported, the library injects the stylesheet automatically. This works well when your application is a Single Page Application (SPA).

However, if you are using server-side rendering, injecting the stylesheet can trigger hydration warnings. To prevent this issue, you should import the library and the stylesheet as follows:

```tsx
import { ToastContainer, toast } from "react-toastify/unstyled";
import 'react-toastify/ReactToastify.css';
```

If your environment enforces a strict Content Security Policy (CSP), you should also import the library as shown above.