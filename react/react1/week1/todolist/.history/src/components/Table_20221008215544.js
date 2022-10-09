import ItemRow from "./ItemRow";
import Header from "./Header";
const items = [
  {
    id: 1,
    description: "Get out of bed",
    deadline: "2022-10-23",
  },
  {
    id: 2,
    description: "Brush teeth",
    deadline: "2022-10-24",
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadline: "2022-10-25",
  },
];

function Table() {
  return (
    <>
      <Header />
      {items.map(({ description, deadline, id }) => (
        <ItemRow description={description} deadline={deadline} key={id} />
      ))}
    </>
  );
}

export default Table;
