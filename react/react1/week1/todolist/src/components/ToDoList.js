import { useState } from "react";
import { useEffect } from "react";
import ItemRow from "./ItemRow";
import Header from "./Header";
const todos = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "21-10-2022",
    done: false,
    editing: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "21-10-2022",
    done: false,
    editing: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "21-10-2022",
    done: false,
    editing: false,
  },
];

function ToDoList() {
  const [todoList, setTodoList] = useState(todos);
  const [count, setCount] = useState(0);
  const [todoitem, setTodoitem] = useState("");
  const [updateditem, setUpdateditem] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  function deleteItem(deleteId) {
    setTodoList(todoList.filter(({ id }) => id !== deleteId));
  }

  function editItem(editId) {
    const newState = todoList.map((obj) => {
      if (obj.id === editId) {
        return { ...obj, editing: !obj.editing };
      }
      return obj;
    });

    setTodoList(newState);
  }

  function updateItem(updateId) {
    const newState = todoList.map((obj) => {
      if (obj.id === updateId) {
        return { ...obj, description: updateditem, editing: !obj.editing };
      }
      return obj;
    });

    setTodoList(newState);
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
        {
          id: todoList.length + 1,
          description: todoitem,
          deadline: startDate.toISOString().slice(0, 10),
          done: false,
        },
      ])
    );
    console.log(todoList);
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
        startDate={startDate}
        datepicker={(date) => setStartDate(date)}
      />
      {todoList.length === 0 ? (
        <p>No items</p>
      ) : (
        todoList.map(({ description, id, deadline, done, editing }) => (
          <ItemRow
            description={description}
            key={id}
            onDelete={() => deleteItem(id)}
            onEdit={() => editItem(id)}
            onUpdate={() => updateItem(id)}
            changeStatus={() => changeStatus(id)}
            className={done ? "striked" : ""}
            deadline={deadline}
            value={updateditem}
            editing={editing ? true : false}
            updateItemText={(e) => setUpdateditem(e.target.value)}
          />
        ))
      )}
    </>
  );
}

export default ToDoList;
