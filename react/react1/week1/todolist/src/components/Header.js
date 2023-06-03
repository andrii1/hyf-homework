import AddTodo from "./AddTodo";
function Header({ count, addTodo }) {
  return (
    <>
      <h1>To do list</h1>
      <p>You have used {count} seconds on this website</p>
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default Header;
