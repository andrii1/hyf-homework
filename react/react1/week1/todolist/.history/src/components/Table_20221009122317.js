import { useState } from "react";
import ItemRow from "./ItemRow";
import Header from "./Header";
const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function Table() {
  const [todoList, setTodoList] = useState(todos);
  return (
    <>
      <Header />
      {todoList.map(({ description, id }) => (
        <ItemRow description={description} key={id} />
      ))}
    </>
  );
}

export default Table;
