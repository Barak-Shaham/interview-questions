import { ChangeEvent, useEffect, useState } from "react";

export const CountInputChanges = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => setCount(count + 1));

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
};
