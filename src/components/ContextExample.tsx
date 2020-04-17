import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container } from "./Actions.styles";

const CountContext = React.createContext<[number, Function]>(null);

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
        <Button lookAtMe onClick={displayToast}>
          Display toast
        </Button>
      </Container>
      <ToastContainer autoClose={false} draggable={false} />
    </CountProvider>
  );
};
