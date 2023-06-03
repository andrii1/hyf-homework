import { useState } from "react";
import { useEffect } from "react";
import ItemRow from "./ItemRow";
import BlackBorder from "./BlackBorder";
import Header from "./Header";
const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function ToDoList() {
  const [todoList, setTodoList] = useState("");
  const [count, setCount] = useState(0);
  const [todoitem, setTodoitem] = useState("");
  const [updateditem, setUpdateditem] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const currentDate = new Date();
  const currentDateHours = currentDate.setHours(0, 0, 0, 0);

  //FETCH
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

  //DELETE
  function deleteItem(deleteId) {
    setTodoList(todoList.filter(({ id }) => id !== deleteId));
  }
  //EDIT
  function editItem(editId) {
    const newState = todoList.map((obj) => {
      if (obj.id === editId) {
        return { ...obj, editing: !obj.editing };
      }
      return obj;
    });

    setTodoList(newState);
  }
  //UPDATE DESCRIPTION
  function updateItem(updateId) {
    if (updateditem.trim().length !== 0) {
      const newState = todoList.map((obj) => {
        if (obj.id === updateId) {
          return { ...obj, description: updateditem, editing: !obj.editing };
        }
        return obj;
      });

      setTodoList(newState);
      setUpdateditem("");
    } else {
      console.log("Updated item can't be empty!");
    }
  }
  //CHANGE STATUS
  function changeStatus(doneId) {
    const newState = todoList.map((obj) => {
      if (obj.id === doneId) {
        return { ...obj, done: !obj.done };
      }
      return obj;
    });

    setTodoList(newState);
  }

  //ADD TODO ITEM
  function addTodo() {
    //CHECK IF INPUT OR DATE IS EMPTY, IF DEADLINE BEFORE CURRENT DAY
    let inputDate = new Date(startDate);
    let inputDateHours = inputDate.setHours(0, 0, 0, 0);
    if (
      todoitem.trim().length !== 0 &&
      startDate.length !== 0 &&
      inputDateHours >= currentDateHours
    ) {
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
    } else if (todoitem.trim().length === 0) {
      console.log("input can't be empty!");
    } else if (startDate.length === 0) {
      console.log("date can't be empty!");
    } else if (inputDateHours < currentDateHours) {
      console.log("deadline is before current day!");
    }
  }
  //SET COUNTER
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
        datepicker={(date) => setStartDate(date ? date : "")}
      >
        <h1>To do list</h1>
        <p>You have used {count} seconds on this website</p>
      </Header>
      {todoList.length === 0 ? (
        <p>No items</p>
      ) : (
        todoList.map(({ description, id, deadline, done, editing }) => (
          <BlackBorder>
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
          </BlackBorder>
        ))
      )}
    </>
  );
}

export default ToDoList;
