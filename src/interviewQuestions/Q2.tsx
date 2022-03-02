import { FC, useEffect, useState } from "react";

interface IVal {
  value: number;
}

export const Q2: FC = () => {
  const [val, setVal] = useState<IVal[]>([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ]);

  useEffect(() => {
    console.log(val);
  }, [val]);

  const onClick = (value: number) => {
    val.push({ value });
    setVal(val);
  };

  return (
    <div>
      <button onClick={() => onClick(5)}> Click me! </button>
    </div>
  );
};
