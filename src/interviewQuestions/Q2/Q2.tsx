import { ChangeEvent, FC, useEffect, useState } from "react";

interface ITodo {
  content: string;
}

export const Q2: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { content: "buy milk" },
    { content: "pay bills" },
  ]);

  const [todoItem, setTodoItem] = useState("");

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const addTodo = (content: string) => {
    todoList.push({ content });
    setTodoList(todoList);
  };

  return (
    <div>
      <button onClick={() => addTodo(todoItem)}> Add todo </button>
      <input
        value={todoItem}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTodoItem(e.target.value)
        }
        placeholder={"add"}
      />
    </div>
  );
};
