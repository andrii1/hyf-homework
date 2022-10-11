import ItemDescription from "./ItemDescription";
import Checkbox from "./Checkbox";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Deadline from "./Deadline";
function ItemRow({
  description,
  deadline,
  onDelete,
  onEdit,
  changeStatus,
  className,
  editing,
  updateItemText,
  onUpdate,
  value,
}) {
  return (
    <li>
      {editing ? (
        <input
          type="text"
          placeholder={description}
          onChange={updateItemText}
        />
      ) : (
        <ItemDescription description={description} className={className} />
      )}
      &nbsp;
      <Checkbox changeStatus={changeStatus} />
      &nbsp;
      <Deadline deadline={deadline} />
      &nbsp;
      {editing ? (
        <button onClick={onUpdate}>Update</button>
      ) : (
        <EditButton onEdit={onEdit} />
      )}
      &nbsp;
      <DeleteButton onDelete={onDelete} />
    </li>
  );
}

export default ItemRow;
