import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          foodItem={item}
          handelByButton={() => console.log(`${item} being bought`)}
          bought={false}
        />
      ))}
    </ul>
  );
};
export default FoodItems;
