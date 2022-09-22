import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  /**
    @returns this increments the state of the said count value
  */
  const increment = () => {
    setCount((c) => c + 1);
  };
  /**
    @returns this reduces the state of the said count value
  */
  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
