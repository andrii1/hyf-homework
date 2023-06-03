function Checkbox({ changeStatus }) {
  return (
    <>
      <input type="checkbox" onChange={changeStatus}></input>
    </>
  );
}

export default Checkbox;
