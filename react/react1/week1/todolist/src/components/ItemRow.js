import ItemDescription from "./ItemDescription";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
function ItemRow({ description, deadline, onDelete }) {
  return (
    <li>
      <ItemDescription description={description} />
      &nbsp;
      <Checkbox />
      &nbsp;
      <DeleteButton onDelete={onDelete} />
    </li>
  );
}

export default ItemRow;
