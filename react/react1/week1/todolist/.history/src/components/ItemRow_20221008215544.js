import ItemDescription from "./ItemDescription";
import ItemDeadline from "./ItemDeadline";
function ItemRow({ description, deadline }) {
  return (
    <li>
      <ItemDescription description={description} />
      ,&nbsp;
      <ItemDeadline deadline={deadline} />
    </li>
  );
}

export default ItemRow;
