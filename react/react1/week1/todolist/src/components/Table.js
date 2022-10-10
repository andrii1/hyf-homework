import { useState } from "react";
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
    console.log(newState);
    setTodoList(newState);
  }
  return (
    <>
      <Header />
      {todoList.map(({ description, id, done }) => (
        <ItemRow
          description={description}
          key={id}
          onDelete={() => deleteCounter(id)}
          changeStatus={() => changeStatus(id)}
          className={done ? "striked" : ""}
        />
      ))}
    </>
  );
}

export default Table;
