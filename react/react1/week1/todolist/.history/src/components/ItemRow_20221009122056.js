import ItemDescription from "./ItemDescription";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
function ItemRow({ description, deadline }) {
  return (
    <li>
      <ItemDescription description={description} />
      &nbsp;
      <Checkbox />
      &nbsp;
      <DeleteButton />
    </li>
  );
}

export default ItemRow;
