import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AddTodo({ addTodo, addItemText, value }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="add-todo">
      <input type="text" value={value} onChange={addItemText} />

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}

export default AddTodo;
