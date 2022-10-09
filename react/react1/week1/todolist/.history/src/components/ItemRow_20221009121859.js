import ItemDescription from "./ItemDescription";
import Checkbox from "./Checkbox";
function ItemRow({ description, deadline }) {
  return (
    <li>
      <ItemDescription description={description} />
      ,&nbsp;
    </li>
  );
}

export default ItemRow;
