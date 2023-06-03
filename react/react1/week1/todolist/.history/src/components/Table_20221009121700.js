import ItemRow from "./ItemRow";
import Header from "./Header";
const items = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function Table() {
  return (
    <>
      <Header />
      {items.map(({ description, id }) => (
        <ItemRow description={description} deadline={deadline} key={id} />
      ))}
    </>
  );
}

export default Table;
