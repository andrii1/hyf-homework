import ItemDescription from "./ItemDescription";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
function ItemRow({ description, deadline, onDelete, changeStatus, className }) {
  return (
    <li>
      <ItemDescription description={description} className={className} />
      &nbsp;
      <Checkbox changeStatus={changeStatus} />
      &nbsp;
      <DeleteButton onDelete={onDelete} />
    </li>
  );
}

export default ItemRow;
