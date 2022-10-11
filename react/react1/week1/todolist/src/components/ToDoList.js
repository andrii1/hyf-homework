import { useState } from "react";
import { useEffect } from "react";
import ItemRow from "./ItemRow";
import Header from "./Header";
const todos = [
  {
    id: 1,
    description: "Get out of bed",
    date: 21 / 10 / 2022,
    done: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    date: 21 / 10 / 2022,
    done: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    date: 21 / 10 / 2022,
    done: false,
  },
];

function ToDoList() {
  const [todoList, setTodoList] = useState(todos);
  const [count, setCount] = useState(0);
  const [todoitem, setTodoitem] = useState("");

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
        { id: todoList.length + 1, description: todoitem, done: false },
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
      <Header
        count={count}
        addTodo={() => addTodo()}
        addItemText={(e) => setTodoitem(e.target.value)}
        value={todoitem}
      />
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

export default ToDoList;
