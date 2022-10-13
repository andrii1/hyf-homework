import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function AddTodo({ addTodo, addItemText, value, startDate, datepicker }) {
  return (
    <div className="add-todo">
      <input type="text" value={value} onChange={addItemText} />

      <DatePicker
        selected={startDate}
        onChange={datepicker}
        format="yyyy-MM-dd"
      />

      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}

export default AddTodo;
