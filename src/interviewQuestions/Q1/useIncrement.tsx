import { useState } from "react";

export const useIncrement = (initialVal: number) => {
  const [counter, setCounter] = useState(initialVal);

  const increment = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return { counter, increment };
};
