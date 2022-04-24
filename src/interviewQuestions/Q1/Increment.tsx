import { FC } from "react";
import { useIncrement } from "./useIncrement";

export const Increment: FC = () => {
  const { counter, increment } = useIncrement(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}> increment </button>
    </div>
  );
};
