import ItemDescription from "./ItemDescription";
function ItemRow({ description, deadline }) {
  return (
    <li>
      <ItemDescription description={description} />
      ,&nbsp;
    </li>
  );
}

export default ItemRow;
