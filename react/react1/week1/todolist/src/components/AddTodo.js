function AddTodo({ addTodo, addItemText, value }) {
  return (
    <>
      <input type="text" value={value} onChange={addItemText} />
      <button onClick={addTodo}>Add todo</button>
    </>
  );
}

export default AddTodo;
