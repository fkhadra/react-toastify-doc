---
id: "use-your-own-component"
title: "Use your own component"
sidebar_label: "Use Your Own Component"
---

You can render any valid `ReactNode`: string, number, component... This let you customize the look and feel of the notifications quite easily.

:::important Important
When you provide a component, four props are injected into your component.
- `closeToast`
- `data`
- `isPaused`
- `toastProps`
:::


## Basic example

```tsx
import { ToastContainer, toast } from "react-toastify";

const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

function App() {
  const displayMsg = () => {
    toast(Msg);
    // toast(<Msg />) would also work
  };

  return (
    <div>
      <button onClick={displayMsg}>Click me</button>
      <ToastContainer />
    </div>
  );
}
```

You can also render a component using a function. More or less like a "render props":

```jsx
toast(({ closeToast }) => <div>Hello 👋</div>);
```

## Passing data to your component

```tsx
export const Msg = ({ data }) => {
  return (
    <div className="msg-container">
      <p className="msg-title">{data.title}</p>
      <p className="msg-description">{data.text}</p>
    </div>
  );
};



toaster.success(Msg,
  {
    data : {
      title: "You did it!",
      text: "Good job!",
    },
  },
);
```

## Using a hook inside your component

:::important Important
When you want to use a hook inside a toast you must pass a react element

```tsx
toast(<YourComponent />)
 ```

Passing a reference would not work because there is no way to know that this is a react element.

```tsx
toast(YourComponent) // won't let you call hook inside YourComponent
```
::: 


```tsx
import { ToastContainer, ToastContentProps, toast } from 'react-toastify';
import { Button } from './Button';
import { useState } from 'react';

export default function App() {
  const notify = () =>
    toast(<Msg foo="bar" />, {
      autoClose: false,
    });

  return (
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <Button onClick={notify}>Notify !</Button>
      <ToastContainer />
    </div>
  );
}

// We have to mark ToastContentProps as optional because those are injected when calling `toast`
type Props = Partial<ToastContentProps> & {
  foo: string;
};

function Msg({ foo }: Props) {
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter(counter + 1);

  return (
    <div>
      <h3>Hello {foo}</h3>
      <button className="border border-purple-400 p-2 rounded-md" onClick={inc}>
        Increment
      </button>{' '}
      {counter}
    </div>
  );
}

```


## Example with react-context

In this example we will use react-context to share state across a component and a toast. Increment and display a toast at the same time to see how the state stay in sync !

import { ContextExample } from '../src/components/ContextExample';

<ContextExample />

```jsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const CountContext = React.createContext(null);

function useCount() {
  const context = React.useContext(CountContext);
  return context;
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0);

  return <CountContext.Provider value={[count, setCount]} {...props} />;
}

function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);

  return <Button onClick={increment}>Increment {count}</Button>;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>The current counter count is {count}</div>;
}

export const ContextExample = () => {
  const displayToast = () => {
    toast(<CountDisplay />);
  };

  return (
    <CountProvider>
      <Container>
        <Counter />
        <Button onClick={displayToast}>Display toast</Button>
      </Container>
      <ToastContainer autoClose={false} draggable={false} />
    </CountProvider>
  );
};
```