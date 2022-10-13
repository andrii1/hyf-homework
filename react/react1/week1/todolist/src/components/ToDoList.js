import { useState } from "react";
import { useEffect } from "react";
import ItemRow from "./ItemRow";
import Header from "./Header";
const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function ToDoList() {
  const [todoList, setTodoList] = useState("");
  const [count, setCount] = useState(0);
  const [todoitem, setTodoitem] = useState("");
  const [updateditem, setUpdateditem] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const fetchList = async () => {
    const response = await fetch(API_URL);
    const items = await response.json();
    setTodoList(
      items.map(({ id, description, deadline }) => ({
        id: id,
        description: description,
        deadline: deadline,
        done: false,
        editing: false,
      }))
    );
  };
  useEffect(() => {
    fetchList();
  }, []);
  console.log(todoList);
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
