import AddTodo from "./AddTodo";
function Header({
  children,
  addTodo,
  addItemText,
  value,
  startDate,
  datepicker,
}) {
  return (
    <div className="header">
      {children}
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
