import AddTodo from "./AddTodo";
function Header({ count, addTodo, addItemText, value, startDate, datepicker }) {
  return (
    <div className="header">
      <h1>To do list</h1>
      <p>You have used {count} seconds on this website</p>
      <AddTodo
        addTodo={addTodo}
        addItemText={addItemText}
        value={value}
        startDate={startDate}
        datepicker={datepicker}
      />
    </div>
  );
}

export default Header;
