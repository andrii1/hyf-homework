import { useState } from "react";
import { useEffect } from "react";
import ItemRow from "./ItemRow";
import Header from "./Header";
const todos = [
  {
    id: 1,
    description: "Get out of bed",
    done: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    done: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    done: false,
  },
];

function Table() {
  const [todoList, setTodoList] = useState(todos);
  const [count, setCount] = useState(0);
  function deleteCounter(deleteId) {
    setTodoList(todoList.filter(({ id }) => id !== deleteId));
  }
  function changeStatus(doneId) {
    const newState = todoList.map((obj) => {
      if (obj.id === doneId) {
        return { ...obj, done: !obj.done };
      }
      return obj;
    });

    setTodoList(newState);
  }

  function addTodo() {
    setTodoList(
      todoList.concat([
        { id: todoList.length + 1, description: "random text", done: false },
      ])
    );
    // console.log(counters);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Header count={count} addTodo={() => addTodo()} />
      {todoList.length === 0 ? (
        <p>No items</p>
      ) : (
        todoList.map(({ description, id, done }) => (
          <ItemRow
            description={description}
            key={id}
            onDelete={() => deleteCounter(id)}
            changeStatus={() => changeStatus(id)}
            className={done ? "striked" : ""}
          />
        ))
      )}
    </>
  );
}

export default Table;
